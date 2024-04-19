--
-- @lc app=leetcode id=1251 lang=mysql
--
-- [1251] Average Selling Price
--

-- @lc code=start
# Write your MySQL query statement below
SELECT a.product_id , IFNULL(ROUND(SUM(a.price * b.units) / SUM(b.units), 2), 0) AS average_price 
FROM prices a
LEFT JOIN unitssold b ON a.product_id = b.product_id AND b.purchase_date BETWEEN a.start_date AND a.end_date
GROUP BY a.product_id;

-- @lc code=end

