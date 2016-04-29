/**
 * Create a web friendly URL slug from a string.
 *
 * @author Raul Mangolin <eu@raulmangolin.com>
 *
 * @param str string
 * @param separator string
 * @return string
 */
function mangoSlugfy(str, separator) {
    separator = (separator || separator === '') ? separator :  '-';

    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";

    for (var i = 0, l = from.length; i < l; i++)
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));

    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, separator).replace(/-+/g, separator);

    return str;
}

module.exports = mangoSlugfy;