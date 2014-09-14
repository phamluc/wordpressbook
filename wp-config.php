<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'themetruonghai');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '0H.z.boMu4JK<g)M^}H(&!_7`^S}qgB=b{4S05ZB~WqBe|7a9uiC_*.<+(jy_+dj');
define('SECURE_AUTH_KEY',  'uq+n5|+)X7N<N/zA^%*LF3P<UG~We !q|lUe1,HLA47Y}~ V?7Rc,N?>C</L[M^d');
define('LOGGED_IN_KEY',    'LB0=8qR.W6#isHl@*])?cvYagup^(tc)hD8(@(9Oxc/pgJFK|+q49Fp=dXC^,+3O');
define('NONCE_KEY',        'tp!Z.Raj>AF=X:_bBK}|zO,c@U9tAB$z%:-;G1r;3*8+^.ZA(|tH mvB<`>99IwX');
define('AUTH_SALT',        'KcEW`O=MW,=5T&7T}DJ5?C;=R.edahA!M;DR#(o.P q;|#z3_}FXQDNBQ<z?QWe8');
define('SECURE_AUTH_SALT', 'TS|OpJ+#4o#+9g|O4buMX%4B{-~0H&N?a(BBU}{7{$D|6yJw-v[8Iz#Ei_7:|a?y');
define('LOGGED_IN_SALT',   'nVv05_5K_J&Z^p1[Nr.U6d33-[]mWA!h|x&ch9_DE@;bO]g=rt3uYA2s&I`3_[s|');
define('NONCE_SALT',       'qbd6/T $&i`-0vyJ,,)wLt3dwwB2}]vDh{%B^A?2~%T7T,#gWDS_&F.|1Y,/5^Sq');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'th_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
