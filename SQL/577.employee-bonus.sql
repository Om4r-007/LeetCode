--
-- @lc app=leetcode id=577 lang=mysql
--
-- [577] Employee Bonus
--

-- @lc code=start
# Write your MySQL query statement below
select a.name , b.bonus
from employee a left join bonus b
on a.empId = b.empId
where b.bonus is null or b.bonus < 1000
-- @lc code=end

