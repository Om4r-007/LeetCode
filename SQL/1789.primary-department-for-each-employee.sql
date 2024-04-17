--
-- @lc app=leetcode id=1789 lang=mysql
--
-- [1789] Primary Department for Each Employee
--

-- @lc code=start
# Write your MySQL query statement below
SELECT employee_id , CASE 
                        WHEN COUNT(*) = 1 THEN MIN(department_id)
                        ELSE(SELECT department_id FROM employee WHERE employee_id = a.employee_id AND primary_flag = 'Y')
                    END AS department_id
FROM employee a
GROUP BY employee_id
HAVING department_id IS NOT NULL
-- @lc code=end

