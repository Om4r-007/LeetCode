--
-- @lc app=leetcode id=2356 lang=mysql
--
-- [2356] Number of Unique Subjects Taught by Each Teacher
--

-- @lc code=start
# Write your MySQL query statement below
select teacher_id , count(distinct subject_id) as cnt
from Teacher 
group by teacher_id
-- @lc code=end

