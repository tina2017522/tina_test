<?php
return array(
	//'配置项'=>'配置值'
    
    /* 数据库设置 */
    'DB_TYPE'               =>  'pdo',     // 数据库类型
    'DB_HOST'               =>  '127.0.0.1', // 服务器地址
    'DB_NAME'               =>  'ticketdb',          // 数据库名
    'DB_DSN' => 'mysql:host=127.0.0.1;dbname=ticketdb;charset=UTF8',
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  'root',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  '',    // 数据库表前缀

   'SHOW_PAGE_TRACE'       => true,

    'HALL_TYPE_LIST' =>[1=>"大厅",2=>"中厅",3=>"小厅",4=>"情侣厅"],//放映厅类型
);