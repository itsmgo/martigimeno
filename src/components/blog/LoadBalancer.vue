<script setup>
import { ref } from "vue";

const images = [
  "algorithm_1.png",
  "algorithm_2.png",
  "algorithm_3.png",
  "algorithm_4.png",
  "algorithm_5.png",
  "algorithm_6.png",
  "algorithm_7.png",
  "algorithm_8.png",
  "algorithm_9.png",
  "algorithm_10.png",
  "algorithm_11.png",
];

const methods = {
  getImageURL: (image) => {
    return new URL(`/src/assets/blog/load_balancer/${image}`, import.meta.url)
      .href;
  },
};

const currentIndex = ref(0);
</script>

<template>
  <article
    id="ebd221e5-a90f-46b0-a0c4-8e1e0152a4a5"
    class="page sans"
    ref="scrollable"
  >
    <header>
      <h1>An electrical load balancer</h1>
      <nav
        id="c121a2bd-b276-4887-afed-8dfb8f3c5e0a"
        class="block-color-gray table_of_contents"
      >
        <div class="table_of_contents-item table_of_contents-indent-0">
          <a
            class="table_of_contents-link"
            href="#69c3fb02-0f80-4557-bc7b-df7fc4ac9d2f"
            >The context</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#d0c7d568-5bed-402a-941a-fc05f781de92"
            >The reason behind circuit breakers</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#0a22ac90-932a-4e7c-bb5d-2371619d6abd"
            >The reason behind under-sizing the installation</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-0">
          <a
            class="table_of_contents-link"
            href="#4a3ad553-1047-4ab3-8ecf-41651762f238"
            >The problem in its (almost) simplest version</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#cbc2a53e-3c21-4a46-aacb-773817ad1a5d"
            >Inputs</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#1b3435f1-ec69-49b5-8553-5a1d67730f3c"
            >Output</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#4851b755-c036-463e-bc4a-72f0de82cfdb"
            >Determining the current demand of an Electric Vehicle</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-0">
          <a
            class="table_of_contents-link"
            href="#cfc5cb40-c236-4ccb-8994-69639e5b6f85"
            >An initial solution</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#f0e08747-80e1-451a-950c-9e29470ae196"
            >Prioritization</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#ed441828-cc3f-4ded-be4d-5d075b71ea61"
            >Power sharing</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-0">
          <a
            class="table_of_contents-link"
            href="#79067b19-f8b6-4cf8-bfb3-75589fb74691"
            >Adding a bit of complexity: Some things are just out of our
            control</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#7a318ae9-67b7-4aef-b332-b6fa98b3b183"
            >New inputs</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#58d56564-ba56-4a0c-b7fc-19cf65236a21"
            >Modifications to the solution</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#1d4b079f-6d3a-43ce-bdbc-eb474df25340"
            >Determining the current consumption at a circuit breaker</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-0">
          <a
            class="table_of_contents-link"
            href="#22380e7a-29fb-47ba-8510-eeb12e73d246"
            >Adding more complexity: Let's triple the wires</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#5f592c0b-53fb-4fdb-8a14-fd8c16775921"
            >New inputs</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#d60c4ffe-39f6-42ee-a003-7a70e2e72610"
            >Modifications to the solution</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-0">
          <a
            class="table_of_contents-link"
            href="#6b3ced59-a130-4b0f-8b00-912b100d420d"
            >Adding way more complexity: The wavy nature of Alternating
            Current</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#fe9f1228-a8d8-41ee-a57c-edd451e74da1"
            >Alternating current</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#350cf132-c9af-455f-a33a-5cb7aa1aacc1"
            >Interference</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#cd5c3d17-1fcc-47df-8d59-e86d34e08a3e"
            >Polar representation or phasor diagrams</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#bb50613a-262e-4a39-b3c6-79ce82aecbb4"
            >New inputs</a
          >
        </div>
        <div class="table_of_contents-item table_of_contents-indent-1">
          <a
            class="table_of_contents-link"
            href="#3c40b57f-648a-4be9-a305-c336a21a11d9"
            >Modifications to the solution</a
          >
        </div>
      </nav>
    </header>
    <div class="page-body">
      <div id="69c3fb02-0f80-4557-bc7b-df7fc4ac9d2f" class="anchor"></div>
      <h2>The context</h2>
      <p id="161af037-8015-47e8-8410-247c96175451" class="">
        An electrical installation comprises wires, circuit breakers, electrical
        loads and power sources. It can be represented as a tree diagram, where
        the root node is the grid connection, the intermediate nodes are the
        circuit breakers, and the leaf nodes are the electrical loads and power
        sources, all connected by the wires.
      </p>
      <figure id="f8cb7b4b-739d-43cd-8821-57875f8d7c7f" class="image">
        <a href="@/assets/blog/load_balancer/node_tree.png"
          ><img src="@/assets/blog/load_balancer/node_tree.png"
        /></a>
        <figcaption>
          Figure 1. Tree representation of an electrical installation.
        </figcaption>
      </figure>
      <p id="901f18a6-020c-42b0-8d27-65060c3530e9" class="">
        But why do we need circuit breakers in our installation?
      </p>
      <h3 id="d0c7d568-5bed-402a-941a-fc05f781de92" class="">
        The reason behind circuit breakers
      </h3>
      <p id="15ee5cfc-8a12-4fd8-a1d0-5e6ce8fe79d2" class="">
        The current flowing through a wire dissipates heat according to the
        Joule equation. If the heat dissipated by electrons flowing inside the
        wire is too high, the wire can be damaged. Circuit breakers limit the
        amount of current that can flow through the wire, thus limiting the
        amount of heat generated by the flow and preventing damage to the wire.
        If a circuit breaker detects a current above the allowed limit, it will
        open its contacts and stop the flow of current.
      </p>
      <p id="2ab3c934-915c-4ec9-954d-24b5375204e7" class="">
        So, why not use a thicker wire to reduce heat dissipation instead of
        limiting the current?
      </p>
      <h3 id="0a22ac90-932a-4e7c-bb5d-2371619d6abd" class="">
        The reason behind under-sizing the installation
      </h3>
      <p id="be1ce964-7af3-40e4-a5d6-267ff04bc1d9" class="">
        The easiest way to dimension an electric installation is to simply add
        up the current demanded by all the appliances under a certain node and
        choose a circuit breaker and wire that can handle that current. However,
        the cost of installation materials, such as wires and circuit breakers,
        increases significantly with the current handled by the elements. To
        reduce costs, we need to consider the simultaneity factor of the system,
        which indicates how many electrical loads will be consuming electricity
        at the same time. By taking this factor into account, we can get a more
        realistic estimate of the system&#x27;s power consumption and reduce the
        size and cost of the installation materials.
      </p>
      <p id="1a560a65-181d-465e-b5cb-618648279aa7" class="">
        But how can we determine the system simultaneity factor? Let&#x27;s
        leave that question for another day…
      </p>
      <div id="4a3ad553-1047-4ab3-8ecf-41651762f238" class="anchor"></div>
      <h2>The problem in its (almost) simplest version</h2>
      <p id="a45ef1f4-8ed0-4482-b186-6df877792cf3" class="">
        We have seen that real-world installations may be undersized due to cost
        constraints, and circuit breakers are installed to protect against
        high-simultaneity situations where the current may damage the wires. The
        problem statement is as follows:
        <strong
          >Develop a system that manages electrical loads to prevent circuit
          breakers from opening their contacts. </strong
        >This type of problem is called load balancing and it's typically found
        in server-client infrastructures.
      </p>
      <p id="54d14ef6-991c-4a29-a4d2-7284cc1e4484" class="">
        Actually, the problem could be simplified even further by considering a
        single circuit breaker, that is a tree with a only a root node and leaf
        nodes, but for the sake of brevity we're allowing intermediate nodes
        from the beginning.
      </p>
      <h3 id="cbc2a53e-3c21-4a46-aacb-773817ad1a5d" class="">Inputs</h3>
      <ul id="aa9e0d74-3a2b-4ba7-89cb-24e98e2df9de" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>The tree representation of the electrical installation</strong
          >: Contains information on the relation of electrical loads with
          respect to circuit breakers and the grid connection. This information
          allows us to understand the impact of a change in current of one node
          on the rest of the nodes in the tree.
        </li>
      </ul>
      <ul id="574e6a6d-2f14-406b-a7a1-8e68794b50a2" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Each circuit breaker current limit</strong>: The current limit
          is the restriction that will be imposed on the each node of the tree.
        </li>
      </ul>
      <ul id="06092a74-7e28-48cb-8eaf-2031bfb767c3" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Each controllable load current demand</strong>: The current
          demand is the objective current that a electrical load wants to
          consume.
        </li>
      </ul>
      <figure id="bb6111a6-6bba-4861-ae69-fe3e933e8038" class="image">
        <a href="@/assets/blog/load_balancer/inputs.png"
          ><img src="@/assets/blog/load_balancer/inputs.png"
        /></a>
        <figcaption>
          Figure 2. A representation of all the required inputs. The circuit
          breakers are illustrated as buckets that can be filled until a maximum
          value equivalent to the current limit. The electrical loads are also
          illustrated as buckets which length depends on the current demand.
        </figcaption>
      </figure>
      <h3 id="1b3435f1-ec69-49b5-8553-5a1d67730f3c" class="">Output</h3>
      <ul id="72847b02-e4eb-4d19-9a10-fa23071024cd" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Each controllable load current setpoint.</strong>
        </li>
      </ul>
      <figure id="3a03cab1-70d5-40f0-a98e-cb15e9bfffd2" class="image">
        <a href="@/assets/blog/load_balancer/outputs.png"
          ><img src="@/assets/blog/load_balancer/outputs.png"
        /></a>
        <figcaption>
          Figure 3. The output of the system is represented by filled buckets.
          Its length depends on the current setpoint that the system has
          calculated for the load that each bucket represents. For instance, a
          completely filled green bucked means that the current setpoint is
          equal to the current demand of that load, so the demand has been fully
          satisfied. The filling of the orange buckets represent the sum of all
          the current setpoints below a certain circuit breaker. A completely
          filled orange bucket means that the circuit breakers limit has been
          reached and no more current is available.
        </figcaption>
      </figure>
      <h3 id="4851b755-c036-463e-bc4a-72f0de82cfdb" class="">
        Determining the current demand of an Electric Vehicle
      </h3>
      <p id="5a4f0538-dec5-4c7c-98dd-b5224aba3663" class="">
        One of the inputs of the system is the current demand of the electrical
        loads. If the electrical load is a controllable EV charger, the current
        demand comes from the EV and its unknown to the charger. The charger can
        only limit the current offered, so getting the current demand is not
        trivial.
      </p>
      <p id="21ede6f2-bd2f-4ad0-9ef2-5dca9408be61" class="">
        The most accepted workaround is to do a ramp up until the car doesn't
        demand more current. That is, start by demanding the lowest amount of
        current, seeing if the car takes that current, then increasing the
        current demand by a small amount, seeing if the car takes that current,
        … and so on until either the car doesn't take the new current or the EV
        charger reaches its maximum current.
      </p>
      <div id="cfc5cb40-c236-4ccb-8994-69639e5b6f85" class="anchor"></div>
      <h2>An initial solution</h2>
      <p id="6f585889-d4d1-42ff-9479-54858e3fc201" class="">
        To optimize the distribution of current among loads, we introduce the
        concept of tasks. A task contains the current demand of a certain load.
        The tasks are prioritized with a certain criteria and then iterated,
        reserving the demanded current amount of each task on the tree nodes.
        This is done by starting at the leaf node that represents the load and
        walk up the tree reserving current on the intermediate nodes above it
        until the root node is reached. The reserved current for each node must
        be counted and limited to the circuit breaker limit. If a load demands
        current in a node that is already saturated, it will have to wait until
        the limiting node has available current.
      </p>
      <figure
        class="block-color-gray_background callout"
        style="flex-direction: column; display: flex; margin: 0 auto"
        id="6ba01aec-2e11-4da2-810a-6607533ac245"
      >
        <img :src="methods.getImageURL(images[currentIndex])" />
        <div class="slider">
          <input
            type="range"
            min="0"
            :max="images.length - 1"
            v-model="currentIndex"
          />
          Iteration: {{ currentIndex }}
        </div>
      </figure>
      <h3 id="f0e08747-80e1-451a-950c-9e29470ae196" class="">Prioritization</h3>
      <p id="4e908f3c-9a8c-4e67-9a28-657f1e679581" class="">
        One of the keys factors of the method explained above is the
        prioritization of tasks. In a saturated scenario, where the load demand
        current over the circuit breakers limits, changing the priority of the
        tasks will allow to rotate the loads that take current. Some of the
        possible and most interesting prioritization criteria are the following:
      </p>
      <ul id="d3ae9d86-2531-4b63-8f92-1ee2d069fd63" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Served energy</strong>: Equalizes the energy that each load
          uses
        </li>
      </ul>
      <ul id="7017adb5-f0d2-4f67-874a-776eddfa8d11" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Demand time</strong>: Prioritizes the loads that have just
          started to demand current
        </li>
      </ul>
      <ul id="a2414a8c-196b-4e62-95b5-b3c1683f3b95" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Served time</strong>: Equalizes the time that each load is
          using current
        </li>
      </ul>
      <h3 id="ed441828-cc3f-4ded-be4d-5d075b71ea61" class="">Power sharing</h3>
      <p id="0a5f14c3-5254-4dec-bbf9-34c85c61a37e" class="">
        Instead of supplying all demanded current to each load until there's no
        available current, one could divide the available current between all
        the loads. This approach has the benefit that the number of supply
        interruptions is lower than the previous method. It introduces a new
        objective imposing that the current between loads has to be as equal as
        possible.
      </p>
      <p id="32954fca-bcbb-4959-8603-e527e84d8519" class="">
        To solve the problem with this new restriction, one could use the same
        approach as before. This time, the tasks would be split in multiple
        smaller tasks with the minimum change of current possible. That is,
        instead of having one task for each load, we would have X tasks for each
        load where X would depend on the demanded current and the minimum
        current step.
      </p>
      <p id="d3c2ad19-219a-47fa-9102-ea18a9eb9dc6" class="">
        An iterative process tries to reserve the current of one task for each
        load with pending tasks until all the tasks have been processed.
      </p>
      <figure id="58d9e41a-e45a-44e6-aa95-3087c1a7833b" class="image">
        <a href="@/assets/blog/load_balancer/power_sharing.png"
          ><img src="@/assets/blog/load_balancer/power_sharing.png"
        /></a>
        <figcaption>
          Figure 5. This image represents an hypothetical case where four loads
          (ordered by priority) demand current. In the left side of the image,
          one can see the representation of tasks as if they were created with
          the full current demand. Using these tasks, the algorithm should
          iterate four times (one for each task), reserving the current in the
          nodes accordingly. By splitting the tasks in multiple smaller tasks
          with the smallest increments of current possible, we are able to
          reorder the resulting tasks such that in each iteration the system
          reserves a small current for each load. This time, the algorithm
          iterates seventeen times (one for each task) looping through the loads
          reserving the smallest current each time. In the illustration, the
          different loops are shown by a blank space between the tasks in the
          right side.
        </figcaption>
      </figure>
      <figure id="4cbca205-f247-42db-b725-fa4a23635c2e" class="image">
        <a href="@/assets/blog/load_balancer/small_tasks.png"
          ><img src="@/assets/blog/load_balancer/small_tasks.png"
        /></a>
        <figcaption>
          Figure 6. Comparison between big and small tasks. The numbers indicate
          the iterations or number of tasks executed. We can see how the current
          is split between loads when using smaller tasks and all the loads
          manage to get a bit of current. When a leaf node is filled in red, it
          means that there's no available current enough to satisfy the current
          demand.
        </figcaption>
      </figure>
      <div id="79067b19-f8b6-4cf8-bfb3-75589fb74691" class="anchor"></div>
      <h2>
        Adding a bit of complexity: Some things are just out of our control
      </h2>
      <p id="5d1cf7e5-aa96-4295-8a2d-e53a26f613b7" class="">
        Reviewing the problem definition, it states that the system
        <strong>manages</strong> the electrical loads and power sources. In
        reality, there are many appliances that
        <strong>can't be managed </strong>by a third party. This introduces what
        we call the uncontrollable loads and sources, things that are out of our
        control but play an equally important role in the tree calculation. Some
        examples: Solar generation, HVAC consumption, lights, heaters, etc… We
        have to modify the design to include their consumption or generation in
        the tree nodes, because even though these elements are not managed by
        the system, they have an impact in the available current for the
        controllable loads.
      </p>
      <h3 id="7a318ae9-67b7-4aef-b332-b6fa98b3b183" class="">New inputs</h3>
      <ul id="c8726243-ebb4-42d1-a353-51ca84e9f692" class="bulleted-list">
        <li style="list-style-type: disc">
          Current consumption at each circuit breaker at any given time
        </li>
      </ul>
      <ul id="7a025127-3ca7-471b-9481-d98bf1a55471" class="bulleted-list">
        <li style="list-style-type: disc">
          Each controllable load current consumption at any given time
        </li>
      </ul>
      <h3 id="58d56564-ba56-4a0c-b7fc-19cf65236a21" class="">
        Modifications to the solution
      </h3>
      <p id="ada18514-10d9-4c39-9f09-731d2d840443" class="">
        By measuring the current consumption in the intermediate nodes (measured
        current) and the consumption in the leaf nodes (controllable current),
        we can infer the current from uncontrollable elements (uncontrollable
        current) as uncontrollable current = measured current - sum(controllable
        current). This gives us a new starting point for the calculation of the
        reservation in the tree. Instead of reserving starting from 0, now we
        are reserving starting from the uncontrollable current.
      </p>
      <figure
        style="width: 50%"
        id="197ada36-2404-44d2-8ba4-692d4b7b901b"
        class="image"
      >
        <a href="@/assets/blog/load_balancer/uncontrollable_calculation.png"
          ><img
            src="@/assets/blog/load_balancer/uncontrollable_calculation.png"
        /></a>
        <figcaption>
          Figure 7. Graphical calculation of the uncontrollable current.
          uncontrollable current = measured current - sum(controllable current)
        </figcaption>
      </figure>
      <p id="493ada9c-16a7-4884-abc9-ad1b0e20876a" class="">
        We can also incorporate the bidirectional nature of current by taking
        into account the sign of the current flow. At the end, the Joule Heating
        equation doesn't care about the direction of the current so we have to
        make sure that the current stays under the limit for both directions.
      </p>
      <figure id="a7261c08-2cb2-4293-8c17-a34aed26579e" class="image">
        <a href="@/assets/blog/load_balancer/uncontrollable_tree.png"
          ><img src="@/assets/blog/load_balancer/uncontrollable_tree.png"
        /></a>
        <figcaption>
          Figure 8. The uncontrollable loads current is represented by filling
          part of the circuit breakers capacity in dark gray. This current comes
          from other elements that are not represented in the tree but that have
          an impact on the available current for the controllable loads. This is
          illustrated by extending the lines that connect each element of the
          tree diagram, meaning that there are more elements in the tree apart
          from the represented ones.
        </figcaption>
      </figure>
      <p id="e610edd9-3f5d-4804-be78-78871916fc03" class="">
        With these two modifications we've managed to include both
        uncontrollable loads and sources.
      </p>
      <h3 id="1d4b079f-6d3a-43ce-bdbc-eb474df25340" class="">
        Determining the current consumption at a circuit breaker
      </h3>
      <p id="75fbfd83-ecc2-493d-af47-4765bf9faded" class="">
        At this point, the system needs an element that can measure the current
        flowing through a wire. That's an energy meter. The installation has to
        grow to include an energy meter at every node of the tree with
        uncontrollable elements associated to it. In case that the intermediate
        node contains only controllable elements as its leaf nodes, one could
        save a meter by creating what we call a virtual meter that aggregates
        the leaf nodes current consumption. In this case, the uncontrollable
        current calculation would cancel out because we've established that
        measured current = sum(controllable current).
      </p>
      <div id="22380e7a-29fb-47ba-8510-eeb12e73d246" class="anchor"></div>
      <h2>Adding more complexity: Let's triple the wires</h2>
      <p id="9c6e1140-b062-4f09-9487-fa086f9085b7" class="">
        Distributing the electrical energy from the producers to the consumers
        is a whole thing. One key aspect that our load balancer has to take into
        account is that the electrical grid operates with three phase
        alternating current. One of the reasons for that is to reduce the power
        losses of transmission.
      </p>
      <p id="9e16e21b-39f8-4ee4-ba80-f59a65b27b45" class="">
        Let's focus in the
        <strong
          ><strong
            ><strong
              ><strong
                ><strong
                  ><strong
                    ><strong
                      ><strong
                        ><strong
                          ><strong
                            ><strong>three phases</strong></strong
                          ></strong
                        ></strong
                      ></strong
                    ></strong
                  ></strong
                ></strong
              ></strong
            ></strong
          ></strong
        >. This means that in an installation there are three wires instead on
        only one. Is the installer responsibility to balance the loads across
        the three wires so that they consume roughly the same current. If a load
        is <strong>mono-phase</strong> it only consumes current through one
        wire. If a load is <strong>three-phase</strong> it consumes current
        equally through all three wires.
      </p>
      <p id="63993b26-dbfc-4f14-ac54-83f4377a1714" class="">
        We will have to modify the solution to include the different phases of
        the controllable loads and the measured current of all three wires.
      </p>
      <h3 id="5f592c0b-53fb-4fdb-8a14-fd8c16775921" class="">New inputs</h3>
      <ul id="042ebc88-83b0-4ae7-8a43-1d0718378aa3" class="bulleted-list">
        <li style="list-style-type: disc">
          Current consumption <strong>for each phase</strong> at each circuit
          breaker at any given time.
        </li>
      </ul>
      <ul id="fe371791-b9b7-4079-9a53-817ad04e64c7" class="bulleted-list">
        <li style="list-style-type: disc">
          Each controllable load current consumption
          <strong>for each phase</strong> at any given time.
        </li>
      </ul>
      <ul id="5ea77a95-98b6-4d92-a51e-1528729143c4" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Phase mapping for each controllable load</strong>: The phase
          mapping indicates the connection of the controllable load phases with
          respect to the installation phases. In order to balance the
          installation phases, the controllable loads first phase may be
          connected to the installation second phase, and so on… The phase
          mapping allow us to correctly assign the current consumption per phase
          of a load to their parent nodes.
        </li>
      </ul>

      <figure
        style="width: 50%"
        id="1721b67e-8efe-4791-888f-864cca6fd64e"
        class="image"
      >
        <a href="@/assets/blog/load_balancer/3P_mapping.png"
          ><img src="@/assets/blog/load_balancer/3P_mapping.png"
        /></a>
        <figcaption>
          Figure 9. The phase mapping vector allows us to transform the current
          consumption reported by the controllable load to the installation
          current consumption. The phase mapping vector i-th component specifies
          which phase/wire/line of the installation has been connected to the
          i-th phase/wire/line of the controllable load.
        </figcaption>
      </figure>
      <h3 id="d60c4ffe-39f6-42ee-a003-7a70e2e72610" class="">
        Modifications to the solution
      </h3>
      <p id="ebce0bf6-eca1-4e4a-a91c-a7d7a74041ff" class="">
        Until now, every calculation was taking into account a single wire. Now
        we have to extend the calculations to three wires by simply considering
        that every node in the tree has tree components.
      </p>
      <p id="956ef3d3-1c43-42f2-b23b-ffb1d46c7e4e" class="">
        One of the most tricky modifications is the use of the phase mapping to
        transform the current consumption reported by a controllable element to
        the installation phases, as explained above. After this transformation
        is made, we simple add or subtract all the different phases as
        independent components to calculate the uncontrollable loads or the sum
        of the controllable loads.
      </p>
      <p id="2423c7b8-2c18-4f2c-9598-c0839766a7cd" class="">
        The reservation is now also taking into account three components and to
        check if a circuit breaker limit is reached, we have to check that every
        single component or phase is under the limit. In case that a load would
        exceed a circuit breaker's limit, we calculate the available current by
        considering the most limiting phase.
      </p>
      <figure id="7f62713c-2af6-4ac4-9381-7a8e455f7854" class="image">
        <a href="@/assets/blog/load_balancer/3P_tree.png"
          ><img src="@/assets/blog/load_balancer/3P_tree.png"
        /></a>
        <figcaption>
          Figure 10. Modified representation of the system where the multiple
          phases are illustrated as three buckets one next to the other. Note
          that the white lines connecting the elements should also be tripled,
          as the current flows through three distinct wires. The numbers under
          the controllable loads indicate their phase mapping vector. The empty
          buckets represent that the load demands no current in that phase. One
          can see graphically the difference between mono-phase loads and
          three-phase loads by checking the number of phases where they demand
          current. The circuit breakers current limit now has to be respected
          for all three wires.
        </figcaption>
      </figure>
      <p id="a62d1227-541d-4aed-917a-09bce3e97b79" class="">
        By adding two extra components to the calculation we've managed to
        optimize the system by using phase information to extract the most from
        the installation. The load balancer is capable to find the current
        setpoint of both three-phase and mono-phase elements working in
        different phases.
      </p>
      <figure id="bc598a75-d301-463e-859a-4e99eb803312" class="image">
        <a href="@/assets/blog/load_balancer/3P_3tree.png"
          ><img src="@/assets/blog/load_balancer/3P_3tree.png"
        /></a>
        <figcaption>
          Figure 11. Another possible representation for the three phase
          modification is to triple the tree diagrams, one for each phase. This
          is a more accurate description of reality as the wires have no
          connection between them.
        </figcaption>
      </figure>
      <div id="6b3ced59-a130-4b0f-8b00-912b100d420d" class="anchor"></div>
      <h2>
        Adding way more complexity: The wavy nature of Alternating Current
      </h2>
      <p id="7948aa0d-a198-4c5b-a0f5-7fed08c86214" class="">
        The simplifications work until a certain point, and the last
        simplification worked for systems with neutral wire (TT, TN systems) and
        stops working when we consider grids without neutral wire (IT systems).
        Let's get into the details and consider electricity from the ground up.
      </p>
      <h3 id="fe9f1228-a8d8-41ee-a57c-edd451e74da1" class="">
        Alternating current
      </h3>
      <p id="33bf6661-b701-4783-9c53-542fd64ae924" class="">
        The voltage is the difference between two points in a potential field.
        Electrons are charged particles that experience an electrical force when
        in presence of a differential of potential. The current is the flow of
        electrons through an area.
      </p>
      <p id="f918a035-19bb-4b38-b069-756b6731f4b8" class="">
        In a three phase alternating current system with a neutral wire, there
        are three wires with an alternating voltage of 230 V with respect to a
        fourth neutral wire, that has a constant potential. The voltage waves
        have their phase shifted 120º from one another.
      </p>
      <p id="472213d7-46cc-4f93-9868-43a13666fdba" class="">
        In a three phase alternating current system with no neutral wire, there
        are only three wires with an alternating voltage of 230 V with respect
        to one another. The voltage waves also have their phase shifted 120º
        from one another.
      </p>
      <p id="df0df8bb-00f5-4756-b2db-75260a2ce3bc" class="">
        Imagine a mono-phase load connected to two wires. The electrons inside
        the wires experience a difference of potential: the voltage drop between
        the wires. This forces them to move according to that voltage and a
        current appears.
      </p>
      <h3 id="350cf132-c9af-455f-a33a-5cb7aa1aacc1" class="">Interference</h3>
      <p id="3e835191-3508-4dd4-89ca-429355fc46d9" class="">
        In a system with neutral wire, one of the wires connected to the loads
        is always the neutral wire, and the other one is any of the other three
        wires. As the neutral wire has a constant potential, the current wave
        will have the same frequency and phase as of the other wire's potential.
        This means that
        <strong
          >all loads current waves in the same wire will have the same phase. </strong
        >To calculate the sum of current waves we can simply sum their
        amplitudes as a scalars. See the figure below that represents the sum of
        waves with the same phase.
      </p>
      <p id="eec0e42c-dc5c-484e-8e0a-932cd9f38a26" class="">
        In a system with no neutral wire, any combination of two of the three
        wires will be connected to the loads. The electrons in the wires will
        experience a difference of potencial equal to the difference of the
        alternating potentials of the connected wires. This means that the
        current wave will have the same frequency and
        <strong>phase as of the difference of the two wires potentials. </strong
        >This means that
        <strong>
          loads current waves in the same wire may not have the same phase, </strong
        >revealing a problem that until now we didn't had to solve:
        <strong
          >how can we add currents in the same wire that have different
          phases?</strong
        >
      </p>
      <figure id="78febac2-9393-4ffe-bb49-9e31865df202" class="image">
        <a href="@/assets/blog/load_balancer/current_wave_sum.png"
          ><img src="@/assets/blog/load_balancer/current_wave_sum.png"
        /></a>
        <figcaption>
          Figure 12. In the left side of the image, two blue and green waves
          with same frequency and phase but different amplitudes A and B,
          respectively, are interfering with each other. The resulting wave
          represented in orange, has the same phase and frequency and its
          amplitude is the sum of the amplitudes. In the right side of the
          image, the blue and green waves have the same frequency but different
          phase and amplitude. Due to interference, it's not trivial to
          determine the combined wave.
        </figcaption>
      </figure>
      <h3 id="cd5c3d17-1fcc-47df-8d59-e86d34e08a3e" class="">
        Polar representation or phasor diagrams
      </h3>
      <p id="7eb82ee8-bb7d-40fe-90d4-0b23345d9ccb" class="">
        A wave can be characterized with three parameters:
      </p>
      <ul id="468610ce-c7c6-41bb-8b9e-c60e6eb952c8" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Amplitude</strong>: The oscillating strength of the wave.
        </li>
      </ul>
      <ul id="9fb14a31-b579-4c77-9504-ccf5b3cd9b8a" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Frequency</strong>: The oscillating speed of the wave.
        </li>
      </ul>
      <ul id="c26e6fcb-2534-4c75-adbe-aa2a49019ede" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Phase</strong>: The time shift of the wave.
        </li>
      </ul>
      <p id="74a014ac-285b-4cb4-8dc1-4635bc61e0bd" class="">
        In the electrical grid, we can assume that the frequency is the same for
        all the elements. A phasor is a complex number representing a sinusoidal
        wave, with the magnitude being the amplitude of the wave and the angle
        being the phase of that wave. It can be represented in the polar plane
        in polar coordinates.
      </p>
      <figure
        style="width: 50%"
        id="a7f50355-8c55-4ae4-b680-55ad72926d0b"
        class="image"
      >
        <a href="@/assets/blog/load_balancer/phasors.png"
          ><img src="@/assets/blog/load_balancer/phasors.png"
        /></a>
        <figcaption>
          Figure 13. A sinusoidal wave represented as a wave in the left side of
          the figure and as a phasor in the right side.
        </figcaption>
      </figure>
      <p id="b125f91a-a976-4382-9d87-b5afc14fecc1" class="">
        We will use this transformation to combine waves with different phases
        because
        <strong
          >sinusoidal waves with the same frequency can be added by adding their
          phasors. </strong
        >This transforms the scalar sum into a vectorial sum. The three phase
        with neutral cable case is a particular case where the vectors are
        aligned, thus the scalar sum is enough.
      </p>
      <figure id="9f13b14f-9b21-4010-a86f-68a4be891d9c" class="image">
        <a href="@/assets/blog/load_balancer/current_phasor_sum.png"
          ><img src="@/assets/blog/load_balancer/current_phasor_sum.png"
        /></a>
        <figcaption>
          Figure 14. This figure represents exactly the same information as
          figure 12, but using the waves phasors in the complex plane. In the
          left side of the image, two blue and green waves with same frequency
          and phase but different amplitudes A and B, respectively, are
          interfering with each other. The resulting wave represented in orange,
          has the same phase and frequency and its amplitude is the sum of the
          amplitudes. In the right side of the image, the blue and green waves
          have the same frequency but different phase and amplitude. The
          combined wave is the vectorial sum of their phasors.
        </figcaption>
      </figure>
      <h3 id="bb50613a-262e-4a39-b3c6-79ce82aecbb4" class="">New inputs</h3>
      <ul id="347b9c38-3a5a-44a3-bfc6-eaaa991d20a2" class="bulleted-list">
        <li style="list-style-type: disc">
          Current consumption
          <strong
            ><strong
              ><strong
                ><strong><strong>phasor</strong></strong></strong
              ></strong
            ></strong
          >
          for each phase at each circuit breaker at any given time.
        </li>
      </ul>
      <ul id="5fabe962-18fa-4cbd-b7f7-7a0b2ac79017" class="bulleted-list">
        <li style="list-style-type: disc">
          Each controllable load current consumption
          <strong
            ><strong
              ><strong
                ><strong><strong>phasor</strong></strong></strong
              ></strong
            ></strong
          >
          for each phase at any given time.
        </li>
      </ul>
      <ul id="0694130d-96fd-496b-9319-e1ad052b34a4" class="bulleted-list">
        <li style="list-style-type: disc">
          <strong>Four-component phase mapping </strong>for each controllable
          load: This time the phase mapping has to indicate whether the
          controllable load has been installed with a neutral wire or any of the
          other wires. The phase mapping allow us to know the phasors of the
          controllable load for each wire or phase.
        </li>
      </ul>
      <figure
        style="width: 50%"
        id="7d1b3c37-73bd-4361-9ae7-59e199cd28ce"
        class="image"
      >
        <a href="@/assets/blog/load_balancer/phasor_mapping.png"
          ><img src="@/assets/blog/load_balancer/phasor_mapping.png"
        /></a>
        <figcaption>
          Figure 15. The phase mapping vector allows us to transform the current
          consumption reported by the controllable load to the multiple
          installation current phasors. The phase mapping vector i-th component
          specifies which phase/wire/line of the installation has been connected
          to the i-th phase/wire/line of the controllable load. The N letter
          denotes the neutral wire.
        </figcaption>
      </figure>
      <h3 id="3c40b57f-648a-4be9-a305-c336a21a11d9" class="">
        Modifications to the solution
      </h3>
      <p id="2ecdb97f-8490-45d6-a117-49e9b2a79c63" class="">
        With the deeper understanding of how electricity works, the system must
        now consider the contributions to the current of each controllable load
        as a vector instead of a scalar.
      </p>
      <p id="1637e2c6-7891-4132-b9e3-be3fc1a9024b" class="">
        First of all, the phase mapping is used to transform the current
        consumption reported by a controllable load to three polar vectors
        representing the contributions to the current for each wire.
      </p>
      <p id="d6248263-96b3-4b29-be09-b80e3bab2189" class="">
        The addition and subtraction made in the intermediate nodes while
        reserving are now vectorial operations, as now every current
        contribution from a controllable load or a meter is a polar vector.
      </p>
      <p id="7e56195c-2469-4375-8924-4be26459bf31" class="">
        Finally, the way to calculate the available current in a circuit breaker
        or intermediate node has to change to consider the magnitude (length) of
        the current vector in the node. The circuit breaker's limit is actually
        a limit on the total current vector magnitude. This introduces a small
        but powerful change in the way that available current is calculated. The
        available current now depends on the phase (angle) of the current
        vector.
      </p>
      <figure id="f55f3a5b-8ef7-4223-98a8-dfae8759b43a" class="image">
        <a href="@/assets/blog/load_balancer/phasor_representation.png"
          ><img src="@/assets/blog/load_balancer/phasor_representation.png"
        /></a>
        <figcaption>
          Figure 16. In the left side, the modifications in the circuit breakers
          representation. Now the available current is illustrated as a circle
          which radius is the current limit. The different loads are phasors, 2D
          vectors, that add up to the circle limit. Each orange vector
          represents a different controllable load. In the right side, the
          modifications of the controllable loads representation. Now the loads
          demand current in certain directions, depending on their mapping. The
          white vectors are the phasors in which the load will consume current,
          the system has control over the length or magnitude of these vectors.
          Depending on the phase mapping of the loads, the loads can have
          multiple phasors, one for each wire connected to the load. The circle
          radius indicates the total current demand.
        </figcaption>
      </figure>
      <figure id="97a6186b-c364-4a5b-b572-d39cda952065" class="image">
        <a href="@/assets/blog/load_balancer/phasor_tree.png"
          ><img src="@/assets/blog/load_balancer/phasor_tree.png"
        /></a>
      </figure>
    </div>
  </article>
</template>

<style scoped>
article {
  width: 100%;
}

img {
  width: 100%;
  transition: opacity 0.2s;
}

img:hover {
  opacity: 0.8;
}

figcaption {
  font-size: 0.8rem;
  opacity: 0.5;
}

figure {
  width: 90%;
  margin: 2rem auto;
}

h1,
h2,
h3 {
  font-weight: 600;
}
h1 {
  margin: 0;
  font-size: 2rem;
}

h2 {
  border-top: 1px solid var(--color-grey);
  padding-top: 2rem;
  margin: 3rem 0;
  margin-bottom: 1rem;
}
h3 {
  margin: 2rem 0;
  margin-bottom: 0.7rem;
}

p {
  margin-bottom: 0.7rem;
  opacity: 0.85;
}

nav {
  padding: 1rem 2rem;
}

strong {
  font-weight: 600;
}

.anchor {
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
}

.table_of_contents-indent-0 {
  padding-left: 0rem;
  font-size: 1.05rem;
}

.table_of_contents-indent-1 {
  padding-left: 1rem;
}
.table_of_contents-indent-2 {
  padding-left: 2rem;
}

.slider {
  margin: 1.5rem auto;
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  align-items: center;
}
</style>
