@isTest
private class RandomApexClassTest { //final changes

    @isTest
    static void helloWorldTest() {
        Assert.areEqual(
            'Hello, world!', 
            RandomApexClass.helloWorld(),
            'Should return "Hello, world!"'
        );
    }
}