<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit65c15e40f7c567e5da162481d3548b20
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit65c15e40f7c567e5da162481d3548b20::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit65c15e40f7c567e5da162481d3548b20::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
