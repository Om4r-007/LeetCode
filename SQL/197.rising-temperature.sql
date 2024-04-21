--
-- @lc app=leetcode id=197 lang=mysql
--
-- [197] Rising Temperature
--

-- @lc code=start
# Write your MySQL query statement below
select a.id
from weather a
join weather b on a.recordDate = DATE_ADD(b.recordDate , interval 1 DAY)
where a.temperature > b.temperature
-- @lc code=end

