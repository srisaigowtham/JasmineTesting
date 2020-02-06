afterEach(function() {
    document.getElementById("firstName").value = "";
});

describe("Hello World", function () {
    it("Hello User", function () {
        spyOn(window, 'alert');

        document.getElementById("firstName").value = "";
        sayHello();

        expect(window.alert).toHaveBeenCalledWith('Hello ');
        
    });

    it("Hello User Gowtham", function () {
        spyOn(window, 'alert');

        document.getElementById("firstName").value = "Gowtham";
        sayHello();

        expect(window.alert).toHaveBeenCalledWith('Hello Gowtham');
    });
});