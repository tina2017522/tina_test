<?php

//����������

function getConfig($name,$key)
{
    //��ȡ������Ϣ
    $info = C($name);
    return $info[$key];
}