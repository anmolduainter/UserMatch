/**
 * Created by anmol on 9/7/17.
 */

let button;

$(function () {


    button=$('#submit');

    button.click(clickButt)



});

function clickButt(ev){

    let first=$('input[name="genre"]:checked').val()
    let second=$('input[name="personality"]:checked').val()
    let eat=$('input[name="eat"]:checked').val()
    let guitar=$('input[name="guitar"]:checked').val()
    let travel=$('input[name="travel"]:checked').val();
    console.log(valu1);

}