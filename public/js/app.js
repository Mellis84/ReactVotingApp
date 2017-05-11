
class ProductList extends React.Component {

	// Initial state
	state = {
		products: [],
	}

	componentDidMount() {
		this.setState({ products: Seed.products });
	}

	// Pass a function to the product/child components props
	handleProductUpVote = (productId) => {
		const nextProducts = this.state.products.map((product) => {
			// if current product matches product.id
			if (product.id === productId) {
				// copy over properties from original product object and overwrite
				// votes with new object
				return Object.assign({}, product, {
					votes: product.votes + 1,
				});
			} else {
				// if current product is not the one specified return unmodified product object
				return product;
			}
		});
		this.setState({
			products: nextProducts,
		});
	}

    render() {
	    const products = this.state.products.sort((a, b) => (
	      b.votes - a.votes
	    ));

		// Map over the products array in seed.js it takes in a function and
		// returns the props
		const productComponents = products.map((product) => (

            <Product
				key={'product-' + product.id}
				id={product.id}
				title={product.title}
				description={product.description}
				url={product.url}
				votes={product.votes}
				productImageUrl={product.productImageUrl}
				onVote={this.handleProductUpVote}
				tags={product.tags}
			/>
		));

        return (
			<div className='items'>
				{productComponents}
			</div>
        );
    }
}

class Product extends React.Component {

	/* If we are not using Babels property initializer plugin we do this
	// when defining custom component methods, we have to manually bind
	// this to the component
	constructor(props) {
		super(props); // always call this first

		// custom method bindings here
		this.handleUpVote = this.handleUpVote.bind(this);
	}

	handleUpVote() {
		this.props.onVote(this.props.id)
	}
	*/

	// Custom component method
	handleUpVote = () => (
		this.props.onVote(this.props.id)
	);

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} />
                </div>
                <div className="content">
					<div className="content-container">
	                    <div className="description">
							<div className="header">
								<div className="upvotes">
									<a onClick={this.handleUpVote}>
										<i className="icon" />
									</a>
									<span className="upvotes__upvote-count">
										{this.props.votes}
									</span>
								</div>
							</div>
							<h3>
								<a href={this.props.url}>
									{this.props.title}
								</a>
							</h3>
	                        <p>
								{this.props.description}
							</p>
							<div className="footer">
								<ul className="tags">
									<li><span>{this.props.tags}</span></li>
								</ul>
							</div>
	                    </div>
					</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);
