#pragma strict
var kbinputx:boolean;
var kbinputy:boolean;
var mouseinput:boolean;
var speed:int;
var movelikecar:boolean;

var objectToShoot:Rigidbody2D;
var canshoot:boolean;

function OnTriggerEnter(otherObject:Collider)
{
	
	//trigger
	Debug.Log("hit trigger");
}


function OnCollisionEnter(collision:Collision)
{

	//physics
	Debug.Log("hit collision");
}

function shootObjectEverySecond()
{
	canshoot=false;
	Instantiate(objectToShoot,transform.position,transform.rotation);
	yield WaitForSeconds(1);
	canshoot=true;
}


function keyboardInputY()
{
	transform.Translate(Vector3.up * speed * Time.deltaTime * Input.GetAxis("Vertical"));
}


function keyboardInputX()
{
	if(movelikecar){
	transform.Rotate(Vector3.back * speed * Time.deltaTime * Input.GetAxis("Horizontal"));
	}else {
	transform.Translate(Vector3.right * speed * Time.deltaTime * Input.GetAxis("Horizontal"));
	}
}



function Start () {
	
	
	
	
}

function Update () {

	if (kbinputx)
	{
		keyboardInputX();
	}
	
	if (kbinputy)
	{
		keyboardInputY();
	}
	
	if ((objectToShoot != null) && Input.GetKeyDown("space"))
	{
		if (canshoot) {
		shootObjectEverySecond();
		}
	}
	
}