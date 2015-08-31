define(["Tone/effect/AutoFilter", "helper/Basic", "helper/EffectTests"], function (AutoFilter, Basic, EffectTests) {
	describe("Effect", function(){
		Basic(AutoFilter);
		EffectTests(AutoFilter);

		context("API", function(){

			it ("can pass in options in the constructor", function(){
				var autoFilter = new AutoFilter({
					"min" : 2000,
					"max" : 4000,
					"type" : "sawtooth"
				});
				expect(autoFilter.min).to.be.closeTo(2000, 0.1);
				expect(autoFilter.max).to.be.closeTo(4000, 0.1);
				expect(autoFilter.type).to.equal("sawtooth");
				autoFilter.dispose();
			});

			it ("can be started and stopped", function(){
				var autoFilter = new AutoFilter();
				autoFilter.start().stop("+0.2");
				autoFilter.dispose();
			});

			it ("can get/set the options", function(){
				var autoFilter = new AutoFilter();
				autoFilter.set({
					"min" : 1200,
					"frequency" : 2.4,
					"type" : "triangle"
				});
				expect(autoFilter.get().min).to.be.closeTo(1200, 0.01);
				expect(autoFilter.get().frequency).to.be.closeTo(2.4, 0.01);
				expect(autoFilter.get().type).to.equal("triangle");
				autoFilter.dispose();
			});

			it ("can set the frequency and depth", function(){
				var autoFilter = new AutoFilter();
				autoFilter.depth.value = 0.4;
				autoFilter.frequency.value = 0.4;
				expect(autoFilter.depth.value).to.be.closeTo(0.4, 0.01);
				expect(autoFilter.frequency.value).to.be.closeTo(0.4, 0.01);
				autoFilter.dispose();
			});

			it ("can set the filter options", function(){
				var autoFilter = new AutoFilter();
				autoFilter.filter.Q.value = 2;
				expect(autoFilter.filter.Q.value).to.be.closeTo(2, 0.01);
				autoFilter.dispose();
			});
		});
	});
});