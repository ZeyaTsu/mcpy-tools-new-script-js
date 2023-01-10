function mineshaft(){
    var x_coords = document.getElementById('first_x').value
    var z_coords = document.getElementById('first_z').value

    var mineshaft_x = x_coords * -1
    var mineshaft_z = z_coords * -1

    document.getElementById('x-coords').innerHTML = mineshaft_x
    document.getElementById('z-coords').innerHTML = mineshaft_z
}
