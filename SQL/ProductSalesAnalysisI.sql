SELECT a.product_name , b.year , b.price
FROM Product as a
JOIN Sales as b
ON a.product_id = b.product_id
