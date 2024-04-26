--
-- @lc app=leetcode id=196 lang=mysql
--
-- [196] Delete Duplicate Emails
--

-- @lc code=start
# Write your MySQL query statement below
With t1 as
(
 Select *,
    row_number() over(partition by email order by id) as rk
    from person
)
Delete from person
where id in (Select t1.id from t1 where t1.rk>1)

-- @lc code=end

