--
-- @lc app=leetcode id=1070 lang=mysql
--
-- [1070] Product Sales Analysis III
--

-- @lc code=start
# Write your MySQL query statement below
SELECT s.product_id, s.year as first_year, s.quantity, s.price
FROM Sales s
INNER JOIN (
    SELECT product_id, MIN(year) AS min_year
    FROM Sales
    GROUP BY product_id
) AS min_years ON s.product_id = min_years.product_id AND s.year = min_years.min_year;
-- @lc code=end

