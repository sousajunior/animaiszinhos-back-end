﻿(function () {
    angular
        .module("Module")
        .factory("ProdutoResource", ["$resource", function ($resource) {
            return $resource("http://localhost:49664/api/produtos/:id",
                {
                    id: "@id"
                },
                {
                    buscar: {
                        method: "GET",
                        isArray: true
                    },

                    buscarUm: {
                        method: "GET",
                        params: { id: "@id" },
                        isArray: false
                    },

                    salvar: {
                        method: "POST",
                        isArray: false
                    },

                    editar: {
                        method: "PUT",
                        params: { id: "@id" },
                        isArray: false
                    },

                    remover: {
                        method: "DELETE",
                        params: { id: "@id" },
                        isArray: false
                    }

                });
        }]);
})();