//fragment shader

uniform float uTime;
void main()
{   
    float r = abs(sin(uTime));
    float g = abs(cos(uTime));
    float b = abs(sin(uTime));

    gl_FragColor = vec4(r, g, b, 1.0);
}
