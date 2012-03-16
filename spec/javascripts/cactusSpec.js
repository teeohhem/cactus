describe("cactus", function() {

  describe("expect", function() {
    var expectation;

    beforeEach(function() {
      expectation = cactus.expect("div", "display");
    });

    it("returns cactus object for chaining", function() {
      expect(expectation).toBe(cactus);
    });

    it("sets variables", function() {
      var debug = expectation.debug();
      expect(debug.target_element).toEqual("div");
      expect(debug.css_attribute).toEqual("display");
      expect(debug.computed_style).toBeDefined();

    });
  });

  describe("matchers", function() {
    describe("toEqual", function() {
      it("is equal", function() {
        var expectation = cactus.expect("div", "display");
        var result = expectation.toEqual("block");

        expect(result).toBeTruthy();
      });

      it("is equal", function() {
        var expectation = cactus.expect("div", "display");
        var result = expectation.toEqual("none");

        expect(result).toBeFalsy();
      });
    });
  });

});