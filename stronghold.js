function stronghold(){
    var First_Angle = document.getElementById('first_angle').value
    var Facing = document.getElementById('list').value

    switch (Facing) {
        case 'north':
            var coords = -310
            document.getElementById('step').innerHTML = "Please go to X: 0 Z: -310 and redo the steps above."
            break
        case 'south':
            var coords = 310
            document.getElementById('step').innerHTML = "Please go to X: 0 Z: 310 and redo the steps above."
            break
        case 'east':
            var coords = 310
            document.getElementById('step').innerHTML = "Please go to X: 310 Z: 0 and redo the steps above."
            break
        case 'west':
            var coords = -310 
            document.getElementById('step').innerHTML = "Please go to X: -310 Z: 0 and redo the steps above."
            break           
    }
    var Second_Angle = document.getElementById('second_angle').value

    var final_first_angle = 90 - First_Angle
    var final_second_angle = 90 - Second_Angle

    var we_first_angle = First_Angle
    var we_second_angle = Second_Angle

    function north_south(final_first_angle, coords,final_second_angle){
        console.log('north_south')
        console.log(coords)
        var h1 = final_first_angle * (Math.PI/180)
        var h2 = final_second_angle * (Math.PI/180)

        var xNorthFind = -(coords / (Math.tan(h1) - Math.tan(h2)))
        var zNorthFind = (coords * Math.tan(h1)) / (Math.tan(h1) - Math.tan(h2))

        document.getElementById('phrase').innerHTML = "Stronghold found!"
        document.getElementById('x_coords').innerHTML = xNorthFind
        document.getElementById('z_coords').innerHTML = zNorthFind
    }

    function west_east(we_first_angle, coords, we_second_angle){
        console.log('west_east')
        h3 = we_first_angle * (Math.PI/180)
        h4 = we_second_angle * (Math.PI/180)
        
        var xWestFind = (coords * Math.tan(h3)) / (Math.tan(h3) - Math.tan(h4))
        var zWestFind = -(coords / (Math.atan(h3) - Math.tan(h4)))

        document.getElementById('phrase').innerHTML = "Stronghold found!"
        document.getElementById('x_coords').innerHTML = xWestFind
        document.getElementById('z_coords').innerHTML = zWestFind
    }
    switch (Facing) {
        case 'north':
            north_south(final_first_angle, coords, final_second_angle);
            break
        case 'south':
            north_south(final_first_angle, coords, final_second_angle);
            break
        case 'east':
            west_east(we_first_angle, coords, we_second_angle);
            break
        case 'west':
            west_east(we_first_angle, coords, we_second_angle);    
            break      
    }
}
