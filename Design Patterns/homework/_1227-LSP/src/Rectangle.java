public class Rectangle implements Shape {

    private double height,width,area;
    public double getArea() {
        area = height*width;
        return area;
    }
    @Override
    public void setTopLeft(double x, double y) {
        // TODO Auto-generated method stub

    }
    @Override
    public void setSize(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public void setColour(String colour) {

    }

    @Override
    public void draw() {

    }

}