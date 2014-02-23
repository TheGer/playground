#pragma strict



var speed:int;


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



function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function Start () {
	
}

function Update () {

	transform.Translate(Vector3.up * speed * Time.deltaTime);
	
}