select a.id
from weather a
join weather b on a.recordDate = DATE_ADD(b.recordDate , interval 1 DAY)
where a.temperature > b.temperature
