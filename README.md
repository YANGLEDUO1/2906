# 2906

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/main.ts
```

This project was created using `bun init` in bun v1.1.22. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.




```sql 
CREATE TABLE `adm_user` (
  `id` varchar(50) NOT NULL,
  `created_by` varchar(100) DEFAULT NULL,
  `created_date` datetime(6) DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `last_modified_by` varchar(100) DEFAULT NULL,
  `last_modified_date` datetime(6) DEFAULT NULL,
  `user_additional` varchar(2000) DEFAULT NULL,
  `max_online_client` int DEFAULT NULL,
  `user_memo` varchar(255) DEFAULT NULL,
  `user_name` varchar(100) NOT NULL,
  `org_codes` varchar(128) DEFAULT NULL,
  `user_pwd` varchar(255) NOT NULL,
  `user_picture` varchar(255) DEFAULT NULL,
  `user_state` varchar(20) NOT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `tenant_name` varchar(100) DEFAULT NULL,
  `user_code` varchar(100) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_als89hxfvrn1439g5ijoe4xv6` (`user_code`),
  KEY `idx_adm_user_tenant_id` (`tenant_id`),
  KEY `idx_adm_user_org_codes` (`org_codes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```


console 
```txt
[
  [
    {
      id: "1",
      created_by: null,
      created_date: null,
      deleted: Buffer(1) [ 0 ],
      last_modified_by: "root",
      last_modified_date: 2023-08-01T08:23:50.975Z,
      user_additional: null,
      max_online_client: null,
      user_memo: null,
      user_name: "超级管理员",
      org_codes: null,
      user_pwd: "$2a$10$71AxwvDCnKbNys6.sBhhauksswRNMqtl5171D99hWICyygD413MlO",
      user_picture: null,
      user_state: "ENABLED",
      tenant_id: null,
      tenant_name: null,
      user_code: "root",
      mobile: null,
    }
  ], [
    `id` VARCHAR(50) NOT NULL PRIMARY KEY, `created_by` VARCHAR(100), `created_date` DATETIME(26), `deleted` BIT(1) UNSIGNED NOT NULL, `last_modified_by` VARCHAR(100), `last_modified_date` DATETIME(26), `user_additional` VARCHAR(2000), `max_online_client` INT, `user_memo` VARCHAR(255), `user_name` VARCHAR(100) NOT NULL, `org_codes` VARCHAR(128), `user_pwd` VARCHAR(255) NOT NULL, `user_picture` VARCHAR(255), `user_state` VARCHAR(20) NOT NULL, `tenant_id` VARCHAR(50), `tenant_name` VARCHAR(100), `user_code` VARCHAR(100) UNIQUE_KEY, `mobile` VARCHAR(11)
  ]
]
```