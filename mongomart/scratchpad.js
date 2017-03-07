var categories = db.item.aggregate([
  { $match: { category: { $ne: null } } },
  { $group: {
    _id: "$category",
    num: { $sum: 1}
  } },
  { $sort: { _id: 1} }
]).toArray();

var category = {id: 'All', num: 0};
var totalItems = 0;
for (var i = 0; i < categories.length; i++){
  totalItems = totalItems + categories[i].num;
}
category.num = totalItems;
categories.push(category);
