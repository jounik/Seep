seep.checkbox = function(json) {
	if(!json)
		return
	
	if(!json.elementType)
		json.elementType = "label"
	
	seep.field.call(this, json)
	
	this.checkbox = document.createElement("input")
	this.checkbox.type = "checkbox"
	
	this.label = document.createElement("span")
	
	this.element.appendChild(this.checkbox)
	this.element.appendChild(this.label)
	
	var self = this
	this.watch("checked", function(prop, old, val) {
		self.checkbox.checked = val
		self.sync(prop, old, val)
		return val
	})
	
	$(this.checkbox).change(function(e) {
		console.log(this.checked)
		self.application.sync(self.id, "checked", this.checked)
	})
}

seep.checkbox.inherit(seep.field)

seep.checkbox.prototype.update = function(json) {
	seep.field.prototype.update.call(this, json);
	this.sync(false)
	if(typeof json.checked != "undefined") {
		this.checked = json.checked
	}
	this.sync(true)
}