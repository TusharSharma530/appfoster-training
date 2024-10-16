-- 1.Insert a single value into the customers table:

INSERT INTO
    customers (
        customer_id,
        first_name,
        last_name,
        age,
        country
    )
VALUES (6, 'John', 'Doe', 65, 'USA');

-- 2. Insert multiple values into the customers table:

INSERT INTO
    customers (
        customer_id,
        first_name,
        last_name,
        age,
        country
    )
VALUES (
        7,
        'Tushar',
        'Sharma',
        20,
        'India'
    ),
    (
        8,
        'Shivam',
        'Gupta',
        26,
        'Canada'
    ),
    (
        9,
        'Nischay',
        'Garg',
        23,
        'India'
    );

-- 3. Get the number of customers per country:

SELECT country, COUNT(*) AS customer_count
FROM customers
GROUP BY
    country;

-- 4. Get the orders with an amount between 100 and 500:
SELECT * FROM orders WHERE amount BETWEEN 100 AND 500;
-- 5. Get the first name and last name of customers who have bought "Keypad":
SELECT c.first_name, c.last_name
FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
WHERE
    o.item = 'Keypad';

-- 6. Get the name of the countries where the shipping status is "Pending":
SELECT DISTINCT
    c.country
FROM customers c
    JOIN shippings s ON c.customer_id = s.customer
WHERE
    s.status = 'Pending';
-- 7. Get the number of orders per customer:
SELECT c.customer_id, c.first_name, c.last_name, COUNT(o.order_id) AS order_count
FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
GROUP BY
    c.customer_id,
    c.first_name,
    c.last_name;