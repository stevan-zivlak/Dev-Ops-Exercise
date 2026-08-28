@isTest
private class RandomApexClassTest {

    @isTest
    static void helloWorldTest() {
        Assert.areEqual(
            'Hello, world!', 
            RandomApexClass.helloWorld(),
            'Should return "Hello, world!"'
        );
    }
}