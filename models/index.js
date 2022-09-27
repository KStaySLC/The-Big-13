const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: "user_id"
});

Category.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsToMany(Tag, {
  foreignKey: 'user_id',
  through: {
    model: ProductTag,
    unique: false
  },
  
})

Tag.belongsToMany(Product, {
  foreignKey: 'user_id',
  through: {
    model: ProductTag,
    unique: false
  },
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
