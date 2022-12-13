public class Main {
    public static void main(String[] args) {
        //System.out.println("Hello world!");
        Rectangle rectangle = new Rectangle();
        rectangle.setSize(4,5);

        Square square = new Square();
        square.setSize(5, 5);


        System.out.println("Rectangle area="+rectangle.getArea());
        System.out.println("Square area"+square.getArea());
    }
}