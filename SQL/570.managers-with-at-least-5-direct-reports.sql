--
-- @lc app=leetcode id=570 lang=mysql
--
-- [570] Managers with at Least 5 Direct Reports
--

-- @lc code=start
# Write your MySQL query statement below
select a.name
from employee a
join (
select managerId, count(managerId) as ttt
from employee
group by managerId
HAVING COUNT(managerId) >= 5
) as b on a.id = b.managerId;

-- @lc code=end

