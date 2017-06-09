<?php

//公共函数库

function getConfig($name,$key)
{
    //获取配置信息
    $info = C($name);
    return $info[$key];
}