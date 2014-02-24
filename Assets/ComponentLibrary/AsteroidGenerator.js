#pragma strict
var asteroid:Rigidbody;


function Start () {
	//asteroid 1
	var xpos = Random.Range(-10,10);
	var ypos = Random.Range(-10,10);
	Instantiate(asteroid,Vector3(xpos,ypos,0),Quaternion.identity);
	
	//asteroid 2
	xpos = Random.Range(-10,10);
	ypos = Random.Range(-10,10);
	Instantiate(asteroid,Vector3(xpos,ypos,0),Quaternion.identity);
	
	//asteroid 3
	xpos = Random.Range(-10,10);
	ypos = Random.Range(-10,10);
	Instantiate(asteroid,Vector3(xpos,ypos,0),Quaternion.identity);
	
	//asteroid 4
	xpos = Random.Range(-10,10);
	ypos = Random.Range(-10,10);
	Instantiate(asteroid,Vector3(xpos,ypos,0),Quaternion.identity);

}

function Update () {

}