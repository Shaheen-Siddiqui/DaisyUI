import React, { useState } from "react";
import "../App.css";
import ModelBox from "./ModelBox";

const UserContacts = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      {/* <ModelBox setOpenModel={setOpenModel}/> */}
      <div className="card-size">
        <div class="card">
          <div class="card-body py-1">
            <div class="flex items-center justify-between">
              <h2 className="card-title font-bold">Contacts</h2>

              <button
                className="btn btn-sm w-30"
                tabindex="-1"
                role="button"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                + Create Room
              </button>
            </div>
          </div>
          <div class="card-body py-0 border-b hover:bg-blue-100 hover:cursor-pointer">
            <div class="flex items-center gap-4 py-3">
              <div class="avatar online">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div>
                <p class="text-lg">Peter Gould</p>
                <span class="text-sm">New York, United States</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div class="card-body py-0 border-b hover:bg-blue-100 hover:cursor-pointer">
            <div class="flex items-center gap-4 py-3">
              <div class="avatar online">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div>
                <p class="text-lg">Peter Gould</p>
                <span class="text-sm">New York, United States</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div class="card-body py-0 border-b hover:bg-blue-100 hover:cursor-pointer">
            <div class="flex items-center gap-4 py-3">
              <div class="avatar online">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div>
                <p class="text-lg">Peter Gould</p>
                <span class="text-sm">New York, United States</span>
              </div>
            </div>
          </div>{" "}
          {/*  */}
          <div class="card-body py-0 border-b hover:bg-blue-100 hover:cursor-pointer">
            <div class="flex items-center gap-4 py-3">
              <div class="avatar online">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div>
                <p class="text-lg">Peter Gould</p>
                <span class="text-sm">New York, United States</span>
              </div>
            </div>
          </div>{" "}
          {/*  */}
          <div class="card-body py-0 border-b hover:bg-blue-100 hover:cursor-pointer">
            <div class="flex items-center gap-4 py-3">
              <div class="avatar online">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div>
                <p class="text-lg">Peter Gould</p>
                <span class="text-sm">New York, United States</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div class="card-body py-0 border-b hover:bg-blue-100 hover:cursor-pointer">
            <div class="flex items-center gap-4 py-3">
              <div class="avatar online">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div>
                <p class="text-lg">Peter Gould</p>
                <span class="text-sm">New York, United States</span>
              </div>
            </div>
          </div>{" "}
          {/*  */}
          <div class="card-body py-0 border-b hover:bg-blue-100 hover:cursor-pointer">
            <div class="flex items-center gap-4 py-3">
              <div class="avatar online">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div>
                <p class="text-lg">Peter Gould</p>
                <span class="text-sm">New York, United States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserContacts;
