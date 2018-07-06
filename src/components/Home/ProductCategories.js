import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { GetProducts } from '../../ducks/products';
import { GetCategories } from '../../ducks/categories';
import { GetCollections } from '../../ducks/collections';

class Home extends Component {
  componentDidMount() {
    const { products, categories, collections } = this.props;

    if (!products.fetched) {
      this.props.GetProducts();
    }

    if (!categories.fetched) {
      this.props.GetCategories();
    }

    if (!collections.fetched) {
      this.props.GetCollections();
    }
  }

  render() {
    const { products, collections, categories } = this.props;
    var categories = categories.categories.data;
    var productData = products.products.data;

    if (products !== null && categories !== null) {
      return (
        <div>
          <MobileNav />
          <HomeHeader />
          <HomeMainSection />
        </div>
      );
    } else {
      return (
        <div>
          <MobileNav />
          <HomeHeader />
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ products, categories, collections }) => ({
  products,
  categories,
  collections
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCategories,
      GetCollections
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
