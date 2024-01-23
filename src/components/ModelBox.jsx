import React from "react";
import "../App.css";

const ModelBox = () => {
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box modal-box-size">
          <div class="card">
            <div class="card-header flex items-center justify-between">
              <h2 class="text-lg font-bold">Create Room</h2>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn-sm">Close ⚔</button>
                </form>
              </div>
            </div>
            <div className="input input-md bg-neutral-content focus:outline-none! border-none mb-3  shadow-xl">
              <button class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search"
                class="input input-xs w-full max-w-xs wide bg-neutral-content focus:outline-none! border-none"
              />
            </div>
            <div class="card-body py-0 border-b hover:neutral-content hover:cursor-pointer shadow-xl mb-2">
              <div class="flex items-center gap-4 py-3">
                <div class="avatar online">
                  <div class="w-10 h-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

                <div>
                  <p class="text-lg">Peter Gould</p>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div class="card-body py-0 border-b hover:neutral-content hover:cursor-pointer shadow-xl mb-2">
              <div class="flex items-center gap-4 py-3">
                <div class="avatar online">
                  <div class="w-10 h-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

                <div>
                  <p class="text-lg">Peter Gould</p>
                </div>
              </div>
            </div>{" "}
            <div class="card-body py-0 border-b hover:neutral-content hover:cursor-pointer shadow-xl mb-2">
              <div class="flex items-center gap-4 py-3">
                <div class="avatar online">
                  <div class="w-10 h-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

                <div>
                  <p class="text-lg">Peter Gould</p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex items-center gap-4 py-3">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="public"
                  name="privacy"
                  className="radio radio-primary"
                />
                <label htmlFor="public" class="text-blue-500">
                  Public
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="private"
                  name="privacy"
                  className="radio radio-primary"
                />
                <label htmlFor="private" class="text-blue-500">
                  Private
                </label>
              </div>
            </div>
            {/* Group Name Label with Input Field */}
            <div className="mb-3">
              <label htmlFor="groupName" className="text-blue-500 block mb-2">
                Group Name
              </label>
              <input
                type="text"
                id="groupName"
                placeholder="Enter group name"
                className="w-full p-2 bg-neutral-content focus:outline-none border-none shadow-xl"
              />
            </div>
            <div class="flex justify-between mt-4">
              <button class="btn btn-primary">Confirm ➔</button>
              <button class="btn btn-secondary">4 Selected</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModelBox;
