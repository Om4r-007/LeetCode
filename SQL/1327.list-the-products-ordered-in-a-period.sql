--
-- @lc app=leetcode id=1327 lang=mysql
--
-- [1327] List the Products Ordered in a Period
--

-- @lc code=start
# Write your MySQL query statement below
select a.product_name , sum(b.unit) as unit
from products a
join orders b on a.product_id = b.product_id 
where month(b.order_date) = 2 and year(b.order_date) =2020
group by a.product_name
having unit >= 100

-- @lc code=end

