import Vue from "vue"
import Table from "../src/components/Table.vue"

describe("table.vue", () => {
  it("should be render table", () => {
    const container = document.createElement("div");
    const TableComponent = Vue.extend(Table)
    const vm = new TableComponent({
      propsData: {
        events: [
          {
            name: "foo",
            id: 1,
          },
          {
            name: "foo",
            id: 2,
          },
        ],
      },
    });
    vm.$mount(container);
    expect(vm.events.length).to.equal(2);
  });
});
