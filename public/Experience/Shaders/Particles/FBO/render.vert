//vertex shader
uniform sampler2D uPositions;//RenderTarget containing the transformed positions
uniform float pointSize;//size
void main() {

    //the mesh is a normalized square so the uvs = the xy positions of the vertices
    vec3 pos = texture2D( uPositions, position.xy ).xyz;
    //pos now contains a 3D position in space, we can use it as a regular vertex

    //regular projection of our position
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

    //sets the point size
    gl_PointSize = pointSize;
}