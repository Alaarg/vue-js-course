<template>
    <div>
        <div class="backdrop">
            <div class="modal">
                <p>modale content</p>
            </div>
        </div>
    </div>
</template>

<style>
.modal {
    width: 300px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;

}

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
</style>