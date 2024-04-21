--
-- @lc app=leetcode id=1280 lang=mysql
--
-- [1280] Students and Examinations
--

-- @lc code=start
# Write your MySQL query statement below
select a.student_id , a.student_name , b.subject_name , IFNULL(count(c.subject_name),0) as attended_exams
from students as a cross join subjects as b
left join examinations as c ON a.student_id = c.student_id AND b.subject_name = c.subject_name
group by a.student_id , b.subject_name
order by a.student_id , b.subject_name;
-- @lc code=end

