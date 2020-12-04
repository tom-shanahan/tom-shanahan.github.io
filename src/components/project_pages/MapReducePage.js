import React from "react";
import ProjectDescriptionMaster from "../ProjectDescriptionMaster";
import Gist from "react-gist";

function MapReducePage(){
    return (
        <div className="container">
            <div className="row project-detail">
                <ProjectDescriptionMaster
                    title="MapReduce"
                    next_page="recommendation_engine"
                    prev_page="area_bump"
                    tools="C/C++"
                    html_location="None"
                    description="
MapReduce provides include scalability and fault-tolerance when processing large data sets. The general program includes a map task, which filters and sorts input data, and a reduce task, which performs a summary operation. The tasks can be divided among multiple worker nodes and executed in parallel. A master node orchestrates the communications and data transfers between the various nodes.
<br/><br/>
<h6>MapReduce for Word Count:</h6>
For the purpose of solving a word count problem, my MapReduce implementation contains the following stages:
<ol>
<li>Map: Worker nodes process input files and produce intermediate files with key-value pairs.</li>
<li>Reduce: Worker nodes aggregate key-value pairs from the map stage and save the aggregated results as reduced intermediate files.</li>
<li>Merge: The master node combines reduced intermediate output files from all reducers into a single consolidated output file.</li>
</ol>

For my implementation of MapReduce, each input file is processed by a separate worker node executing a mapper task. The mapper task generates <key, count> pairs and assigns pairs between as many intermediate files as there are reducers. Hashing the keys using the C++ hash function allows pairs with matching keys to be assigned to the same intermediate file. Once all intermediate files are generated, the master node assigns these to workers. The workers execute the reducer task on corresponding intermediate files. These generate new <key, count> pairs representing the number of instances of each keyword. Finally, the master node consolidates reducer output into a single sorted combined output file.
<br/><br/>
<h6>Master-Worker Communication:</h6>
Master-worker communication is handled by sending messages over sockets between the master node and worker nodes. The messages allow the master node to tell worker nodes when to start map and reduce tasks. The messages also allow worker nodes to communicate their statuses (ready or task completed) to the master node.
<br/><br/>
<h6>Task Scheduling:</h6>
Task scheduling is executed on a “first come, first served” basis. The master node initially directs worker nodes to execute the map task. As input files are mapped, the master node will direct freed worker nodes to any remaining unprocessed input files. The master node waits until all inputs have been processed before directing worker nodes to execute the reduce task. The master node again waits until all intermediate files are processed before executing the merge task and combining the reduced files into a single output file.
"
                />
                <Gist id='2b4713dd4efb9f7b416c21fe01a43fc0' />
                <Gist id='9266e85a2d7204e855be4da8d0ea59b4' />
            </div>
        </div>
    );
}
export default MapReducePage;
