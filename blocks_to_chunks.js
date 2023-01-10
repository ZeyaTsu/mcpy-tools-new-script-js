function converter(){
    var block = document.getElementById('blocks').value
    var chunk = document.getElementById('chunks').value

    if (chunk == false) {
        var converter_result = block / 16
        document.getElementById('base_value').innerHTML = block
        var first_type = "blocks"
        var second_type = "chunks"
    }
    if (block == false) {
        var converter_result = chunk * 16
        document.getElementById('base_value').innerHTML = chunk
        var first_type = "chunks"
        var second_type = "blocks"
    }
    if (block ==  false && chunk == false) {
        var first_type = ""
        var second_type = ""
        var converter_result = ""
        document.getElementById('equals').innerHTML = "Can't calculate."
    }
    else {
        document.getElementById('equals').innerHTML = "equals to"
        document.getElementById('converter_result').innerHTML = converter_result
        document.getElementById('type').innerHTML = first_type
        document.getElementById('second_type').innerHTML = second_type
    }
}
