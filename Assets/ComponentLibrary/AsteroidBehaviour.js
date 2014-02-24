#pragma strict


private var horizontalSpeed=0;
private var verticalSpeed=0;


function Start () {
	//when you create a new asteroid, set a random horizontal and vertical speed between -10 and 10
	horizontalSpeed = Random.Range(-5,5);
	verticalSpeed = Random.Range(-5,5);

}

function Update () {
	
		//move horizontally
		transform.Translate(Vector3.right * Time.deltaTime * horizontalSpeed,Space.World);
	
		//move vertically
		transform.Translate(Vector3.up * Time.deltaTime * verticalSpeed,Space.World);
	
	//asteroids turning at all times
	transform.Rotate(Vector3.forward * 20* Time.deltaTime,Space.World);
}
