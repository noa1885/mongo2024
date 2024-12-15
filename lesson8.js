db.book.find({})
db.book.distinct("title").map((x) => x.toUpperCase());
db.book.distinct("categories").map((c) => {
    return {
        category: c,
        bookCount: db.book.countDocuments({ categories: c }) 
    };
});

db.restaurants.distinct("title").map((v)=>{
    return{
        "Has it been published?":true
        , title: book.title
          };
});



