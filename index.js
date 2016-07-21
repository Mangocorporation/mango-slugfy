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
    separator = (separator || separator === '') ? separator : '-';

    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";

    for (var i = 0, l = from.length; i < l; i++)
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));

    str = camelize(str);
    str = str.replace(/^\s+|\s+$/g, '-');
    str = str.replace(/\s+/g, separator).replace(/-+/g, separator);

    return str;
}

function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return ' ' + chr.toUpperCase();
    });
}


module.exports = mangoSlugfy;