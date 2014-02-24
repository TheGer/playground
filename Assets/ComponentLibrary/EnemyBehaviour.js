#pragma strict
var movex:boolean;
var movey:boolean;
var moverandom:boolean;

var canshoot:boolean;

var objectToShoot:Rigidbody;

var speedhoriz:int;
var speedvert:int;


private var sh:int;
private var sv:int;
private var changepos:boolean;

function OnTriggerEnter(otherObject:Collider)
{

	//trigger
	Debug.Log("hit");
}


function OnCollisionEnter(collision:Collision)
{

	//physics
	Debug.Log("hit");
}

function shootObjectEverySecond()
{
	canshoot=false;
	Instantiate(objectToShoot,transform.position,transform.rotation);
	yield WaitForSeconds(1);
	canshoot=true;
}

function moveY()
{
	transform.Translate(Vector3.up * sv * Time.deltaTime);
}


function moveX()
{
	transform.Translate(Vector3.left * sh * Time.deltaTime);
}

function moveRandom()
{
	changepos = false;
	sh = speedhoriz * Random.Range(-1,1);
	sv = speedvert * Random.Range(-1,1);	
	moveX();
	moveY();
	WaitForSeconds(1.0);
	changepos = true;
}



function Start () {
	
	
	
	
}

function Update () {

	if (movex)
	{
		moveX();
	}
	
	if (movey)
	{
		moveY();
	}
	
	if(moverandom)
	{
		if (changepos) {
		moveRandom();
		}
	}
	
	if (objectToShoot != null)
	{
		if (canshoot) {
		shootObjectEverySecond();
		}
	}
	
	
}