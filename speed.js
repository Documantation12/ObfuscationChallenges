(self.webpackChunkbloxd = self.webpackChunkbloxd || []).push([[740], {
  735: function (e, t, r) {
    "use strict";

    r.d(t, {
      S: function () {
        return n;
      },
      W: function () {
        return i;
      }
    });
    var i = false;
    function n(e) {
      i = e;
    }
  },
  61740: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      InGameUi: function () {
        return ui;
      },
      leaveGameNonRoot: function () {
        return Ni;
      },
      play: function () {
        return Di;
      }
    });
    var i = r(15861);
    var n = r(64687);
    var o = r.n(n);
    var s = r(18114);
    var a = r(54951);
    var u = r(85774);
    var l = r(31172);
    var c = r(70193);
    var h = r.n(c);
    var d = r(30701);
    var f = r(15671);
    var p = r(43144);
    var m = r(19088);
    var g = function () {
      function e(t) {
        var r = this;
        (0, f.Z)(this, e);
        this.noa = undefined;
        this.pointerUnlockRequests = [];
        this.pointerUnlockCounter = 0;
        this.lastRemovePointerLock = 0;
        this.noa = t;
        this.noa.container.addListener("lostPointerLock", function () {
          if (Date.now() - r.lastRemovePointerLock > 200 && !(0, m.Si)()) {
            u.f$.publish("ToggleOptions");
          }
        });
      }
      (0, p.Z)(e, [{
        key: "requestPointerUnlock",
        value: function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          if (e) {
            if (this.pointerUnlockRequests.indexOf(e) === -1) {
              this.pointerUnlockRequests.push(e);
            }
          } else {
            this.pointerUnlockCounter++;
          }
          this.noa.container.setPointerLock(false);
          u.f$.publish("pointerLockUpdate", false);
          this.lastRemovePointerLock = Date.now();
        }
      }, {
        key: "removePointerUnlockRequest",
        value: function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          if (e) {
            (0, u.Fe)(this.pointerUnlockRequests, e);
          } else {
            this.pointerUnlockCounter = Math.max(this.pointerUnlockCounter - 1, 0);
          }
          if (this.pointerUnlockRequests.length + this.pointerUnlockCounter === 0) {
            this.noa.container.setPointerLock(true);
            u.f$.publish("pointerLockUpdate", true);
          }
        }
      }, {
        key: "reset",
        value: function () {
          this.pointerUnlockRequests = [];
          this.pointerUnlockCounter = 0;
        }
      }]);
      return e;
    }();
    var v = r(21021);
    var _ = r(69113);
    var y = r.n(_);
    var b = r(37762);
    var A = r(1413);
    var S = r(70937);
    var M = r(65847);
    var C = r(87683);
    var x = r(9488);
    var T = r(52014);
    var P = r(16708);
    var I = r(92643);
    var E = r(64400);
    var R = r(80105);
    var w = r(89117);
    var k = r(74654);
    var D = r.n(k);
    var B = r(49620);
    r(14313);
    var O = r(92366);
    var F = r(54588);
    var L = r(67269);
    var N = r(38017);
    var U = r(40689);
    var G = r(88996);
    var W = r(38017).default;
    function j() {
      j = (0, i.Z)(o().mark(function e(t) {
        var r;
        var i;
        var n;
        var s;
        var a;
        var l;
        var c;
        var h;
        return o().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                r = new window.FontFace("Jetbrains Mono", "url(".concat(G, ")")).load().then(function (e) {
                  document.fonts.add(e);
                });
                (0, w.tM)();
                i = N.blockTextureAtlas;
                if (u.EU.clientEscMenuOptions.texturePackUrl !== "") {
                  if ((n = u.EU.clientEscMenuOptions.texturePackUrl).indexOf("https://") !== 0 && n.indexOf("http://") !== 0) {
                    n = "https://".concat(n);
                  }
                  i = n;
                  fetch(i, {
                    redirect: "error"
                  }).then(function (e) {
                    if (!e.ok) {
                      console.log("Check atlas Resp not ok, refreshing", e.status, e);
                      u.Cc.setItem("texturePackUrl", "");
                      window.location.reload();
                    }
                  }).catch(function (e) {
                    console.log("Check atlas Resp caught, refreshing", e);
                    u.Cc.setItem("texturePackUrl", "");
                    window.location.reload();
                  });
                }
                s = [r];
                a = function (e) {
                  var r = W[e];
                  if (r.model) {
                    if ((e === null || e === undefined ? undefined : e.split("|")[1]) === "meta") {
                      return "continue";
                    }
                    var n = K(t, r).then(function (i) {
                      var n;
                      var o = i.mesh;
                      var s = i.onMeshCreate;
                      var a = {
                        blockMesh: o,
                        opaque: false,
                        solid: (n = r.solid) === null || n === undefined || n,
                        onCustomMeshCreate: s
                      };
                      t.registry.registerBlock(r.id, a);
                      if (r.meta.metaStr !== null) {
                        z(t, e, a);
                      }
                    });
                    s.push(n);
                  } else {
                    var o;
                    var a = false;
                    if (Array.isArray(r.texture)) {
                      if (typeof r.texture[0] === "number") {
                        if (r.texture.length > 3) {
                          a = true;
                        }
                        t.registry.registerMaterial(e, {
                          textureURL: null,
                          color: D()(r.texture),
                          texHasAlpha: a
                        });
                      } else {
                        var l = r.texture;
                        o = [];
                        for (var c = 0; c < l.length; c++) {
                          var h = "".concat(e).concat(c);
                          if (t.rendering._engine.webGLVersion >= 2 && !u.EU.clientEscMenuOptions.disableTexAtlas && r.atlasIdx[c] !== undefined) {
                            t.registry.registerMaterial(h, {
                              textureURL: i,
                              atlasIndex: r.atlasIdx[c],
                              texHasAlpha: a
                            });
                          } else {
                            t.registry.registerMaterial(h, {
                              textureURL: l[c],
                              texHasAlpha: a
                            });
                          }
                          if (!r.texturePerSide) {
                            o.push(h);
                          }
                        }
                        if (r.texturePerSide) {
                          var d;
                          var f = (0, b.Z)(r.texturePerSide);
                          try {
                            for (f.s(); !(d = f.n()).done;) {
                              var p = d.value;
                              var m = "".concat(e).concat(p);
                              o.push(m);
                            }
                          } catch (g) {
                            f.e(g);
                          } finally {
                            f.f();
                          }
                        }
                      }
                    } else {
                      if (r.transTex) {
                        a = true;
                      }
                      if (t.rendering._engine.webGLVersion >= 2 && !u.EU.clientEscMenuOptions.disableTexAtlas && r.atlasIdx !== undefined) {
                        t.registry.registerMaterial(e, {
                          textureURL: i,
                          atlasIndex: r.atlasIdx,
                          texHasAlpha: a
                        });
                      } else {
                        t.registry.registerMaterial(e, {
                          textureURL: r.texture,
                          texHasAlpha: a
                        });
                      }
                    }
                    t.registry.registerBlock(r.id, {
                      material: o === undefined ? e : o,
                      fluid: r.fluid,
                      opaque: !a
                    });
                  }
                  (0, w.JJ)(e, r.id, t.rendering.getScene(), undefined);
                };
                e.t0 = o().keys((0, u.S7)(W));
              case 7:
                if ((e.t1 = e.t0()).done) {
                  e.next = 14;
                  break;
                }
                l = e.t1.value;
                if (a(l) !== "continue") {
                  e.next = 12;
                  break;
                }
                return e.abrupt("continue", 7);
              case 12:
                e.next = 7;
                break;
              case 14:
                e.t2 = o().keys(I.fe);
              case 15:
                if ((e.t3 = e.t2()).done) {
                  e.next = 23;
                  break;
                }
                c = e.t3.value;
                if (isNaN(Number(c))) {
                  e.next = 19;
                  break;
                }
                return e.abrupt("continue", 15);
              case 19:
                h = I.fe[c];
                (0, w.JJ)(c, h.id, t.rendering.getScene(), h.type);
                e.next = 15;
                break;
              case 23:
                V(t);
                H(t);
                q(t);
                Z(t);
                u.f$.publish("loadingScreenState", "Loading Game");
                e.next = 30;
                return Promise.all(s);
              case 30:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return j.apply(this, arguments);
    }
    function z(e, t, r) {
      for (var i in W) {
        var n = i.split("|");
        if (n[0] === t && n[1] === "meta") {
          var o;
          var s = W[i];
          e.registry.registerBlock(W[i].id, (0, A.Z)((0, A.Z)({}, r), {}, {
            solid: (o = s.solid) === null || o === undefined || o
          }));
          (0, w.JJ)(i, W[i].id, e.rendering.getScene(), undefined);
        }
      }
    }
    function V(e) {
      var t;
      u.f$.subscribe("serverOption|skyBox", function (r) {
        !function (r) {
          var i;
          var n;
          var o;
          var s;
          var a;
          var u;
          var l;
          var c = e.rendering.getScene();
          var h = typeof r === "string" ? r : r.type;
          if (t) {
            e.ents.deleteEntity(t);
          }
          if (h !== "lightblue") {
            if (h === "sky") {
              i = M.Kj.CreateBox("SkyBox", 1000, e.rendering.getScene(), false, M.Kj.BACKSIDE);
              (n = new T.f("sky", e.rendering.getScene())).inclination = (o = r.inclination) !== null && o !== undefined ? o : -0.2;
              n.turbidity = (s = r.turbidity) !== null && s !== undefined ? s : 10;
              i.infiniteDistance = (a = r.infiniteDistance) === null || a === undefined || a;
              n.luminance = (u = r.luminance) !== null && u !== undefined ? u : 0.1;
              n.cameraOffset.y = (l = r.yCameraOffset) !== null && l !== undefined ? l : 50;
              n.freeze();
            } else {
              i = E.BoxBuilder.CreateBox("skyBox", {
                size: 1000
              }, c);
              (n = new C.K("skyBox", c)).reflectionTexture = new P.B("textures/skyBoxes/".concat(h, "/"), c);
              n.reflectionTexture.coordinatesMode = S.x.SKYBOX_MODE;
              n.diffuseColor = new x.Wo(0, 0, 0);
              n.specularColor = new x.Wo(0, 0, 0);
            }
            n.backFaceCulling = false;
            i.material = n;
            n.disableLighting = true;
            n.freeze();
            i.applyFog = false;
            t = e.ents.add([0, 0, 0], null, null, i);
            e.ents.addComponent(t, e.ents.names.followsEntity, {
              entity: e.playerEntity
            });
          }
        }(r);
      });
    }
    function H(e) {
      u.f$.subscribe("serverOption|fogEnabled", function (e) {});
    }
    function q(e) {
      for (var t = e.rendering.getScene(), i = 0; i < 10; i++) {
        var n = new C.K("breakingBoxTexture".concat(i), t);
        n.diffuseTexture = new S.x("".concat(r(26927)("./destroy_stage_".concat(i, ".png"))), t, null, null, S.x.NEAREST_SAMPLINGMODE);
        n.diffuseTexture.wrapU = S.x.CLAMP_ADDRESSMODE;
        n.diffuseTexture.wrapV = S.x.CLAMP_ADDRESSMODE;
        n.useAlphaFromDiffuseTexture = true;
        n.diffuseTexture.hasAlpha = true;
        n.alpha = 0.7;
        n.diffuseTexture.anisotropicFilteringLevel = 1;
        n.specularColor = new x.Wo(0, 0, 0);
        n.freeze();
        var o = M.Kj.CreateBox("breakingBox".concat(i), 1.01, t);
        o.material = n;
        e.rendering.addMeshToScene(o);
        o.setEnabled(false);
      }
    }
    function Z(e) {
      var t = F.V.CreateBox("highlight", {
        size: 1.005
      }, e.rendering._scene);
      var r = e.rendering.makeStandardMaterial("highlightMat");
      r.backFaceCulling = false;
      r.emissiveColor = new x.Wo(1, 1, 1);
      r.alpha = 0.2;
      t.material = r;
      r.freeze();
      t.isPickable = false;
      e.rendering.addMeshToScene(t);
      t.setEnabled(false);
      e.rendering._highlightMesh = t;
      t.alwaysSelectAsActiveMesh = true;
      t.doNotSyncBoundingInfo = true;
    }
    function K(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      Y = (0, i.Z)(o().mark(function e(t, r) {
        var i;
        var n;
        var s;
        return o().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                i = r.model.split("|")[0];
                n = r.model.split("|").includes("rotatable");
                s = t.rendering.getScene();
                if (i !== "CentreCross") {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return", {
                  mesh: Q(s, r),
                  onMeshCreate: n ? ae : null
                });
              case 7:
                if (i !== "SquareSided") {
                  e.next = 11;
                  break;
                }
                return e.abrupt("return", {
                  mesh: $(s, r),
                  onMeshCreate: n ? ae : null
                });
              case 11:
                if (i !== "CustomPlanes") {
                  e.next = 15;
                  break;
                }
                return e.abrupt("return", {
                  mesh: J(s, r.name, r.customPlanesInfo, r.texture),
                  onMeshCreate: n ? ae : null
                });
              case 15:
                if (i !== "Slab") {
                  e.next = 19;
                  break;
                }
                return e.abrupt("return", {
                  mesh: ee(s, r),
                  onMeshCreate: se
                });
              case 19:
                if (i !== "door") {
                  e.next = 27;
                  break;
                }
                e.next = 22;
                return te(s, r);
              case 22:
                e.t0 = e.sent;
                e.t1 = ie;
                return e.abrupt("return", {
                  mesh: e.t0,
                  onMeshCreate: e.t1
                });
              case 27:
                if (i !== "trapdoor") {
                  e.next = 35;
                  break;
                }
                e.next = 30;
                return te(s, r);
              case 30:
                e.t2 = e.sent;
                e.t3 = ne;
                return e.abrupt("return", {
                  mesh: e.t2,
                  onMeshCreate: e.t3
                });
              case 35:
                if (i !== "rotatableOffset") {
                  e.next = 43;
                  break;
                }
                e.next = 38;
                return te(s, r);
              case 38:
                e.t4 = e.sent;
                e.t5 = oe;
                return e.abrupt("return", {
                  mesh: e.t4,
                  onMeshCreate: e.t5
                });
              case 43:
                if (i !== "rotatable") {
                  e.next = 51;
                  break;
                }
                e.next = 46;
                return te(s, r);
              case 46:
                e.t6 = e.sent;
                e.t7 = ae;
                return e.abrupt("return", {
                  mesh: e.t6,
                  onMeshCreate: e.t7
                });
              case 51:
                console.error("Unknown block mesh type", r.model);
              case 52:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return Y.apply(this, arguments);
    }
    function X(e, t, r) {
      var i = new O.Y("".concat(t, "BlockModelMeshMat"), e);
      var n = new S.x(r, e, null, null, S.x.NEAREST_SAMPLINGMODE);
      n.wrapU = S.x.CLAMP_ADDRESSMODE;
      n.wrapV = S.x.CLAMP_ADDRESSMODE;
      i.unlit = true;
      n.hasAlpha = true;
      i.albedoTexture = n;
      i.freeze();
      return i;
    }
    function Q(e, t) {
      return J(e, t.name, [{
        textureIdx: 0,
        yRot: 0
      }, {
        textureIdx: 0,
        yRot: Math.PI / 2
      }], [t.texture]);
    }
    function J(e, t, r, i) {
      var n;
      var o = [];
      var s = {};
      var a = (0, b.Z)(r);
      try {
        for (a.s(); !(n = a.n()).done;) {
          var u = n.value;
          var l = u.textureIdx;
          var c = u.yRot;
          var h = B.mx.CreatePlane("".concat(t, "BlkMdl1"), {
            size: 1,
            sideOrientation: M.Kj.DOUBLESIDE
          }, e);
          h.isPickable = false;
          h.rotation.y = c;
          h.rotation.x = Math.PI;
          h.bakeCurrentTransformIntoVertices();
          var d = i[l];
          if (!s[d]) {
            s[d] = X(e, "".concat(t, "TexIdx").concat(l), d);
          }
          h.material = s[d];
          o.push(h);
        }
      } catch (g) {
        a.e(g);
      } finally {
        a.f();
      }
      var f = M.Kj.MergeMeshes(o, true, false, null, false, Object.keys(s).length > 1);
      f.isPickable = false;
      for (var p = 0, m = o; p < m.length; p++) {
        m[p].dispose();
      }
      return f;
    }
    function $(e, t) {
      var r = B.mx.CreatePlane("".concat(t.name, "BlkMdl1"), {
        size: 1,
        sideOrientation: M.Kj.DOUBLESIDE
      }, e);
      r.isPickable = false;
      r.rotation.x = Math.PI;
      r.position.z = 0.49;
      r.bakeCurrentTransformIntoVertices();
      var i = B.mx.CreatePlane("".concat(t.name, "BlkMdl1"), {
        size: 1,
        sideOrientation: M.Kj.DOUBLESIDE
      }, e);
      i.isPickable = false;
      i.rotation.x = Math.PI;
      i.rotation.y = Math.PI;
      i.position.z = -0.49;
      i.bakeCurrentTransformIntoVertices();
      var n = B.mx.CreatePlane("".concat(t.name, "BlkMdl2"), {
        size: 1,
        sideOrientation: M.Kj.DOUBLESIDE
      }, e);
      n.isPickable = false;
      n.rotation.y = Math.PI / 2;
      n.rotation.z = Math.PI;
      n.position.x = 0.49;
      n.bakeCurrentTransformIntoVertices();
      var o = B.mx.CreatePlane("".concat(t.name, "BlkMdl2"), {
        size: 1,
        sideOrientation: M.Kj.DOUBLESIDE
      }, e);
      o.isPickable = false;
      o.rotation.y = Math.PI * 3 / 2;
      o.rotation.z = Math.PI;
      o.position.x = -0.49;
      o.bakeCurrentTransformIntoVertices();
      var s = X(e, t.name, t.texture);
      r.material = s;
      i.material = s;
      n.material = s;
      o.material = s;
      var a = M.Kj.MergeMeshes([r, i, n, o], true, false, null, false, false);
      a.isPickable = false;
      r.dispose();
      i.dispose();
      n.dispose();
      o.dispose();
      return a;
    }
    function ee(e, t) {
      var r = new w.RW(t.name, e)._makeSourceMesh();
      r.material.unfreeze();
      r.setEnabled(true);
      r.material = r.material.clone("BlockModelSlab".concat(t.name));
      r.material.disableLighting = true;
      r.material.emissiveColor = new x.Wo(1, 1, 1);
      r.material.freeze();
      return r;
    }
    function te(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      re = (0, i.Z)(o().mark(function e(t, r) {
        var i;
        var n;
        var s;
        var a;
        return o().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                i = r.blockModel;
                e.next = 3;
                return L.n.ImportMeshAsync("", i, null, t);
              case 3:
                n = e.sent;
                s = (s = n.meshes).filter(function (e) {
                  return e.subMeshes && e.subMeshes.length > 0;
                });
                (a = s[0]).name = "".concat(r.name, "blockGlbMesh");
                a.scaling = new R.P(1 / 8, 1 / 8, 1 / 8);
                a.bakeCurrentTransformIntoVertices(false);
                a.material.unlit = true;
                a.material.freeze();
                a.isPickable = false;
                return e.abrupt("return", a);
              case 14:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return re.apply(this, arguments);
    }
    function ie(e, t, r, i, n) {
      var o;
      var s;
      var a = 0.4375;
      var u = W[n].name;
      var l = (o = u.split("|")[2]) !== null && o !== undefined ? o : "rot1";
      var c = ((s = u.split("|")[3]) !== null && s !== undefined ? s : "closed") === "open";
      if (l === "rot1" && c) {
        e.position.x += a;
        e.rotation.y += Math.PI * 3 / 2;
      } else if (l !== "rot1" || c) {
        if (l === "rot2" && c) {
          e.position.z -= a;
        } else if (l !== "rot2" || c) {
          if (l === "rot3" && c) {
            e.position.x -= a;
            e.rotation.y += Math.PI / 2;
          } else if (l !== "rot3" || c) {
            if (l === "rot4" && c) {
              e.position.z += a;
              e.rotation.y += Math.PI;
            } else if (!(l !== "rot4" || c)) {
              e.position.x -= a;
              e.rotation.y += Math.PI * 3 / 2;
            }
          } else {
            e.position.z -= a;
            e.rotation.y += Math.PI;
          }
        } else {
          e.position.x += a;
          e.rotation.y += Math.PI / 2;
        }
      } else {
        e.position.z += a;
      }
    }
    function ne(e, t, r, i, n) {
      var o;
      var s = W[n].name;
      var a = 0.4375;
      if (((o = s.split("|")[3]) !== null && o !== undefined ? o : "closed") === "open") {
        var u;
        var l = (u = s.split("|")[2]) !== null && u !== undefined ? u : "rot1";
        if (l === "rot4") {
          e.position.x += a;
          e.rotation.y += Math.PI * 3 / 2;
        } else if (l === "rot1") {
          e.position.z -= a;
        } else if (l === "rot2") {
          e.position.x -= a;
          e.rotation.y += Math.PI / 2;
        } else if (l === "rot3") {
          e.position.z += a;
          e.rotation.y += Math.PI;
        }
      } else {
        e.position.y += a;
        e.rotation.x += Math.PI / 2;
      }
    }
    function oe(e, t, r, i, n) {
      var o;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.4375;
      ae(e, t, r, i, n);
      if (W[n].rotatableOffsetAmt !== undefined) {
        s = W[n].rotatableOffsetAmt;
      }
      var a = W[n].name;
      var u = (o = a.split("|")[2]) !== null && o !== undefined ? o : "rot1";
      if (u === "rot1") {
        e.position.z -= s;
      } else if (u === "rot2") {
        e.position.x -= s;
      } else if (u === "rot3") {
        e.position.z += s;
      } else if (u === "rot4") {
        e.position.x += s;
      }
    }
    function se(e, t, r, i, n) {
      var o = (0, u.rL)().getMetaInfo(n).metaStr;
      if (o.split("|")[2] === "side") {
        oe(e, t, r, i, n, 0.25);
        e.rotation.x = Math.PI / 2;
      } else if (o.split("|")[2] === "top") {
        e.position.y += 0.25;
      } else {
        e.position.y -= 0.25;
      }
    }
    function ae(e, t, r, i, n) {
      var o;
      var s;
      var a = W[n].name;
      var u = (o = W[n].modelScale) !== null && o !== undefined ? o : 1;
      e.scaling = new R.P(u, u, u);
      var l = (s = a.split("|")[2]) !== null && s !== undefined ? s : "rot1";
      if (l === "rot2") {
        e.rotation.y += Math.PI / 2;
      } else if (l === "rot3") {
        e.rotation.y += Math.PI;
      } else if (l === "rot4") {
        e.rotation.y += Math.PI * 3 / 2;
      }
    }
    U.J.Configuration = {
      decoder: {
        wasmUrl: "/static/draco_wasm_wrapper_gltf.js",
        wasmBinaryUrl: "/static/draco_decoder_gltf.wasm"
      }
    };
    var ue;
    var le = r(29439);
    var ce = r(85882);
    var he = r(52126);
    var de = r(47786);
    var fe = function () {
      function e(t, r) {
        var i = this;
        (0, f.Z)(this, e);
        this.worker = undefined;
        this.waitingChunkCallbacks = {};
        this.seedInitReqCounts = {};
        this.worker = r();
        this.worker.onmessage = function (e) {
          var t = e.data;
          var r = t.id;
          var n = t.array;
          var o = t.metadata;
          n = de(new Uint16Array(n.data.buffer), [he.ZP.chunkSize, he.ZP.chunkSize, he.ZP.chunkSize]);
          if (i.waitingChunkCallbacks[r]) {
            var s;
            var a = (0, b.Z)(i.waitingChunkCallbacks[r]);
            try {
              for (a.s(); !(s = a.n()).done;) {
                (0, s.value)(n, o);
              }
            } catch (u) {
              a.e(u);
            } finally {
              a.f();
            }
          }
          delete i.waitingChunkCallbacks[r];
        };
        this.worker.onerror = function (e) {
          console.error("error from webworker\n", e);
        };
        this.worker.postMessage({
          type: "workerInit",
          chunkSize: he.ZP.chunkSize,
          blockMetadata: t
        });
      }
      (0, p.Z)(e, [{
        key: "initialiseSeed",
        value: function (e) {
          var t;
          this.worker.postMessage({
            type: "createSeed",
            seed: e
          });
          this.seedInitReqCounts[e] = ((t = this.seedInitReqCounts[e]) !== null && t !== undefined ? t : 0) + 1;
        }
      }, {
        key: "destroySeed",
        value: function (e) {
          if (this.seedInitReqCounts[e] !== undefined && this.seedInitReqCounts[e] > 0) {
            this.seedInitReqCounts[e] = this.seedInitReqCounts[e] - 1;
          }
          if (!this.seedInitReqCounts[e]) {
            this.worker.postMessage({
              type: "deleteSeed",
              seed: e
            });
          }
          if (this.seedInitReqCounts[e] <= 0) {
            delete this.seedInitReqCounts[e];
          }
        }
      }, {
        key: "threadedGetChunk",
        value: function (e, t, r, i, n, o) {
          var s;
          var a = "".concat(r, "|").concat(i, "|").concat(n, "|").concat(e);
          var u = (s = this.waitingChunkCallbacks[a]) !== null && s !== undefined ? s : [];
          u.push(o);
          this.waitingChunkCallbacks[a] = u;
          var l = [t.data.buffer];
          this.worker.postMessage({
            type: "chunk",
            id: a,
            array: t
          }, l);
        }
      }]);
      return e;
    }();
    var pe = r(23257);
    var me = r(20477);
    var ge = r.n(me);
    function ve() {
      return ge()("/*! For license information please see procGen.worker.0b63992a.worker.js.LICENSE.txt */\n!function(){var e={189:function(e,t,n){var i=n(4687),r=n(7424).default,o=n(4704).default,a=n(861).default,s=n(6690).default,h=n(9728).default,u=function(e){try{return Object(function(){var e=new Error(\"Cannot find module 'perf_hooks'\");throw e.code=\"MODULE_NOT_FOUND\",e}())}catch(t){return e}}(Date).now,c=function(e){return e&&e===Math.floor(e)&&e>0&&isFinite(e)},l=function(e){\"use strict\";function t(e){var n=e.max,i=void 0===n?1/0:n,r=e.ttl,o=e.updateAgeOnGet,a=void 0!==o&&o,h=e.noUpdateTTL,u=void 0!==h&&h,l=e.dispose;if(s(this,t),this.expirations=Object.create(null),this.data=new Map,this.expirationMap=new Map,void 0!==r&&!c(r))throw new TypeError(\"ttl must be positive integer if set\");if(!c(i)&&i!==1/0)throw new TypeError(\"max must be positive integer or Infinity\");if(this.ttl=r,this.max=i,this.updateAgeOnGet=a,this.noUpdateTTL=u,void 0!==l){if(\"function\"!==typeof l)throw new TypeError(\"dispose must be function if set\");this.dispose=l}}return h(t,[{key:\"clear\",value:function(){var e=this.dispose!==t.prototype.dispose?a(this):[];this.data.clear(),this.expirationMap.clear(),this.expirations=Object.create(null);var n,i=o(e);try{for(i.s();!(n=i.n()).done;){var s=r(n.value,2),h=s[0],u=s[1];this.dispose(u,h,\"delete\")}}catch(c){i.e(c)}finally{i.f()}}},{key:\"set\",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.ttl,o=void 0===r?this.ttl:r,a=i.noUpdateTTL,s=void 0===a?this.noUpdateTTL:a,h=i.noDisposeOnSet,l=void 0===h?this.noDisposeOnSet:h;if(!c(o))throw new TypeError(\"ttl must be positive integer\");var f=this.expirationMap.get(e),d=u(),p=void 0===f?void 0:this.data.get(e);if(void 0!==f){if(s&&f>d)return p!==t&&(this.data.set(e,t),l||this.dispose(p,e,\"set\")),this;var v=this.expirations[f];!v||v.length<=1?delete this.expirations[f]:this.expirations[f]=v.filter((function(t){return t!==e}))}var g=Math.ceil(d+o);if(this.expirationMap.set(e,g),this.data.set(e,t),!this.expirations[g]){var m=setTimeout((function(){return n.purgeStale()}),o);m.unref&&m.unref(),this.expirations[g]=[]}for(this.expirations[g].push(e);this.size>this.max;)this.purgeToCapacity();return!l&&f&&p!==t&&this.dispose(p,e,\"set\"),this}},{key:\"has\",value:function(e){return this.data.has(e)}},{key:\"getRemainingTTL\",value:function(e){var t=this.expirationMap.get(e);return void 0!==t?Math.max(0,t-u()):0}},{key:\"get\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.updateAgeOnGet,i=void 0===n?this.updateAgeOnGet:n,r=t.ttl,o=void 0===r?this.ttl:r,a=this.data.get(e);return i&&this.set(e,a,{noUpdateTTL:!1,noDisposeOnSet:!0,ttl:o}),a}},{key:\"dispose\",value:function(e,t){}},{key:\"delete\",value:function(e){var t=this.expirationMap.get(e);if(void 0!==t){var n=this.data.get(e);this.data.delete(e),this.expirationMap.delete(e);var i=this.expirations[t];return i&&i.length<=1?delete this.expirations[t]:this.expirations[t]=i.filter((function(t){return t!==e})),this.dispose(n,e,\"delete\"),!0}return!1}},{key:\"purgeToCapacity\",value:function(){for(var e in this.expirations){var t=this.expirations[e];if(this.size-t.length>=this.max){var n,i=o(t);try{for(i.s();!(n=i.n()).done;){var r=n.value,a=this.data.get(r);this.data.delete(r),this.expirationMap.delete(r),this.dispose(a,r,\"evict\")}}catch(f){i.e(f)}finally{i.f()}delete this.expirations[e]}else{var s,h=this.size-this.max,u=o(t.splice(0,h));try{for(u.s();!(s=u.n()).done;){var c=s.value,l=this.data.get(c);this.data.delete(c),this.expirationMap.delete(c),this.dispose(l,c,\"evict\")}}catch(f){u.e(f)}finally{u.f()}}return}}},{key:\"size\",get:function(){return this.data.size}},{key:\"purgeStale\",value:function(){var e=u();for(var t in this.expirations){if(t>e)return;var n,i=o(this.expirations[t]);try{for(i.s();!(n=i.n()).done;){var r=n.value,a=this.data.get(r);this.data.delete(r),this.expirationMap.delete(r),this.dispose(a,r,\"stale\")}}catch(s){i.e(s)}finally{i.f()}delete this.expirations[t]}}},{key:\"entries\",value:i.mark((function e(){var t,n,r,a;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=i.keys(this.expirations);case 1:if((e.t1=e.t0()).done){e.next=22;break}t=e.t1.value,n=o(this.expirations[t]),e.prev=4,n.s();case 6:if((r=n.n()).done){e.next=12;break}return a=r.value,e.next=10,[a,this.data.get(a)];case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t2=e.catch(4),n.e(e.t2);case 17:return e.prev=17,n.f(),e.finish(17);case 20:e.next=1;break;case 22:case\"end\":return e.stop()}}),e,this,[[4,14,17,20]])}))},{key:\"keys\",value:i.mark((function e(){var t,n,r,a;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=i.keys(this.expirations);case 1:if((e.t1=e.t0()).done){e.next=22;break}t=e.t1.value,n=o(this.expirations[t]),e.prev=4,n.s();case 6:if((r=n.n()).done){e.next=12;break}return a=r.value,e.next=10,a;case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t2=e.catch(4),n.e(e.t2);case 17:return e.prev=17,n.f(),e.finish(17);case 20:e.next=1;break;case 22:case\"end\":return e.stop()}}),e,this,[[4,14,17,20]])}))},{key:\"values\",value:i.mark((function e(){var t,n,r,a;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=i.keys(this.expirations);case 1:if((e.t1=e.t0()).done){e.next=22;break}t=e.t1.value,n=o(this.expirations[t]),e.prev=4,n.s();case 6:if((r=n.n()).done){e.next=12;break}return a=r.value,e.next=10,this.data.get(a);case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t2=e.catch(4),n.e(e.t2);case 17:return e.prev=17,n.f(),e.finish(17);case 20:e.next=1;break;case 22:case\"end\":return e.stop()}}),e,this,[[4,14,17,20]])}))},{key:e,value:function(){return this.entries()}}]),t}(Symbol.iterator);e.exports=l},2470:function(e,t){\"use strict\";t.byteLength=function(e){var t=h(e),n=t[0],i=t[1];return 3*(n+i)/4-i},t.toByteArray=function(e){var t,n,o=h(e),a=o[0],s=o[1],u=new r(function(e,t,n){return 3*(t+n)/4-n}(0,a,s)),c=0,l=s>0?a-4:a;for(n=0;n<l;n+=4)t=i[e.charCodeAt(n)]<<18|i[e.charCodeAt(n+1)]<<12|i[e.charCodeAt(n+2)]<<6|i[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===s&&(t=i[e.charCodeAt(n)]<<2|i[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===s&&(t=i[e.charCodeAt(n)]<<10|i[e.charCodeAt(n+1)]<<4|i[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},t.fromByteArray=function(e){for(var t,i=e.length,r=i%3,o=[],a=16383,s=0,h=i-r;s<h;s+=a)o.push(u(e,s,s+a>h?h:s+a));1===r?(t=e[i-1],o.push(n[t>>2]+n[t<<4&63]+\"==\")):2===r&&(t=(e[i-2]<<8)+e[i-1],o.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+\"=\"));return o.join(\"\")};for(var n=[],i=[],r=\"undefined\"!==typeof Uint8Array?Uint8Array:Array,o=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\",a=0,s=o.length;a<s;++a)n[a]=o[a],i[o.charCodeAt(a)]=a;function h(e){var t=e.length;if(t%4>0)throw new Error(\"Invalid string. Length must be a multiple of 4\");var n=e.indexOf(\"=\");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function u(e,t,i){for(var r,o,a=[],s=t;s<i;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(n[(o=r)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return a.join(\"\")}i[\"-\".charCodeAt(0)]=62,i[\"_\".charCodeAt(0)]=63},918:function(e,t,n){\"use strict\";var i=n(2470),r=n(545),o=n(7146);function a(){return h.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(a()<t)throw new RangeError(\"Invalid typed array length\");return h.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=h.prototype:(null===e&&(e=new h(t)),e.length=t),e}function h(e,t,n){if(!h.TYPED_ARRAY_SUPPORT&&!(this instanceof h))return new h(e,t,n);if(\"number\"===typeof e){if(\"string\"===typeof t)throw new Error(\"If encoding is specified then the first argument must be a string\");return l(this,e)}return u(this,e,t,n)}function u(e,t,n,i){if(\"number\"===typeof t)throw new TypeError('\"value\" argument must not be a number');return\"undefined\"!==typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,i){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError(\"'offset' is out of bounds\");if(t.byteLength<n+(i||0))throw new RangeError(\"'length' is out of bounds\");t=void 0===n&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,n):new Uint8Array(t,n,i);h.TYPED_ARRAY_SUPPORT?(e=t).__proto__=h.prototype:e=f(e,t);return e}(e,t,n,i):\"string\"===typeof t?function(e,t,n){\"string\"===typeof n&&\"\"!==n||(n=\"utf8\");if(!h.isEncoding(n))throw new TypeError('\"encoding\" must be a valid string encoding');var i=0|p(t,n),r=(e=s(e,i)).write(t,n);r!==i&&(e=e.slice(0,r));return e}(e,t,n):function(e,t){if(h.isBuffer(t)){var n=0|d(t.length);return 0===(e=s(e,n)).length||t.copy(e,0,0,n),e}if(t){if(\"undefined\"!==typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||\"length\"in t)return\"number\"!==typeof t.length||(i=t.length)!==i?s(e,0):f(e,t);if(\"Buffer\"===t.type&&o(t.data))return f(e,t.data)}var i;throw new TypeError(\"First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.\")}(e,t)}function c(e){if(\"number\"!==typeof e)throw new TypeError('\"size\" argument must be a number');if(e<0)throw new RangeError('\"size\" argument must not be negative')}function l(e,t){if(c(t),e=s(e,t<0?0:0|d(t)),!h.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function f(e,t){var n=t.length<0?0:0|d(t.length);e=s(e,n);for(var i=0;i<n;i+=1)e[i]=255&t[i];return e}function d(e){if(e>=a())throw new RangeError(\"Attempt to allocate Buffer larger than maximum size: 0x\"+a().toString(16)+\" bytes\");return 0|e}function p(e,t){if(h.isBuffer(e))return e.length;if(\"undefined\"!==typeof ArrayBuffer&&\"function\"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;\"string\"!==typeof e&&(e=\"\"+e);var n=e.length;if(0===n)return 0;for(var i=!1;;)switch(t){case\"ascii\":case\"latin1\":case\"binary\":return n;case\"utf8\":case\"utf-8\":case void 0:return H(e).length;case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return 2*n;case\"hex\":return n>>>1;case\"base64\":return q(e).length;default:if(i)return H(e).length;t=(\"\"+t).toLowerCase(),i=!0}}function v(e,t,n){var i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return\"\";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return\"\";if((n>>>=0)<=(t>>>=0))return\"\";for(e||(e=\"utf8\");;)switch(e){case\"hex\":return A(this,t,n);case\"utf8\":case\"utf-8\":return M(this,t,n);case\"ascii\":return R(this,t,n);case\"latin1\":case\"binary\":return T(this,t,n);case\"base64\":return x(this,t,n);case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return E(this,t,n);default:if(i)throw new TypeError(\"Unknown encoding: \"+e);e=(e+\"\").toLowerCase(),i=!0}}function g(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function m(e,t,n,i,r){if(0===e.length)return-1;if(\"string\"===typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if(\"string\"===typeof t&&(t=h.from(t,i)),h.isBuffer(t))return 0===t.length?-1:y(e,t,n,i,r);if(\"number\"===typeof t)return t&=255,h.TYPED_ARRAY_SUPPORT&&\"function\"===typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,i,r);throw new TypeError(\"val must be string, number or Buffer\")}function y(e,t,n,i,r){var o,a=1,s=e.length,h=t.length;if(void 0!==i&&(\"ucs2\"===(i=String(i).toLowerCase())||\"ucs-2\"===i||\"utf16le\"===i||\"utf-16le\"===i)){if(e.length<2||t.length<2)return-1;a=2,s/=2,h/=2,n/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(r){var c=-1;for(o=n;o<s;o++)if(u(e,o)===u(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===h)return c*a}else-1!==c&&(o-=o-c),c=-1}else for(n+h>s&&(n=s-h),o=n;o>=0;o--){for(var l=!0,f=0;f<h;f++)if(u(e,o+f)!==u(t,f)){l=!1;break}if(l)return o}return-1}function b(e,t,n,i){n=Number(n)||0;var r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;var o=t.length;if(o%2!==0)throw new TypeError(\"Invalid hex string\");i>o/2&&(i=o/2);for(var a=0;a<i;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[n+a]=s}return a}function w(e,t,n,i){return U(H(t,e.length-n),e,n,i)}function k(e,t,n,i){return U(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function C(e,t,n,i){return k(e,t,n,i)}function S(e,t,n,i){return U(q(t),e,n,i)}function _(e,t,n,i){return U(function(e,t){for(var n,i,r,o=[],a=0;a<e.length&&!((t-=2)<0);++a)i=(n=e.charCodeAt(a))>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function x(e,t,n){return 0===t&&n===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,n))}function M(e,t,n){n=Math.min(e.length,n);for(var i=[],r=t;r<n;){var o,a,s,h,u=e[r],c=null,l=u>239?4:u>223?3:u>191?2:1;if(r+l<=n)switch(l){case 1:u<128&&(c=u);break;case 2:128===(192&(o=e[r+1]))&&(h=(31&u)<<6|63&o)>127&&(c=h);break;case 3:o=e[r+1],a=e[r+2],128===(192&o)&&128===(192&a)&&(h=(15&u)<<12|(63&o)<<6|63&a)>2047&&(h<55296||h>57343)&&(c=h);break;case 4:o=e[r+1],a=e[r+2],s=e[r+3],128===(192&o)&&128===(192&a)&&128===(192&s)&&(h=(15&u)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&h<1114112&&(c=h)}null===c?(c=65533,l=1):c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|1023&c),i.push(c),r+=l}return function(e){var t=e.length;if(t<=P)return String.fromCharCode.apply(String,e);var n=\"\",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=P));return n}(i)}t.Buffer=h,t.SlowBuffer=function(e){+e!=e&&(e=0);return h.alloc(+e)},t.INSPECT_MAX_BYTES=50,h.TYPED_ARRAY_SUPPORT=void 0!==n.g.TYPED_ARRAY_SUPPORT?n.g.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&\"function\"===typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}(),t.kMaxLength=a(),h.poolSize=8192,h._augment=function(e){return e.__proto__=h.prototype,e},h.from=function(e,t,n){return u(null,e,t,n)},h.TYPED_ARRAY_SUPPORT&&(h.prototype.__proto__=Uint8Array.prototype,h.__proto__=Uint8Array,\"undefined\"!==typeof Symbol&&Symbol.species&&h[Symbol.species]===h&&Object.defineProperty(h,Symbol.species,{value:null,configurable:!0})),h.alloc=function(e,t,n){return function(e,t,n,i){return c(t),t<=0?s(e,t):void 0!==n?\"string\"===typeof i?s(e,t).fill(n,i):s(e,t).fill(n):s(e,t)}(null,e,t,n)},h.allocUnsafe=function(e){return l(null,e)},h.allocUnsafeSlow=function(e){return l(null,e)},h.isBuffer=function(e){return!(null==e||!e._isBuffer)},h.compare=function(e,t){if(!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError(\"Arguments must be Buffers\");if(e===t)return 0;for(var n=e.length,i=t.length,r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case\"hex\":case\"utf8\":case\"utf-8\":case\"ascii\":case\"latin1\":case\"binary\":case\"base64\":case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return!0;default:return!1}},h.concat=function(e,t){if(!o(e))throw new TypeError('\"list\" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var i=h.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){var a=e[n];if(!h.isBuffer(a))throw new TypeError('\"list\" argument must be an Array of Buffers');a.copy(i,r),r+=a.length}return i},h.byteLength=p,h.prototype._isBuffer=!0,h.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError(\"Buffer size must be a multiple of 16-bits\");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},h.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError(\"Buffer size must be a multiple of 32-bits\");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},h.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError(\"Buffer size must be a multiple of 64-bits\");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},h.prototype.toString=function(){var e=0|this.length;return 0===e?\"\":0===arguments.length?M(this,0,e):v.apply(this,arguments)},h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError(\"Argument must be a Buffer\");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){var e=\"\",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString(\"hex\",0,n).match(/.{2}/g).join(\" \"),this.length>n&&(e+=\" ... \")),\"<Buffer \"+e+\">\"},h.prototype.compare=function(e,t,n,i,r){if(!h.isBuffer(e))throw new TypeError(\"Argument must be a Buffer\");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError(\"out of range index\");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(r>>>=0)-(i>>>=0),a=(n>>>=0)-(t>>>=0),s=Math.min(o,a),u=this.slice(i,r),c=e.slice(t,n),l=0;l<s;++l)if(u[l]!==c[l]){o=u[l],a=c[l];break}return o<a?-1:a<o?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return m(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return m(this,e,t,n,!1)},h.prototype.write=function(e,t,n,i){if(void 0===t)i=\"utf8\",n=this.length,t=0;else if(void 0===n&&\"string\"===typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error(\"Buffer.write(string, encoding, offset[, length]) is no longer supported\");t|=0,isFinite(n)?(n|=0,void 0===i&&(i=\"utf8\")):(i=n,n=void 0)}var r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(\"Attempt to write outside buffer bounds\");i||(i=\"utf8\");for(var o=!1;;)switch(i){case\"hex\":return b(this,e,t,n);case\"utf8\":case\"utf-8\":return w(this,e,t,n);case\"ascii\":return k(this,e,t,n);case\"latin1\":case\"binary\":return C(this,e,t,n);case\"base64\":return S(this,e,t,n);case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return _(this,e,t,n);default:if(o)throw new TypeError(\"Unknown encoding: \"+i);i=(\"\"+i).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:\"Buffer\",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function R(e,t,n){var i=\"\";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function T(e,t,n){var i=\"\";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function A(e,t,n){var i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);for(var r=\"\",o=t;o<n;++o)r+=z(e[o]);return r}function E(e,t,n){for(var i=e.slice(t,n),r=\"\",o=0;o<i.length;o+=2)r+=String.fromCharCode(i[o]+256*i[o+1]);return r}function O(e,t,n){if(e%1!==0||e<0)throw new RangeError(\"offset is not uint\");if(e+t>n)throw new RangeError(\"Trying to access beyond buffer length\")}function L(e,t,n,i,r,o){if(!h.isBuffer(e))throw new TypeError('\"buffer\" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('\"value\" argument is out of bounds');if(n+i>e.length)throw new RangeError(\"Index out of range\")}function B(e,t,n,i){t<0&&(t=65535+t+1);for(var r=0,o=Math.min(e.length-n,2);r<o;++r)e[n+r]=(t&255<<8*(i?r:1-r))>>>8*(i?r:1-r)}function D(e,t,n,i){t<0&&(t=4294967295+t+1);for(var r=0,o=Math.min(e.length-n,4);r<o;++r)e[n+r]=t>>>8*(i?r:3-r)&255}function I(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError(\"Index out of range\");if(n<0)throw new RangeError(\"Index out of range\")}function N(e,t,n,i,o){return o||I(e,0,n,4),r.write(e,t,n,i,23,4),n+4}function F(e,t,n,i,o){return o||I(e,0,n,8),r.write(e,t,n,i,52,8),n+8}h.prototype.slice=function(e,t){var n,i=this.length;if((e=~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),(t=void 0===t?i:~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),t<e&&(t=e),h.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=h.prototype;else{var r=t-e;n=new h(r,void 0);for(var o=0;o<r;++o)n[o]=this[o+e]}return n},h.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var i=this[e],r=1,o=0;++o<t&&(r*=256);)i+=this[e+o]*r;return i},h.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var i=this[e+--t],r=1;t>0&&(r*=256);)i+=this[e+--t]*r;return i},h.prototype.readUInt8=function(e,t){return t||O(e,1,this.length),this[e]},h.prototype.readUInt16LE=function(e,t){return t||O(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUInt16BE=function(e,t){return t||O(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUInt32LE=function(e,t){return t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUInt32BE=function(e,t){return t||O(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var i=this[e],r=1,o=0;++o<t&&(r*=256);)i+=this[e+o]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*t)),i},h.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||O(e,t,this.length);for(var i=t,r=1,o=this[e+--i];i>0&&(r*=256);)o+=this[e+--i]*r;return o>=(r*=128)&&(o-=Math.pow(2,8*t)),o},h.prototype.readInt8=function(e,t){return t||O(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){t||O(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){t||O(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readFloatLE=function(e,t){return t||O(e,4,this.length),r.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return t||O(e,4,this.length),r.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return t||O(e,8,this.length),r.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return t||O(e,8,this.length),r.read(this,e,!1,52,8)},h.prototype.writeUIntLE=function(e,t,n,i){(e=+e,t|=0,n|=0,i)||L(this,e,t,n,Math.pow(2,8*n)-1,0);var r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},h.prototype.writeUIntBE=function(e,t,n,i){(e=+e,t|=0,n|=0,i)||L(this,e,t,n,Math.pow(2,8*n)-1,0);var r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},h.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,1,255,0),h.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,2,65535,0),h.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):B(this,e,t,!0),t+2},h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,2,65535,0),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):B(this,e,t,!1),t+2},h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,4,4294967295,0),h.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):D(this,e,t,!0),t+4},h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,4,4294967295,0),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):D(this,e,t,!1),t+4},h.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);L(this,e,t,n,r-1,-r)}var o=0,a=1,s=0;for(this[t]=255&e;++o<n&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},h.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);L(this,e,t,n,r-1,-r)}var o=n-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,1,127,-128),h.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,2,32767,-32768),h.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):B(this,e,t,!0),t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,2,32767,-32768),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):B(this,e,t,!1),t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,4,2147483647,-2147483648),h.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):D(this,e,t,!0),t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):D(this,e,t,!1),t+4},h.prototype.writeFloatLE=function(e,t,n){return N(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return N(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return F(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return F(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,i){if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError(\"targetStart out of bounds\");if(n<0||n>=this.length)throw new RangeError(\"sourceStart out of bounds\");if(i<0)throw new RangeError(\"sourceEnd out of bounds\");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);var r,o=i-n;if(this===e&&n<t&&t<i)for(r=o-1;r>=0;--r)e[r+t]=this[r+n];else if(o<1e3||!h.TYPED_ARRAY_SUPPORT)for(r=0;r<o;++r)e[r+t]=this[r+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},h.prototype.fill=function(e,t,n,i){if(\"string\"===typeof e){if(\"string\"===typeof t?(i=t,t=0,n=this.length):\"string\"===typeof n&&(i=n,n=this.length),1===e.length){var r=e.charCodeAt(0);r<256&&(e=r)}if(void 0!==i&&\"string\"!==typeof i)throw new TypeError(\"encoding must be a string\");if(\"string\"===typeof i&&!h.isEncoding(i))throw new TypeError(\"Unknown encoding: \"+i)}else\"number\"===typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError(\"Out of range index\");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),\"number\"===typeof e)for(o=t;o<n;++o)this[o]=e;else{var a=h.isBuffer(e)?e:H(new h(e,i).toString()),s=a.length;for(o=0;o<n-t;++o)this[o+t]=a[o%s]}return this};var j=/[^+\\/0-9A-Za-z-_]/g;function z(e){return e<16?\"0\"+e.toString(16):e.toString(16)}function H(e,t){var n;t=t||1/0;for(var i=e.length,r=null,o=[],a=0;a<i;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error(\"Invalid code point\");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function q(e){return i.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\\s+|\\s+$/g,\"\")}(e).replace(j,\"\")).length<2)return\"\";for(;e.length%4!==0;)e+=\"=\";return e}(e))}function U(e,t,n,i){for(var r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}},8041:function(e){\"use strict\";var t,n=\"object\"===typeof Reflect?Reflect:null,i=n&&\"function\"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&\"function\"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!==e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,o),i(n)}function o(){\"function\"===typeof e.removeListener&&e.removeListener(\"error\",r),n([].slice.call(arguments))}v(e,t,o,{once:!0}),\"error\"!==t&&function(e,t,n){\"function\"===typeof e.on&&v(e,\"error\",t,n)}(e,r,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(e){if(\"function\"!==typeof e)throw new TypeError('The \"listener\" argument must be of type Function. Received type '+typeof e)}function h(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function u(e,t,n,i){var r,o,a,u;if(s(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit(\"newListener\",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if(\"function\"===typeof a?a=o[t]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),(r=h(e))>0&&a.length>r&&!a.warned){a.warned=!0;var c=new Error(\"Possible EventEmitter memory leak detected. \"+a.length+\" \"+String(t)+\" listeners added. Use emitter.setMaxListeners() to increase limit\");c.name=\"MaxListenersExceededWarning\",c.emitter=e,c.type=t,c.count=a.length,u=c,console&&console.warn&&console.warn(u)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=c.bind(i);return r.listener=n,i.wrapFn=r,r}function f(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:\"function\"===typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):p(r,r.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if(\"function\"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function v(e,t,n,i){if(\"function\"===typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if(\"function\"!==typeof e.addEventListener)throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(o){i.once&&e.removeEventListener(t,r),n(o)}))}}Object.defineProperty(o,\"defaultMaxListeners\",{enumerable:!0,get:function(){return a},set:function(e){if(\"number\"!==typeof e||e<0||r(e))throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received '+e+\".\");a=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if(\"number\"!==typeof e||e<0||r(e))throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received '+e+\".\");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return h(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r=\"error\"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error(\"Unhandled error.\"+(a?\" (\"+a.message+\")\":\"\"));throw s.context=a,s}var h=o[e];if(void 0===h)return!1;if(\"function\"===typeof h)i(h,this,t);else{var u=h.length,c=p(h,u);for(n=0;n<u;++n)i(c[n],this,t)}return!0},o.prototype.addListener=function(e,t){return u(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return u(this,e,t,!0)},o.prototype.once=function(e,t){return s(t),this.on(e,l(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,l(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,r,o,a;if(s(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit(\"removeListener\",e,n.listener||t));else if(\"function\"!==typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit(\"removeListener\",e,a||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)\"removeListener\"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners(\"removeListener\"),this._events=Object.create(null),this._eventsCount=0,this}if(\"function\"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return f(this,e,!0)},o.prototype.rawListeners=function(e){return f(this,e,!1)},o.listenerCount=function(e,t){return\"function\"===typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},o.prototype.listenerCount=d,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},9834:function(e,t,n){\"use strict\";var i=n(2582).Buffer,r=n(1881).Transform;function o(e){r.call(this),this._block=i.allocUnsafe(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}n(273)(o,r),o.prototype._transform=function(e,t,n){var i=null;try{this.update(e,t)}catch(r){i=r}n(i)},o.prototype._flush=function(e){var t=null;try{this.push(this.digest())}catch(n){t=n}e(t)},o.prototype.update=function(e,t){if(function(e,t){if(!i.isBuffer(e)&&\"string\"!==typeof e)throw new TypeError(t+\" must be a string or a buffer\")}(e,\"Data\"),this._finalized)throw new Error(\"Digest already called\");i.isBuffer(e)||(e=i.from(e,t));for(var n=this._block,r=0;this._blockOffset+e.length-r>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)n[o++]=e[r++];this._update(),this._blockOffset=0}for(;r<e.length;)n[this._blockOffset++]=e[r++];for(var a=0,s=8*e.length;s>0;++a)this._length[a]+=s,(s=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*s);return this},o.prototype._update=function(){throw new Error(\"_update is not implemented\")},o.prototype.digest=function(e){if(this._finalized)throw new Error(\"Digest already called\");this._finalized=!0;var t=this._digest();void 0!==e&&(t=t.toString(e)),this._block.fill(0),this._blockOffset=0;for(var n=0;n<4;++n)this._length[n]=0;return t},o.prototype._digest=function(){throw new Error(\"_digest is not implemented\")},e.exports=o},2582:function(e,t,n){var i=n(918),r=i.Buffer;function o(e,t){for(var n in e)t[n]=e[n]}function a(e,t,n){return r(e,t,n)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?e.exports=i:(o(i,t),t.Buffer=a),a.prototype=Object.create(r.prototype),o(r,a),a.from=function(e,t,n){if(\"number\"===typeof e)throw new TypeError(\"Argument must not be a number\");return r(e,t,n)},a.alloc=function(e,t,n){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");var i=r(e);return void 0!==t?\"string\"===typeof n?i.fill(t,n):i.fill(t):i.fill(0),i},a.allocUnsafe=function(e){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");return r(e)},a.allocUnsafeSlow=function(e){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");return i.SlowBuffer(e)}},545:function(e,t){t.read=function(e,t,n,i,r){var o,a,s=8*r-i-1,h=(1<<s)-1,u=h>>1,c=-7,l=n?r-1:0,f=n?-1:1,d=e[t+l];for(l+=f,o=d&(1<<-c)-1,d>>=-c,c+=s;c>0;o=256*o+e[t+l],l+=f,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=i;c>0;a=256*a+e[t+l],l+=f,c-=8);if(0===o)o=1-u;else{if(o===h)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,i),o-=u}return(d?-1:1)*a*Math.pow(2,o-i)},t.write=function(e,t,n,i,r,o){var a,s,h,u=8*o-r-1,c=(1<<u)-1,l=c>>1,f=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,d=i?0:o-1,p=i?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(h=Math.pow(2,-a))<1&&(a--,h*=2),(t+=a+l>=1?f/h:f*Math.pow(2,1-l))*h>=2&&(a++,h/=2),a+l>=c?(s=0,a=c):a+l>=1?(s=(t*h-1)*Math.pow(2,r),a+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,r),a=0));r>=8;e[n+d]=255&s,d+=p,s/=256,r-=8);for(a=a<<r|s,u+=r;u>0;e[n+d]=255&a,d+=p,a/=256,u-=8);e[n+d-p]|=128*v}},273:function(e){\"function\"===typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}},379:function(e){\"use strict\";e.exports=function(e){for(var t=new Array(e),n=0;n<e;++n)t[n]=n;return t}},3110:function(e){function t(e){return!!e.constructor&&\"function\"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return\"function\"===typeof e.readFloatLE&&\"function\"===typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},7146:function(e){var t={}.toString;e.exports=Array.isArray||function(e){return\"[object Array]\"==t.call(e)}},1075:function(e,t,n){\"use strict\";var i=n(273),r=n(9834),o=n(5734).Buffer,a=new Array(16);function s(){r.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function h(e,t){return e<<t|e>>>32-t}function u(e,t,n,i,r,o,a){return h(e+(t&n|~t&i)+r+o|0,a)+t|0}function c(e,t,n,i,r,o,a){return h(e+(t&i|n&~i)+r+o|0,a)+t|0}function l(e,t,n,i,r,o,a){return h(e+(t^n^i)+r+o|0,a)+t|0}function f(e,t,n,i,r,o,a){return h(e+(n^(t|~i))+r+o|0,a)+t|0}i(s,r),s.prototype._update=function(){for(var e=a,t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);var n=this._a,i=this._b,r=this._c,o=this._d;n=u(n,i,r,o,e[0],3614090360,7),o=u(o,n,i,r,e[1],3905402710,12),r=u(r,o,n,i,e[2],606105819,17),i=u(i,r,o,n,e[3],3250441966,22),n=u(n,i,r,o,e[4],4118548399,7),o=u(o,n,i,r,e[5],1200080426,12),r=u(r,o,n,i,e[6],2821735955,17),i=u(i,r,o,n,e[7],4249261313,22),n=u(n,i,r,o,e[8],1770035416,7),o=u(o,n,i,r,e[9],2336552879,12),r=u(r,o,n,i,e[10],4294925233,17),i=u(i,r,o,n,e[11],2304563134,22),n=u(n,i,r,o,e[12],1804603682,7),o=u(o,n,i,r,e[13],4254626195,12),r=u(r,o,n,i,e[14],2792965006,17),n=c(n,i=u(i,r,o,n,e[15],1236535329,22),r,o,e[1],4129170786,5),o=c(o,n,i,r,e[6],3225465664,9),r=c(r,o,n,i,e[11],643717713,14),i=c(i,r,o,n,e[0],3921069994,20),n=c(n,i,r,o,e[5],3593408605,5),o=c(o,n,i,r,e[10],38016083,9),r=c(r,o,n,i,e[15],3634488961,14),i=c(i,r,o,n,e[4],3889429448,20),n=c(n,i,r,o,e[9],568446438,5),o=c(o,n,i,r,e[14],3275163606,9),r=c(r,o,n,i,e[3],4107603335,14),i=c(i,r,o,n,e[8],1163531501,20),n=c(n,i,r,o,e[13],2850285829,5),o=c(o,n,i,r,e[2],4243563512,9),r=c(r,o,n,i,e[7],1735328473,14),n=l(n,i=c(i,r,o,n,e[12],2368359562,20),r,o,e[5],4294588738,4),o=l(o,n,i,r,e[8],2272392833,11),r=l(r,o,n,i,e[11],1839030562,16),i=l(i,r,o,n,e[14],4259657740,23),n=l(n,i,r,o,e[1],2763975236,4),o=l(o,n,i,r,e[4],1272893353,11),r=l(r,o,n,i,e[7],4139469664,16),i=l(i,r,o,n,e[10],3200236656,23),n=l(n,i,r,o,e[13],681279174,4),o=l(o,n,i,r,e[0],3936430074,11),r=l(r,o,n,i,e[3],3572445317,16),i=l(i,r,o,n,e[6],76029189,23),n=l(n,i,r,o,e[9],3654602809,4),o=l(o,n,i,r,e[12],3873151461,11),r=l(r,o,n,i,e[15],530742520,16),n=f(n,i=l(i,r,o,n,e[2],3299628645,23),r,o,e[0],4096336452,6),o=f(o,n,i,r,e[7],1126891415,10),r=f(r,o,n,i,e[14],2878612391,15),i=f(i,r,o,n,e[5],4237533241,21),n=f(n,i,r,o,e[12],1700485571,6),o=f(o,n,i,r,e[3],2399980690,10),r=f(r,o,n,i,e[10],4293915773,15),i=f(i,r,o,n,e[1],2240044497,21),n=f(n,i,r,o,e[8],1873313359,6),o=f(o,n,i,r,e[15],4264355552,10),r=f(r,o,n,i,e[6],2734768916,15),i=f(i,r,o,n,e[13],1309151649,21),n=f(n,i,r,o,e[4],4149444226,6),o=f(o,n,i,r,e[11],3174756917,10),r=f(r,o,n,i,e[2],718787259,15),i=f(i,r,o,n,e[9],3951481745,21),this._a=this._a+n|0,this._b=this._b+i|0,this._c=this._c+r|0,this._d=this._d+o|0},s.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=o.allocUnsafe(16);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e},e.exports=s},3357:function(e){e.exports=function(e,t){t=t||2;for(var n=2*(e=e||1)+1,i=Math.pow(n,t)-1,r=new Array(i),o=0;o<i;o++)for(var a=r[o]=new Array(t),s=o<i/2?o:o+1,h=1;h<=t;h++){var u=s%Math.pow(n,h);a[h-1]=u/Math.pow(n,h-1)-e,s-=u}return r}},7786:function(e,t,n){var i=n(379),r=n(3110),o=\"undefined\"!==typeof Float64Array;function a(e,t){return e[0]-t[0]}function s(){var e,t=this.stride,n=new Array(t.length);for(e=0;e<n.length;++e)n[e]=[Math.abs(t[e]),e];n.sort(a);var i=new Array(n.length);for(e=0;e<i.length;++e)i[e]=n[e][1];return i}function h(e,t){var n=[\"View\",t,\"d\",e].join(\"\");t<0&&(n=\"View_Nil\"+e);var r=\"generic\"===e;if(-1===t){var o=\"function \"+n+\"(a){this.data=a;};var proto=\"+n+\".prototype;proto.dtype='\"+e+\"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new \"+n+\"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_\"+n+\"(a){return new \"+n+\"(a);}\";return new Function(o)()}if(0===t){o=\"function \"+n+\"(a,d) {this.data = a;this.offset = d};var proto=\"+n+\".prototype;proto.dtype='\"+e+\"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function \"+n+\"_copy() {return new \"+n+\"(this.data,this.offset)};proto.pick=function \"+n+\"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function \"+n+\"_get(){return \"+(r?\"this.data.get(this.offset)\":\"this.data[this.offset]\")+\"};proto.set=function \"+n+\"_set(v){return \"+(r?\"this.data.set(this.offset,v)\":\"this.data[this.offset]=v\")+\"};return function construct_\"+n+\"(a,b,c,d){return new \"+n+\"(a,d)}\";return new Function(\"TrivialArray\",o)(u[e][0])}o=[\"'use strict'\"];var a=i(t),h=a.map((function(e){return\"i\"+e})),c=\"this.offset+\"+a.map((function(e){return\"this.stride[\"+e+\"]*i\"+e})).join(\"+\"),l=a.map((function(e){return\"b\"+e})).join(\",\"),f=a.map((function(e){return\"c\"+e})).join(\",\");o.push(\"function \"+n+\"(a,\"+l+\",\"+f+\",d){this.data=a\",\"this.shape=[\"+l+\"]\",\"this.stride=[\"+f+\"]\",\"this.offset=d|0}\",\"var proto=\"+n+\".prototype\",\"proto.dtype='\"+e+\"'\",\"proto.dimension=\"+t),o.push(\"Object.defineProperty(proto,'size',{get:function \"+n+\"_size(){return \"+a.map((function(e){return\"this.shape[\"+e+\"]\"})).join(\"*\"),\"}})\"),1===t?o.push(\"proto.order=[0]\"):(o.push(\"Object.defineProperty(proto,'order',{get:\"),t<4?(o.push(\"function \"+n+\"_order(){\"),2===t?o.push(\"return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})\"):3===t&&o.push(\"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})\")):o.push(\"ORDER})\")),o.push(\"proto.set=function \"+n+\"_set(\"+h.join(\",\")+\",v){\"),r?o.push(\"return this.data.set(\"+c+\",v)}\"):o.push(\"return this.data[\"+c+\"]=v}\"),o.push(\"proto.get=function \"+n+\"_get(\"+h.join(\",\")+\"){\"),r?o.push(\"return this.data.get(\"+c+\")}\"):o.push(\"return this.data[\"+c+\"]}\"),o.push(\"proto.index=function \"+n+\"_index(\",h.join(),\"){return \"+c+\"}\"),o.push(\"proto.hi=function \"+n+\"_hi(\"+h.join(\",\")+\"){return new \"+n+\"(this.data,\"+a.map((function(e){return[\"(typeof i\",e,\"!=='number'||i\",e,\"<0)?this.shape[\",e,\"]:i\",e,\"|0\"].join(\"\")})).join(\",\")+\",\"+a.map((function(e){return\"this.stride[\"+e+\"]\"})).join(\",\")+\",this.offset)}\");var d=a.map((function(e){return\"a\"+e+\"=this.shape[\"+e+\"]\"})),p=a.map((function(e){return\"c\"+e+\"=this.stride[\"+e+\"]\"}));o.push(\"proto.lo=function \"+n+\"_lo(\"+h.join(\",\")+\"){var b=this.offset,d=0,\"+d.join(\",\")+\",\"+p.join(\",\"));for(var v=0;v<t;++v)o.push(\"if(typeof i\"+v+\"==='number'&&i\"+v+\">=0){d=i\"+v+\"|0;b+=c\"+v+\"*d;a\"+v+\"-=d}\");o.push(\"return new \"+n+\"(this.data,\"+a.map((function(e){return\"a\"+e})).join(\",\")+\",\"+a.map((function(e){return\"c\"+e})).join(\",\")+\",b)}\"),o.push(\"proto.step=function \"+n+\"_step(\"+h.join(\",\")+\"){var \"+a.map((function(e){return\"a\"+e+\"=this.shape[\"+e+\"]\"})).join(\",\")+\",\"+a.map((function(e){return\"b\"+e+\"=this.stride[\"+e+\"]\"})).join(\",\")+\",c=this.offset,d=0,ceil=Math.ceil\");for(v=0;v<t;++v)o.push(\"if(typeof i\"+v+\"==='number'){d=i\"+v+\"|0;if(d<0){c+=b\"+v+\"*(a\"+v+\"-1);a\"+v+\"=ceil(-a\"+v+\"/d)}else{a\"+v+\"=ceil(a\"+v+\"/d)}b\"+v+\"*=d}\");o.push(\"return new \"+n+\"(this.data,\"+a.map((function(e){return\"a\"+e})).join(\",\")+\",\"+a.map((function(e){return\"b\"+e})).join(\",\")+\",c)}\");var g=new Array(t),m=new Array(t);for(v=0;v<t;++v)g[v]=\"a[i\"+v+\"]\",m[v]=\"b[i\"+v+\"]\";o.push(\"proto.transpose=function \"+n+\"_transpose(\"+h+\"){\"+h.map((function(e,t){return e+\"=(\"+e+\"===undefined?\"+t+\":\"+e+\"|0)\"})).join(\";\"),\"var a=this.shape,b=this.stride;return new \"+n+\"(this.data,\"+g.join(\",\")+\",\"+m.join(\",\")+\",this.offset)}\"),o.push(\"proto.pick=function \"+n+\"_pick(\"+h+\"){var a=[],b=[],c=this.offset\");for(v=0;v<t;++v)o.push(\"if(typeof i\"+v+\"==='number'&&i\"+v+\">=0){c=(c+this.stride[\"+v+\"]*i\"+v+\")|0}else{a.push(this.shape[\"+v+\"]);b.push(this.stride[\"+v+\"])}\");return o.push(\"var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}\"),o.push(\"return function construct_\"+n+\"(data,shape,stride,offset){return new \"+n+\"(data,\"+a.map((function(e){return\"shape[\"+e+\"]\"})).join(\",\")+\",\"+a.map((function(e){return\"stride[\"+e+\"]\"})).join(\",\")+\",offset)}\"),new Function(\"CTOR_LIST\",\"ORDER\",o.join(\"\\n\"))(u[e],s)}var u={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};e.exports=function(e,t,n,i){if(void 0===e)return(0,u.array[0])([]);\"number\"===typeof e&&(e=[e]),void 0===t&&(t=[e.length]);var a=t.length;if(void 0===n){n=new Array(a);for(var s=a-1,c=1;s>=0;--s)n[s]=c,c*=t[s]}if(void 0===i){i=0;for(s=0;s<a;++s)n[s]<0&&(i-=(t[s]-1)*n[s])}for(var l=function(e){if(r(e))return\"buffer\";if(o)switch(Object.prototype.toString.call(e)){case\"[object Float64Array]\":return\"float64\";case\"[object Float32Array]\":return\"float32\";case\"[object Int8Array]\":return\"int8\";case\"[object Int16Array]\":return\"int16\";case\"[object Int32Array]\":return\"int32\";case\"[object Uint8Array]\":return\"uint8\";case\"[object Uint16Array]\":return\"uint16\";case\"[object Uint32Array]\":return\"uint32\";case\"[object Uint8ClampedArray]\":return\"uint8_clamped\";case\"[object BigInt64Array]\":return\"bigint64\";case\"[object BigUint64Array]\":return\"biguint64\"}return Array.isArray(e)?\"array\":\"generic\"}(e),f=u[l];f.length<=a+1;)f.push(h(l,f.length-1));return(0,f[a+1])(e,t,n,i)}},3555:function(e,t,n){\"use strict\";var i=n(1159).integer,r=n(1677),o=n(9847);function a(e,t){for(var n=0,i=0;i<e.length;i++)n+=Math.pow(e[i]-t[i],2);return n}function s(e,t){if(\"function\"===typeof e.distanceFunction)throw new Error(\"PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction\");this.shape=e.shape,this.minDistance=e.minDistance,this.maxDistance=e.maxDistance||2*e.minDistance,this.maxTries=Math.ceil(Math.max(1,e.tries||30)),this.rng=t||Math.random,this.dimension=this.shape.length,this.squaredMinDistance=this.minDistance*this.minDistance,this.minDistancePlusEpsilon=this.minDistance+2e-14,this.deltaDistance=Math.max(0,this.maxDistance-this.minDistancePlusEpsilon),this.cellSize=this.minDistance/Math.sqrt(this.dimension),this.neighbourhood=o(this.dimension),this.currentPoint=null,this.processList=[],this.samplePoints=[],this.gridShape=[];for(var n=0;n<this.dimension;n++)this.gridShape.push(Math.ceil(this.shape[n]/this.cellSize));this.grid=i(this.gridShape)}s.prototype.shape=null,s.prototype.dimension=null,s.prototype.minDistance=null,s.prototype.maxDistance=null,s.prototype.minDistancePlusEpsilon=null,s.prototype.squaredMinDistance=null,s.prototype.deltaDistance=null,s.prototype.cellSize=null,s.prototype.maxTries=null,s.prototype.rng=null,s.prototype.neighbourhood=null,s.prototype.currentPoint=null,s.prototype.processList=null,s.prototype.samplePoints=null,s.prototype.gridShape=null,s.prototype.grid=null,s.prototype.addRandomPoint=function(){for(var e=new Array(this.dimension),t=0;t<this.dimension;t++)e[t]=this.rng()*this.shape[t];return this.directAddPoint(e)},s.prototype.addPoint=function(e){var t,n=!0;if(e.length===this.dimension)for(t=0;t<this.dimension&&n;t++)n=e[t]>=0&&e[t]<=this.shape[t];else n=!1;return n?this.directAddPoint(e):null},s.prototype.directAddPoint=function(e){var t,n=0,i=this.grid.stride;for(this.processList.push(e),this.samplePoints.push(e),t=0;t<this.dimension;t++)n+=(e[t]/this.cellSize|0)*i[t];return this.grid.data[n]=this.samplePoints.length,e},s.prototype.inNeighbourhood=function(e){var t,n,i,r,o=this.dimension,s=this.grid.stride;for(t=0;t<this.neighbourhood.length;t++){for(n=0,i=0;i<o;i++){if((r=(e[i]/this.cellSize|0)+this.neighbourhood[t][i])<0||r>=this.gridShape[i]){n=-1;break}n+=r*s[i]}if(-1!==n&&0!==this.grid.data[n]&&a(e,this.samplePoints[this.grid.data[n]-1])<this.squaredMinDistance)return!0}return!1},s.prototype.next=function(){for(var e,t,n,i,o,a,s;this.processList.length>0;){for(null===this.currentPoint&&(this.currentPoint=this.processList.shift()),i=this.currentPoint,e=0;e<this.maxTries;e++){for(a=!0,n=this.minDistancePlusEpsilon+this.deltaDistance*this.rng(),2===this.dimension?(t=this.rng()*Math.PI*2,o=[Math.cos(t),Math.sin(t)]):o=r(this.dimension,this.rng),s=0;a&&s<this.dimension;s++)o[s]=i[s]+o[s]*n,a=o[s]>=0&&o[s]<this.shape[s];if(a&&!this.inNeighbourhood(o))return this.directAddPoint(o)}e===this.maxTries&&(this.currentPoint=null)}return null},s.prototype.fill=function(){for(0===this.samplePoints.length&&this.addRandomPoint();this.next(););return this.samplePoints},s.prototype.getAllPoints=function(){return this.samplePoints},s.prototype.getAllPointsWithDistance=function(){throw new Error(\"PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation\")},s.prototype.reset=function(){var e=this.grid.data,t=0;for(t=0;t<e.length;t++)e[t]=0;this.samplePoints=[],this.currentPoint=null,this.processList.length=0},e.exports=s},8966:function(e,t,n){\"use strict\";var i=n(1159).array,r=n(1677),o=n(9847);function a(e,t){for(var n=0,i=0;i<e.length;i++)n+=Math.pow(e[i]-t[i],2);return Math.sqrt(n)}function s(e,t){if(\"function\"!==typeof e.distanceFunction)throw new Error(\"PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction\");this.shape=e.shape,this.minDistance=e.minDistance,this.maxDistance=e.maxDistance||2*e.minDistance,this.maxTries=Math.ceil(Math.max(1,e.tries||30)),this.distanceFunction=e.distanceFunction,this.bias=Math.max(0,Math.min(1,e.bias||0)),this.rng=t||Math.random,this.dimension=this.shape.length,this.minDistancePlusEpsilon=this.minDistance+2e-14,this.deltaDistance=Math.max(0,this.maxDistance-this.minDistancePlusEpsilon),this.cellSize=this.maxDistance/Math.sqrt(this.dimension),this.neighbourhood=o(this.dimension),this.currentPoint=null,this.currentDistance=0,this.processList=[],this.samplePoints=[],this.sampleDistance=[],this.gridShape=[];for(var n=0;n<this.dimension;n++)this.gridShape.push(Math.ceil(this.shape[n]/this.cellSize));this.grid=i(this.gridShape)}s.prototype.shape=null,s.prototype.dimension=null,s.prototype.minDistance=null,s.prototype.maxDistance=null,s.prototype.minDistancePlusEpsilon=null,s.prototype.deltaDistance=null,s.prototype.cellSize=null,s.prototype.maxTries=null,s.prototype.distanceFunction=null,s.prototype.bias=null,s.prototype.rng=null,s.prototype.neighbourhood=null,s.prototype.currentPoint=null,s.prototype.currentDistance=null,s.prototype.processList=null,s.prototype.samplePoints=null,s.prototype.sampleDistance=null,s.prototype.gridShape=null,s.prototype.grid=null,s.prototype.addRandomPoint=function(){for(var e=new Array(this.dimension),t=0;t<this.dimension;t++)e[t]=this.rng()*this.shape[t];return this.directAddPoint(e)},s.prototype.addPoint=function(e){var t,n=!0;if(e.length===this.dimension)for(t=0;t<this.dimension&&n;t++)n=e[t]>=0&&e[t]<=this.shape[t];else n=!1;return n?this.directAddPoint(e):null},s.prototype.directAddPoint=function(e){var t,n=0,i=this.grid.stride,r=this.samplePoints.length;for(this.processList.push(r),this.samplePoints.push(e),this.sampleDistance.push(this.distanceFunction(e)),t=0;t<this.dimension;t++)n+=(e[t]/this.cellSize|0)*i[t];return this.grid.data[n].push(r),e},s.prototype.inNeighbourhood=function(e){var t,n,i,r,o,s,h=this.dimension,u=this.grid.stride,c=this.distanceFunction(e);for(t=0;t<this.neighbourhood.length;t++){for(n=0,i=0;i<h;i++){if((r=(e[i]/this.cellSize|0)+this.neighbourhood[t][i])<0||r>=this.gridShape[i]){n=-1;break}n+=r*u[i]}if(-1!==n&&this.grid.data[n].length>0)for(var l=0;l<this.grid.data[n].length;l++){o=this.samplePoints[this.grid.data[n][l]],s=this.sampleDistance[this.grid.data[n][l]];var f=Math.min(s,c),d=f+(Math.max(s,c)-f)*this.bias;if(a(e,o)<this.minDistance+this.deltaDistance*d)return!0}}return!1},s.prototype.next=function(){for(var e,t,n,i,o,a,s,h;this.processList.length>0;){if(null===this.currentPoint){var u=this.processList.shift();this.currentPoint=this.samplePoints[u],this.currentDistance=this.sampleDistance[u]}for(i=this.currentPoint,o=this.currentDistance,e=0;e<this.maxTries;e++){for(s=!0,n=this.minDistancePlusEpsilon+this.deltaDistance*(o+(1-o)*this.bias),2===this.dimension?(t=this.rng()*Math.PI*2,a=[Math.cos(t),Math.sin(t)]):a=r(this.dimension,this.rng),h=0;s&&h<this.dimension;h++)a[h]=i[h]+a[h]*n,s=a[h]>=0&&a[h]<this.shape[h];if(s&&!this.inNeighbourhood(a))return this.directAddPoint(a)}e===this.maxTries&&(this.currentPoint=null)}return null},s.prototype.fill=function(){for(0===this.samplePoints.length&&this.addRandomPoint();this.next(););return this.samplePoints},s.prototype.getAllPoints=function(){return this.samplePoints},s.prototype.getAllPointsWithDistance=function(){var e,t=new Array(this.samplePoints.length),n=0,i=0;for(n=0;n<this.samplePoints.length;n++){for(e=new Array(this.dimension+1),i=0;i<this.dimension;i++)e[i]=this.samplePoints[n][i];e[this.dimension]=this.sampleDistance[n],t[n]=e}return t},s.prototype.reset=function(){var e=this.grid.data,t=0;for(t=0;t<e.length;t++)e[t]=[];this.samplePoints=[],this.currentPoint=null,this.processList.length=0},e.exports=s},9847:function(e,t,n){\"use strict\";var i=n(3357);var r={};e.exports=function(e){return r[e]||(r[e]=function(e){var t,n=i(2,e),r=[];for(n=n.filter((function(t){for(var n=0,i=0;i<e;i++)n+=Math.pow(Math.max(0,Math.abs(t[i])-1),2);return n<e})),t=0;t<e;t++)r.push(0);return n.push(r),n.sort((function(t,n){var i,r=0,o=0;for(i=0;i<e;i++)r+=Math.pow(t[i],2),o+=Math.pow(n[i],2);return r<o?-1:r>o?1:0})),n}(e)),r[e]}},8915:function(e,t,n){\"use strict\";var i=n(3555),r=n(8966);function o(e,t){this.shape=e.shape,\"function\"===typeof e.distanceFunction?this.implementation=new r(e,t):this.implementation=new i(e,t)}o.prototype.implementation=null,o.prototype.addRandomPoint=function(){return this.implementation.addRandomPoint()},o.prototype.addPoint=function(e){return this.implementation.addPoint(e)},o.prototype.next=function(){return this.implementation.next()},o.prototype.fill=function(){return this.implementation.fill()},o.prototype.getAllPoints=function(){return this.implementation.getAllPoints()},o.prototype.getAllPointsWithDistance=function(){return this.implementation.getAllPointsWithDistance()},o.prototype.reset=function(){this.implementation.reset()},e.exports=o},1677:function(e){\"use strict\";e.exports=function(e,t){var n,i,r,o,a,s=new Array(e),h=Math.floor(e/2)<<1,u=0;for(a=0;a<h;a+=2)n=-2*Math.log(t()),i=Math.sqrt(n),r=2*Math.PI*t(),u+=n,s[a]=i*Math.cos(r),s[a+1]=i*Math.sin(r);if(e%2){var c=Math.sqrt(-2*Math.log(t()))*Math.cos(2*Math.PI*t());s[e-1]=c,u+=Math.pow(c,2)}for(o=1/Math.sqrt(u),a=0;a<e;++a)s[a]*=o;return s}},1159:function(e){\"use strict\";e.exports={integer:function(e){var t,n=e.length,i=1,r=new Array(n);for(t=n;t>0;t--)r[t-1]=i,i*=e[t-1];return{stride:r,data:new Uint32Array(i)}},array:function(e){var t,n,i=e.length,r=1,o=new Array(i),a=[];for(t=i;t>0;t--)o[t-1]=r,r*=e[t-1];for(n=0;n<r;n++)a.push([]);return{stride:o,data:a}}}},1092:function(e){\"use strict\";var t={};function n(e,n,i){i||(i=Error);var r=function(e){var t,i;function r(t,i,r){return e.call(this,function(e,t,i){return\"string\"===typeof n?n:n(e,t,i)}(t,i,r))||this}return i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,r}(i);r.prototype.name=i.name,r.prototype.code=e,t[e]=r}function i(e,t){if(Array.isArray(e)){var n=e.length;return e=e.map((function(e){return String(e)})),n>2?\"one of \".concat(t,\" \").concat(e.slice(0,n-1).join(\", \"),\", or \")+e[n-1]:2===n?\"one of \".concat(t,\" \").concat(e[0],\" or \").concat(e[1]):\"of \".concat(t,\" \").concat(e[0])}return\"of \".concat(t,\" \").concat(String(e))}n(\"ERR_INVALID_OPT_VALUE\",(function(e,t){return'The value \"'+t+'\" is invalid for option \"'+e+'\"'}),TypeError),n(\"ERR_INVALID_ARG_TYPE\",(function(e,t,n){var r,o,a,s;if(\"string\"===typeof t&&(o=\"not \",t.substr(!a||a<0?0:+a,o.length)===o)?(r=\"must not be\",t=t.replace(/^not /,\"\")):r=\"must be\",function(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}(e,\" argument\"))s=\"The \".concat(e,\" \").concat(r,\" \").concat(i(t,\"type\"));else{var h=function(e,t,n){return\"number\"!==typeof n&&(n=0),!(n+t.length>e.length)&&-1!==e.indexOf(t,n)}(e,\".\")?\"property\":\"argument\";s='The \"'.concat(e,'\" ').concat(h,\" \").concat(r,\" \").concat(i(t,\"type\"))}return s+=\". Received type \".concat(typeof n)}),TypeError),n(\"ERR_STREAM_PUSH_AFTER_EOF\",\"stream.push() after EOF\"),n(\"ERR_METHOD_NOT_IMPLEMENTED\",(function(e){return\"The \"+e+\" method is not implemented\"})),n(\"ERR_STREAM_PREMATURE_CLOSE\",\"Premature close\"),n(\"ERR_STREAM_DESTROYED\",(function(e){return\"Cannot call \"+e+\" after a stream was destroyed\"})),n(\"ERR_MULTIPLE_CALLBACK\",\"Callback called multiple times\"),n(\"ERR_STREAM_CANNOT_PIPE\",\"Cannot pipe, not readable\"),n(\"ERR_STREAM_WRITE_AFTER_END\",\"write after end\"),n(\"ERR_STREAM_NULL_VALUES\",\"May not write null values to stream\",TypeError),n(\"ERR_UNKNOWN_ENCODING\",(function(e){return\"Unknown encoding: \"+e}),TypeError),n(\"ERR_STREAM_UNSHIFT_AFTER_END_EVENT\",\"stream.unshift() after end event\"),e.exports.q=t},6085:function(e,t,n){\"use strict\";var i=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t};e.exports=u;var r=n(6405),o=n(7423);n(273)(u,r);for(var a=i(o.prototype),s=0;s<a.length;s++){var h=a[s];u.prototype[h]||(u.prototype[h]=o.prototype[h])}function u(e){if(!(this instanceof u))return new u(e);r.call(this,e),o.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once(\"end\",c)))}function c(){this._writableState.ended||process.nextTick(l,this)}function l(e){e.end()}Object.defineProperty(u.prototype,\"writableHighWaterMark\",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(u.prototype,\"writableBuffer\",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(u.prototype,\"writableLength\",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(u.prototype,\"destroyed\",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}})},9543:function(e,t,n){\"use strict\";e.exports=r;var i=n(4917);function r(e){if(!(this instanceof r))return new r(e);i.call(this,e)}n(273)(r,i),r.prototype._transform=function(e,t,n){n(null,e)}},6405:function(e,t,n){\"use strict\";var i;e.exports=_,_.ReadableState=S;n(8041).EventEmitter;var r=function(e,t){return e.listeners(t).length},o=n(8747),a=n(918).Buffer,s=n.g.Uint8Array||function(){};var h,u=n(4616);h=u&&u.debuglog?u.debuglog(\"stream\"):function(){};var c,l,f,d=n(5489),p=n(6617),v=n(5999).getHighWaterMark,g=n(1092).q,m=g.ERR_INVALID_ARG_TYPE,y=g.ERR_STREAM_PUSH_AFTER_EOF,b=g.ERR_METHOD_NOT_IMPLEMENTED,w=g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;n(273)(_,o);var k=p.errorOrDestroy,C=[\"error\",\"close\",\"destroy\",\"pause\",\"resume\"];function S(e,t,r){i=i||n(6085),e=e||{},\"boolean\"!==typeof r&&(r=t instanceof i),this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=v(this,e,\"readableHighWaterMark\",r),this.buffer=new d,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||\"utf8\",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(c||(c=n(8570).s),this.decoder=new c(e.encoding),this.encoding=e.encoding)}function _(e){if(i=i||n(6085),!(this instanceof _))return new _(e);var t=this instanceof i;this._readableState=new S(e,this,t),this.readable=!0,e&&(\"function\"===typeof e.read&&(this._read=e.read),\"function\"===typeof e.destroy&&(this._destroy=e.destroy)),o.call(this)}function x(e,t,n,i,r){h(\"readableAddChunk\",t);var o,u=e._readableState;if(null===t)u.reading=!1,function(e,t){if(h(\"onEofChunk\"),t.ended)return;if(t.decoder){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,t.sync?T(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,A(e)))}(e,u);else if(r||(o=function(e,t){var n;i=t,a.isBuffer(i)||i instanceof s||\"string\"===typeof t||void 0===t||e.objectMode||(n=new m(\"chunk\",[\"string\",\"Buffer\",\"Uint8Array\"],t));var i;return n}(u,t)),o)k(e,o);else if(u.objectMode||t&&t.length>0)if(\"string\"===typeof t||u.objectMode||Object.getPrototypeOf(t)===a.prototype||(t=function(e){return a.from(e)}(t)),i)u.endEmitted?k(e,new w):M(e,u,t,!0);else if(u.ended)k(e,new y);else{if(u.destroyed)return!1;u.reading=!1,u.decoder&&!n?(t=u.decoder.write(t),u.objectMode||0!==t.length?M(e,u,t,!1):E(e,u)):M(e,u,t,!1)}else i||(u.reading=!1,E(e,u));return!u.ended&&(u.length<u.highWaterMark||0===u.length)}function M(e,t,n,i){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit(\"data\",n)):(t.length+=t.objectMode?1:n.length,i?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&T(e)),E(e,t)}Object.defineProperty(_.prototype,\"destroyed\",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),_.prototype.destroy=p.destroy,_.prototype._undestroy=p.undestroy,_.prototype._destroy=function(e,t){t(e)},_.prototype.push=function(e,t){var n,i=this._readableState;return i.objectMode?n=!0:\"string\"===typeof e&&((t=t||i.defaultEncoding)!==i.encoding&&(e=a.from(e,t),t=\"\"),n=!0),x(this,e,t,!1,n)},_.prototype.unshift=function(e){return x(this,e,null,!0,!1)},_.prototype.isPaused=function(){return!1===this._readableState.flowing},_.prototype.setEncoding=function(e){c||(c=n(8570).s);var t=new c(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var i=this._readableState.buffer.head,r=\"\";null!==i;)r+=t.write(i.data),i=i.next;return this._readableState.buffer.clear(),\"\"!==r&&this._readableState.buffer.push(r),this._readableState.length=r.length,this};var P=1073741824;function R(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!==e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=P?e=P:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function T(e){var t=e._readableState;h(\"emitReadable\",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(h(\"emitReadable\",t.flowing),t.emittedReadable=!0,process.nextTick(A,e))}function A(e){var t=e._readableState;h(\"emitReadable_\",t.destroyed,t.length,t.ended),t.destroyed||!t.length&&!t.ended||(e.emit(\"readable\"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,I(e)}function E(e,t){t.readingMore||(t.readingMore=!0,process.nextTick(O,e,t))}function O(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var n=t.length;if(h(\"maybeReadMore read 0\"),e.read(0),n===t.length)break}t.readingMore=!1}function L(e){var t=e._readableState;t.readableListening=e.listenerCount(\"readable\")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount(\"data\")>0&&e.resume()}function B(e){h(\"readable nexttick read 0\"),e.read(0)}function D(e,t){h(\"resume\",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit(\"resume\"),I(e),t.flowing&&!t.reading&&e.read(0)}function I(e){var t=e._readableState;for(h(\"flow\",t.flowing);t.flowing&&null!==e.read(););}function N(e,t){return 0===t.length?null:(t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(\"\"):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):n=t.buffer.consume(e,t.decoder),n);var n}function F(e){var t=e._readableState;h(\"endReadable\",t.endEmitted),t.endEmitted||(t.ended=!0,process.nextTick(j,t,e))}function j(e,t){if(h(\"endReadableNT\",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit(\"end\"),e.autoDestroy)){var n=t._writableState;(!n||n.autoDestroy&&n.finished)&&t.destroy()}}function z(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1}_.prototype.read=function(e){h(\"read\",e),e=parseInt(e,10);var t=this._readableState,n=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&((0!==t.highWaterMark?t.length>=t.highWaterMark:t.length>0)||t.ended))return h(\"read: emitReadable\",t.length,t.ended),0===t.length&&t.ended?F(this):T(this),null;if(0===(e=R(e,t))&&t.ended)return 0===t.length&&F(this),null;var i,r=t.needReadable;return h(\"need readable\",r),(0===t.length||t.length-e<t.highWaterMark)&&h(\"length less than watermark\",r=!0),t.ended||t.reading?h(\"reading or ended\",r=!1):r&&(h(\"do read\"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=R(n,t))),null===(i=e>0?N(e,t):null)?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&F(this)),null!==i&&this.emit(\"data\",i),i},_.prototype._read=function(e){k(this,new b(\"_read()\"))},_.prototype.pipe=function(e,t){var n=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=e;break;case 1:i.pipes=[i.pipes,e];break;default:i.pipes.push(e)}i.pipesCount+=1,h(\"pipe count=%d opts=%j\",i.pipesCount,t);var o=(!t||!1!==t.end)&&e!==process.stdout&&e!==process.stderr?s:v;function a(t,r){h(\"onunpipe\"),t===n&&r&&!1===r.hasUnpiped&&(r.hasUnpiped=!0,h(\"cleanup\"),e.removeListener(\"close\",d),e.removeListener(\"finish\",p),e.removeListener(\"drain\",u),e.removeListener(\"error\",f),e.removeListener(\"unpipe\",a),n.removeListener(\"end\",s),n.removeListener(\"end\",v),n.removeListener(\"data\",l),c=!0,!i.awaitDrain||e._writableState&&!e._writableState.needDrain||u())}function s(){h(\"onend\"),e.end()}i.endEmitted?process.nextTick(o):n.once(\"end\",o),e.on(\"unpipe\",a);var u=function(e){return function(){var t=e._readableState;h(\"pipeOnDrain\",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&r(e,\"data\")&&(t.flowing=!0,I(e))}}(n);e.on(\"drain\",u);var c=!1;function l(t){h(\"ondata\");var r=e.write(t);h(\"dest.write\",r),!1===r&&((1===i.pipesCount&&i.pipes===e||i.pipesCount>1&&-1!==z(i.pipes,e))&&!c&&(h(\"false write response, pause\",i.awaitDrain),i.awaitDrain++),n.pause())}function f(t){h(\"onerror\",t),v(),e.removeListener(\"error\",f),0===r(e,\"error\")&&k(e,t)}function d(){e.removeListener(\"finish\",p),v()}function p(){h(\"onfinish\"),e.removeListener(\"close\",d),v()}function v(){h(\"unpipe\"),n.unpipe(e)}return n.on(\"data\",l),function(e,t,n){if(\"function\"===typeof e.prependListener)return e.prependListener(t,n);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n)}(e,\"error\",f),e.once(\"close\",d),e.once(\"finish\",p),e.emit(\"pipe\",n),i.flowing||(h(\"pipe resume\"),n.resume()),e},_.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit(\"unpipe\",this,n)),this;if(!e){var i=t.pipes,r=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var o=0;o<r;o++)i[o].emit(\"unpipe\",this,{hasUnpiped:!1});return this}var a=z(t.pipes,e);return-1===a||(t.pipes.splice(a,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit(\"unpipe\",this,n)),this},_.prototype.on=function(e,t){var n=o.prototype.on.call(this,e,t),i=this._readableState;return\"data\"===e?(i.readableListening=this.listenerCount(\"readable\")>0,!1!==i.flowing&&this.resume()):\"readable\"===e&&(i.endEmitted||i.readableListening||(i.readableListening=i.needReadable=!0,i.flowing=!1,i.emittedReadable=!1,h(\"on readable\",i.length,i.reading),i.length?T(this):i.reading||process.nextTick(B,this))),n},_.prototype.addListener=_.prototype.on,_.prototype.removeListener=function(e,t){var n=o.prototype.removeListener.call(this,e,t);return\"readable\"===e&&process.nextTick(L,this),n},_.prototype.removeAllListeners=function(e){var t=o.prototype.removeAllListeners.apply(this,arguments);return\"readable\"!==e&&void 0!==e||process.nextTick(L,this),t},_.prototype.resume=function(){var e=this._readableState;return e.flowing||(h(\"resume\"),e.flowing=!e.readableListening,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,process.nextTick(D,e,t))}(this,e)),e.paused=!1,this},_.prototype.pause=function(){return h(\"call pause flowing=%j\",this._readableState.flowing),!1!==this._readableState.flowing&&(h(\"pause\"),this._readableState.flowing=!1,this.emit(\"pause\")),this._readableState.paused=!0,this},_.prototype.wrap=function(e){var t=this,n=this._readableState,i=!1;for(var r in e.on(\"end\",(function(){if(h(\"wrapped end\"),n.decoder&&!n.ended){var e=n.decoder.end();e&&e.length&&t.push(e)}t.push(null)})),e.on(\"data\",(function(r){(h(\"wrapped data\"),n.decoder&&(r=n.decoder.write(r)),!n.objectMode||null!==r&&void 0!==r)&&((n.objectMode||r&&r.length)&&(t.push(r)||(i=!0,e.pause())))})),e)void 0===this[r]&&\"function\"===typeof e[r]&&(this[r]=function(t){return function(){return e[t].apply(e,arguments)}}(r));for(var o=0;o<C.length;o++)e.on(C[o],this.emit.bind(this,C[o]));return this._read=function(t){h(\"wrapped _read\",t),i&&(i=!1,e.resume())},this},\"function\"===typeof Symbol&&(_.prototype[Symbol.asyncIterator]=function(){return void 0===l&&(l=n(1218)),l(this)}),Object.defineProperty(_.prototype,\"readableHighWaterMark\",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(_.prototype,\"readableBuffer\",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(_.prototype,\"readableFlowing\",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),_._fromList=N,Object.defineProperty(_.prototype,\"readableLength\",{enumerable:!1,get:function(){return this._readableState.length}}),\"function\"===typeof Symbol&&(_.from=function(e,t){return void 0===f&&(f=n(7670)),f(_,e,t)})},4917:function(e,t,n){\"use strict\";e.exports=c;var i=n(1092).q,r=i.ERR_METHOD_NOT_IMPLEMENTED,o=i.ERR_MULTIPLE_CALLBACK,a=i.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=i.ERR_TRANSFORM_WITH_LENGTH_0,h=n(6085);function u(e,t){var n=this._transformState;n.transforming=!1;var i=n.writecb;if(null===i)return this.emit(\"error\",new o);n.writechunk=null,n.writecb=null,null!=t&&this.push(t),i(e);var r=this._readableState;r.reading=!1,(r.needReadable||r.length<r.highWaterMark)&&this._read(r.highWaterMark)}function c(e){if(!(this instanceof c))return new c(e);h.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&(\"function\"===typeof e.transform&&(this._transform=e.transform),\"function\"===typeof e.flush&&(this._flush=e.flush)),this.on(\"prefinish\",l)}function l(){var e=this;\"function\"!==typeof this._flush||this._readableState.destroyed?f(this,null,null):this._flush((function(t,n){f(e,t,n)}))}function f(e,t,n){if(t)return e.emit(\"error\",t);if(null!=n&&e.push(n),e._writableState.length)throw new s;if(e._transformState.transforming)throw new a;return e.push(null)}n(273)(c,h),c.prototype.push=function(e,t){return this._transformState.needTransform=!1,h.prototype.push.call(this,e,t)},c.prototype._transform=function(e,t,n){n(new r(\"_transform()\"))},c.prototype._write=function(e,t,n){var i=this._transformState;if(i.writecb=n,i.writechunk=e,i.writeencoding=t,!i.transforming){var r=this._readableState;(i.needTransform||r.needReadable||r.length<r.highWaterMark)&&this._read(r.highWaterMark)}},c.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},c.prototype._destroy=function(e,t){h.prototype._destroy.call(this,e,(function(e){t(e)}))}},7423:function(e,t,n){\"use strict\";function i(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,n){var i=e.entry;e.entry=null;for(;i;){var r=i.callback;t.pendingcb--,r(n),i=i.next}t.corkedRequestsFree.next=e}(t,e)}}var r;e.exports=_,_.WritableState=S;var o={deprecate:n(9043)},a=n(8747),s=n(918).Buffer,h=n.g.Uint8Array||function(){};var u,c=n(6617),l=n(5999).getHighWaterMark,f=n(1092).q,d=f.ERR_INVALID_ARG_TYPE,p=f.ERR_METHOD_NOT_IMPLEMENTED,v=f.ERR_MULTIPLE_CALLBACK,g=f.ERR_STREAM_CANNOT_PIPE,m=f.ERR_STREAM_DESTROYED,y=f.ERR_STREAM_NULL_VALUES,b=f.ERR_STREAM_WRITE_AFTER_END,w=f.ERR_UNKNOWN_ENCODING,k=c.errorOrDestroy;function C(){}function S(e,t,o){r=r||n(6085),e=e||{},\"boolean\"!==typeof o&&(o=t instanceof r),this.objectMode=!!e.objectMode,o&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=l(this,e,\"writableHighWaterMark\",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||\"utf8\",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var n=e._writableState,i=n.sync,r=n.writecb;if(\"function\"!==typeof r)throw new v;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(n),t)!function(e,t,n,i,r){--t.pendingcb,n?(process.nextTick(r,i),process.nextTick(A,e,t),e._writableState.errorEmitted=!0,k(e,i)):(r(i),e._writableState.errorEmitted=!0,k(e,i),A(e,t))}(e,n,i,t,r);else{var o=R(n)||e.destroyed;o||n.corked||n.bufferProcessing||!n.bufferedRequest||P(e,n),i?process.nextTick(M,e,n,o,r):M(e,n,o,r)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new i(this)}function _(e){var t=this instanceof(r=r||n(6085));if(!t&&!u.call(_,this))return new _(e);this._writableState=new S(e,this,t),this.writable=!0,e&&(\"function\"===typeof e.write&&(this._write=e.write),\"function\"===typeof e.writev&&(this._writev=e.writev),\"function\"===typeof e.destroy&&(this._destroy=e.destroy),\"function\"===typeof e.final&&(this._final=e.final)),a.call(this)}function x(e,t,n,i,r,o,a){t.writelen=i,t.writecb=a,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new m(\"write\")):n?e._writev(r,t.onwrite):e._write(r,o,t.onwrite),t.sync=!1}function M(e,t,n,i){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit(\"drain\"))}(e,t),t.pendingcb--,i(),A(e,t)}function P(e,t){t.bufferProcessing=!0;var n=t.bufferedRequest;if(e._writev&&n&&n.next){var r=t.bufferedRequestCount,o=new Array(r),a=t.corkedRequestsFree;a.entry=n;for(var s=0,h=!0;n;)o[s]=n,n.isBuf||(h=!1),n=n.next,s+=1;o.allBuffers=h,x(e,t,!0,t.length,o,\"\",a.finish),t.pendingcb++,t.lastBufferedRequest=null,a.next?(t.corkedRequestsFree=a.next,a.next=null):t.corkedRequestsFree=new i(t),t.bufferedRequestCount=0}else{for(;n;){var u=n.chunk,c=n.encoding,l=n.callback;if(x(e,t,!1,t.objectMode?1:u.length,u,c,l),n=n.next,t.bufferedRequestCount--,t.writing)break}null===n&&(t.lastBufferedRequest=null)}t.bufferedRequest=n,t.bufferProcessing=!1}function R(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function T(e,t){e._final((function(n){t.pendingcb--,n&&k(e,n),t.prefinished=!0,e.emit(\"prefinish\"),A(e,t)}))}function A(e,t){var n=R(t);if(n&&(function(e,t){t.prefinished||t.finalCalled||(\"function\"!==typeof e._final||t.destroyed?(t.prefinished=!0,e.emit(\"prefinish\")):(t.pendingcb++,t.finalCalled=!0,process.nextTick(T,e,t)))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit(\"finish\"),t.autoDestroy))){var i=e._readableState;(!i||i.autoDestroy&&i.endEmitted)&&e.destroy()}return n}n(273)(_,a),S.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(S.prototype,\"buffer\",{get:o.deprecate((function(){return this.getBuffer()}),\"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.\",\"DEP0003\")})}catch(e){}}(),\"function\"===typeof Symbol&&Symbol.hasInstance&&\"function\"===typeof Function.prototype[Symbol.hasInstance]?(u=Function.prototype[Symbol.hasInstance],Object.defineProperty(_,Symbol.hasInstance,{value:function(e){return!!u.call(this,e)||this===_&&(e&&e._writableState instanceof S)}})):u=function(e){return e instanceof this},_.prototype.pipe=function(){k(this,new g)},_.prototype.write=function(e,t,n){var i,r=this._writableState,o=!1,a=!r.objectMode&&(i=e,s.isBuffer(i)||i instanceof h);return a&&!s.isBuffer(e)&&(e=function(e){return s.from(e)}(e)),\"function\"===typeof t&&(n=t,t=null),a?t=\"buffer\":t||(t=r.defaultEncoding),\"function\"!==typeof n&&(n=C),r.ending?function(e,t){var n=new b;k(e,n),process.nextTick(t,n)}(this,n):(a||function(e,t,n,i){var r;return null===n?r=new y:\"string\"===typeof n||t.objectMode||(r=new d(\"chunk\",[\"string\",\"Buffer\"],n)),!r||(k(e,r),process.nextTick(i,r),!1)}(this,r,e,n))&&(r.pendingcb++,o=function(e,t,n,i,r,o){if(!n){var a=function(e,t,n){e.objectMode||!1===e.decodeStrings||\"string\"!==typeof t||(t=s.from(t,n));return t}(t,i,r);i!==a&&(n=!0,r=\"buffer\",i=a)}var h=t.objectMode?1:i.length;t.length+=h;var u=t.length<t.highWaterMark;u||(t.needDrain=!0);if(t.writing||t.corked){var c=t.lastBufferedRequest;t.lastBufferedRequest={chunk:i,encoding:r,isBuf:n,callback:o,next:null},c?c.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else x(e,t,!1,h,i,r,o);return u}(this,r,a,e,t,n)),o},_.prototype.cork=function(){this._writableState.corked++},_.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||P(this,e))},_.prototype.setDefaultEncoding=function(e){if(\"string\"===typeof e&&(e=e.toLowerCase()),!([\"hex\",\"utf8\",\"utf-8\",\"ascii\",\"binary\",\"base64\",\"ucs2\",\"ucs-2\",\"utf16le\",\"utf-16le\",\"raw\"].indexOf((e+\"\").toLowerCase())>-1))throw new w(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(_.prototype,\"writableBuffer\",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(_.prototype,\"writableHighWaterMark\",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),_.prototype._write=function(e,t,n){n(new p(\"_write()\"))},_.prototype._writev=null,_.prototype.end=function(e,t,n){var i=this._writableState;return\"function\"===typeof e?(n=e,e=null,t=null):\"function\"===typeof t&&(n=t,t=null),null!==e&&void 0!==e&&this.write(e,t),i.corked&&(i.corked=1,this.uncork()),i.ending||function(e,t,n){t.ending=!0,A(e,t),n&&(t.finished?process.nextTick(n):e.once(\"finish\",n));t.ended=!0,e.writable=!1}(this,i,n),this},Object.defineProperty(_.prototype,\"writableLength\",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(_.prototype,\"destroyed\",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),_.prototype.destroy=c.destroy,_.prototype._undestroy=c.undestroy,_.prototype._destroy=function(e,t){t(e)}},1218:function(e,t,n){\"use strict\";var i;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(4297),a=Symbol(\"lastResolve\"),s=Symbol(\"lastReject\"),h=Symbol(\"error\"),u=Symbol(\"ended\"),c=Symbol(\"lastPromise\"),l=Symbol(\"handlePromise\"),f=Symbol(\"stream\");function d(e,t){return{value:e,done:t}}function p(e){var t=e[a];if(null!==t){var n=e[f].read();null!==n&&(e[c]=null,e[a]=null,e[s]=null,t(d(n,!1)))}}function v(e){process.nextTick(p,e)}var g=Object.getPrototypeOf((function(){})),m=Object.setPrototypeOf((r(i={get stream(){return this[f]},next:function(){var e=this,t=this[h];if(null!==t)return Promise.reject(t);if(this[u])return Promise.resolve(d(void 0,!0));if(this[f].destroyed)return new Promise((function(t,n){process.nextTick((function(){e[h]?n(e[h]):t(d(void 0,!0))}))}));var n,i=this[c];if(i)n=new Promise(function(e,t){return function(n,i){e.then((function(){t[u]?n(d(void 0,!0)):t[l](n,i)}),i)}}(i,this));else{var r=this[f].read();if(null!==r)return Promise.resolve(d(r,!1));n=new Promise(this[l])}return this[c]=n,n}},Symbol.asyncIterator,(function(){return this})),r(i,\"return\",(function(){var e=this;return new Promise((function(t,n){e[f].destroy(null,(function(e){e?n(e):t(d(void 0,!0))}))}))})),i),g);e.exports=function(e){var t,n=Object.create(m,(r(t={},f,{value:e,writable:!0}),r(t,a,{value:null,writable:!0}),r(t,s,{value:null,writable:!0}),r(t,h,{value:null,writable:!0}),r(t,u,{value:e._readableState.endEmitted,writable:!0}),r(t,l,{value:function(e,t){var i=n[f].read();i?(n[c]=null,n[a]=null,n[s]=null,e(d(i,!1))):(n[a]=e,n[s]=t)},writable:!0}),t));return n[c]=null,o(e,(function(e){if(e&&\"ERR_STREAM_PREMATURE_CLOSE\"!==e.code){var t=n[s];return null!==t&&(n[c]=null,n[a]=null,n[s]=null,t(e)),void(n[h]=e)}var i=n[a];null!==i&&(n[c]=null,n[a]=null,n[s]=null,i(d(void 0,!0))),n[u]=!0})),e.on(\"readable\",v.bind(null,n)),n}},5489:function(e,t,n){\"use strict\";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=n(918).Buffer,s=n(2361).inspect,h=s&&s.custom||\"inspect\";e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.head=null,this.tail=null,this.length=0}var t,n,u;return t=e,n=[{key:\"push\",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:\"unshift\",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:\"shift\",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:\"clear\",value:function(){this.head=this.tail=null,this.length=0}},{key:\"join\",value:function(e){if(0===this.length)return\"\";for(var t=this.head,n=\"\"+t.data;t=t.next;)n+=e+t.data;return n}},{key:\"concat\",value:function(e){if(0===this.length)return a.alloc(0);for(var t,n,i,r=a.allocUnsafe(e>>>0),o=this.head,s=0;o;)t=o.data,n=r,i=s,a.prototype.copy.call(t,n,i),s+=o.data.length,o=o.next;return r}},{key:\"consume\",value:function(e,t){var n;return e<this.head.data.length?(n=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):n=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),n}},{key:\"first\",value:function(){return this.head.data}},{key:\"_getString\",value:function(e){var t=this.head,n=1,i=t.data;for(e-=i.length;t=t.next;){var r=t.data,o=e>r.length?r.length:e;if(o===r.length?i+=r:i+=r.slice(0,e),0===(e-=o)){o===r.length?(++n,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=r.slice(o));break}++n}return this.length-=n,i}},{key:\"_getBuffer\",value:function(e){var t=a.allocUnsafe(e),n=this.head,i=1;for(n.data.copy(t),e-=n.data.length;n=n.next;){var r=n.data,o=e>r.length?r.length:e;if(r.copy(t,t.length-e,0,o),0===(e-=o)){o===r.length?(++i,n.next?this.head=n.next:this.head=this.tail=null):(this.head=n,n.data=r.slice(o));break}++i}return this.length-=i,t}},{key:h,value:function(e,t){return s(this,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{depth:0,customInspect:!1}))}}],n&&o(t.prototype,n),u&&o(t,u),e}()},6617:function(e){\"use strict\";function t(e,t){i(e,t),n(e)}function n(e){e._writableState&&!e._writableState.emitClose||e._readableState&&!e._readableState.emitClose||e.emit(\"close\")}function i(e,t){e.emit(\"error\",t)}e.exports={destroy:function(e,r){var o=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return a||s?(r?r(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(i,this,e)):process.nextTick(i,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,(function(e){!r&&e?o._writableState?o._writableState.errorEmitted?process.nextTick(n,o):(o._writableState.errorEmitted=!0,process.nextTick(t,o,e)):process.nextTick(t,o,e):r?(process.nextTick(n,o),r(e)):process.nextTick(n,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){var n=e._readableState,i=e._writableState;n&&n.autoDestroy||i&&i.autoDestroy?e.destroy(t):e.emit(\"error\",t)}}},4297:function(e,t,n){\"use strict\";var i=n(1092).q.ERR_STREAM_PREMATURE_CLOSE;function r(){}e.exports=function e(t,n,o){if(\"function\"===typeof n)return e(t,null,n);n||(n={}),o=function(e){var t=!1;return function(){if(!t){t=!0;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e.apply(this,i)}}}(o||r);var a=n.readable||!1!==n.readable&&t.readable,s=n.writable||!1!==n.writable&&t.writable,h=function(){t.writable||c()},u=t._writableState&&t._writableState.finished,c=function(){s=!1,u=!0,a||o.call(t)},l=t._readableState&&t._readableState.endEmitted,f=function(){a=!1,l=!0,s||o.call(t)},d=function(e){o.call(t,e)},p=function(){var e;return a&&!l?(t._readableState&&t._readableState.ended||(e=new i),o.call(t,e)):s&&!u?(t._writableState&&t._writableState.ended||(e=new i),o.call(t,e)):void 0},v=function(){t.req.on(\"finish\",c)};return!function(e){return e.setHeader&&\"function\"===typeof e.abort}(t)?s&&!t._writableState&&(t.on(\"end\",h),t.on(\"close\",h)):(t.on(\"complete\",c),t.on(\"abort\",p),t.req?v():t.on(\"request\",v)),t.on(\"end\",f),t.on(\"finish\",c),!1!==n.error&&t.on(\"error\",d),t.on(\"close\",p),function(){t.removeListener(\"complete\",c),t.removeListener(\"abort\",p),t.removeListener(\"request\",v),t.req&&t.req.removeListener(\"finish\",c),t.removeListener(\"end\",h),t.removeListener(\"close\",h),t.removeListener(\"finish\",c),t.removeListener(\"end\",f),t.removeListener(\"error\",d),t.removeListener(\"close\",p)}}},7670:function(e){e.exports=function(){throw new Error(\"Readable.from is not available in the browser\")}},6545:function(e,t,n){\"use strict\";var i;var r=n(1092).q,o=r.ERR_MISSING_ARGS,a=r.ERR_STREAM_DESTROYED;function s(e){if(e)throw e}function h(e,t,r,o){o=function(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments))}}(o);var s=!1;e.on(\"close\",(function(){s=!0})),void 0===i&&(i=n(4297)),i(e,{readable:t,writable:r},(function(e){if(e)return o(e);s=!0,o()}));var h=!1;return function(t){if(!s&&!h)return h=!0,function(e){return e.setHeader&&\"function\"===typeof e.abort}(e)?e.abort():\"function\"===typeof e.destroy?e.destroy():void o(t||new a(\"pipe\"))}}function u(e){e()}function c(e,t){return e.pipe(t)}function l(e){return e.length?\"function\"!==typeof e[e.length-1]?s:e.pop():s}e.exports=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i,r=l(t);if(Array.isArray(t[0])&&(t=t[0]),t.length<2)throw new o(\"streams\");var a=t.map((function(e,n){var o=n<t.length-1;return h(e,o,n>0,(function(e){i||(i=e),e&&a.forEach(u),o||(a.forEach(u),r(i))}))}));return t.reduce(c)}},5999:function(e,t,n){\"use strict\";var i=n(1092).q.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,n,r){var o=function(e,t,n){return null!=e.highWaterMark?e.highWaterMark:t?e[n]:null}(t,r,n);if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new i(r?n:\"highWaterMark\",o);return Math.floor(o)}return e.objectMode?16:16384}}},8747:function(e,t,n){e.exports=n(8041).EventEmitter},1881:function(e,t,n){(t=e.exports=n(6405)).Stream=t,t.Readable=t,t.Writable=n(7423),t.Duplex=n(6085),t.Transform=n(4917),t.PassThrough=n(9543),t.finished=n(4297),t.pipeline=n(6545)},5734:function(e,t,n){var i=n(918),r=i.Buffer;function o(e,t){for(var n in e)t[n]=e[n]}function a(e,t,n){return r(e,t,n)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?e.exports=i:(o(i,t),t.Buffer=a),o(r,a),a.from=function(e,t,n){if(\"number\"===typeof e)throw new TypeError(\"Argument must not be a number\");return r(e,t,n)},a.alloc=function(e,t,n){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");var i=r(e);return void 0!==t?\"string\"===typeof n?i.fill(t,n):i.fill(t):i.fill(0),i},a.allocUnsafe=function(e){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");return r(e)},a.allocUnsafeSlow=function(e){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");return i.SlowBuffer(e)}},8570:function(e,t,n){\"use strict\";var i=n(9857).Buffer,r=i.isEncoding||function(e){switch((e=\"\"+e)&&e.toLowerCase()){case\"hex\":case\"utf8\":case\"utf-8\":case\"ascii\":case\"binary\":case\"base64\":case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":case\"raw\":return!0;default:return!1}};function o(e){var t;switch(this.encoding=function(e){var t=function(e){if(!e)return\"utf8\";for(var t;;)switch(e){case\"utf8\":case\"utf-8\":return\"utf8\";case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return\"utf16le\";case\"latin1\":case\"binary\":return\"latin1\";case\"base64\":case\"ascii\":case\"hex\":return e;default:if(t)return;e=(\"\"+e).toLowerCase(),t=!0}}(e);if(\"string\"!==typeof t&&(i.isEncoding===r||!r(e)))throw new Error(\"Unknown encoding: \"+e);return t||e}(e),this.encoding){case\"utf16le\":this.text=h,this.end=u,t=4;break;case\"utf8\":this.fillLast=s,t=4;break;case\"base64\":this.text=c,this.end=l,t=3;break;default:return this.write=f,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(t)}function a(e){return e<=127?0:e>>5===6?2:e>>4===14?3:e>>3===30?4:e>>6===2?-1:-2}function s(e){var t=this.lastTotal-this.lastNeed,n=function(e,t,n){if(128!==(192&t[0]))return e.lastNeed=0,\"\\ufffd\";if(e.lastNeed>1&&t.length>1){if(128!==(192&t[1]))return e.lastNeed=1,\"\\ufffd\";if(e.lastNeed>2&&t.length>2&&128!==(192&t[2]))return e.lastNeed=2,\"\\ufffd\"}}(this,e);return void 0!==n?n:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function h(e,t){if((e.length-t)%2===0){var n=e.toString(\"utf16le\",t);if(n){var i=n.charCodeAt(n.length-1);if(i>=55296&&i<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString(\"utf16le\",t,e.length-1)}function u(e){var t=e&&e.length?this.write(e):\"\";if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return t+this.lastChar.toString(\"utf16le\",0,n)}return t}function c(e,t){var n=(e.length-t)%3;return 0===n?e.toString(\"base64\",t):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString(\"base64\",t,e.length-n))}function l(e){var t=e&&e.length?this.write(e):\"\";return this.lastNeed?t+this.lastChar.toString(\"base64\",0,3-this.lastNeed):t}function f(e){return e.toString(this.encoding)}function d(e){return e&&e.length?this.write(e):\"\"}t.s=o,o.prototype.write=function(e){if(0===e.length)return\"\";var t,n;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return\"\";n=this.lastNeed,this.lastNeed=0}else n=0;return n<e.length?t?t+this.text(e,n):this.text(e,n):t||\"\"},o.prototype.end=function(e){var t=e&&e.length?this.write(e):\"\";return this.lastNeed?t+\"\\ufffd\":t},o.prototype.text=function(e,t){var n=function(e,t,n){var i=t.length-1;if(i<n)return 0;var r=a(t[i]);if(r>=0)return r>0&&(e.lastNeed=r-1),r;if(--i<n||-2===r)return 0;if((r=a(t[i]))>=0)return r>0&&(e.lastNeed=r-2),r;if(--i<n||-2===r)return 0;if((r=a(t[i]))>=0)return r>0&&(2===r?r=0:e.lastNeed=r-3),r;return 0}(this,e,t);if(!this.lastNeed)return e.toString(\"utf8\",t);this.lastTotal=n;var i=e.length-(n-this.lastNeed);return e.copy(this.lastChar,0,i),e.toString(\"utf8\",t,i)},o.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},9857:function(e,t,n){var i=n(918),r=i.Buffer;function o(e,t){for(var n in e)t[n]=e[n]}function a(e,t,n){return r(e,t,n)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?e.exports=i:(o(i,t),t.Buffer=a),a.prototype=Object.create(r.prototype),o(r,a),a.from=function(e,t,n){if(\"number\"===typeof e)throw new TypeError(\"Argument must not be a number\");return r(e,t,n)},a.alloc=function(e,t,n){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");var i=r(e);return void 0!==t?\"string\"===typeof n?i.fill(t,n):i.fill(t):i.fill(0),i},a.allocUnsafe=function(e){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");return r(e)},a.allocUnsafeSlow=function(e){if(\"number\"!==typeof e)throw new TypeError(\"Argument must be a number\");return i.SlowBuffer(e)}},9043:function(e,t,n){function i(e){try{if(!n.g.localStorage)return!1}catch(i){return!1}var t=n.g.localStorage[e];return null!=t&&\"true\"===String(t).toLowerCase()}e.exports=function(e,t){if(i(\"noDeprecation\"))return e;var n=!1;return function(){if(!n){if(i(\"throwDeprecation\"))throw new Error(t);i(\"traceDeprecation\")?console.trace(t):console.warn(t),n=!0}return e.apply(this,arguments)}}},5882:function(e,t,n){var i=n(3895);function r(e){for(var t,n,r=0,o=e.length,a=0;a<e.length;){for(t=e[a],n=0;a<o&&e[a]===t;)++a,++n;r+=i.log2(n)/7|0,r+=i.log2(t>>>0)/7|0,r+=2}return r}t.size=r,t.encode=function(e,t){t||(t=new Uint8Array(r(e)));for(var n,i,o=0,a=t.length,s=0;s<e.length;){for(n=e[s],i=0;s<e.length&&e[s]===n;)++s,++i;for(;o<a&&i>=128;)t[o++]=128+(127&i),i>>>=7;if(o>=a)throw new Error(\"RLE buffer overflow\");for(t[o++]=i,n>>>=0;o<a&&n>=128;)t[o++]=128+(127&n),n>>>=7;if(o>=a)throw new Error(\"RLE buffer overflow\");t[o++]=n}return t},t.decode=function(e,t){for(var n,i,r,o,a=t.length,s=e.length,h=0,u=0;u<s;){for(n=0,i=0;u<s&&e[u]>=128;)n+=(127&e[u++])<<i,i+=7;if(n+=e[u++]<<i,u>=s)throw new Error(\"RLE buffer underrun\");if(h+n>a)throw new Error(\"Chunk buffer overflow\");for(r=0,i=0;u<s&&e[u]>=128;)r+=(127&e[u++])<<i,i+=7;if(u>=s)throw new Error(\"RLE buffer underrun\");for(r+=e[u++]<<i,o=0;o<n;++o)t[h++]=r}return t}},3895:function(e,t){\"use strict\";function n(e){var t=32;return(e&=-e)&&t--,65535&e&&(t-=16),16711935&e&&(t-=8),252645135&e&&(t-=4),858993459&e&&(t-=2),1431655765&e&&(t-=1),t}t.INT_BITS=32,t.INT_MAX=2147483647,t.INT_MIN=-1<<31,t.sign=function(e){return(e>0)-(e<0)},t.abs=function(e){var t=e>>31;return(e^t)-t},t.min=function(e,t){return t^(e^t)&-(e<t)},t.max=function(e,t){return e^(e^t)&-(e<t)},t.isPow2=function(e){return!(e&e-1)&&!!e},t.log2=function(e){var t,n;return t=(e>65535)<<4,t|=n=((e>>>=t)>255)<<3,t|=n=((e>>>=n)>15)<<2,(t|=n=((e>>>=n)>3)<<1)|(e>>>=n)>>1},t.log10=function(e){return e>=1e9?9:e>=1e8?8:e>=1e7?7:e>=1e6?6:e>=1e5?5:e>=1e4?4:e>=1e3?3:e>=100?2:e>=10?1:0},t.popCount=function(e){return 16843009*((e=(858993459&(e-=e>>>1&1431655765))+(e>>>2&858993459))+(e>>>4)&252645135)>>>24},t.countTrailingZeros=n,t.nextPow2=function(e){return e+=0===e,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,(e|=e>>>16)+1},t.prevPow2=function(e){return e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,(e|=e>>>16)-(e>>>1)},t.parity=function(e){return e^=e>>>16,e^=e>>>8,e^=e>>>4,27030>>>(e&=15)&1};var i=new Array(256);!function(e){for(var t=0;t<256;++t){var n=t,i=t,r=7;for(n>>>=1;n;n>>>=1)i<<=1,i|=1&n,--r;e[t]=i<<r&255}}(i),t.reverse=function(e){return i[255&e]<<24|i[e>>>8&255]<<16|i[e>>>16&255]<<8|i[e>>>24&255]},t.interleave2=function(e,t){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e&=65535)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t&=65535)|t<<8))|t<<4))|t<<2))|t<<1))<<1},t.deinterleave2=function(e,t){return(e=65535&((e=16711935&((e=252645135&((e=858993459&((e=e>>>t&1431655765)|e>>>1))|e>>>2))|e>>>4))|e>>>16))<<16>>16},t.interleave3=function(e,t,n){return e=1227133513&((e=3272356035&((e=251719695&((e=4278190335&((e&=1023)|e<<16))|e<<8))|e<<4))|e<<2),(e|=(t=1227133513&((t=3272356035&((t=251719695&((t=4278190335&((t&=1023)|t<<16))|t<<8))|t<<4))|t<<2))<<1)|(n=1227133513&((n=3272356035&((n=251719695&((n=4278190335&((n&=1023)|n<<16))|n<<8))|n<<4))|n<<2))<<2},t.deinterleave3=function(e,t){return(e=1023&((e=4278190335&((e=251719695&((e=3272356035&((e=e>>>t&1227133513)|e>>>2))|e>>>4))|e>>>8))|e>>>16))<<22>>22},t.nextCombination=function(e){var t=e|e-1;return t+1|(~t&-~t)-1>>>n(e)+1}},2361:function(){},4616:function(){},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i},e.exports.__esModule=!0,e.exports.default=e.exports},5372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,n){var i=n(3897);e.exports=function(e){if(Array.isArray(e))return i(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e){function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,\"prototype\",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},4704:function(e,t,n){var i=n(6116);e.exports=function(e,t){var n=\"undefined\"!==typeof Symbol&&e[Symbol.iterator]||e[\"@@iterator\"];if(!n){if(Array.isArray(e)||(n=i(e))||t&&e&&\"number\"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}var a,s=!0,h=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){h=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(h)throw a}}}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if(\"undefined\"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e[\"@@iterator\"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8872:function(e){e.exports=function(e,t){var n=null==e?null:\"undefined\"!==typeof Symbol&&e[Symbol.iterator]||e[\"@@iterator\"];if(null!=n){var i,r,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(h){s=!0,r=h}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},2218:function(e){e.exports=function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")},e.exports.__esModule=!0,e.exports.default=e.exports},7061:function(e,t,n){var i=n(8698).default;function r(){\"use strict\";e.exports=r=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,o=n.hasOwnProperty,a=\"function\"==typeof Symbol?Symbol:{},s=a.iterator||\"@@iterator\",h=a.asyncIterator||\"@@asyncIterator\",u=a.toStringTag||\"@@toStringTag\";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},\"\")}catch(T){c=function(e,t,n){return e[t]=n}}function l(e,t,n,i){var r=t&&t.prototype instanceof p?t:p,o=Object.create(r.prototype),a=new M(i||[]);return o._invoke=function(e,t,n){var i=\"suspendedStart\";return function(r,o){if(\"executing\"===i)throw new Error(\"Generator is already running\");if(\"completed\"===i){if(\"throw\"===r)throw o;return R()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===d)continue;return s}}if(\"next\"===n.method)n.sent=n._sent=n.arg;else if(\"throw\"===n.method){if(\"suspendedStart\"===i)throw i=\"completed\",n.arg;n.dispatchException(n.arg)}else\"return\"===n.method&&n.abrupt(\"return\",n.arg);i=\"executing\";var h=f(e,t,n);if(\"normal\"===h.type){if(i=n.done?\"completed\":\"suspendedYield\",h.arg===d)continue;return{value:h.arg,done:n.done}}\"throw\"===h.type&&(i=\"completed\",n.method=\"throw\",n.arg=h.arg)}}}(e,n,a),o}function f(e,t,n){try{return{type:\"normal\",arg:e.call(t,n)}}catch(T){return{type:\"throw\",arg:T}}}t.wrap=l;var d={};function p(){}function v(){}function g(){}var m={};c(m,s,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(P([])));b&&b!==n&&o.call(b,s)&&(m=b);var w=g.prototype=p.prototype=Object.create(m);function k(e){[\"next\",\"throw\",\"return\"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(r,a,s,h){var u=f(e[r],e,a);if(\"throw\"!==u.type){var c=u.arg,l=c.value;return l&&\"object\"==i(l)&&o.call(l,\"__await\")?t.resolve(l.__await).then((function(e){n(\"next\",e,s,h)}),(function(e){n(\"throw\",e,s,h)})):t.resolve(l).then((function(e){c.value=e,s(c)}),(function(e){return n(\"throw\",e,s,h)}))}h(u.arg)}var r;this._invoke=function(e,i){function o(){return new t((function(t,r){n(e,i,t,r)}))}return r=r?r.then(o,o):o()}}function S(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,\"throw\"===t.method){if(e.iterator.return&&(t.method=\"return\",t.arg=void 0,S(e,t),\"throw\"===t.method))return d;t.method=\"throw\",t.arg=new TypeError(\"The iterator does not provide a 'throw' method\")}return d}var i=f(n,e.iterator,t.arg);if(\"throw\"===i.type)return t.method=\"throw\",t.arg=i.arg,t.delegate=null,d;var r=i.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,\"return\"!==t.method&&(t.method=\"next\",t.arg=void 0),t.delegate=null,d):r:(t.method=\"throw\",t.arg=new TypeError(\"iterator result is not an object\"),t.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type=\"normal\",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:\"root\"}],e.forEach(_,this),this.reset(!0)}function P(e){if(e){var t=e[s];if(t)return t.call(e);if(\"function\"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:R}}function R(){return{value:void 0,done:!0}}return v.prototype=g,c(w,\"constructor\",g),c(g,\"constructor\",v),v.displayName=c(g,u,\"GeneratorFunction\"),t.isGeneratorFunction=function(e){var t=\"function\"==typeof e&&e.constructor;return!!t&&(t===v||\"GeneratorFunction\"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,u,\"GeneratorFunction\")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},k(C.prototype),c(C.prototype,h,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new C(l(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(w),c(w,u,\"Generator\"),c(w,s,(function(){return this})),c(w,\"toString\",(function(){return\"[object Generator]\"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=P,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method=\"next\",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)\"t\"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(\"throw\"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return a.type=\"throw\",a.arg=e,t.next=n,i&&(t.method=\"next\",t.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],a=r.completion;if(\"root\"===r.tryLoc)return n(\"end\");if(r.tryLoc<=this.prev){var s=o.call(r,\"catchLoc\"),h=o.call(r,\"finallyLoc\");if(s&&h){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!h)throw new Error(\"try statement without catch or finally\");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&o.call(i,\"finallyLoc\")&&this.prev<i.finallyLoc){var r=i;break}}r&&(\"break\"===e||\"continue\"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=t,r?(this.method=\"next\",this.next=r.finallyLoc,d):this.complete(a)},complete:function(e,t){if(\"throw\"===e.type)throw e.arg;return\"break\"===e.type||\"continue\"===e.type?this.next=e.arg:\"return\"===e.type?(this.rval=this.arg=e.arg,this.method=\"return\",this.next=\"end\"):\"normal\"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if(\"throw\"===i.type){var r=i.arg;x(n)}return r}}throw new Error(\"illegal catch attempt\")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},\"next\"===this.method&&(this.arg=void 0),d}},t}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},7424:function(e,t,n){var i=n(5372),r=n(8872),o=n(6116),a=n(2218);e.exports=function(e,t){return i(e)||r(e,t)||o(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var i=n(3405),r=n(9498),o=n(6116),a=n(2281);e.exports=function(e){return i(e)||r(e)||o(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var i=n(3897);e.exports=function(e,t){if(e){if(\"string\"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return\"Object\"===n&&e.constructor&&(n=e.constructor.name),\"Map\"===n||\"Set\"===n?Array.from(e):\"Arguments\"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,n){var i=n(7061)();e.exports=i;try{regeneratorRuntime=i}catch(r){\"object\"===typeof globalThis?globalThis.regeneratorRuntime=i:Function(\"r\",\"regeneratorRuntime = r\")(i)}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if(\"object\"===typeof globalThis)return globalThis;try{return this||new Function(\"return this\")()}catch(e){if(\"object\"===typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){\"use strict\";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function t(t,n){if(t){if(\"string\"===typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return\"Object\"===i&&t.constructor&&(i=t.constructor.name),\"Map\"===i||\"Set\"===i?Array.from(t):\"Arguments\"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:\"undefined\"!==typeof Symbol&&e[Symbol.iterator]||e[\"@@iterator\"];if(null!=n){var i,r,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(h){s=!0,r=h}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return o}}(e,n)||t(e,n)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function r(e,n){var i=\"undefined\"!==typeof Symbol&&e[Symbol.iterator]||e[\"@@iterator\"];if(!i){if(Array.isArray(e)||(i=t(e))||n&&e&&\"number\"===typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}var a,s=!0,h=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){h=!0,a=e},f:function(){try{s||null==i.return||i.return()}finally{if(h)throw a}}}}function o(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,\"prototype\",{writable:!1}),e}function h(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if(\"undefined\"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e[\"@@iterator\"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}var u=.5*(Math.sqrt(3)-1),c=(3-Math.sqrt(3))/6,l=1/6,f=(Math.sqrt(5)-1)/4,d=(5-Math.sqrt(5))/20,p=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),v=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random;o(this,e);var n=\"function\"==typeof t?t:b(t);this.p=y(n),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var i=0;i<512;i++)this.perm[i]=this.p[255&i],this.permMod12[i]=this.perm[i]%12}return s(e,[{key:\"noise2D\",value:function(e,t){var n,i,r=this.permMod12,o=this.perm,a=0,s=0,h=0,l=(e+t)*u,f=Math.floor(e+l),d=Math.floor(t+l),v=(f+d)*c,g=e-(f-v),m=t-(d-v);g>m?(n=1,i=0):(n=0,i=1);var y=g-n+c,b=m-i+c,w=g-1+2*c,k=m-1+2*c,C=255&f,S=255&d,_=.5-g*g-m*m;if(_>=0){var x=3*r[C+o[S]];a=(_*=_)*_*(p[x]*g+p[x+1]*m)}var M=.5-y*y-b*b;if(M>=0){var P=3*r[C+n+o[S+i]];s=(M*=M)*M*(p[P]*y+p[P+1]*b)}var R=.5-w*w-k*k;if(R>=0){var T=3*r[C+1+o[S+1]];h=(R*=R)*R*(p[T]*w+p[T+1]*k)}return 70*(a+s+h)}},{key:\"noise3D\",value:function(e,t,n){var i,r,o,a,s,h,u,c,f,d,v=this.permMod12,g=this.perm,m=.3333333333333333*(e+t+n),y=Math.floor(e+m),b=Math.floor(t+m),w=Math.floor(n+m),k=(y+b+w)*l,C=e-(y-k),S=t-(b-k),_=n-(w-k);C>=S?S>=_?(s=1,h=0,u=0,c=1,f=1,d=0):C>=_?(s=1,h=0,u=0,c=1,f=0,d=1):(s=0,h=0,u=1,c=1,f=0,d=1):S<_?(s=0,h=0,u=1,c=0,f=1,d=1):C<_?(s=0,h=1,u=0,c=0,f=1,d=1):(s=0,h=1,u=0,c=1,f=1,d=0);var x=C-s+l,M=S-h+l,P=_-u+l,R=C-c+2*l,T=S-f+2*l,A=_-d+2*l,E=C-1+.5,O=S-1+.5,L=_-1+.5,B=255&y,D=255&b,I=255&w,N=.6-C*C-S*S-_*_;if(N<0)i=0;else{var F=3*v[B+g[D+g[I]]];i=(N*=N)*N*(p[F]*C+p[F+1]*S+p[F+2]*_)}var j=.6-x*x-M*M-P*P;if(j<0)r=0;else{var z=3*v[B+s+g[D+h+g[I+u]]];r=(j*=j)*j*(p[z]*x+p[z+1]*M+p[z+2]*P)}var H=.6-R*R-T*T-A*A;if(H<0)o=0;else{var q=3*v[B+c+g[D+f+g[I+d]]];o=(H*=H)*H*(p[q]*R+p[q+1]*T+p[q+2]*A)}var U=.6-E*E-O*O-L*L;if(U<0)a=0;else{var G=3*v[B+1+g[D+1+g[I+1]]];a=(U*=U)*U*(p[G]*E+p[G+1]*O+p[G+2]*L)}return 32*(i+r+o+a)}},{key:\"noise4D\",value:function(e,t,n,i){var r,o,a,s,h,u=this.perm,c=(e+t+n+i)*f,l=Math.floor(e+c),p=Math.floor(t+c),g=Math.floor(n+c),m=Math.floor(i+c),y=(l+p+g+m)*d,b=e-(l-y),w=t-(p-y),k=n-(g-y),C=i-(m-y),S=0,_=0,x=0,M=0;b>w?S++:_++,b>k?S++:x++,b>C?S++:M++,w>k?_++:x++,w>C?_++:M++,k>C?x++:M++;var P=S>=3?1:0,R=_>=3?1:0,T=x>=3?1:0,A=M>=3?1:0,E=S>=2?1:0,O=_>=2?1:0,L=x>=2?1:0,B=M>=2?1:0,D=S>=1?1:0,I=_>=1?1:0,N=x>=1?1:0,F=M>=1?1:0,j=b-P+d,z=w-R+d,H=k-T+d,q=C-A+d,U=b-E+2*d,G=w-O+2*d,W=k-L+2*d,Y=C-B+2*d,V=b-D+3*d,K=w-I+3*d,J=k-N+3*d,X=C-F+3*d,Z=b-1+4*d,$=w-1+4*d,Q=k-1+4*d,ee=C-1+4*d,te=255&l,ne=255&p,ie=255&g,re=255&m,oe=.6-b*b-w*w-k*k-C*C;if(oe<0)r=0;else{var ae=u[te+u[ne+u[ie+u[re]]]]%32*4;r=(oe*=oe)*oe*(v[ae]*b+v[ae+1]*w+v[ae+2]*k+v[ae+3]*C)}var se=.6-j*j-z*z-H*H-q*q;if(se<0)o=0;else{var he=u[te+P+u[ne+R+u[ie+T+u[re+A]]]]%32*4;o=(se*=se)*se*(v[he]*j+v[he+1]*z+v[he+2]*H+v[he+3]*q)}var ue=.6-U*U-G*G-W*W-Y*Y;if(ue<0)a=0;else{var ce=u[te+E+u[ne+O+u[ie+L+u[re+B]]]]%32*4;a=(ue*=ue)*ue*(v[ce]*U+v[ce+1]*G+v[ce+2]*W+v[ce+3]*Y)}var le=.6-V*V-K*K-J*J-X*X;if(le<0)s=0;else{var fe=u[te+D+u[ne+I+u[ie+N+u[re+F]]]]%32*4;s=(le*=le)*le*(v[fe]*V+v[fe+1]*K+v[fe+2]*J+v[fe+3]*X)}var de=.6-Z*Z-$*$-Q*Q-ee*ee;if(de<0)h=0;else{var pe=u[te+1+u[ne+1+u[ie+1+u[re+1]]]]%32*4;h=(de*=de)*de*(v[pe]*Z+v[pe+1]*$+v[pe+2]*Q+v[pe+3]*ee)}return 27*(r+o+a+s+h)}}]),e}(),m=g;function y(e){for(var t=new Uint8Array(256),n=0;n<256;n++)t[n]=n;for(var i=0;i<255;i++){var r=i+~~(e()*(256-i)),o=t[i];t[i]=t[r],t[r]=o}return t}function b(e){var t=0,n=0,i=0,r=1,o=function(){var e=4022871197;return function(t){t=t.toString();for(var n=0;n<t.length;n++){var i=.02519603282416938*(e+=t.charCodeAt(n));i-=e=i>>>0,e=(i*=e)>>>0,e+=4294967296*(i-=e)}return 2.3283064365386963e-10*(e>>>0)}}();return t=o(\" \"),n=o(\" \"),i=o(\" \"),(t-=o(e))<0&&(t+=1),(n-=o(e))<0&&(n+=1),(i-=o(e))<0&&(i+=1),function(){var e=2091639*t+2.3283064365386963e-10*r;return t=n,n=i,i=e-(r=0|e)}}var w={seaLevel:0,bedrockLevel:-100},k=-1e4,C=-1e4,S=-1e4,_=n(7786);function x(e,t,n){return Math.abs(e[0]-t)+Math.abs(e[1]-n)}function M(e,t){var n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i}function P(e,t,n){var i=e[0]-t,r=e[1]-n;return i*i+r*r}function R(e,t,n){var i=e[0]-t,r=e[1]-n;return Math.sqrt(i*i+r*r)}function T(e,t,n){var i,r,o,a=M(t,n),s=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/a;return s<0?(i=t[0],r=t[1],o=0):s>1?(i=n[0],r=n[1],o=1):(i=t[0]+s*(n[0]-t[0]),r=t[1]+s*(n[1]-t[1]),o=s),{dist:R(e,i,r),fracAlong:o,lineSegmentLength:Math.sqrt(a)}}function A(e,t,n){var i=M(t,n),r=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/i;return R(e,t[0]+r*(n[0]-t[0]),t[1]+r*(n[1]-t[1]))}function E(e,t,n,i,r){for(var o=[],a=e-r;a<e+i+r;++a)for(var s=t-r;s<t+i+r;++s)o.push([n.getOctaves(a,s),n.getOctaves(a+430,s-330)]);return o}function O(e,t,n,i,r){return n[(e+r)*(i+2*r)+(t+r)]}function L(e){if(Math.abs(e[0])<1e-4)e[0]=0,e[1]=1;else{var t=Math.sqrt(e[0]*e[0]+e[1]*e[1]);e[0]=e[0]/t,e[1]=e[1]/t}}function B(e){var t,n=0,i=r(e.customOctaves);try{for(i.s();!(t=i.n()).done;){n+=t.value.amplitude}}catch(o){i.e(o)}finally{i.f()}return n}var D=function(){function e(t,n){o(this,e),this.customOctaves=void 0,this._simplexes=[],console.assert(void 0!==n,\"Seed must be defined\"),this.customOctaves=t;for(var i=0;i<t.length;i++)this._simplexes.push(new m(\"\".concat(n).concat(i)))}return s(e,[{key:\"getOctaves\",value:function(e,t){for(var n=0,i=0;i<this.customOctaves.length;i++){var r=this.customOctaves[i],o=r.amplitude,a=r.frequency;n+=this._simplexes[i].noise2D(e*a,t*a)*o}return n}}]),e}(),I=function(){function e(t,n,i){o(this,e),this.customOctaves=void 0,this._simplexes=[],this.remainingAmplitudes=void 0,this.threshold=void 0,console.assert(void 0!==i,\"Seed must be defined\"),this.customOctaves=t,this.threshold=n;for(var r=0;r<t.length;r++)this._simplexes.push(new m(\"\".concat(i).concat(r)));this.remainingAmplitudes=new Array(t.length);for(var a=0,s=this.remainingAmplitudes.length-1;s>=0;s--)a+=this.customOctaves[s].amplitude,this.remainingAmplitudes[s]=a}return s(e,[{key:\"getOctaves\",value:function(e,t){for(var n=0,i=0;i<this.customOctaves.length;i++){if(n-this.remainingAmplitudes[i]>this.threshold.high||n+this.remainingAmplitudes[i]<this.threshold.low)return S;var r=this.customOctaves[i],o=r.amplitude,a=r.frequency;n+=this._simplexes[i].noise2D(e*a,t*a)*o}return n}}]),e}(),N=function(){function e(t){o(this,e),this.a=void 0;for(var n=2166136261,i=0;i<t.length;i++)n=Math.imul(n^t.charCodeAt(i),16777619);this.a=n}return s(e,[{key:\"next\",value:function(){var e=this.a+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296}}]),e}(),F=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;o(this,e),this.array=void 0,this.chunkBottomLeft=void 0,this.needOutsideChunkDist=void 0,this.chunkBottomLeft=n,this.needOutsideChunkDist=i;var r=t+2*i;this.array=_(new Int16Array(r*r),[r,r])}return s(e,[{key:\"set\",value:function(e,t,n){this.array.set(e-this.chunkBottomLeft[0]+this.needOutsideChunkDist,t-this.chunkBottomLeft[1]+this.needOutsideChunkDist,n)}},{key:\"get\",value:function(e,t){return this.array.get(e-this.chunkBottomLeft[0]+this.needOutsideChunkDist,t-this.chunkBottomLeft[1]+this.needOutsideChunkDist)}}]),e}(),j=function(){function e(t,n,i,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;o(this,e),this.array=void 0,this.chunkBottomLeft=void 0,this.needOutsideChunkDist=void 0,this.chunkBottomLeft=n,this.needOutsideChunkDist=a;var s=t+2*a;this.array=_(new Int16Array(s*s*i*r),[s,s,i,r])}return s(e,[{key:\"set\",value:function(e,t,n,i,r){this.array.set(e-this.chunkBottomLeft[0]+this.needOutsideChunkDist,t-this.chunkBottomLeft[1]+this.needOutsideChunkDist,n,i,r)}},{key:\"get\",value:function(e,t,n,i){return this.array.get(e-this.chunkBottomLeft[0]+this.needOutsideChunkDist,t-this.chunkBottomLeft[1]+this.needOutsideChunkDist,n,i)}},{key:\"fill\",value:function(e){for(var t=0;t<this.array.shape[0];t++)for(var n=0;n<this.array.shape[1];n++)for(var i=0;i<this.array.shape[2];i++)for(var r=0;r<this.array.shape[3];r++)this.array.set(t,n,i,r,e)}}]),e}(),z=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;o(this,e),this.array=void 0,this.chunkBottomLeft=void 0,this.needOutsideChunkDist=void 0,this.chunkBottomLeft=n,this.needOutsideChunkDist=i;var r=t+2*i,a=new Array(r*r);this.array=_(a,[r,r])}return s(e,[{key:\"set\",value:function(e,t,n){this.array.set(e-this.chunkBottomLeft[0]+this.needOutsideChunkDist,t-this.chunkBottomLeft[1]+this.needOutsideChunkDist,n)}},{key:\"get\",value:function(e,t){return this.array.get(e-this.chunkBottomLeft[0]+this.needOutsideChunkDist,t-this.chunkBottomLeft[1]+this.needOutsideChunkDist)}}]),e}(),H=n(8915),q=n.n(H),U=n(189),G=n.n(U),W=function(){function e(t,n,i,r,a,s){var h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]&&arguments[7],c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:void 0;if(o(this,e),this.minDist=void 0,this.variableDensitySettings=void 0,this.gridSize=void 0,this.cachedCells=void 0,this._tempCellCoord=[0,0],this.useIsPoint=void 0,this.useKthClosestPoint=void 0,this.seed=void 0,this.useJitteredGrid=void 0,this.customCellGap=void 0,this.mostRecentlyAccessedCell=null,console.assert(Number.isInteger(t)),this.cachedCells=new(G())({max:Ae()?100:50,ttl:6e4,updateAgeOnGet:!0}),this.minDist=t,this.variableDensitySettings=h,this.customCellGap=c,this.useJitteredGrid=u,this.gridSize=Math.floor(Math.sqrt(a*Math.pow(t,2))),u){var l=this.gridSize%t;0!==l&&(this.gridSize+=t-l)}else{var f=this.gridSize%s;0!==f&&(this.gridSize+=s-f)}this.useIsPoint=n,this.useKthClosestPoint=i,this.seed=r}return s(e,[{key:\"isPoint\",value:function(e,t){var n=this.getCellCoordFromGlobalCoord(e,t);return!!this.getCell(n[0],n[1]).pointsSet.has(\"\".concat(e,\"|\").concat(t))}},{key:\"getClosestPoint\",value:function(e,t){var n,i=this.getCellCoordFromGlobalCoord(e,t),o=this.getCell(i[0],i[1]),a=[0,0],s=1e4,h=r(this._getPointsSurroundingCell(i,o));try{for(h.s();!(n=h.n()).done;){var u=n.value,c=R(u,e,t);c<s&&(a=u,s=c)}}catch(l){h.e(l)}finally{h.f()}return a}},{key:\"getKClosestPointsWithWeights\",value:function(e,t,n){var i=this.getCellCoordFromGlobalCoord(e,t),r=this.getCell(i[0],i[1]);return this._getPointsSurroundingCell(i,r),this._getClosestPointsForGeneratedCell(r,e,t,n)}},{key:\"getPointsAroundPoint\",value:function(e,t){var n=this.getCellCoordFromGlobalCoord(e,t),i=this.getCell(n[0],n[1]);return this._getPointsSurroundingCell(n,i)}},{key:\"_getPointsSurroundingCell\",value:function(e,t){if(!t.surroundingPoints){for(var n=h(t.points),i=e[0]-1;i<=e[0]+1;i++)for(var r=e[1]-1;r<=e[1]+1;r++)a=i,s=r,((o=e)[0]!==a||o[1]!==s)&&n.push.apply(n,h(this.getCell(i,r).points));t.surroundingPoints=n}var o,a,s;return t.surroundingPoints}},{key:\"_getClosestPointsForGeneratedCell\",value:function(e,t,n,i){var o,a=[0,0],s=1e5,h=r(e.surroundingPoints);try{for(h.s();!(o=h.n()).done;){var u=o.value,c=R(u,t,n);c<s&&(a=u,s=c)}}catch(b){h.e(b)}finally{h.f()}for(var l=[{pt:a,distDiffFromFirstPt:0,weight:0}],f=i,d=0;d<e.surroundingPoints.length;d++){var p=e.surroundingPoints[d];if(p[0]!==a[0]||p[1]!==a[1]){var v=R(p,t,n)-s;v<i&&(l.push({pt:p,distDiffFromFirstPt:v,weight:0}),f+=i-v)}}for(var g=0,m=l;g<m.length;g++){var y=m[g];y.weight=(i-y.distDiffFromFirstPt)/f}return l}},{key:\"getCellCoordFromGlobalCoord\",value:function(e,t){return this._tempCellCoord[0]=Math.floor(e/this.gridSize),this._tempCellCoord[1]=Math.floor(t/this.gridSize),this._tempCellCoord}},{key:\"getCell\",value:function(e,t){if(this.mostRecentlyAccessedCell&&this.mostRecentlyAccessedCell.coord[0]===e&&this.mostRecentlyAccessedCell.coord[1]===t)return this.mostRecentlyAccessedCell;var n=\"\".concat(e,\"|\").concat(t),i=this.cachedCells.get(n);if(i)return this.mostRecentlyAccessedCell=i,i;var r=this.generateRandomPointsForCell(e,t),o={coord:[e,t],points:r.points,pointsSet:r.pointsSet,surroundingPoints:null};return this.cachedCells.set(n,o),this.mostRecentlyAccessedCell=o,o}},{key:\"generateRandomPointsForCell\",value:function(e,t){var n,i,o=e*this.gridSize,a=t*this.gridSize;if(this.useJitteredGrid){var s=new N(\"\".concat(e).concat(t).concat(this.seed,\"jitter\"));n=[];for(var h=o+this.gridSize,u=a+this.gridSize,c=o;c<h;c+=this.minDist)for(var l=a;l<u;l+=this.minDist){var f=c+Math.floor(s.next()*this.minDist),d=l+Math.floor(s.next()*this.minDist);n.push([f,d])}}else{var p,v=new N(\"\".concat(e).concat(t).concat(this.seed,\"pts\")),g=function(){return v.next()},m=this.gridSize-(this.customCellGap||this.minDist);if(null===this.variableDensitySettings)p=new(q())({shape:[m,m],minDistance:this.minDist,maxDistance:this.minDist,tries:40},g);else{var y=this.variableDensitySettings.min,b=this.variableDensitySettings.max,w=b-y,k=this.variableDensitySettings.func;p=new(q())({shape:[m,m],minDistance:y,maxDistance:b,tries:10,distanceFunction:function(e){return(k([e[0]+o,e[1]+a])-y)/w}},g)}n=p.fill().map((function(e){return[Math.floor(o+e[0]),Math.floor(a+e[1])]}))}if(this.useIsPoint){i=new Set;var C,S=r(n);try{for(S.s();!(C=S.n()).done;){var _=C.value;i.add(\"\".concat(_[0],\"|\").concat(_[1]))}}catch(x){S.e(x)}finally{S.f()}}return{pointsSet:i,points:this.useKthClosestPoint?n:null}}}]),e}();function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J,X=function(){function e(t,n,i,r){o(this,e),this.chunkSize=void 0,this.pointsGenerator=void 0,this._tempChunkCoord=[0,0],this.maxRadiusChunk=void 0,this.seed=void 0,this.chunkSize=t,this.pointsGenerator=n,this.maxRadiusChunk=Math.floor(.5*i/this.chunkSize)+1,this.seed=r}return s(e,[{key:\"getChunkCoordFromGlobalCoord\",value:function(e,t){return this._tempChunkCoord[0]=Math.floor(e/this.chunkSize),this._tempChunkCoord[1]=Math.floor(t/this.chunkSize),this._tempChunkCoord}},{key:\"getSurroundingFeatures\",value:function(e,t){for(var n=this.getChunkCoordFromGlobalCoord(e,t),i=[],r=n[0]-this.maxRadiusChunk;r<=n[0]+this.maxRadiusChunk;r++)for(var o=n[1]-this.maxRadiusChunk;o<=n[1]+this.maxRadiusChunk;o++)this.pointsGenerator.isPoint(r,o)&&i.push(this._getRandomPointInChunk(r,o));return i}},{key:\"_getRandomPointInChunk\",value:function(e,t){var n=e*this.chunkSize,i=t*this.chunkSize,r=new N(\"\".concat(e,\"|\").concat(t,\"|\").concat(this.seed));return[n+Math.floor(r.next()*this.chunkSize),i+Math.floor(r.next()*this.chunkSize)]}}]),e}(),Z=function(){function e(t,n,i){o(this,e),this.spaghettCaves=void 0,this.chunkSize=void 0,this.pitCaves={count:1,maxWidth:40,minWidth:15,distApartInChunks:5,distPerturbNoiseSetup:[{amplitude:1,frequency:1/8},{amplitude:3,frequency:.05},{amplitude:10,frequency:.01},{amplitude:29,frequency:.002}],yPerturbNoiseSetup:[{amplitude:1,frequency:.1},{amplitude:3,frequency:.02}],heightPerturbNoiseSetup:[{amplitude:3,frequency:.1},{amplitude:10,frequency:.02}],edgesTargetMidpointNoiseSetup:[{amplitude:1,frequency:1/3},{amplitude:2,frequency:1/7},{amplitude:2,frequency:1/15}],minHeight:25,maxHeight:45,minBottomPit:-99,maxBottomPit:-25,generators:[],distPerturbNoises:[],yPerturbNoises:[],heightPerturbNoises:[],edgesTargetMidpointNoise:[]},this.ravineCaves={count:2,maxWidth:15,minWidth:10,maxLength:90,minLength:50,distApartInChunks:7,distPerturbNoiseSetup:[{amplitude:1,frequency:1/8},{amplitude:3,frequency:.05},{amplitude:10,frequency:.01},{amplitude:30,frequency:.002}],yPerturbNoiseSetup:[{amplitude:1,frequency:.1},{amplitude:3,frequency:.02}],minHeight:25,maxHeight:45,maxBottomRavine:-99,minBottomRavine:-5,generators:[],distPerturbNoises:[],yPerturbNoises:[],edgesTargetMidpointNoise:[]},this.sphereCaves={count:1,maxRadius:6,minRadius:20,distApartInChunks:4,distPerturbNoiseSetup:[{amplitude:1,frequency:1/8},{amplitude:3,frequency:.05}],minCentreSphere:-79,maxCentreSphere:10,generators:[],distPerturbNoises:[]},this.seed=void 0,this.lookOutsideChunkDist=void 0,this.numCaves=void 0,this.numSpaghettiCaves=void 0,this.chunkSize=n,this.seed=t,this.lookOutsideChunkDist=i;var a={count:1,thresholdNoiseSetup:[{amplitude:1.5,frequency:1/300},{amplitude:.5,frequency:1/150},{amplitude:.35,frequency:1/70},{amplitude:.04,frequency:.2}],heightNoiseSetup:[{amplitude:25,frequency:.005},{amplitude:12,frequency:1/150}],heightPerturbSetup:[{amplitude:1,frequency:1/4},{amplitude:5,frequency:.1}],cutoffNoiseSetup:[{amplitude:1,frequency:1/300}],caveOffset:null,threshold:{low:-.1,high:.1},height:9,heightPercentCap:.5,thresholdNoises:[],heightNoises:[],heightPerturbNoises:[],cutoffNoises:[],caveBot:0};this.spaghettCaves=[];for(var s=0,h=[{caveBot:-15,amt:1},{caveBot:-35,amt:1},{caveBot:-55,amt:2},{caveBot:-75,amt:1},{caveBot:-99,amt:1}];s<h.length;s++){var u=h[s],c=u.caveBot,l=u.amt;this.spaghettCaves.push(K(K({},JSON.parse(JSON.stringify(a))),{},{caveBot:c,count:l}))}this.spaghettCaves.push({count:2,thresholdNoiseSetup:[{amplitude:1.5,frequency:1/300},{amplitude:.5,frequency:1/150},{amplitude:.35,frequency:1/70},{amplitude:.04,frequency:.2}],heightNoiseSetup:[{amplitude:18,frequency:.01},{amplitude:6,frequency:1/75}],heightPerturbSetup:[{amplitude:1,frequency:1/4},{amplitude:5,frequency:.1}],cutoffNoiseSetup:[{amplitude:1,frequency:1/300}],caveOffset:null,threshold:{low:-.1,high:.1},height:9,heightPercentCap:.5,thresholdNoises:[],heightNoises:[],heightPerturbNoises:[],cutoffNoises:[],caveBot:-98});this.spaghettCaves.push({count:1,thresholdNoiseSetup:[{amplitude:.35,frequency:1/70},{amplitude:.04,frequency:.2}],heightNoiseSetup:[{amplitude:40,frequency:1/120},{amplitude:15,frequency:1/85}],heightPerturbSetup:[{amplitude:2,frequency:.1}],cutoffNoiseSetup:[{amplitude:1,frequency:1/400}],caveOffset:null,threshold:{low:-.06,high:.06},height:12,heightPercentCap:.5,thresholdNoises:[],heightNoises:[],heightPerturbNoises:[],cutoffNoises:[],caveBot:-98});var f,d=r(this.spaghettCaves);try{for(d.s();!(f=d.n()).done;){var p,v=f.value,g=0,m=r(v.heightNoiseSetup);try{for(m.s();!(p=m.n()).done;){g+=p.value.amplitude}}catch(H){m.e(H)}finally{m.f()}v.caveOffset=v.caveBot+g}}catch(H){d.e(H)}finally{d.f()}this.numSpaghettiCaves=0,this.numCaves=0;for(var y=0;y<this.spaghettCaves.length;y++)for(var b=this.spaghettCaves[y],w=0;w<b.count;w++)b.thresholdNoises.push(new I(b.thresholdNoiseSetup,b.threshold,\"\".concat(t,\"Cave\").concat(y).concat(w))),b.heightNoises.push(new D(b.heightNoiseSetup,\"\".concat(t,\"CaveHeightNoise\").concat(y).concat(w))),b.heightPerturbNoises.push(new D(b.heightPerturbSetup,\"\".concat(t,\"CaveHeightPerturb\").concat(y).concat(w))),b.cutoffNoises.push(new D(b.cutoffNoiseSetup,\"\".concat(t,\"CaveCutoff\").concat(y).concat(w))),this.numCaves++,this.numSpaghettiCaves++;for(var k=0;k<this.pitCaves.count;k++){this.pitCaves.distPerturbNoises.push(new D(this.pitCaves.distPerturbNoiseSetup,\"\".concat(t,\"DistPitPerturb\").concat(k)));var C,S=0,_=r(this.pitCaves.distPerturbNoiseSetup);try{for(_.s();!(C=_.n()).done;){S+=C.value.amplitude}}catch(H){_.e(H)}finally{_.f()}this.pitCaves.yPerturbNoises.push(new D(this.pitCaves.yPerturbNoiseSetup,\"\".concat(t,\"yPitPerturb\").concat(k))),this.pitCaves.heightPerturbNoises.push(new D(this.pitCaves.heightPerturbNoiseSetup,\"\".concat(t,\"heightPitPerturb\").concat(k))),this.pitCaves.edgesTargetMidpointNoise.push(new D(this.pitCaves.edgesTargetMidpointNoiseSetup,\"\".concat(t,\"edgesPitPerturb\").concat(k)));var x=new W(this.pitCaves.distApartInChunks,!0,!1,\"\".concat(t,\"PitGen\").concat(k),100,n),M=new X(n,x,this.pitCaves.maxWidth+2*S,\"\".concat(t,\"PitGen\").concat(k));this.pitCaves.generators.push(M),console.assert(M.maxRadiusChunk<=this.pitCaves.distApartInChunks/2,\"cannot have overlapping cave features, \".concat(M.maxRadiusChunk,\" \").concat(this.pitCaves.distApartInChunks/2)),this.numCaves++}for(var P=0;P<this.ravineCaves.count;P++){this.ravineCaves.distPerturbNoises.push(new D(this.ravineCaves.distPerturbNoiseSetup,\"\".concat(t,\"DistRavPerturb\").concat(P)));var R,T=0,A=r(this.ravineCaves.distPerturbNoiseSetup);try{for(A.s();!(R=A.n()).done;){T+=R.value.amplitude}}catch(H){A.e(H)}finally{A.f()}this.ravineCaves.yPerturbNoises.push(new D(this.ravineCaves.yPerturbNoiseSetup,\"\".concat(t,\"yRavinePerturb\").concat(P)));var E=new W(this.ravineCaves.distApartInChunks,!0,!1,\"\".concat(t,\"RavineGen\").concat(P),100,n),O=new X(n,E,Math.max(this.ravineCaves.maxLength,this.ravineCaves.maxWidth)+2*T,\"\".concat(t,\"RavineGen\").concat(P));this.ravineCaves.generators.push(O),console.assert(O.maxRadiusChunk<=this.ravineCaves.distApartInChunks/2,\"cannot have overlapping cave features, \".concat(O.maxRadiusChunk,\" \").concat(this.ravineCaves.distApartInChunks/2)),this.numCaves++}for(var L=0;L<this.sphereCaves.count;L++){this.sphereCaves.distPerturbNoises.push(new D(this.sphereCaves.distPerturbNoiseSetup,\"\".concat(t,\"DistSpherePerturb\").concat(L)));var B,N=0,F=r(this.sphereCaves.distPerturbNoiseSetup);try{for(F.s();!(B=F.n()).done;){N+=B.value.amplitude}}catch(H){F.e(H)}finally{F.f()}var j=new W(this.sphereCaves.distApartInChunks,!0,!1,\"\".concat(t,\"SphereGen\").concat(L),100,n),z=new X(n,j,2*this.sphereCaves.maxRadius+2*N,\"\".concat(t,\"SphereGen\").concat(L));this.sphereCaves.generators.push(z),console.assert(z.maxRadiusChunk<=this.sphereCaves.distApartInChunks/2,\"cannot have overlapping cave features, \".concat(z.maxRadiusChunk,\" \").concat(this.sphereCaves.distApartInChunks/2)),this.numCaves++}}return s(e,[{key:\"getCaveInfoForChunk\",value:function(e,t,n){var i=new j(this.chunkSize,[e,t],this.numCaves,2,this.lookOutsideChunkDist);i.fill(C);for(var r=e-this.lookOutsideChunkDist;r<e+this.chunkSize+this.lookOutsideChunkDist;++r)for(var o=t-this.lookOutsideChunkDist;o<t+this.chunkSize+this.lookOutsideChunkDist;++o)this._addSpaghettCavesForColumn(r,o,i,n.groundHeights,0);var a=this.numSpaghettiCaves;return this._addPitCaves(e,t,i,n.groundHeights,a),a+=this.pitCaves.count,this._addSphereCaves(e,t,i,n.groundHeights,a),a+=this.sphereCaves.count,this._addRavineCaves(e,t,i,n.groundHeights,a),this.removeCavesNearWater(e,t,i,n),i}},{key:\"_addSpaghettCavesForColumn\",value:function(e,t,n,i,o){var a,s=r(this.spaghettCaves);try{for(s.s();!(a=s.n()).done;)for(var h=a.value,u=0;u<h.count;u++){o++;var c=h.cutoffNoises[u].getOctaves(e,t),l=.08;if(!(c>=l)){var f=h.thresholdNoises[u].getOctaves(e,t);if(f!==S)if(f>h.threshold.low&&f<h.threshold.high){var d=h.threshold.high-h.threshold.low,p=h.threshold.low+d/2,v=Math.min(h.heightPercentCap,1-Math.abs(f-p)/(d/2)),g=h.height*v;c>0&&(g*=(l-c)/l);var m=h.heightPerturbNoises[u].getOctaves(e,t),y=h.heightPerturbNoises[u].getOctaves(e+980,t-370),b=h.heightNoises[u].getOctaves(e+m,t+y),w=Math.floor(b-g+h.caveOffset),k=Math.floor(b+g+h.caveOffset);k+1===i.get(e,t)&&k++,n.set(e,t,o-1,0,w),n.set(e,t,o-1,1,k)}}}}catch(C){s.e(C)}finally{s.f()}}},{key:\"_addPitCaves\",value:function(e,t,n,o,a){for(var s=0;s<this.pitCaves.generators.length;s++){a++;var h,u=this.pitCaves.generators[s],c=E(e,t,this.pitCaves.distPerturbNoises[s],this.chunkSize,this.lookOutsideChunkDist),l=r(u.getSurroundingFeatures(e,t));try{for(l.s();!(h=l.n()).done;)for(var f=i(h.value,2),d=f[0],p=f[1],v=new N(\"pit\".concat(d,\"|\").concat(p,\"|\").concat(s).concat(this.seed)),g=Math.floor(v.next()*(this.pitCaves.maxWidth-this.pitCaves.minWidth))+this.pitCaves.minWidth,m=Math.floor(v.next()*(this.pitCaves.maxWidth-this.pitCaves.minWidth))+this.pitCaves.minWidth,y=d+g/2,b=d-g/2,w=p+m/2,k=p-m/2,C=Math.floor(v.next()*(this.pitCaves.maxBottomPit-this.pitCaves.minBottomPit))+this.pitCaves.minBottomPit,S=Math.floor(v.next()*(this.pitCaves.maxHeight-this.pitCaves.minHeight))+this.pitCaves.minHeight,_=-this.lookOutsideChunkDist;_<this.chunkSize+this.lookOutsideChunkDist;++_)for(var x=-this.lookOutsideChunkDist;x<this.chunkSize+this.lookOutsideChunkDist;++x){var M=e+_,P=t+x,R=O(_,x,c,this.chunkSize,this.lookOutsideChunkDist),T=M+R[0],A=P+R[1];if(!(T>y||T<b||A>w||A<k)){var L=this.pitCaves.yPerturbNoises[s].getOctaves(M,P),B=this.pitCaves.heightPerturbNoises[s].getOctaves(M,P),D=C+L,I=C+S+B,F=Math.min(y-T,T-b),j=Math.min(w-A,A-k),z=Math.min(F,j);if(z<4){var H=5+this.pitCaves.edgesTargetMidpointNoise[s].getOctaves(M,P),q=1-z/4;I-=(I-(D+=H*q))*q}D=Math.floor(D),(I=Math.floor(I))+1===o.get(M,P)&&I++,n.set(M,P,a-1,0,D),n.set(M,P,a-1,1,I)}}}catch(U){l.e(U)}finally{l.f()}}}},{key:\"_addRavineCaves\",value:function(e,t,n,o,a){for(var s=0;s<this.ravineCaves.generators.length;s++){a++;var h,u=this.ravineCaves.generators[s],c=E(e,t,this.ravineCaves.distPerturbNoises[s],this.chunkSize,this.lookOutsideChunkDist),l=r(u.getSurroundingFeatures(e,t));try{for(l.s();!(h=l.n()).done;){var f=h.value,d=i(f,2),p=d[0],v=d[1],g=new N(\"rav\".concat(p,\"|\").concat(v,\"|\").concat(s).concat(this.seed)),m=Math.floor(g.next()*(this.ravineCaves.maxWidth-this.ravineCaves.minWidth))+this.ravineCaves.minWidth,y=Math.floor(g.next()*(this.ravineCaves.maxLength-this.ravineCaves.minLength))+this.ravineCaves.minLength,b=Math.floor(g.next()*(this.ravineCaves.maxBottomRavine-this.ravineCaves.minBottomRavine))+this.ravineCaves.minBottomRavine,w=Math.floor(g.next()*(this.ravineCaves.maxHeight-this.ravineCaves.minHeight))+this.ravineCaves.minHeight,k=[2*g.next()-1,2*g.next()-1];L(k);for(var C=-this.lookOutsideChunkDist;C<this.chunkSize+this.lookOutsideChunkDist;++C)for(var S=-this.lookOutsideChunkDist;S<this.chunkSize+this.lookOutsideChunkDist;++S){var _=e+C,x=t+S,M=O(C,S,c,this.chunkSize,this.lookOutsideChunkDist),P=_+M[0],T=x+M[1],B=[P,T];L([P-p,T-v]);var D=R(f,P,T);if(!(D>y)){var I=A(B,f,[f[0]+k[0],f[1]+k[1]]),F=m*(1-D/y);if(!(I>F)){var j=this.ravineCaves.yPerturbNoises[s].getOctaves(_,x),z=b+j,H=b+w+j,q=F-I;if(q<3)z+=w*(1-q/3);z=Math.floor(z),(H=Math.floor(H))+1===o.get(_,x)&&H++,n.set(_,x,a-1,0,z),n.set(_,x,a-1,1,H)}}}}}catch(U){l.e(U)}finally{l.f()}}}},{key:\"_addSphereCaves\",value:function(e,t,n,o,a){for(var s=0;s<this.sphereCaves.generators.length;s++){a++;var h,u=this.sphereCaves.generators[s],c=E(e,t,this.sphereCaves.distPerturbNoises[s],this.chunkSize,this.lookOutsideChunkDist),l=r(u.getSurroundingFeatures(e,t));try{for(l.s();!(h=l.n()).done;)for(var f=i(h.value,2),d=f[0],p=f[1],v=new N(\"sph\".concat(d,\"|\").concat(p,\"|\").concat(s).concat(this.seed)),g=Math.floor(v.next()*(this.sphereCaves.maxRadius-this.sphereCaves.minRadius))+this.sphereCaves.minRadius,m=g*g,y=Math.floor(v.next()*(this.sphereCaves.maxCentreSphere-this.sphereCaves.minCentreSphere))+this.sphereCaves.minCentreSphere,b=-this.lookOutsideChunkDist;b<this.chunkSize+this.lookOutsideChunkDist;++b)for(var w=-this.lookOutsideChunkDist;w<this.chunkSize+this.lookOutsideChunkDist;++w){var k=e+b,C=t+w,S=O(b,w,c,this.chunkSize,this.lookOutsideChunkDist),_=k+S[0],x=C+S[1],M=d-_,P=p-x,R=M*M+P*P;if(!(R>m)){var T=Math.sqrt(m-R),A=Math.floor(y-T),L=Math.floor(y+T);L+1===o.get(k,C)&&L++,n.set(k,C,a-1,0,A),n.set(k,C,a-1,1,L)}}}catch(B){l.e(B)}finally{l.f()}}}},{key:\"isCave\",value:function(e,t,n,i){for(var r=0;r<this.numCaves;r++){var o=i.get(e,n,r,0),a=i.get(e,n,r,1);if(t>=o&&t<=a)return!0}return!1}},{key:\"addCavesToChunk\",value:function(e,t,n,i,r){for(var o=t;o<t+this.chunkSize;o++)for(var a=i;a<i+this.chunkSize;a++)for(var s=0;s<this.numCaves;s++){var h=r.get(o,a,s,0),u=r.get(o,a,s,1);if(h!==C)for(var c=Math.min(u+1,n+this.chunkSize),l=Math.max(h,n);l<c;l++)e.set(o-t,l-n,a-i,0)}}},{key:\"removeCavesNearWater\",value:function(e,t,n,i){for(var r=e-this.lookOutsideChunkDist;r<e+this.chunkSize+this.lookOutsideChunkDist;++r)for(var o=t-this.lookOutsideChunkDist;o<t+this.chunkSize+this.lookOutsideChunkDist;++o){var a=i.cavesAllowedBelowY.get(r,o);if(1e4!==a)for(var s=0;s<this.numCaves;s++){var h=n.get(r,o,s,0);n.get(r,o,s,1)>a&&(h>a?(n.set(r,o,s,0,C),n.set(r,o,s,1,C)):n.set(r,o,s,1,a))}}}}]),e}();!function(e){e[e.Maple=0]=\"Maple\",e[e.Pine=1]=\"Pine\",e[e.Plum=2]=\"Plum\",e[e.Cedar=4]=\"Cedar\",e[e.Aspen=5]=\"Aspen\",e[e.Elm=6]=\"Elm\",e[e.Palm=7]=\"Palm\",e[e.AutumnMaple=8]=\"AutumnMaple\",e[e.Pear=9]=\"Pear\"}(J||(J={}));var $=function(){function e(t,n,i,a,s){var h;o(this,e),this.treeRadius=void 0,this.cavesGenerator=void 0,this.chunkSize=void 0,this.seed=void 0,this.treePointGen=void 0,this.blockMetadata=void 0,this.treeMinDistApart=6,this.minTreeHeight=4,this.maxTreeHeight=7,this.treeBlockIds=void 0,this.treeBlockIds=(Y(h={},J.Maple,{block:s[\"Maple Log\"].id,base:s[\"Maple Log|TreeBase\"].id,canopyLeaves:s[\"Maple Leaves|TreeCanopy\"].id}),Y(h,J.Pine,{block:s[\"Pine Log\"].id,base:s[\"Pine Log|TreeBase\"].id,canopyLeaves:s[\"Pine Leaves|TreeCanopy\"].id}),Y(h,J.Plum,{block:s[\"Plum Log\"].id,base:s[\"Plum Log|TreeBase\"].id,canopyLeaves:s[\"Plum Leaves|TreeCanopy\"].id}),Y(h,J.Cedar,{block:s[\"Cedar Log\"].id,base:s[\"Cedar Log|TreeBase\"].id,canopyLeaves:s[\"Cedar Leaves|TreeCanopy\"].id}),Y(h,J.Aspen,{block:s[\"Aspen Log\"].id,base:s[\"Aspen Log|TreeBase\"].id,canopyLeaves:s[\"Aspen Leaves|TreeCanopy\"].id}),Y(h,J.Elm,{block:s[\"Elm Log\"].id,base:s[\"Elm Log|TreeBase\"].id,canopyLeaves:s[\"Elm Leaves|TreeCanopy\"].id}),Y(h,J.Palm,{block:s[\"Palm Log\"].id,base:s[\"Palm Log|TreeBase\"].id,canopyLeaves:s[\"Palm Leaves|TreeCanopy\"].id}),Y(h,J.AutumnMaple,{block:s[\"Maple Log\"].id,base:s[\"Maple Log|TreeBase\"].id,canopyLeaves:s[\"Autumn Maple Leaves|TreeCanopy\"].id}),Y(h,J.Pear,{block:s[\"Pear Log\"].id,base:s[\"Pear Log|TreeBase\"].id,canopyLeaves:s[\"Pear Leaves|TreeCanopy\"].id}),h),this.treeRadius=t.treeRadius,this.cavesGenerator=n,this.chunkSize=i,this.seed=a,this.blockMetadata=s;var u,c=1e5,l=0,f=r(t.biomeSelector.biomes);try{for(f.s();!(u=f.n()).done;){var d=u.value;d.biome.treeMinDist&&(c=Math.min(c,d.biome.treeMinDist),l=Math.max(l,d.biome.treeMinDist))}}catch(p){f.e(p)}finally{f.f()}this.treePointGen=new W(6,!0,!1,a,300,i,{func:function(e){return t._getBiome(e[0],e[1]).biome.treeMinDist||l},min:c,max:l},!1,2)}return s(e,[{key:\"_getTreeTrunksForBlocksInChunk\",value:function(t,n,i,r,o){for(var a=i.groundHeights,s=i.waterHeights,h=new z(this.chunkSize,[t,n],this.treeRadius),u=t-this.treeRadius;u<t+this.chunkSize+this.treeRadius;u++)for(var c=n-this.treeRadius;c<n+this.chunkSize+this.treeRadius;c++){var l=r.get(u,c)[0].biome;if(null!==l.treeMinDist)if(l.getTotalTreeChance()<=0&&console.error(\"Biome\",l,\"has 0 total tree chance\"),this.treePointGen.isPoint(u,c)&&s.get(u,c)===k){var f=a.get(u,c);if(!this.cavesGenerator.isCave(u,f,c,o)){var d=new N(\"\".concat(u).concat(c).concat(this.seed,\"treeHeight\")),p=e.getTreeTypeFromBiome(l,d),v=this.getRandTreeInfo(d),g=v.height,m=v.vineDir;this._addTreeToTreesNearbyBlocks(h,u,c,{pos:[u,c],height:g,vineDir:m,treeType:p},t,n)}}}return h}},{key:\"getRandTreeInfo\",value:function(e){return{height:Math.floor(e.next()*(this.maxTreeHeight-this.minTreeHeight))+this.minTreeHeight,vineDir:e.next()<1/30?Math.floor(4*e.next()):-1}}},{key:\"_addTreeToTreesNearbyBlocks\",value:function(e,t,n,i,r,o){for(var a=t-this.treeRadius;a<=t+this.treeRadius;a++)for(var s=n-this.treeRadius;s<=n+this.treeRadius;s++)if(a>=r&&a<r+this.chunkSize&&s>=o&&s<o+this.chunkSize){var h=e.get(a,s)||[];h.push(i),e.set(a,s,h)}}},{key:\"getTreeBlock\",value:function(e,t,n,o,a){var s=o.get(e,n);if(t<=s)return 0;if(t>s&&t<=s+this.maxTreeHeight){var h,u=r(a);try{for(u.s();!(h=u.n()).done;){var c=h.value,l=c.pos,f=o.get(l[0],l[1])+1,d=this.getTrunkBlockFromInfo(e,t,n,f,c);if(0!==d)return d}}catch(C){u.e(C)}finally{u.f()}}if(t<=s+this.maxTreeHeight+5){var p,v=r(a);try{for(v.s();!(p=v.n()).done;){var g=p.value,m=i(g.pos,2),y=m[0],b=m[1],w=o.get(y,b),k=this._getLeafBlockFromInfo(e,t,n,y,b,w+1,g);if(0!==k)return k}}catch(C){v.e(C)}finally{v.f()}}return 0}},{key:\"getTrunkBlockFromInfo\",value:function(e,t,n,i,r){var o=i+r.height-1,a=r.pos;if(t<=o){if(a[0]===e&&a[1]===n)return t===i?this.treeBlockIds[r.treeType].base:this.treeBlockIds[r.treeType].block;if(-1!==r.vineDir){var s=this.getVineInfoForTrunk(r.vineDir),h=s.offsetFromTrunk;if(a[0]+h[0]===e&&a[1]+h[1]===n&&t<o-1)return s.blockId}}return 0}},{key:\"getVineInfoForTrunk\",value:function(e){var t={offsetFromTrunk:[0,0],blockId:0};return 0===e?(t.offsetFromTrunk[0]=-1,t.blockId=this.blockMetadata[\"Vines|meta|rot4\"].id):1===e?(t.offsetFromTrunk[1]=1,t.blockId=this.blockMetadata.Vines.id):2===e?(t.offsetFromTrunk[0]=1,t.blockId=this.blockMetadata[\"Vines|meta|rot2\"].id):3===e&&(t.offsetFromTrunk[1]=-1,t.blockId=this.blockMetadata[\"Vines|meta|rot3\"].id),t}},{key:\"_getLeafBlockFromInfo\",value:function(e,t,n,i,r,o,a){var s=a.height,h=o+s-3,u=o+s+this.treeRadius-1;if(t>h&&t<=u){var c,l;t<u-1&&(c=2.8,l=3),t===u-1?(c=1.2,l=1.7):t===u&&(c=.2,l=1.1);var f=function(e,t){var n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)}([i,r],[e,n]);return f>=l?0:f>=c?new N(\"\".concat(e).concat(t).concat(n,\"leaf\")).next()<.8?this.treeBlockIds[a.treeType].canopyLeaves:0:this.treeBlockIds[a.treeType].canopyLeaves}return 0}},{key:\"getAllBlocksForTree\",value:function(e,t){for(var n=i(t.pos,2),r=n[0],o=n[1],a=t.height,s=(t.vineDir,[]),h=r-this.treeRadius;h<=r+this.treeRadius;h++)for(var u=e;u<=e+a;u++)for(var c=o-this.treeRadius;c<=o+this.treeRadius;c++){var l=this.getTrunkBlockFromInfo(h,u,c,e,t);if(0===l){var f=this._getLeafBlockFromInfo(h,u,c,r,o,e,t);0!==f&&s.push({x:h,y:u,z:c,id:f})}else s.push({x:h,y:u,z:c,id:l})}return s}}],[{key:\"getTreeTypeFromBiome\",value:function(e,t){for(var n=Math.floor(t.next()*e.getTotalTreeChance()),i=0,r=0;i<=n;)i+=e.treeChances[r].chance,r++;return e.treeChances[r-1].treeType}}]),e}(),Q=n(5882),ee=s((function e(){o(this,e),this.hasLake=!1,this.lakeCreationHasBeenAttempted=!1,this.lakeWaterHeight=0,this.lakeRadius=0,this.lakeBedHeight=0})),te=function(){function e(t,n,i,r){o(this,e),this.worldGenerator=void 0,this.gridSize=224,this.cellCenterMaxOffset=void 0,this.maxRiverSettings={width:23,atFlux:800},this.lakeSettings={minRadius:15,maxRadius:60,maxRadiusAtFlux:1700,noLakeFluxCutoff:50},this.widthOffset=2,this.seed=void 0,this.lakeRadiusNoiseModifier=void 0,this.lakeRadiusNoiseAmplitude=void 0,this.waterBodyInfos=new Map,this.lastReadInfo={lastId:null,info:null},this.worldGenerator=t;var a=Math.max(this.lakeSettings.maxRadius,this.maxRiverSettings.width/2+this.widthOffset)+r+i;this.cellCenterMaxOffset=this.gridSize/2-a,this.seed=n,this.lakeRadiusNoiseModifier=new D([{amplitude:10,frequency:1/55},{amplitude:4,frequency:.04}],\"\".concat(n,\"GlobalHeightmapOffset\")),this.lakeRadiusNoiseAmplitude=B(this.lakeRadiusNoiseModifier)}return s(e,[{key:\"getInfoNeededForWaterGen\",value:function(e,t){var n=[e,t],i=this.getWaterInfo(e,t,!0),o=1e4,a=0,s=0,h=0,u=0,c=0,l=0;if(i.downhill){var f=T(n,i.origin,i.downhill.origin),d=f.dist,p=f.fracAlong,v=f.lineSegmentLength;a=Math.floor(d);var g=i.incomingFlux;if(g+=p*i.selfFlux,h=Math.min(1,g/this.maxRiverSettings.atFlux),o=a-(s=Math.max(1,Math.ceil(h*this.maxRiverSettings.width)))/2,c=i.originNoWaterHeight+-3,i.downhill.lakeInfo.hasLake){l=i.downhill.lakeInfo.lakeWaterHeight;var m=v-i.downhill.lakeInfo.lakeRadius,y=v*p;u=Math.min(1,y/m)}else l=i.downhill.originNoWaterHeight+-3,u=p}var b,w=r(i.uphills);try{for(w.s();!(b=w.n()).done;){var k=b.value,C=T(n,k.origin,i.origin),S=C.dist,_=C.fracAlong,x=C.lineSegmentLength,M=Math.floor(S),P=k.incomingFlux;P+=_*k.selfFlux;var A=Math.min(1,P/this.maxRiverSettings.atFlux),E=Math.max(1,Math.ceil(A*this.maxRiverSettings.width)),O=M-E/2;if(O<o)if(o=O,a=M,h=A,s=E,c=k.originNoWaterHeight+-3,i.lakeInfo.hasLake){l=i.lakeInfo.lakeWaterHeight;var L=x-i.lakeInfo.lakeRadius,B=x*_;u=Math.min(1,B/L)}else l=i.originNoWaterHeight+-3,u=_}}catch(U){w.e(U)}finally{w.f()}if(1e4!==o){var D=1e4,I=0;if(i.lakeInfo.hasLake){var N=i.lakeInfo,F=this.lakeRadiusNoiseModifier.getOctaves(e,t);F+=this.lakeRadiusNoiseAmplitude,F*=N.lakeRadius/this.lakeSettings.maxRadius,I=N.lakeRadius-F,D=R(i.origin,e,t)-I}var j=Math.floor(l+(c-l)*(1-u)),z=j-(Math.ceil(10*h)+2);if(o<D)return{distFromWater:a,waterRadius:(s+this.widthOffset)/2,waterHeight:j,waterbedHeight:z,isLake:!1};var H=R(i.origin,e,t),q=i.lakeInfo;return{distFromWater:H,waterRadius:I,waterHeight:q.lakeWaterHeight,waterbedHeight:q.lakeBedHeight,isLake:!0}}return{distFromWater:1e4,waterRadius:0,waterHeight:0,waterbedHeight:0,isLake:!1}}},{key:\"getWaterInfo\",value:function(e,t,n){var i=Math.floor(e/this.gridSize),r=Math.floor(t/this.gridSize),o=this.getCellInfo(i,r);if(o.uphills||this.fillInUphillInfo(i,r,o),o.downhill||o.lakeInfo.lakeCreationHasBeenAttempted||(this.fillInLakeInfo(o),o.lakeInfo.lakeCreationHasBeenAttempted=!0),n&&o.downhill){var a=this.getWaterInfo(o.downhill.origin[0],o.downhill.origin[1],!1);o.downhill.lakeInfo=a.lakeInfo}return o}},{key:\"getCellInfo\",value:function(e,t){var n=\"\".concat(e,\"|\").concat(t);if(n===this.lastReadInfo.lastId)return this.lastReadInfo.info;if(this.waterBodyInfos.has(n)){var i=this.waterBodyInfos.get(n);return this.lastReadInfo.lastId=n,this.lastReadInfo.info=i,i}var r=this.getCellOrigin(e,t),o=this.worldGenerator.getClosestBiomes(r[0],r[1]),a=this.worldGenerator.getNoWaterHeightmapVal(r[0],r[1],o),s={origin:r,originNoWaterHeight:a,downhill:this.getDownhillFromCell(e,t,a),uphills:null,incomingFlux:null,selfFlux:this.getRainfall(r[0],r[1]),lakeInfo:new ee};return this.lastReadInfo.lastId=n,this.lastReadInfo.info=s,this.waterBodyInfos.set(n,s),this.waterBodyInfos.size>200&&this.waterBodyInfos.delete(this.waterBodyInfos.keys().next().value),s}},{key:\"fillInUphillInfo\",value:function(e,t,n){var i,o=this.getUphillsFromCell(e,t),a=0,s=r(o);try{for(s.s();!(i=s.n()).done;){var h=i.value;a+=h.incomingFlux+h.selfFlux}}catch(u){s.e(u)}finally{s.f()}n.uphills=o,n.incomingFlux=a}},{key:\"getUphillsFromCell\",value:function(e,t){for(var n=[],i=-1;i<=1;i++)for(var r=-1;r<=1;r++){var o,a,s=e+i,h=t+r,u=Math.abs(i)+Math.abs(r);if(2!==u&&0!==u){var c=this.getCellInfo(s,h);(null===(o=c.downhill)||void 0===o?void 0:o.cell[0])===e&&(null===(a=c.downhill)||void 0===a?void 0:a.cell[1])===t&&(c.uphills||this.fillInUphillInfo(s,h,c),n.push({incomingFlux:c.incomingFlux,selfFlux:c.selfFlux,origin:c.origin,originNoWaterHeight:c.originNoWaterHeight}))}}return n}},{key:\"getDownhillFromCell\",value:function(e,t,n){for(var i={cell:[0,0],origin:null,originNoWaterHeight:0,lakeInfo:new ee},r=-1,o=-1;o<=1;o++)for(var a=-1;a<=1;a++){var s=e+o,h=t+a,u=Math.abs(o)+Math.abs(a);if(2!==u&&0!==u){var c=this.getCellOrigin(s,h),l=this.worldGenerator.getClosestBiomes(c[0],c[1]),f=this.worldGenerator.getNoWaterHeightmapVal(c[0],c[1],l),d=n-f;d>0&&d>r&&(r=d,i.cell[0]=s,i.cell[1]=h,i.origin=c,i.originNoWaterHeight=f)}}return-1!==r?i:null}},{key:\"getCellOrigin\",value:function(e,t){var n=e*this.gridSize+this.gridSize/2,i=t*this.gridSize+this.gridSize/2,r=new N(\"\".concat(e).concat(t).concat(this.seed,\"riverCell\"));return[n+Math.floor(r.next()*this.cellCenterMaxOffset*2-this.cellCenterMaxOffset),i+Math.floor(r.next()*this.cellCenterMaxOffset*2-this.cellCenterMaxOffset)]}},{key:\"fillInLakeInfo\",value:function(e){var t=e.lakeInfo,n=e.incomingFlux+e.selfFlux;if(!(n<this.lakeSettings.noLakeFluxCutoff)){t.hasLake=!0;var i=n/this.lakeSettings.maxRadiusAtFlux,r=this.lakeSettings.minRadius+Math.ceil(i*(this.lakeSettings.maxRadius-this.lakeSettings.minRadius));t.lakeRadius=r,t.lakeWaterHeight=Math.floor(e.originNoWaterHeight-7);var o=4+.35*r;t.lakeBedHeight=Math.floor(t.lakeWaterHeight-o)}}},{key:\"getRainfall\",value:function(e,t){return 100}}]),e}(),ne=function(){function e(t,n,i){for(var r in o(this,e),this.ores=void 0,this.blockMetadata=void 0,this.seed=void 0,this.chunkSize=void 0,this.blockMetadata=t,this.seed=n,this.chunkSize=i,this.ores={\"Moonstone Ore\":{radius:2,minDistBetweenDeposits:40,minY:-85,maxY:-85,spawnChance:.5,pointGenerator:null},\"Diamond Ore\":{radius:2,minDistBetweenDeposits:13,minY:-100,maxY:-85,spawnChance:.28,pointGenerator:null},\"Gold Ore\":{radius:2,minDistBetweenDeposits:10,minY:-100,maxY:-75,spawnChance:.4,pointGenerator:null},\"Iron Ore\":{radius:2,minDistBetweenDeposits:5,minY:-80,maxY:15,spawnChance:.5,pointGenerator:null},\"Coal Ore\":{radius:3,minDistBetweenDeposits:4,minY:-60,maxY:40,spawnChance:.5,pointGenerator:null}},this.ores){var a=this.ores[r];a.pointGenerator=new W(a.minDistBetweenDeposits,!1,!0,\"\".concat(n).concat(r),20,i,null,!0)}}return s(e,[{key:\"getOreBlocksForChunk\",value:function(e,t){var n=new z(this.chunkSize,[e,t],0),i=new N(\"\".concat(e).concat(t).concat(this.seed,\"oreExists\"));for(var o in this.ores){var a,s=this.ores[o],h=this.blockMetadata[o].id,u=s.pointGenerator.getPointsAroundPoint(e+this.chunkSize/2,t+this.chunkSize/2),c=e+this.chunkSize+s.radius,l=e-s.radius-1,f=t+this.chunkSize+s.radius,d=t-s.radius-1,p=r(u);try{for(p.s();!(a=p.n()).done;){var v=a.value;if(!(v[0]>=c||v[0]<=l||v[1]>=f||v[1]<=d))for(var g=new N(\"\".concat(v[0]).concat(v[1]).concat(this.seed,\"ore\")),m=Math.floor(g.next()*(s.maxY-s.minY))+s.minY,y=Math.max(e,v[0]-s.radius),b=Math.min(e+this.chunkSize-1,v[0]+s.radius),w=Math.max(t,v[1]-s.radius),k=Math.min(t+this.chunkSize-1,v[1]+s.radius),C=y;C<=b;C++)for(var S=w;S<=k;S++){if(!(x(v,C,S)>s.radius)&&!(i.next()>=s.spawnChance)){var _={yLevel:m,oreId:h};if(n.get(C,S)){n.get(C,S).push(_)}else{var M=[];n.set(C,S,M),M.push(_)}}}}}catch(P){p.e(P)}finally{p.f()}}return n}},{key:\"addOresToColumn\",value:function(e,t,n,i,o,a,s,h){if(h){var u,c=r(h);try{for(c.s();!(u=c.n()).done;){var l=u.value,f=l.yLevel,d=l.oreId;f<s&&f>=o&&f<o+this.chunkSize&&e.set(t-i,f-o,n-a,d)}}catch(p){c.e(p)}finally{c.f()}}}}]),e}();function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ie(e,t)}function re(e,t){if(\"function\"!==typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function\");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,\"prototype\",{writable:!1}),t&&ie(e,t)}function oe(e){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},oe(e)}function ae(e){return ae=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},ae(e)}function se(e,t){if(t&&(\"object\"===ae(t)||\"function\"===typeof t))return t;if(void 0!==t)throw new TypeError(\"Derived constructors may only return object or undefined\");return function(e){if(void 0===e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return e}(e)}function he(e){var t=function(){if(\"undefined\"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if(\"function\"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=oe(e);if(t){var r=oe(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return se(this,n)}}var ue,ce=function(){function e(t,n,i,a,s,h){var u=s.cactusChance,c=s.maxCactusHeight;o(this,e),this.blockMetadata=void 0,this.seed=void 0,this.grassChance=void 0,this.cactusChance=void 0,this.maxCactusHeight=void 0,this.doFlowerGen=void 0,this.flowerInfos=void 0,this.totalFlowerPatchChance=void 0,this.flowerPatchPointGen=void 0,this.chunkSize=void 0,this.maxPatchRadius=void 0,this.blockMetadata=t,this.seed=i,this.grassChance=a,this.cactusChance=u,this.maxCactusHeight=c,this.chunkSize=n;var l=.5;this.flowerInfos=[{flower:\"Dandelion\",patchChance:h.dandelionChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Poppy\",patchChance:h.poppyChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Forget-me-not\",patchChance:h.forgetMeNotChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Red Tulip\",patchChance:h.redTulipChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Pink Tulip\",patchChance:h.pinkTulipChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"White Tulip\",patchChance:h.whiteTulipChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Orange Tulip\",patchChance:h.orangeTulipChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Daisy\",patchChance:h.daisyChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Allium\",patchChance:h.alliumChance,insidePatchSpawnChance:l,patchRadius:3},{flower:\"Bluebell\",patchChance:h.bluebellChance,insidePatchSpawnChance:.85,patchRadius:8},{flower:\"Fallen Maple Leaves\",patchChance:h.fallenMapleLeavesChance,insidePatchSpawnChance:.5,patchRadius:2},{flower:\"Melon\",patchChance:h.melonChance,insidePatchSpawnChance:.5,patchRadius:2},{flower:\"Watermelon\",patchChance:h.watermelonChance,insidePatchSpawnChance:.5,patchRadius:2},{flower:\"Pumpkin\",patchChance:h.pumpkinChance,insidePatchSpawnChance:.5,patchRadius:2}],this.maxPatchRadius=0;var f,d=r(this.flowerInfos);try{for(d.s();!(f=d.n()).done;){var p=f.value.patchRadius;this.maxPatchRadius=Math.max(this.maxPatchRadius,p)}}catch(y){d.e(y)}finally{d.f()}this.totalFlowerPatchChance=0;var v,g=r(this.flowerInfos);try{for(g.s();!(v=g.n()).done;){var m=v.value.patchChance;this.totalFlowerPatchChance+=m}}catch(y){g.e(y)}finally{g.f()}this.doFlowerGen=null!==h.flowerPatchDistApart,this.doFlowerGen&&(this.flowerPatchPointGen=new W(h.flowerPatchDistApart,!1,!0,i,4,n))}return s(e,[{key:\"addBiomeFloraToColumn\",value:function(e,t,n,i,r,o,a){if(a+1>=r&&a+1<r+this.chunkSize){var s=new N(\"\".concat(i).concat(o).concat(this.seed,\"flora\"));if(s.next()<this.grassChance&&e.set(i-t,a+1-r,o-n,this.blockMetadata[\"Tall Grass\"].id),this.doFlowerGen&&this.totalFlowerPatchChance>0){var h=this.flowerPatchPointGen.getClosestPoint(i,o),u=x(h,i,o);if(u<this.maxPatchRadius){for(var c=new N(\"\".concat(h[0]).concat(h[1]).concat(this.seed,\"flowerpatch\")),l=Math.floor(c.next()*this.totalFlowerPatchChance),f=0,d=0;f<=l;)f+=this.flowerInfos[d].patchChance,d++;var p=this.flowerInfos[d-1];if(u<p.patchRadius&&s.next()<p.insidePatchSpawnChance){var v=p.flower;e.set(i-t,a+1-r,o-n,this.blockMetadata[v].id)}}}}if(0!==this.cactusChance){var g=new N(\"\".concat(i).concat(o).concat(this.seed,\"cactus\")),m=g.next();if(m<this.cactusChance)for(var y=Math.floor(g.next()*(this.maxCactusHeight-1))+1,b=Math.min(a+y+1,r+this.chunkSize),w=m<this.cactusChance*(2/3),k=Math.max(a+1,r);k<b;k++)e.set(i-t,k-r,o-n,w?this.blockMetadata[\"Fat Cactus\"].id:this.blockMetadata.Cactus.id)}}}]),e}(),le=function(){function e(t,n,i,r,a){var s=a.oreGenerator,h=a.cavesGenerator;o(this,e),this.offsettedHeight=-5,this.topsoilBlockType=void 0,this.lowsoilBlockType=void 0,this.topwaterBlockType=void 0,this.blockMetadata=void 0,this.chunkSize=void 0,this.treeMinDist=5,this._heightmapSimplex=void 0,this.worldGenerator=void 0,this.oreGenerator=void 0,this.cavesGenerator=void 0,this.floraGenerator=void 0,this.maxCactusHeight=4,this.grassChance=.025,this.maxFloraHeight=this.maxCactusHeight,this.flowerPatchDistApart=40,this.poppyChance=10,this.daisyChance=10,this.pinkTulipChance=10,this.cactusChance=0,this.forgetMeNotChance=0,this.whiteTulipChance=0,this.orangeTulipChance=0,this.redTulipChance=0,this.dandelionChance=0,this.bluebellChance=0,this.alliumChance=0,this.fallenMapleLeavesChance=0,this.melonChance=0,this.watermelonChance=0,this.pumpkinChance=0,this.mapleTreeChance=1,this.pineTreeChance=0,this.plumTreeChance=0,this.cedarTreeChance=0,this.aspenTreeChance=0,this.elmTreeChance=0,this.palmTreeChance=0,this.autumnMapleTreeChance=0,this.pearTreeChance=0,this.seed=void 0,this.totalTreeChance=void 0,this.treeChances=void 0,this.chunkSize=t,this.blockMetadata=n,this.seed=r,this.topsoilBlockType=n[\"Grass Block\"].id,this.lowsoilBlockType=n.Dirt.id,this.topwaterBlockType=n.Water.id,this.worldGenerator=i,this.oreGenerator=s,this.cavesGenerator=h}return s(e,[{key:\"init\",value:function(){this.floraGenerator=new ce(this.blockMetadata,this.chunkSize,\"\".concat(this.seed,\"flora\"),this.grassChance,{cactusChance:this.cactusChance,maxCactusHeight:this.maxCactusHeight},{flowerPatchDistApart:this.flowerPatchDistApart,dandelionChance:this.dandelionChance,poppyChance:this.poppyChance,forgetMeNotChance:this.forgetMeNotChance,redTulipChance:this.redTulipChance,pinkTulipChance:this.pinkTulipChance,whiteTulipChance:this.whiteTulipChance,orangeTulipChance:this.orangeTulipChance,daisyChance:this.daisyChance,bluebellChance:this.bluebellChance,alliumChance:this.alliumChance,fallenMapleLeavesChance:this.fallenMapleLeavesChance,melonChance:this.melonChance,watermelonChance:this.watermelonChance,pumpkinChance:this.pumpkinChance}),this.treeChances=[{treeType:J.Maple,chance:this.mapleTreeChance},{treeType:J.Pine,chance:this.pineTreeChance},{treeType:J.Plum,chance:this.plumTreeChance},{treeType:J.Cedar,chance:this.cedarTreeChance},{treeType:J.Aspen,chance:this.aspenTreeChance},{treeType:J.Elm,chance:this.elmTreeChance},{treeType:J.Palm,chance:this.palmTreeChance},{treeType:J.AutumnMaple,chance:this.autumnMapleTreeChance},{treeType:J.Pear,chance:this.pearTreeChance}],this.totalTreeChance=0;var e,t=r(this.treeChances);try{for(t.s();!(e=t.n()).done;){var n=e.value.chance;this.totalTreeChance+=n}}catch(i){t.e(i)}finally{t.f()}}},{key:\"xzId\",value:function(e,t){return\"\".concat(e,\"|\").concat(t)}},{key:\"getHeightmapVal\",value:function(e,t){return this.offsettedHeight+this._heightmapSimplex.getOctaves(e,t)}},{key:\"getTopsoilBlock\",value:function(e,t,n){return this.topsoilBlockType}},{key:\"getLowsoilBlockType\",value:function(e,t,n,i){return this.lowsoilBlockType}},{key:\"getTotalTreeChance\",value:function(){return this.totalTreeChance}}]),e}(),fe=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,\"\".concat(a,\"Desert\"),s)).grassChance=0,h.cactusChance=6e-4,h.flowerPatchDistApart=null,h.treeMinDist=null,h.topsoilBlockType=i.Sand.id,h.lowsoilBlockType=i.Sand.id,h._heightmapSimplex=new D([{amplitude:2,frequency:1/70},{amplitude:1,frequency:1/30}],\"\".concat(a,\"DesertBiomeHeightMap\")),h}return s(n)}(le),de=function(e){re(n,e);var t=he(n);function n(){var e;o(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).cactusChance=.05,e}return s(n)}(fe),pe=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,\"\".concat(a,\"RedDesert\"),s)).topsoilBlockType=i[\"Red Sand\"].id,h.lowsoilBlockType=i[\"Red Sand\"].id,h}return s(n)}(fe),ve=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,\"\".concat(a,\"Plains\"),s)).grassChance=.18,h.flowerPatchDistApart=20,h.forgetMeNotChance=10,h.whiteTulipChance=10,h.orangeTulipChance=10,h.redTulipChance=10,h.dandelionChance=10,h.alliumChance=10,h.watermelonChance=2,h.topsoilBlockType=i[\"Grass Block\"].id,h.lowsoilBlockType=i.Dirt.id,h.treeMinDist=75,h._heightmapSimplex=new D([{amplitude:4,frequency:1/70},{amplitude:2,frequency:1/30}],\"\".concat(a,\"PlainsBiomeHeightMap\")),h}return s(n)}(le),ge=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,a,s)).poppyChance=0,h.daisyChance=0,h.pinkTulipChance=0,h.grassChance=.001,h.forgetMeNotChance=0,h.whiteTulipChance=0,h.orangeTulipChance=0,h.redTulipChance=0,h.dandelionChance=0,h.alliumChance=0,h.watermelonChance=0,h.topsoilBlockType=i.Snow.id,h.topwaterBlockType=i.Ice.id,h}return s(n)}(ve),me=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,\"\".concat(a,\"Forest\"),s)).mapleTreeChance=15,h.aspenTreeChance=1,h.melonChance=3,h.topsoilBlockType=i[\"Grass Block\"].id,h.lowsoilBlockType=i.Dirt.id,h.treeMinDist=6,h._heightmapSimplex=new D([{amplitude:4,frequency:1/70},{amplitude:2,frequency:1/30}],\"\".concat(a,\"ForestBiomeHeightMap\")),h}return s(n)}(le),ye=function(e){re(n,e);var t=he(n);function n(){var e;o(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).pumpkinChance=3,e.melonChance=0,e.aspenTreeChance=0,e.plumTreeChance=1,e}return s(n)}(me),be=function(e){re(n,e);var t=he(n);function n(){var e;o(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).melonChance=3,e.aspenTreeChance=0,e.pearTreeChance=1,e}return s(n)}(me),we=function(e){re(n,e);var t=he(n);function n(){var e;o(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).flowerPatchDistApart=13,e.fallenMapleLeavesChance=80,e.pumpkinChance=3,e.melonChance=0,e.autumnMapleTreeChance=1,e.mapleTreeChance=0,e.aspenTreeChance=0,e}return s(n)}(me),ke=function(e){re(n,e);var t=he(n);function n(){var e;o(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).melonChance=0,e.aspenTreeChance=0,e.mapleTreeChance=0,e.elmTreeChance=15,e.palmTreeChance=1,e}return s(n)}(me),Ce=function(e){re(n,e);var t=he(n);function n(){var e;o(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).melonChance=0,e.mapleTreeChance=0,e.aspenTreeChance=0,e.pineTreeChance=15,e.cedarTreeChance=1,e}return s(n)}(me),Se=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,a,s)).poppyChance=0,h.daisyChance=0,h.pinkTulipChance=0,h.grassChance=.005,h.topsoilBlockType=i.Snow.id,h.topwaterBlockType=i.Ice.id,h}return s(n)}(Ce),_e=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,\"\".concat(a,\"Blue\"),s)).bluebellChance=1,h.melonChance=0,h.flowerPatchDistApart=12,h.poppyChance=0,h.daisyChance=0,h.pinkTulipChance=0,h}return s(n)}(me),xe=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,\"\".concat(a,\"RollingHills\"),s)).topsoilBlockType=i[\"Grass Block\"].id,h.treeMinDist=25,h.offsettedHeight=20,h._heightmapSimplex=new D([{amplitude:20,frequency:.005},{amplitude:4,frequency:1/70}],\"\".concat(a,\"RollingHillsBiomeHeightMap\")),h}return s(n)}(le),Me=function(e){re(n,e);var t=he(n);function n(e,i,r,a,s){var h;return o(this,n),(h=t.call(this,e,i,r,\"\".concat(a,\"SnowyMountains\"),s)).poppyChance=0,h.daisyChance=0,h.pinkTulipChance=0,h.grassChance=0,h.ridgedNoiseAmplitude=void 0,h.ridgedNoiseOctave1=void 0,h.ridgedNoiseOctave2=void 0,h.nonRidgedNoise=void 0,h.treeMinDist=50,h.offsettedHeight=0,h.ridgedNoiseOctave1=new D([{amplitude:80,frequency:.005}],\"\".concat(a,\"SnowyMountainsBiomeRidgedNoise\")),h.ridgedNoiseOctave2=new D([{amplitude:20,frequency:1/120}],\"\".concat(a,\"SnowyMountainsBiomeRidgedNoiseOctave2\")),h.nonRidgedNoise=new D([{amplitude:8,frequency:1/120}],\"\".concat(a,\"SnowyMountainsBiomeNonRidgedNoise\")),h.ridgedNoiseAmplitude=B(h.ridgedNoiseOctave1)+B(h.ridgedNoiseOctave2),h}return s(n,[{key:\"getHeightmapVal\",value:function(e,t){var n=this.ridgedNoiseAmplitude-Math.abs(this.ridgedNoiseOctave1.getOctaves(e,t))-Math.abs(this.ridgedNoiseOctave2.getOctaves(e,t));return this.offsettedHeight+n+this.nonRidgedNoise.getOctaves(e,t)}},{key:\"getTopsoilBlock\",value:function(e,t,n){return t>80?this.blockMetadata.Snow.id:t>60?this.blockMetadata.Stone.id:this.blockMetadata[\"Grass Block\"].id}},{key:\"getLowsoilBlockType\",value:function(e,t,n,i){return t>85&&t>=i-2?this.blockMetadata.Snow.id:t>57?this.blockMetadata.Stone.id:t>53?this.blockMetadata[\"Rocky Dirt\"].id:this.blockMetadata.Dirt.id}}]),n}(le),Pe=function(){function e(t,n,i,a,s,h){o(this,e),this.baseBiome=void 0,this.biomesTotalFrequency=void 0,this.biomes=void 0,this.seed=void 0,this.blockMetadata=void 0,this.chunkSize=void 0,this.mostRecentlyAccessedPtForBiome=[0,0],this.mostRecentlyAccessedBiome=void 0,this.mostRecentlyAccessedModifierPt=[0,0],this.mostRecentlyAccessedModifier=void 0,this.stoneTypes=void 0,this.stonesTotalFrequency=void 0,this.seed=a,this.blockMetadata=h,this.chunkSize=s;var u={oreGenerator:i,cavesGenerator:n};this.baseBiome=new le(s,h,t,a,u);var c=new fe(s,h,t,a,u),l=new de(s,h,t,a,u),f=new pe(s,h,t,a,u),d=new ve(s,h,t,a,u),p=new me(s,h,t,a,u),v=new ye(s,h,t,a,u),g=new be(s,h,t,a,u),m=new Ce(s,h,t,a,u),y=new Se(s,h,t,a,u),b=new ke(s,h,t,a,u),w=new we(s,h,t,a,u),k=new xe(s,h,t,a,u),C=new Me(s,h,t,a,u),S=new _e(s,h,t,a,u),_=new ge(s,h,t,a,u);this.biomes=[{biome:c,frequency:35},{biome:l,frequency:1},{biome:f,frequency:4},{biome:d,frequency:76},{biome:_,frequency:4},{biome:p,frequency:20},{biome:g,frequency:6},{biome:w,frequency:6},{biome:v,frequency:28},{biome:b,frequency:4},{biome:m,frequency:14},{biome:y,frequency:2},{biome:k,frequency:32},{biome:C,frequency:16},{biome:S,frequency:4}],this.biomesTotalFrequency=0;var x,M=r(this.biomes);try{for(M.s();!(x=M.n()).done;){var P=x.value;this.biomesTotalFrequency+=P.frequency,P.biome.init()}}catch(E){M.e(E)}finally{M.f()}this.stoneTypes=[{stoneId:h.Stone.id,frequency:100},{stoneId:h.Andesite.id,frequency:4},{stoneId:h.Diorite.id,frequency:2},{stoneId:h.Granite.id,frequency:1}],this.stonesTotalFrequency=0;var R,T=r(this.stoneTypes);try{for(T.s();!(R=T.n()).done;){var A=R.value;this.stonesTotalFrequency+=A.frequency}}catch(E){T.e(E)}finally{T.f()}}return s(e,[{key:\"_getBiomeForBiomePoint\",value:function(e){if(this.mostRecentlyAccessedBiome&&e[0]===this.mostRecentlyAccessedPtForBiome[0]&&e[1]===this.mostRecentlyAccessedPtForBiome[1])return this.mostRecentlyAccessedBiome;for(var t=new N(\"\".concat(e[0],\"|\").concat(e[1],\"|\").concat(this.seed)),n=Math.floor(t.next()*this.biomesTotalFrequency),i=0,r=0;i<=n;)i+=this.biomes[r].frequency,r++;var o={biome:this.biomes[r-1].biome,biomeId:r-1};return this.mostRecentlyAccessedBiome=o,this.mostRecentlyAccessedPtForBiome[0]=e[0],this.mostRecentlyAccessedPtForBiome[1]=e[1],o}},{key:\"getBiomeModifiersForBiomePoint\",value:function(e){if(this.mostRecentlyAccessedModifier&&e[0]===this.mostRecentlyAccessedModifierPt[0]&&e[1]===this.mostRecentlyAccessedModifierPt[1])return this.mostRecentlyAccessedModifier;for(var t=new N(\"\".concat(e[0],\"|\").concat(e[1],\"|\").concat(this.seed,\"Modifiers\")),n=Math.floor(t.next()*this.stonesTotalFrequency),i=0,r=0;i<=n;)i+=this.stoneTypes[r].frequency,r++;var o={stoneTypeId:this.stoneTypes[r-1].stoneId};return this.mostRecentlyAccessedModifier=o,this.mostRecentlyAccessedModifierPt[0]=e[0],this.mostRecentlyAccessedModifierPt[1]=e[1],o}},{key:\"getBiomeInfoForChunkFill\",value:function(e,t,n){for(var i={biomeIds:new F(this.chunkSize,[e,t]),stoneTypeIds:new F(this.chunkSize,[e,t])},r=e;r<e+this.chunkSize;r++)for(var o=t;o<t+this.chunkSize;o++){var a=n.get(r,o)[0];i.biomeIds.set(r,o,a.biomeId),i.stoneTypeIds.set(r,o,a.biomeModifiers.stoneTypeId)}return i}},{key:\"getBiomeFromId\",value:function(e){return this.biomes[e].biome}}]),e}(),Re=function(){function e(t,n,i,r,a,s,h,u){o(this,e),this.seed=void 0,this.chunkSize=void 0,this.biomeSelector=void 0,this.cavesGenerator=void 0,this.treeGenerator=void 0,this.blockMetadata=void 0,this.oreGenerator=void 0,this.baseBiome=void 0,this.clayGenerator=void 0,this.seed=u,this.chunkSize=t,this.biomeSelector=n,this.cavesGenerator=i,this.treeGenerator=r,this.blockMetadata=a,this.oreGenerator=s,this.baseBiome=h,this.clayGenerator=new W(50,!1,!0,u,4,t,null,!0)}return s(e,[{key:\"fillChunk\",value:function(e,t,n,i,r,o,a,s,h){if(!(n+this.chunkSize<=w.bedrockLevel)){for(var u=-1e4,c=1e4,l=-1e4,f=1e4,d=!1,p=t;p<t+this.chunkSize;p++)for(var v=i;v<i+this.chunkSize;v++){u=Math.max(u,r.groundHeights.get(p,v)),c=Math.min(c,r.groundHeights.get(p,v));var g=r.waterHeights.get(p,v);g!==k&&(d=!0,l=Math.max(l,g),f=Math.min(f,g))}if(u>=n&&c<n+this.chunkSize)for(var m=t;m<t+this.chunkSize;m++)for(var y=i;y<i+this.chunkSize;y++){var b=h.biomeIds.get(m,y),C=this.biomeSelector.getBiomeFromId(b),S=r.groundHeights.get(m,y);S>=n&&S<n+this.chunkSize&&e.set(m-t,S-n,y-i,C.getTopsoilBlock(m,S,y))}if(u+1>=n&&c-4<n+this.chunkSize)for(var _=t;_<t+this.chunkSize;_++)for(var x=i;x<i+this.chunkSize;x++)for(var M=h.biomeIds.get(_,x),R=this.biomeSelector.getBiomeFromId(M),T=r.groundHeights.get(_,x),A=Math.min(T,n+this.chunkSize),E=Math.max(T-4,n);E<A;E++)e.set(_-t,E-n,x-i,R.getLowsoilBlockType(_,E,x,T));if(u-4>=n)for(var O=t;O<t+this.chunkSize;O++)for(var L=i;L<i+this.chunkSize;L++)for(var B=h.stoneTypeIds.get(O,L),D=r.groundHeights.get(O,L),I=Math.min(D-4,n+this.chunkSize),N=n;N<I;N++)e.set(O-t,N-n,L-i,B);if(u-4>=n)for(var F=t;F<t+this.chunkSize;F++)for(var j=i;j<i+this.chunkSize;j++){var z=r.groundHeights.get(F,j),H=s.get(F,j);this.oreGenerator.addOresToColumn(e,F,j,t,n,i,z-4,H)}if(u>=n&&this.cavesGenerator.addCavesToChunk(e,t,n,i,a),w.bedrockLevel>=n&&w.bedrockLevel<n+this.chunkSize)for(var q=t;q<t+this.chunkSize;q++)for(var U=i;U<i+this.chunkSize;U++)e.set(q-t,w.bedrockLevel-n,U-i,this.blockMetadata.Bedrock.id);if(u+this.baseBiome.maxFloraHeight>=n&&c+1<n+this.chunkSize)for(var G=t;G<t+this.chunkSize;G++)for(var W=i;W<i+this.chunkSize;W++){var Y=h.biomeIds.get(G,W),V=this.biomeSelector.getBiomeFromId(Y),K=V.maxFloraHeight,J=r.groundHeights.get(G,W);if(!(J>=n+this.chunkSize||J<n-K))if(r.waterHeights.get(G,W)===k)this.cavesGenerator.isCave(G,J,W,a)||V.floraGenerator.addBiomeFloraToColumn(e,t,i,G,n,W,J)}if(u+this.treeGenerator.maxTreeHeight>=n)for(var X=t;X<t+this.chunkSize;X++)for(var Z=n;Z<n+this.chunkSize;Z++)for(var $=i;$<i+this.chunkSize;$++){var Q=o.get(X,$);if(void 0!==Q){var ee=this.treeGenerator.getTreeBlock(X,Z,$,r.groundHeights,Q);ee&&e.set(X-t,Z-n,$-i,ee)}}if(d&&l>=n)for(var te=t;te<t+this.chunkSize;te++)for(var ne=i;ne<i+this.chunkSize;ne++){var ie=r.waterHeights.get(te,ne);if(ie!==k)for(var re=h.biomeIds.get(te,ne),oe=this.biomeSelector.getBiomeFromId(re),ae=r.groundHeights.get(te,ne),se=Math.min(ie+1,n+this.chunkSize),he=Math.max(ae+1,n);he<se;he++){var ue=he===ie?oe.topwaterBlockType:this.blockMetadata.Water.id;e.set(te-t,he-n,ne-i,ue)}}if(d&&u>=n&&c<n+this.chunkSize)for(var ce=t;ce<t+this.chunkSize;ce++)for(var le=i;le<i+this.chunkSize;le++){var fe=r.waterHeights.get(ce,le),de=r.groundHeights.get(ce,le);if(fe!==k&&de>=n&&de<n+this.chunkSize)if(fe===de)e.set(ce-t,de-n,le-i,this.blockMetadata.Sand.id);else if(P(this.clayGenerator.getClosestPoint(ce,le),ce,le)<100)e.set(ce-t,de-n,le-i,this.blockMetadata.Clay.id),de-1>=n&&e.set(ce-t,de-1-n,le-i,this.blockMetadata.Clay.id),de-2>=n&&e.set(ce-t,de-2-n,le-i,this.blockMetadata.Clay.id);else{var pe=h.biomeIds.get(ce,le),ve=this.biomeSelector.getBiomeFromId(pe);e.set(ce-t,de-n,le-i,ve.getLowsoilBlockType(ce,de,le,de))}}}}}]),e}(),Te=n(1075);function Ae(){return ue}var Ee,Oe,Le=function(){function e(t,n,i,a){o(this,e),this.chunkSize=void 0,this.biomePointGen=void 0,this.treeRadius=2,this.neededOutsideChunkHeightRadius=this.treeRadius,this.treeGenerator=void 0,this.seed=void 0,this.biomeOffsetSimplex=void 0,this.globalHeightmap=void 0,this.heightmapPerturb=void 0,this.cavesGenerator=void 0,this.biomeSelector=void 0,this.waterBodyGenerator=void 0,this.needOutsideWaterDist=15,this.mostRecentlyAccessedChunkColumnPos=[0,0],this.mostRecentlyAccessedChunkColumn=null,this.cachedChunkColumnInfos=void 0,this.chunkFiller=void 0,this.isServer=void 0,ue=a,this.seed=i,this.cachedChunkColumnInfos=new(G())({max:a?400:200,ttl:3e4,updateAgeOnGet:!0}),this.cavesGenerator=new Z(i,t,this.neededOutsideChunkHeightRadius);var s=new ne(n,i,t);this.biomeSelector=new Pe(this,this.cavesGenerator,s,i,t,n),this.treeGenerator=new $(this,this.cavesGenerator,t,i,n),this.chunkSize=t,this.biomePointGen=new W(150,!1,!0,i,3,t),this.biomeOffsetSimplex=new D([{amplitude:1,frequency:.2},{amplitude:5,frequency:1/70}],\"\".concat(i,\"BiomeOffsetSimplex\")),this.globalHeightmap=new D([{amplitude:11,frequency:1/4e3},{amplitude:4,frequency:.001}],\"\".concat(i,\"GlobalHeightmapOffset\")),this.heightmapPerturb=new D([{amplitude:1,frequency:1/14},{amplitude:5,frequency:1/65},{amplitude:20,frequency:.004}],\"\".concat(i,\"HeightmapPerturb\"));var h,u=0,c=r(this.heightmapPerturb.customOctaves);try{for(c.s();!(h=c.n()).done;){u+=h.value.amplitude}}catch(l){c.e(l)}finally{c.f()}this.waterBodyGenerator=new te(this,i,u,this.needOutsideWaterDist),this.chunkFiller=new Re(t,this.biomeSelector,this.cavesGenerator,this.treeGenerator,n,s,this.biomeSelector.baseBiome,i)}return s(e,[{key:\"getChunk\",value:function(e,t,n,i){try{this._getChunk(e,t,n,i);var r=Q.encode(e.data),o=String.fromCharCode.apply(null,r);return{hash:(new Te).update(o).digest(\"hex\")}}catch(a){console.log(a.stack),console.error(a.stack)}}},{key:\"_getChunk\",value:function(e,t,n,i){var r=this.getInfoForChunkColumn(t,i),o=r.biomeInfos,a=r.heightmapVals,s=r.caveInfos,h=r.treeTrunksAroundPoints,u=r.chunkOres;this.chunkFiller.fillChunk(e,t,n,i,a,h,s,u,o)}},{key:\"getInfoForChunkColumn\",value:function(e,t){if(this.mostRecentlyAccessedChunkColumn&&this.mostRecentlyAccessedChunkColumnPos[0]===e&&this.mostRecentlyAccessedChunkColumnPos[1]===t)return this.mostRecentlyAccessedChunkColumn;var n=\"\".concat(e,\"|\").concat(t),i=this.cachedChunkColumnInfos.get(n);if(i)return this.mostRecentlyAccessedChunkColumnPos[0]=e,this.mostRecentlyAccessedChunkColumnPos[1]=t,this.mostRecentlyAccessedChunkColumn=i,i;var r=this._getClosestBiomesForChunk(e,t),o=this.getHeightMapVals(e,t,r),a=this.cavesGenerator.getCaveInfoForChunk(e,t,o),s=this.treeGenerator._getTreeTrunksForBlocksInChunk(e,t,o,r,a),h=r.get(e+Math.floor(this.chunkSize/2),t+Math.floor(this.chunkSize/2))[0].biome.oreGenerator.getOreBlocksForChunk(e,t),u={biomeInfos:this.biomeSelector.getBiomeInfoForChunkFill(e,t,r),heightmapVals:o,caveInfos:a,treeTrunksAroundPoints:s,chunkOres:h};return this.mostRecentlyAccessedChunkColumnPos[0]=e,this.mostRecentlyAccessedChunkColumnPos[1]=t,this.mostRecentlyAccessedChunkColumn=u,this.cachedChunkColumnInfos.set(n,u),u}},{key:\"_getClosestBiomesForChunk\",value:function(e,t){for(var n=new z(this.chunkSize,[e,t],this.neededOutsideChunkHeightRadius),i=e-this.neededOutsideChunkHeightRadius;i<e+this.chunkSize+this.neededOutsideChunkHeightRadius;++i)for(var r=t-this.neededOutsideChunkHeightRadius;r<t+this.chunkSize+this.neededOutsideChunkHeightRadius;++r){var o=this.getClosestBiomes(i,r);n.set(i,r,o)}return n}},{key:\"getClosestBiomes\",value:function(e,t){for(var n=this._getBiomeXOffset(e,t),i=this._getBiomeZOffset(e,t),r=this.biomePointGen.getKClosestPointsWithWeights(e+n,t+i,60),o=[],a=0;a<r.length;a++){var s=r[a],h=this.biomeSelector._getBiomeForBiomePoint(s.pt),u=h.biome,c=h.biomeId,l={weight:s.weight,biome:u,biomeId:c,biomeModifiers:null};0===a&&(l.biomeModifiers=this.biomeSelector.getBiomeModifiersForBiomePoint(s.pt)),o.push(l)}return o}},{key:\"_getBiome\",value:function(e,t){var n=this._getBiomeXOffset(e,t),i=this._getBiomeZOffset(e,t),r=this.biomePointGen.getClosestPoint(e+n,t+i);return this.biomeSelector._getBiomeForBiomePoint(r)}},{key:\"_getBiomeXOffset\",value:function(e,t){return Math.floor(this.biomeOffsetSimplex.getOctaves(e,t))}},{key:\"_getBiomeZOffset\",value:function(e,t){return Math.floor(this.biomeOffsetSimplex.getOctaves(e+500,t+860))}},{key:\"getHeightMapVals\",value:function(e,t,n){for(var i={groundHeights:new F(this.chunkSize,[e,t],this.neededOutsideChunkHeightRadius),waterHeights:new F(this.chunkSize,[e,t],this.neededOutsideChunkHeightRadius),cavesAllowedBelowY:new F(this.chunkSize,[e,t],this.neededOutsideChunkHeightRadius)},r=e-this.neededOutsideChunkHeightRadius;r<e+this.chunkSize+this.neededOutsideChunkHeightRadius;++r)for(var o=t-this.neededOutsideChunkHeightRadius;o<t+this.chunkSize+this.neededOutsideChunkHeightRadius;++o){var a=n.get(r,o),s=Math.floor(this.heightmapPerturb.getOctaves(r,o)),h=Math.floor(this.heightmapPerturb.getOctaves(r+200,o+778)),u=this.getWithWaterHeightmapVal(r+s,o+h,a),c=u.groundHeight,l=u.waterHeight,f=u.cavesAllowedBelowY;i.groundHeights.set(r,o,c),i.waterHeights.set(r,o,l),i.cavesAllowedBelowY.set(r,o,f);var d=Math.min(Math.abs((r-300)%1e3),1e3-Math.abs((r-300)%1e3)),p=Math.min(Math.abs((o-300)%1e3),1e3-Math.abs((o-300)%1e3)),v=Math.max(Math.abs(r),Math.abs(o));(v<50||v>1e4&&Math.max(d,p)<50)&&i.cavesAllowedBelowY.set(r,o,c-15)}return i}},{key:\"getWithWaterHeightmapVal\",value:function(e,t,n){var i=this.getNoWaterHeightmapVal(e,t,n),r=this.waterBodyGenerator.getInfoNeededForWaterGen(e,t),o=r.distFromWater,a=r.waterRadius,s=r.waterHeight,h=r.waterbedHeight,u=r.isLake,c=0,l=k,f=1e4,d=a+this.needOutsideWaterDist;if(o<=d){var p=a+4,v=s+2;if(o<=a){var g=o/a;u?(g*=g*g,c=Math.floor(h+(s-h)*g-2)):(g*=g,c=Math.floor(h+(s-h)*g)),l=s}else if(o<=p){var m=(o-a)/(p-a);c=s+Math.ceil((v-s)*m)}else{var y=(o-p)/(d-p);c=v+Math.ceil((i-v)*y)}f=c-15}else c=i;return{groundHeight:c,waterHeight:l,cavesAllowedBelowY:f}}},{key:\"getNoWaterHeightmapVal\",value:function(e,t,n){var i,o=e,a=t,s=0,h=r(n);try{for(h.s();!(i=h.n()).done;){var u=i.value,c=u.biome,l=u.weight;s+=c.getHeightmapVal(o,a)*l}}catch(d){h.e(d)}finally{h.f()}var f=this.globalHeightmap.getOctaves(o,a);return Math.floor(s)+Math.floor(f)}}]),e}(),Be=n(7786),De={};self.onmessage=function(e){var t=e.data;switch(t.type){case\"workerInit\":Ee=t.chunkSize,Oe=t.blockMetadata;break;case\"createSeed\":De[t.seed]=new Le(Ee,Oe,t.seed,!1);break;case\"deleteSeed\":delete De[t.seed];break;case\"chunk\":var n=t.id,r=t.array;r=Be(new Uint16Array(r.data.buffer),[Ee,Ee,Ee]);var o=i(n.split(\"|\"),4),a=o[0],s=o[1],h=o[2],u=o[3];a=parseInt(a),s=parseInt(s),h=parseInt(h);var c=De[u].getChunk(r,a,s,h),l=[r.data.buffer];self.postMessage({id:n,array:r,metadata:c},l);break;default:console.error(\"Unrecognised data.type\")}}}()}();", "Worker", undefined, r.p + "static/js/procGen.worker.0b63992a.worker.js");
    }
    var _e = r(47786);
    var ye = r(85882);
    function be(e) {
      var t = e.split("|");
      var r = (0, le.Z)(t, 3);
      var i = r[0];
      var n = r[1];
      var o = r[2];
      return [Number(i), Number(n), Number(o)];
    }
    var Ae = he._G.chunkSize;
    var Se = Math.log2(Ae) | 0;
    var Me = Ae - 1 | 0;
    function Ce(e) {
      return e >> Se | 0;
    }
    function xe(e) {
      return [e[0] >> Se | 0, e[1] >> Se | 0, e[2] >> Se | 0];
    }
    function Te(e) {
      return e & Me | 0;
    }
    function Pe(e, t, r) {
      var i = he._G.chunkSize;
      return [Math.floor(e / i) | 0, Math.floor(t / i) | 0, Math.floor(r / i) | 0];
    }
    var Ie = _e(new Uint16Array(Ae * Ae * Ae), [Ae, Ae, Ae]);
    ye.encode(Ie.data);
    ue = Symbol.iterator;
    var Ee;
    var Re;
    var we = function () {
      function e() {
        (0, f.Z)(this, e);
        this.storage = {};
        this.zeroStorage = {};
        this.iteratorArr = [];
      }
      (0, p.Z)(e, [{
        key: "set",
        value: function (e, t, r, i) {
          var n = e & 1023 | (t & 1023) << 10 | (r & 1023) << 20;
          if (Math.abs(e) < 512 && Math.abs(t) < 512 && Math.abs(r) < 512) {
            this.zeroStorage[n] = {
              x: e,
              y: t,
              z: r,
              val: i
            };
          } else {
            var o = e >> 10 & 1023 | (t >> 10 & 1023) << 10 | (r >> 10 & 1023) << 20;
            if (!this.storage[o]) {
              this.storage[o] = {};
            }
            this.storage[o][n] = {
              x: e,
              y: t,
              z: r,
              val: i
            };
          }
        }
      }, {
        key: "get",
        value: function (e, t, r) {
          var i = e & 1023 | (t & 1023) << 10 | (r & 1023) << 20;
          if (Math.abs(e) < 512 && Math.abs(t) < 512 && Math.abs(r) < 512) {
            var n = this.zeroStorage[i];
            if (n === null || n === undefined) {
              return undefined;
            } else {
              return n.val;
            }
          }
          var o = e >> 10 & 1023 | (t >> 10 & 1023) << 10 | (r >> 10 & 1023) << 20;
          if (this.storage[o]) {
            var s = this.storage[o][i];
            if (s === null || s === undefined) {
              return undefined;
            } else {
              return s.val;
            }
          }
        }
      }, {
        key: "remove",
        value: function (e, t, r) {
          var i = e & 1023 | (t & 1023) << 10 | (r & 1023) << 20;
          if (Math.abs(e) < 512 && Math.abs(t) < 512 && Math.abs(r) < 512) {
            delete this.zeroStorage[i];
          } else {
            var n = e >> 10 & 1023 | (t >> 10 & 1023) << 10 | (r >> 10 & 1023) << 20;
            if (this.storage[n]) {
              delete this.storage[n][i];
            }
          }
        }
      }, {
        key: "checkStoredInfo",
        value: function (e, t, r, i) {
          if (!(!i || i.x === e && i.y === t && i.z === r)) {
            console.error(new Error("LocationStorage: storedInfo does not match requested coords. Passed coords ".concat(e, ", ").concat(t, ", ").concat(r, ", existingCoords/storedInfo: ").concat(JSON.stringify(i))).stack);
          }
        }
      }, {
        key: ue,
        value: function () {
          var e = 0;
          e = this.addObjsFromInnerStorage(this.zeroStorage, this.iteratorArr, e);
          for (var t in this.storage) {
            var r = Number(t);
            e = this.addObjsFromInnerStorage(this.storage[r], this.iteratorArr, e);
          }
          this.iteratorArr.length = e;
          return this.iteratorArr.values();
        }
      }, {
        key: "addObjsFromInnerStorage",
        value: function (e, t, r) {
          for (var i in e) {
            t[r++] = e[i];
          }
          return r;
        }
      }]);
      return e;
    }();
    var ke = r(80427);
    var De = r(77604);
    var Be = {};
    var Oe = function (e) {
      return !!Be[e];
    };
    var Fe = false;
    var Le = new fe(N.blockMetadata, function () {
      return new ve();
    });
    var Ne = {};
    function Ue(e) {
      e.worldName = "overworld";
      (0, u.rp)(ke.cU.mapSettings, function (t) {
        var r = t.useWorldGen;
        var i = t.worldGenSeed;
        Ee = r;
        Le.destroySeed(Re);
        Re = i;
        if (Ee) {
          Le.initialiseSeed(i);
        }
        e.world.markAllChunksForRemoval();
        e.world._chunksPending.empty();
        e.world._chunkAddSearchFrom = 0;
        Be = {};
        Ne = {};
        Fe = true;
      });
      e.world.maxChunksPendingCreation = 10;
      e.world.on("worldDataNeeded", function (t, r, i, n, o, s) {
        if (Fe) {
          if (!Ne[t]) {
            Ne[t] = [];
          }
          if (Oe(t)) {
            Ne[t].push({
              id: t,
              array: r,
              x: i,
              y: n,
              z: o,
              worldName: s
            });
            (0, u.Xi)(ke.Vz.needChunk, {
              id: t,
              lastSeen: Be[t].lastSeen,
              hash: null
            });
          } else if (Ee) {
            try {
              Le.threadedGetChunk(Re, r, i, n, o, function (e, r) {
                if (Fe) {
                  Ne[t].push({
                    id: t,
                    array: e,
                    x: i,
                    y: n,
                    z: o,
                    worldName: s
                  });
                  if (!r.hash) {
                    console.error("metadata.hash is", r.hash);
                  }
                  (0, u.Xi)(ke.Vz.needChunk, {
                    id: t,
                    lastSeen: null,
                    hash: r.hash
                  });
                }
              });
            } catch (a) {
              e.logErrorMessage("Error in worldgen", a);
              console.error(a.stack);
            }
          } else {
            Ne[t].push({
              id: t,
              array: r,
              x: i,
              y: n,
              z: o,
              worldName: s
            });
            (0, u.Xi)(ke.Vz.needChunk, {
              id: t,
              lastSeen: null,
              hash: null
            });
          }
        }
      });
      (0, u.rp)(ke.cU.chunk, function (t) {
        try {
          !function (t) {
            var r = Ne[t.id].shift();
            if (t.id !== r.id) {
              console.error("serverResp.id !== noaRequest.id", t.id, r.id);
            }
            if (Ne[t.id].length === 0) {
              delete Ne[t.id];
            }
            var i = be(t.id);
            var n = (0, le.Z)(i, 3);
            var o = n[0];
            var s = n[1];
            var a = n[2];
            if (t.RLEArr) {
              var l = new Uint8Array(t.RLEArr);
              ce.decode(l, r.array.data);
              if (e.world.setChunkData(t.id, r.array, null)) {
                var c = t.sharedBlockData ? JSON.parse(De.inflate(t.sharedBlockData, {
                  to: "string"
                })) : [];
                (0, u.rL)().chunkAdded(o, s, a, r.array, c);
              }
              return;
            }
            var h = [];
            if (Oe(r.id)) {
              d = r.id;
              f = r.array;
              ce.decode(Be[d].blockArr, f.data);
              h = Be[d].sharedBlockData ? JSON.parse(De.inflate(Be[d].sharedBlockData, {
                to: "string"
              })) : [];
            }
            var d;
            var f;
            if (e.world.setChunkData(r.id, r.array, null)) {
              (0, u.rL)().chunkAdded(o, s, a, r.array, h);
            }
          }(t);
        } catch (r) {
          console.error("err in processChunk func\n", r.stack);
          e.logErrorMessage("Error in worldgen processChunk func", r);
        }
      });
      e.world.on("chunkBeingRemoved", function (e, r, i) {
        var n = be(e);
        var o = (0, le.Z)(n, 3);
        var s = o[0];
        var a = o[1];
        var l = o[2];
        if (!t && Fe) {
          (function (e, t, r) {
            if (!Be[e]) {
              Be[e] = {
                blockArr: null,
                lastSeen: null,
                sharedBlockData: null
              };
            }
            Be[e].blockArr = ce.encode(t.data);
            Be[e].lastSeen = Date.now();
            Be[e].sharedBlockData = r.length > 0 ? De.deflate(JSON.stringify(r)) : null;
          })(e, r, (0, u.rL)().blockDataOwner.getSharedBlockArr(s, a, l));
        }
        (0, u.rL)().removingChunk(s, a, l, false);
      });
      (0, u.rp)(ke.cU.blockChanged, function (e) {
        var t = e.newId;
        var r = e.pos;
        (0, u.rL)().setBlock(r[0], r[1], r[2], t);
      });
      var t = false;
      (0, u.rp)(ke.cU.resetMap, function () {
        Be = {};
        t = true;
        e.world.markAllChunksForRemoval();
        t = false;
      });
      (0, u.rp)(ke.cU.resetChunk, function (r) {
        var i = be(r);
        var n = (0, le.Z)(i, 3);
        var o = n[0];
        var s = n[1];
        var a = n[2];
        var l = he.ZP.chunkSize;
        t = true;
        var c = {
          base: [o * l, s * l, a * l],
          max: [o * l + 1, s * l + 1, a * l + 1]
        };
        e.world.invalidateVoxelsInAABB(c);
        t = false;
        (0, u.rL)().removingChunk(o, s, a, false);
        delete Be[r];
      });
      var n;
      var s = e.rendering.getScene();
      window.enablePerfInstru = (0, i.Z)(o().mark(function e() {
        var t;
        return o().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return Promise.resolve().then(r.bind(r, 23257));
              case 2:
                e.t0 = e.sent.SceneInstrumentation;
                e.t1 = s;
                n = new e.t0(e.t1);
                t = {};
                s.registerBeforeRender(function () {
                  s.meshes.forEach(function (e) {
                    e.onBeforeDraw = function () {
                      if (t[e.name]) {
                        t[e.name]++;
                      } else {
                        t[e.name] = 1;
                      }
                    };
                  });
                  window.drawCounts = t;
                  window.totalDrawCount = Object.values(t).reduce(function (e, t) {
                    return e + t;
                  }, 0);
                  t = {};
                });
              case 7:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      window.capturePerfInfo = function () {
        n.captureActiveMeshesEvaluationTime = true;
        n.captureRenderTargetsRenderTime = true;
        n.captureFrameTime = true;
        n.captureRenderTime = true;
        n.captureInterFrameTime = true;
        n.captureParticlesRenderTime = true;
        n.captureSpritesRenderTime = true;
        n.capturePhysicsTime = true;
        n.captureCameraRenderTime = true;
      };
      window.logPerfInfo = function () {
        console.log({
          activeMeshesEvaluationTimeCounter: n.activeMeshesEvaluationTimeCounter,
          renderTargetsRenderTimeCounter: n.renderTargetsRenderTimeCounter,
          drawCallsCounter: n.drawCallsCounter,
          frameTimeCounter: n.frameTimeCounter,
          renderTimeCounter: n.renderTimeCounter,
          interFrameTimeCounter: n.interFrameTimeCounter,
          particlesRenderTimeCounter: n.particlesRenderTimeCounter,
          spritesRenderTimeCounter: n.spritesRenderTimeCounter,
          physicsTimeCounter: n.physicsTimeCounter,
          cameraRenderTimeCounter: n.cameraRenderTimeCounter
        });
      };
      window.disablePerfInfo = function () {
        var e = new pe.SceneInstrumentation(s);
        e.captureActiveMeshesEvaluationTime = false;
        e.captureRenderTargetsRenderTime = false;
        e.captureFrameTime = false;
        e.captureRenderTime = false;
        e.captureInterFrameTime = false;
        e.captureParticlesRenderTime = false;
        e.captureSpritesRenderTime = false;
        e.capturePhysicsTime = false;
        e.captureCameraRenderTime = false;
      };
      window.printDrawcalls = function () {
        console.log(n.drawCallsCounter.current);
      };
    }
    var Ge = r(85853);
    var We = r(38172);
    var je = r(41494);
    function ze(e) {
      !function (e) {
        var t = r(71173);
        t.keys().forEach(function (r) {
          var i = /\.\/(.*)\.(js|ts)/.exec(r)[1];
          var n = t(r);
          if (n.default) {
            n = n.default;
          }
          var o = n(e);
          var s = e.entities.createComponent(o);
          e.ents.names[i] = s;
        });
        var i = e.entities;
        i.getGenericPlayerState = i.getStateAccessor("genericPlayerState");
        var n = i.getStateAccessor("heldItem");
        i.getHeldItemState = n;
        i.getHeldItem = function (e) {
          return n(e).heldItem;
        };
        i.getPlayerMeshState = i.getStateAccessor("playerMesh");
        i.getHitboxState = i.getStateAccessor("hitbox");
        var o = i.getStateAccessor("receivesInputs");
        i.getReceivesInputs = function () {
          return o(e.playerEntity);
        };
      }(e);
      (function (e) {
        e.blockTargetIdCheck = function (t) {
          return t !== 0 && !e.registry.getBlockFluidity(t);
        };
        var t = e.entities;
        t.getMovement = t.getStateAccessor("movement");
        t.getMoveState = t.getStateAccessor("moveState");
        var r = t.getStateAccessor("inventory");
        t.getInventoryState = r;
        t.getInventory = function (e) {
          return r(e).inventory;
        };
        t.getInvenOps = function (e) {
          return r(e).opWrapper;
        };
        t.hasInventory = t.getComponentAccessor("inventory");
      })(e);
    }
    var Ve = r(93433);
    var He = r(20306);
    var qe = r(38017);
    var Ze = qe.blockIdToName;
    var Ke = qe.blockMetadata;
    var Ye = function () {
      function e(t, r) {
        (0, f.Z)(this, e);
        this.noa = undefined;
        this.bloxd = undefined;
        this.noa = t;
        this.bloxd = r;
      }
      (0, p.Z)(e, [{
        key: "playerCanPlaceItem",
        value: function (e, t, r, i, n) {
          if (!(n in He.E)) {
            console.error("Called for non multiblock ".concat(n));
            return false;
          }
          var o;
          var s = (0, b.Z)(He.E[n].positions);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var a = o.value;
              var u = a.block;
              var l = a.x;
              var c = a.y;
              var h = a.z;
              var d = this.bloxd.getBlock(t + l, r + c, i + h);
              if (this.noa.blockTargetIdCheck(d) || !this.bloxd.playerCanChangePos(e, t + l, r + c, i + h, Ke[u].id)) {
                return false;
              }
            }
          } catch (f) {
            s.e(f);
          } finally {
            s.f();
          }
          return true;
        }
      }, {
        key: "getPositionsIfMultiblock",
        value: function (e, t) {
          var r;
          var i = [];
          var n = (0, b.Z)(He.E[t].positions);
          try {
            for (n.s(); !(r = n.n()).done;) {
              var o = r.value;
              o.block;
              var s = o.x;
              var a = o.y;
              var u = o.z;
              i.push([e[0] + s, e[1] + a, e[2] + u]);
            }
          } catch (l) {
            n.e(l);
          } finally {
            n.f();
          }
          return i;
        }
      }, {
        key: "setBlock",
        value: function (e, t, r, i) {
          var n = Ze(this.bloxd.getBlock(e, t, r));
          if (n in He.a) {
            var o;
            var s = He.a[n];
            var a = s.mainMultiblock;
            var u = s.compX;
            var l = s.compY;
            var c = s.compZ;
            var h = (0, b.Z)(He.E[a].positions);
            try {
              for (h.s(); !(o = h.n()).done;) {
                var d = o.value;
                var f = d.x;
                var p = d.y;
                var m = d.z;
                this.bloxd.setBlockNoMulti(e + f - u, t + p - l, r + m - c, 0);
              }
            } catch (x) {
              h.e(x);
            } finally {
              h.f();
            }
          }
          var g = Ze(i);
          if (g in He.E) {
            var v;
            var _ = (0, b.Z)(He.E[g].positions);
            try {
              for (_.s(); !(v = _.n()).done;) {
                var y = v.value;
                var A = y.block;
                var S = y.x;
                var M = y.y;
                var C = y.z;
                this.bloxd.setBlockNoMulti(e + S, t + M, r + C, Ke[A].id);
              }
            } catch (x) {
              _.e(x);
            } finally {
              _.f();
            }
          } else {
            this.bloxd.setBlockNoMulti(e, t, r, i);
          }
        }
      }]);
      return e;
    }();
    var Xe = r(47077);
    var Qe = r.n(Xe);
    var Je = function () {
      function e(t, r) {
        (0, f.Z)(this, e);
        this.noa = undefined;
        this.bloxd = undefined;
        this.currMapName = undefined;
        this.storage = new we();
        this.noa = t;
        this.bloxd = r;
      }
      (0, p.Z)(e, [{
        key: "chunkAdded",
        value: function (e, t, r, i) {
          if (this.storage.get(e, t, r)) {
            console.error(new Error("adding chunk x y z ".concat(e, " ").concat(t, " ").concat(r, " to dataowner that already exists")).stack);
          }
          this.storage.set(e, t, r, {});
          var n;
          var o;
          var s = (0, b.Z)(i);
          try {
            for (s.s(); !(n = s.n()).done;) {
              var a = n.value;
              var u = a.pos;
              var l = a.data;
              var c = a.persisted;
              if (u[0] > 31 || u[1] > 31 || u[2] > 31 || u[0] < 0 || u[1] < 0 || u[2] < 0) {
                u = [(o = u)[0] & Me | 0, o[1] & Me | 0, o[2] & Me | 0];
              }
              this.storage.get(e, t, r)["".concat(u[0], "|").concat(u[1], "|").concat(u[2])] = l !== null && l !== undefined ? l : {
                persisted: c
              };
            }
          } catch (h) {
            s.e(h);
          } finally {
            s.f();
          }
        }
      }, {
        key: "getPersistedBlockArr",
        value: function (e, t, r) {
          var i = [];
          var n = this.storage.get(e, t, r);
          for (var o in n) {
            var s = o.split("|");
            var a = (0, le.Z)(s, 3);
            var u = a[0];
            var l = a[1];
            var c = a[2];
            if (n[o].persisted !== undefined) {
              var h = [Number(u), Number(l), Number(c)];
              i.push({
                pos: h,
                persisted: n[o].persisted
              });
            }
          }
          return i;
        }
      }, {
        key: "getSharedBlockArr",
        value: function (e, t, r) {
          var i = [];
          var n = this.storage.get(e, t, r);
          for (var o in n) {
            var s = o.split("|");
            var a = (0, le.Z)(s, 3);
            var l = a[0];
            var c = a[1];
            var h = a[2];
            var d = [Number(l), Number(c), Number(h)];
            if ((0, u.Rw)(n[o])) {
              console.error("ChunkInfo block at local pos", o, "was nullish:", n[o]);
            } else {
              var f = this.getSharedDataForBlock(d[0], d[1], d[2], n[o]);
              if (f) {
                i.push({
                  pos: d,
                  data: f
                });
              }
            }
          }
          return i;
        }
      }, {
        key: "removingChunk",
        value: function (e, t, r, i) {
          var n = this.storage.get(e, t, r);
          var o = [e * he.ZP.chunkSize, t * he.ZP.chunkSize, r * he.ZP.chunkSize];
          for (var s in n) {
            var a = s.split("|");
            var u = [Number(a[0]), Number(a[1]), Number(a[2])];
            var l = Qe().add([0, 0, 0], u, o);
            var c = this.bloxd.getBlock(l[0], l[1], l[2]);
            this.bloxd.onBlockRemoved(l[0], l[1], l[2], c, i);
          }
          this.storage.remove(e, t, r);
        }
      }, {
        key: "blockChanged",
        value: function (e, t, r) {
          var i = Ce(e);
          var n = Ce(t);
          var o = Ce(r);
          var s = this.storage.get(i, n, o);
          if (s) {
            var a = Te(e);
            var u = Te(t);
            var l = Te(r);
            delete s["".concat(a, "|").concat(u, "|").concat(l)];
          }
        }
      }, {
        key: "getBlockData",
        value: function (e, t, r) {
          var i = Ce(e);
          var n = Ce(t);
          var o = Ce(r);
          var s = Te(e);
          var a = Te(t);
          var u = Te(r);
          return this.storage.get(i, n, o)["".concat(s, "|").concat(a, "|").concat(u)];
        }
      }, {
        key: "setBlockData",
        value: function (e, t, r, i) {
          var n = Ce(e);
          var o = Ce(t);
          var s = Ce(r);
          var a = this.storage.get(n, o, s);
          var u = Te(e);
          var l = Te(t);
          var c = Te(r);
          if (a) {
            if (i !== undefined) {
              var h = [e, t, r];
              var d = this.getSharedDataForBlock(e, t, r, i);
              if (!this.bloxd.isClient && d) {
                this.bloxd.room.api.flushOptimisedSetBlocks();
                this.bloxd.room.broadcast(ke.cU.setBlockData, {
                  pos: h,
                  data: d
                });
                var f = this.bloxd.getBlock(e, t, r);
                this.bloxd.room.map.setBlock(h[0], h[1], h[2], f);
              }
              a["".concat(u, "|").concat(l, "|").concat(c)] = i;
            } else {
              delete a["".concat(u, "|").concat(l, "|").concat(c)];
            }
          }
        }
      }, {
        key: "getSharedDataForBlock",
        value: function (e, t, r, i) {
          var n;
          var o = i !== null && i !== undefined ? i : this.getBlockData(e, t, r);
          if ((o === null || o === undefined || (n = o.persisted) === null || n === undefined ? undefined : n.shared) !== undefined) {
            return o;
          }
        }
      }]);
      return e;
    }();
    var $e = r(4942);
    r(4088);
    r(47786);
    var et;
    var tt;
    var rt = function () {
      function e(t) {
        (0, f.Z)(this, e);
        this.a = undefined;
        for (var r = 2166136261, i = 0; i < t.length; i++) {
          r = Math.imul(r ^ t.charCodeAt(i), 16777619);
        }
        this.a = r;
      }
      (0, p.Z)(e, [{
        key: "next",
        value: function () {
          var e = this.a += 1831565813;
          e = Math.imul(e ^ e >>> 15, e | 1);
          return (((e ^= e + Math.imul(e ^ e >>> 7, e | 61)) ^ e >>> 14) >>> 0) / 4294967296;
        }
      }]);
      return e;
    }();
    !function (e) {
      e[e.Maple = 0] = "Maple";
      e[e.Pine = 1] = "Pine";
      e[e.Plum = 2] = "Plum";
      e[e.Cedar = 4] = "Cedar";
      e[e.Aspen = 5] = "Aspen";
      e[e.Elm = 6] = "Elm";
      e[e.Palm = 7] = "Palm";
      e[e.AutumnMaple = 8] = "AutumnMaple";
      e[e.Pear = 9] = "Pear";
    }(et || (et = {}));
    var it = [N.default["Aspen Sapling"].id, N.default["Maple Sapling"].id, N.default["Elm Sapling"].id, N.default["Plum Sapling"].id, N.default["Pine Sapling"].id, N.default["Cedar Sapling"].id, N.default["Palm Sapling"].id, N.default["Pear Sapling"].id, N.default["Dry Fat Cactus"].id, N.default["Dirt|GrassRoots"].id, N.default["Wheat Seeds"].id, N.default.Wheat_stage1.id, N.default.Wheat_stage2.id, N.default.Wheat_stage3.id, N.default.Wheat_stage4.id, N.default.Wheat_stage5.id];
    tt = {};
    (0, $e.Z)(tt, N.default["Wheat Seeds"].id, {
      into: "Wheat_stage1",
      duration: 35000
    });
    (0, $e.Z)(tt, N.default.Wheat_stage1.id, {
      into: "Wheat_stage2",
      duration: 35000
    });
    (0, $e.Z)(tt, N.default.Wheat_stage2.id, {
      into: "Wheat_stage3",
      duration: 35000
    });
    (0, $e.Z)(tt, N.default.Wheat_stage3.id, {
      into: "Wheat_stage4",
      duration: 35000
    });
    (0, $e.Z)(tt, N.default.Wheat_stage4.id, {
      into: "Wheat_stage5",
      duration: 35000
    });
    (0, $e.Z)(tt, N.default.Wheat_stage5.id, {
      into: "Wheat|FreshlyGrown",
      duration: 35000
    });
    var nt = tt;
    var ot = function () {
      function e(t, r) {
        var i = this;
        (0, f.Z)(this, e);
        this.chunkInfos = new we();
        this.lastTickCheck = 0;
        this.tickableIds = undefined;
        this.gameTickableCbs = undefined;
        this.playerLastTicks = Object.create(null);
        this.bloxd = undefined;
        this.room = undefined;
        this.bloxd = t;
        this.room = r;
        this.tickableIds = [false];
        this.gameTickableCbs = {};
        var n;
        var o = function (e) {
          for (; e > i.tickableIds.length;) {
            i.tickableIds[i.tickableIds.length] = false;
          }
          i.tickableIds[e] = true;
        };
        var s = (0, b.Z)(it);
        try {
          for (s.s(); !(n = s.n()).done;) {
            var a = n.value;
            o(a);
          }
        } catch (h) {
          s.e(h);
        } finally {
          s.f();
        }
        var u;
        var l = function (e) {
          var t;
          var r;
          var n = (0, b.Z)((t = e === null || e === undefined ? undefined : e.tickableBlocks) !== null && t !== undefined ? t : []);
          try {
            for (n.s(); !(r = n.n()).done;) {
              var s;
              var a = r.value;
              var u = a.name;
              var l = a.cb;
              var c = (0, N.blockNameToId)(u);
              o(c);
              var d = (s = i.gameTickableCbs[c]) !== null && s !== undefined ? s : [];
              d.push(l);
              i.gameTickableCbs[c] = d;
            }
          } catch (h) {
            n.e(h);
          } finally {
            n.f();
          }
        };
        var c = (0, b.Z)(this.room.game.plugins);
        try {
          for (c.s(); !(u = c.n()).done;) {
            l(u.value);
          }
        } catch (h) {
          c.e(h);
        } finally {
          c.f();
        }
        l(this.room.game);
      }
      (0, p.Z)(e, [{
        key: "chunkAdded",
        value: function (e, t, r, i) {
          if (this.chunkInfos.get(e, t, r)) {
            console.error(new Error("adding ticker to chunk that already exists").stack);
          }
          var n = {
            lastTick: 0,
            tickablePos: null
          };
          this.chunkInfos.set(e, t, r, n);
          for (var o = [], s = he.ZP.chunkSize, a = e * s, u = t * s, l = r * s, c = 0; c < i.data.length; c++) {
            var h = i.data[c];
            if (this.tickableIds[h]) {
              var d = (c / i.stride[0] | 0) % s;
              var f = (c / i.stride[1] | 0) % s;
              var p = (c / i.stride[2] | 0) % s;
              o.push([a + d, u + f, l + p]);
            }
          }
          n.tickablePos = o;
        }
      }, {
        key: "blockUpdated",
        value: function (e, t, r, i, n) {
          if (!this.tickableIds[i] && this.tickableIds[n]) {
            var o = Ce(e);
            var s = Ce(t);
            var a = Ce(r);
            this.chunkInfos.get(o, s, a).tickablePos.push([e, t, r]);
          }
          if (this.tickableIds[i] && !this.tickableIds[n]) {
            for (var u = Ce(e), l = Ce(t), c = Ce(r), h = this.chunkInfos.get(u, l, c).tickablePos, d = 0; d < h.length; d++) {
              if (h[d][0] === e && h[d][1] === t && h[d][2] === r) {
                h.splice(d, 1);
                break;
              }
            }
          }
        }
      }, {
        key: "removingChunk",
        value: function (e, t, r) {
          this.chunkInfos.remove(e, t, r);
        }
      }, {
        key: "tick",
        value: function () {
          if (!(Date.now() - this.lastTickCheck < 1000)) {
            this.lastTickCheck = Date.now();
            var e;
            var t = this.room.api.getPlayerIds();
            var r = (0, b.Z)(t);
            try {
              for (r.s(); !(e = r.n()).done;) {
                var i = e.value;
                if (!this.playerLastTicks[i]) {
                  this.playerLastTicks[i] = {
                    hasNearbyTickables: false,
                    lastTick: 0
                  };
                }
              }
            } catch (S) {
              r.e(S);
            } finally {
              r.f();
            }
            for (var n in this.playerLastTicks) {
              if (!t.includes(n)) {
                delete this.playerLastTicks[n];
              }
            }
            var o;
            var s = (0, b.Z)(t);
            try {
              for (s.s(); !(o = s.n()).done;) {
                var a = o.value;
                var u = this.playerLastTicks[a];
                var l = u.hasNearbyTickables;
                var c = u.lastTick;
                var h = l ? 5000 : 10000;
                if (!(Date.now() - c < h)) {
                  this.playerLastTicks[a].lastTick = Date.now();
                  for (var d = xe(this.room.api.getPosition(a)), f = (0, le.Z)(d, 3), p = f[0], m = f[1], g = f[2], v = p - 5; v <= p + 5; v++) {
                    for (var _ = m - 2; _ <= m + 2; _++) {
                      for (var y = g - 5; y <= g + 5; y++) {
                        var A = this.chunkInfos.get(v, _, y);
                        if ((A === null || A === undefined ? undefined : A.tickablePos.length) > 0 && Date.now() - A.lastTick > 5000 && this.bloxd.hasChunkWithBlockCoordinates(v * he.ZP.chunkSize, _ * he.ZP.chunkSize, y * he.ZP.chunkSize)) {
                          A.lastTick = Date.now();
                          this.tickChunk(v, _, y);
                          this.playerLastTicks[a].hasNearbyTickables = true;
                        }
                      }
                    }
                  }
                }
              }
            } catch (S) {
              s.e(S);
            } finally {
              s.f();
            }
          }
        }
      }, {
        key: "tickChunk",
        value: function (e, t, r) {
          var i;
          var n = this.chunkInfos.get(e, t, r).tickablePos;
          var o = (0, b.Z)(n);
          try {
            for (o.s(); !(i = o.n()).done;) {
              var s = (0, le.Z)(i.value, 3);
              var a = s[0];
              var u = s[1];
              var l = s[2];
              var c = this.room.getBlock(a, u, l);
              if (this.tickableIds[c]) {
                var h = N.default[c].name;
                var d = false;
                if (this.gameTickableCbs[c]) {
                  var f;
                  var p = (0, b.Z)(this.gameTickableCbs[c]);
                  try {
                    for (p.s(); !(f = p.n()).done;) {
                      var m = f.value;
                      d = true;
                      m(a, u, l, h);
                    }
                  } catch (_) {
                    p.e(_);
                  } finally {
                    p.f();
                  }
                }
                var g = h.split(" ");
                if (g[g.length - 1] === "Sapling") {
                  this.tickSapling(a, u, l, c);
                } else if (h === "Dry Fat Cactus") {
                  this.tickDryFatCactus(a, u, l, c);
                } else if (h === "Dirt|GrassRoots") {
                  this.tickDirtGrassRoots(a, u, l, c);
                } else if (nt[c]) {
                  this.tickGrowable(a, u, l, c);
                } else if (!d) {
                  console.error("Ticked unexpected block", a, u, l, c, h);
                }
              } else {
                var v;
                console.error("pos ".concat(a, " ").concat(u, " ").concat(l, " was stored in chunk with x y z ").concat(e, " ").concat(t, " ").concat(r, ". but ").concat(c, " ").concat((v = N.default[c]) === null || v === undefined ? undefined : v.name, " is not tickable"));
              }
            }
          } catch (_) {
            o.e(_);
          } finally {
            o.f();
          }
        }
      }, {
        key: "tickSapling",
        value: function (e, t, r, i) {
          var n;
          var o = this.bloxd.blockDataOwner.getBlockData(e, t, r);
          if (((n = o) === null || n === undefined ? undefined : n.growTime) === undefined) {
            o = (0, A.Z)((0, A.Z)({}, o), {}, {
              growTime: Date.now() + 70000
            });
            this.bloxd.blockDataOwner.setBlockData(e, t, r, o);
          }
          if (Date.now() > o.growTime) {
            var s;
            var a;
            var u = new rt("".concat(Date.now() + e + r));
            var l = this.room.map.worldGenerator.treeGenerator.getRandTreeInfo(u);
            var c = l.height;
            l.vineDir;
            var h = (0, N.blockIdToName)(i).split(" ")[0];
            var d = {
              pos: [e, r],
              height: c,
              vineDir: -1,
              treeType: et[h]
            };
            var f = this.room.map.worldGenerator.treeGenerator.getAllBlocksForTree(t, d);
            var p = (0, b.Z)(f);
            try {
              for (p.s(); !(a = p.n()).done;) {
                var m;
                var g = a.value;
                var v = g.x;
                var _ = g.y;
                var y = g.z;
                var S = g.id;
                if (this.room.getBlock([v, _, y]) === 0 || v === e && _ === t && y === r) {
                  this.room.attemptWorldChangeBlock((m = o.persisted) === null || m === undefined ? undefined : m.planterDbId, v, _, y, S);
                }
              }
            } catch (M) {
              p.e(M);
            } finally {
              p.f();
            }
            if (this.room.getBlock([e, t, r]) === i) {
              this.room.setBlock([e, t, r], 0);
            } else if ((s = o.persisted) !== null && s !== undefined && s.planterDbId) {
              this.bloxd.blockDataOwner.setBlockData(e, t, r, {
                persisted: {
                  planterDbId: o.persisted.planterDbId
                }
              });
            }
          }
        }
      }, {
        key: "tickGrowable",
        value: function (e, t, r, i) {
          var n = this.bloxd.blockDataOwner.getBlockData(e, t, r);
          var o = nt[i];
          var s = o.into;
          var a = o.duration;
          if (!n) {
            var u = a;
            if (!(this.room.getBlock([e, t - 1, r]) === N.default["Tilled Soil"].id)) {
              u *= 1.3;
            }
            n = {
              growTime: Date.now() + u
            };
            this.bloxd.blockDataOwner.setBlockData(e, t, r, n);
          }
          if (Date.now() > n.growTime) {
            this.room.api.setBlock([e, t, r], s);
          }
        }
      }, {
        key: "tickDryFatCactus",
        value: function (e, t, r, i) {
          var n = this;
          var o = this.bloxd.blockDataOwner.getBlockData(e, t, r);
          if (!o) {
            o = {
              hydrateTime: Date.now() + 45000
            };
            this.bloxd.blockDataOwner.setBlockData(e, t, r, o);
          }
          if (Date.now() > o.hydrateTime) {
            if (!function () {
              for (var i = -1; i >= -5; i--) {
                var o = n.bloxd.room.getBlock([e, t + i, r]);
                if (o === N.UNLOADED_ID) {
                  return true;
                }
                if (!at.includes(o)) {
                  return st.includes(o);
                }
              }
              return false;
            }()) {
              this.room.api.setBlock([e, t, r], "Fat Cactus|Growing");
            } else {
              o.hydrateTime = Date.now() + 45000;
            }
          }
        }
      }, {
        key: "tickDirtGrassRoots",
        value: function (e, t, r, i) {
          var n = this;
          var o = this.bloxd.blockDataOwner.getBlockData(e, t, r);
          if (!o) {
            o = {
              regrowTime: Date.now() + 45000
            };
            this.bloxd.blockDataOwner.setBlockData(e, t, r, o);
          }
          if (Date.now() > o.regrowTime) {
            if (!function () {
              for (var i = 1; i <= 3; i++) {
                var o = n.bloxd.room.getBlock([e, t + i, r]);
                if (o && n.bloxd.noa.registry.getBlockSolidity(o)) {
                  return false;
                }
              }
              return true;
            }()) {
              this.room.api.setBlock([e, t, r], "Dirt");
            } else {
              this.room.api.setBlock([e, t, r], "Grass Block");
            }
          }
        }
      }]);
      return e;
    }();
    var st = [N.default.Stone.id, N.default["Messy Stone"].id, N.default.Diorite.id, N.default.Andesite.id, N.default.Granite.id];
    var at = [N.default["Fat Cactus"].id, N.default["Dry Fat Cactus"].id, N.default["Fat Cactus|Growing"].id];
    var ut = r(57906);
    var lt = ["Maple Log", "Aspen Log", "Plum Log", "Elm Log", "Pine Log", "Cedar Log", "Palm Log", "Pear Log"];
    var ct = ["Maple Wood Planks", "Aspen Wood Planks", "Plum Wood Planks", "Elm Wood Planks", "Pine Wood Planks", "Cedar Wood Planks", "Palm Wood Planks", "Pear Wood Planks"];
    var ht = ["Maple Leaves", "Aspen Leaves", "Plum Leaves", "Elm Leaves", "Pine Leaves", "Cedar Leaves", "Palm Leaves", "Pear Leaves"];
    var dt = ["Messy Stone", "Stone", "Diorite", "Andesite", "Granite"];
    var ft = ["Poppy", "Red Tulip"];
    var pt = ["Tall Grass", "Cactus"];
    var mt = (0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)((0, A.Z)({
      "Maple Wood Planks": [{
        requires: [{
          items: ["Maple Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Aspen Wood Planks": [{
        requires: [{
          items: ["Aspen Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Plum Wood Planks": [{
        requires: [{
          items: ["Plum Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Elm Wood Planks": [{
        requires: [{
          items: ["Elm Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Pine Wood Planks": [{
        requires: [{
          items: ["Pine Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Cedar Wood Planks": [{
        requires: [{
          items: ["Cedar Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Palm Wood Planks": [{
        requires: [{
          items: ["Palm Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Pear Wood Planks": [{
        requires: [{
          items: ["Pear Log"],
          amt: 1
        }],
        produces: 4
      }],
      "Wood Sword": [{
        requires: [{
          items: ct,
          amt: 3
        }],
        produces: 1
      }],
      "Stone Sword": [{
        requires: [{
          items: dt,
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Sword": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Sword": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Sword": [{
        requires: [{
          items: ["Diamond"],
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      Stick: [{
        requires: [{
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Pickaxe": [{
        requires: [{
          items: ct,
          amt: 4
        }],
        produces: 1
      }],
      "Stone Pickaxe": [{
        requires: [{
          items: dt,
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Pickaxe": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Pickaxe": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Pickaxe": [{
        requires: [{
          items: ["Diamond"],
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Moonstone Pickaxe": [{
        requires: [{
          items: ["Moonstone"],
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Axe": [{
        requires: [{
          items: ct,
          amt: 4
        }],
        produces: 1
      }],
      "Stone Axe": [{
        requires: [{
          items: dt,
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Axe": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Axe": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Axe": [{
        requires: [{
          items: ["Diamond"],
          amt: 3
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Spade": [{
        requires: [{
          items: ct,
          amt: 2
        }],
        produces: 1
      }],
      "Stone Spade": [{
        requires: [{
          items: dt,
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Spade": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Spade": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Spade": [{
        requires: [{
          items: ["Diamond"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Hoe": [{
        requires: [{
          items: ct,
          amt: 2
        }],
        produces: 1
      }],
      "Stone Hoe": [{
        requires: [{
          items: dt,
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Hoe": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Hoe": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Hoe": [{
        requires: [{
          items: ["Diamond"],
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Bow": [{
        requires: [{
          items: ct,
          amt: 3
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }],
        produces: 1
      }],
      "Stone Bow": [{
        requires: [{
          items: dt,
          amt: 3
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Bow": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 3
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Bow": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 3
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Bow": [{
        requires: [{
          items: ["Diamond"],
          amt: 3
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Crossbow": [{
        requires: [{
          items: ct,
          amt: 4
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }, {
          items: ["Iron Bar"],
          amt: 2
        }],
        produces: 1
      }],
      "Stone Crossbow": [{
        requires: [{
          items: dt,
          amt: 4
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }, {
          items: ["Iron Bar"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Crossbow": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 6
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Crossbow": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 4
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }, {
          items: ["Iron Bar"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Crossbow": [{
        requires: [{
          items: ["Diamond"],
          amt: 4
        }, {
          items: ht,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 2
        }, {
          items: ["Iron Bar"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      Arrow: [{
        requires: [{
          items: dt,
          amt: 1
        }, {
          items: ["Stick"],
          amt: 1
        }],
        produces: 2,
        station: "Workbench"
      }],
      Shears: [{
        requires: [{
          items: ["Iron Bar"],
          amt: 2
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      Workbench: [{
        requires: [{
          items: ct,
          amt: 4
        }],
        produces: 1
      }],
      Coal: [{
        requires: [{
          items: ["Block of Coal"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Coal Ore"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Furnace"
      }],
      "Iron Bar": [{
        requires: [{
          items: ["Iron Ore"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 1,
        station: "Furnace"
      }, {
        requires: [{
          items: ["Block of Iron"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Iron Watermelon"],
          amt: 1
        }],
        produces: 128,
        station: "Workbench"
      }],
      "Gold Bar": [{
        requires: [{
          items: ["Gold Ore"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 1,
        station: "Furnace"
      }, {
        requires: [{
          items: ["Block of Gold"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }],
      Diamond: [{
        requires: [{
          items: ["Block of Diamond"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Diamond Ore"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Furnace"
      }],
      Moonstone: [{
        requires: [{
          items: ["Block of Moonstone"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Moonstone Ore"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Furnace"
      }],
      "Compressed Messy Stone": [{
        requires: [{
          items: ["Messy Stone"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Extra Compressed Messy Stone"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }],
      "Extra Compressed Messy Stone": [{
        requires: [{
          items: ["Compressed Messy Stone"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Super Compressed Messy Stone"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }],
      "Super Compressed Messy Stone": [{
        requires: [{
          items: ["Extra Compressed Messy Stone"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Hyper Compressed Messy Stone"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }],
      "Hyper Compressed Messy Stone": [{
        requires: [{
          items: ["Super Compressed Messy Stone"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Ultra Compressed Messy Stone"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }],
      "Ultra Compressed Messy Stone": [{
        requires: [{
          items: ["Hyper Compressed Messy Stone"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }, {
        requires: [{
          items: ["Mega Compressed Messy Stone"],
          amt: 1
        }],
        produces: 9,
        station: "Artisan Bench"
      }],
      "Mega Compressed Messy Stone": [{
        requires: [{
          items: ["Ultra Compressed Messy Stone"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      Bread: [{
        requires: [{
          items: ["Wheat"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 1,
        station: "Furnace"
      }, {
        requires: [{
          items: ["Wheat"],
          amt: 3
        }],
        produces: 1,
        station: "Workbench"
      }, {
        requires: [{
          items: ["Bread Block"],
          amt: 1
        }],
        produces: 9,
        station: "Workbench"
      }],
      "Bread Block": [{
        requires: [{
          items: ["Bread"],
          amt: 9
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Apple Block": [{
        requires: [{
          items: ["Apple"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      Apple: [{
        requires: [{
          items: ["Apple Block"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      "Plum Block": [{
        requires: [{
          items: ["Plum"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      Plum: [{
        requires: [{
          items: ["Plum Block"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      "Pear Block": [{
        requires: [{
          items: ["Pear"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      Pear: [{
        requires: [{
          items: ["Pear Block"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      "Cracked Coconut": [{
        requires: [{
          items: ["Coconut"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Coconut Block": [{
        requires: [{
          items: ["Coconut"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      Coconut: [{
        requires: [{
          items: ["Coconut Block"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      "Melon Slice": [{
        requires: [{
          items: ["Melon"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      "Gold Melon Slice": [{
        requires: [{
          items: ["Melon Slice"],
          amt: 2
        }, {
          items: ["Gold Bar"],
          amt: 1
        }],
        produces: 2,
        station: "Workbench"
      }],
      "Melon Seeds": [{
        requires: [{
          items: ["Melon Slice"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      Melon: [{
        requires: [{
          items: ["Melon Slice"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Watermelon Slice": [{
        requires: [{
          items: ["Watermelon"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      "Gold Watermelon Slice": [{
        requires: [{
          items: ["Watermelon Slice"],
          amt: 2
        }, {
          items: ["Gold Bar"],
          amt: 1
        }],
        produces: 2,
        station: "Workbench"
      }],
      "Watermelon Seeds": [{
        requires: [{
          items: ["Watermelon Slice"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      Watermelon: [{
        requires: [{
          items: ["Watermelon Slice"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pumpkin Pie": [{
        requires: [{
          items: ["Pumpkin"],
          amt: 1
        }, {
          items: ["Wheat"],
          amt: 3
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pumpkin Seeds": [{
        requires: [{
          items: ["Pumpkin"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Carved Pumpkin": [{
        requires: [{
          items: ["Pumpkin"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Jack o'Lantern": [{
        requires: [{
          items: ["Carved Pumpkin"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      Stone: [{
        requires: [{
          items: ["Messy Stone"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Furnace"
      }],
      Magma: [{
        requires: [{
          items: ["Stone"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Furnace"
      }],
      "Potion Table": [{
        requires: [{
          items: ct,
          amt: 4
        }, {
          items: ["Glass"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Empty Bottle": [{
        requires: [{
          items: ["Sand"],
          amt: 3
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Furnace"
      }, {
        requires: [{
          items: ["Sand"],
          amt: 3
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Speed Potion": [{
        requires: [{
          items: ["Cracked Coconut"],
          amt: 1
        }, {
          items: ["Water Bottle"],
          amt: 1
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Splash Speed Potion": [{
        requires: [{
          items: ["Speed Potion"],
          amt: 2
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Defense Potion": [{
        requires: [{
          items: ["Pear"],
          amt: 1
        }, {
          items: ["Water Bottle"],
          amt: 1
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Splash Defense Potion": [{
        requires: [{
          items: ["Defense Potion"],
          amt: 2
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Strength Potion": [{
        requires: [{
          items: ["Plum"],
          amt: 1
        }, {
          items: ["Water Bottle"],
          amt: 1
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Splash Strength Potion": [{
        requires: [{
          items: ["Strength Potion"],
          amt: 2
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Jump Potion": [{
        requires: [{
          items: ["Apple"],
          amt: 1
        }, {
          items: ["Pear"],
          amt: 1
        }, {
          items: ["Water Bottle"],
          amt: 1
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Splash Jump Potion": [{
        requires: [{
          items: ["Speed Potion"],
          amt: 2
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Invisibility Potion": [{
        requires: [{
          items: ["Gold Melon Slice"],
          amt: 1
        }, {
          items: ["Water Bottle"],
          amt: 1
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Splash Invisibility Potion": [{
        requires: [{
          items: ["Invisibility Potion"],
          amt: 2
        }],
        produces: 1,
        station: "Potion Table"
      }],
      "Splash Knockback Potion": [{
        requires: [{
          items: ["Water Bottle"],
          amt: 1
        }, {
          items: ["Bread"],
          amt: 1
        }, {
          items: ["Stick"],
          amt: 1
        }],
        produces: 1,
        station: "Potion Table"
      }],
      Furnace: [{
        requires: [{
          items: dt,
          amt: 8
        }],
        produces: 1,
        station: "Workbench"
      }],
      Chest: [{
        requires: [{
          items: ct,
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Moonstone Chest": [{
        requires: [{
          items: ["Moonstone"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Moonstone Explosive": [{
        requires: [{
          items: ["Moonstone"],
          amt: 1
        }, {
          items: ["Sand"],
          amt: 10
        }],
        produces: 4,
        station: "Workbench"
      }],
      Fireball: [{
        requires: [{
          items: ["Magma"],
          amt: 4
        }, {
          items: ["Moonstone"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      Iceball: [{
        requires: [{
          items: ["Ice"],
          amt: 4
        }, {
          items: ["Moonstone"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      "Artisan Bench": [{
        requires: [{
          items: ct,
          amt: 2
        }, {
          items: dt,
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      Snowball: [{
        requires: [{
          items: ["Snow"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      Snow: [{
        requires: [{
          items: ["Snowball"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      Pebble: [{
        requires: [{
          items: dt,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Reinforced Pebble": [{
        requires: [{
          items: ["Compressed Messy Stone"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      Ball: [{
        requires: [{
          items: ct,
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Reinforced Ball": [{
        requires: [{
          items: ["Ball"],
          amt: 1
        }, {
          items: ["Pine Log"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Moonstone Orb": [{
        requires: [{
          items: ["Moonstone"],
          amt: 1
        }, {
          items: ["Reinforced Pebble"],
          amt: 1
        }],
        produces: 4,
        station: "Workbench"
      }],
      Net: [{
        requires: [{
          items: ht,
          amt: 15
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Block of Coal": [{
        requires: [{
          items: ["Coal"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Block of Iron": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Block of Gold": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Block of Diamond": [{
        requires: [{
          items: ["Diamond"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Block of Moonstone": [{
        requires: [{
          items: ["Moonstone"],
          amt: 9
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      Glass: [{
        requires: [{
          items: ["Sand"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Furnace"
      }],
      Board: [{
        requires: [{
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Maple Door": [{
        requires: [{
          items: ["Maple Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pine Door": [{
        requires: [{
          items: ["Pine Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Plum Door": [{
        requires: [{
          items: ["Plum Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Cedar Door": [{
        requires: [{
          items: ["Cedar Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Aspen Door": [{
        requires: [{
          items: ["Aspen Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Elm Door": [{
        requires: [{
          items: ["Elm Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Palm Door": [{
        requires: [{
          items: ["Palm Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pear Door": [{
        requires: [{
          items: ["Pear Wood Planks"],
          amt: 2
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Maple Trapdoor": [{
        requires: [{
          items: ["Maple Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pine Trapdoor": [{
        requires: [{
          items: ["Pine Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Plum Trapdoor": [{
        requires: [{
          items: ["Plum Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Cedar Trapdoor": [{
        requires: [{
          items: ["Cedar Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Aspen Trapdoor": [{
        requires: [{
          items: ["Aspen Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Elm Trapdoor": [{
        requires: [{
          items: ["Elm Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Palm Trapdoor": [{
        requires: [{
          items: ["Palm Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pear Trapdoor": [{
        requires: [{
          items: ["Pear Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      Ladder: [{
        requires: [{
          items: ["Maple Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pine Ladder": [{
        requires: [{
          items: ["Pine Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Plum Ladder": [{
        requires: [{
          items: ["Plum Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Cedar Ladder": [{
        requires: [{
          items: ["Cedar Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Aspen Ladder": [{
        requires: [{
          items: ["Aspen Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Elm Ladder": [{
        requires: [{
          items: ["Elm Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Palm Ladder": [{
        requires: [{
          items: ["Palm Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Pear Ladder": [{
        requires: [{
          items: ["Pear Wood Planks"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Ladder": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 1
        }],
        produces: 1,
        station: "Workbench"
      }],
      Bucket: [{
        requires: [{
          items: ["Iron Bar"],
          amt: 3
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Helmet": [{
        requires: [{
          items: ct,
          amt: 5
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Chestplate": [{
        requires: [{
          items: ct,
          amt: 8
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Gauntlets": [{
        requires: [{
          items: ct,
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Leggings": [{
        requires: [{
          items: ct,
          amt: 7
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Wood Boots": [{
        requires: [{
          items: ct,
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Helmet": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 5
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Chestplate": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 8
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Gauntlets": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Leggings": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 7
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Iron Boots": [{
        requires: [{
          items: ["Iron Bar"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Helmet": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 5
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Chestplate": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 8
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Gauntlets": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Leggings": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 7
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Gold Boots": [{
        requires: [{
          items: ["Gold Bar"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Helmet": [{
        requires: [{
          items: ["Diamond"],
          amt: 5
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Chestplate": [{
        requires: [{
          items: ["Diamond"],
          amt: 8
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Gauntlets": [{
        requires: [{
          items: ["Diamond"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Leggings": [{
        requires: [{
          items: ["Diamond"],
          amt: 7
        }],
        produces: 1,
        station: "Workbench"
      }],
      "Diamond Boots": [{
        requires: [{
          items: ["Diamond"],
          amt: 4
        }],
        produces: 1,
        station: "Workbench"
      }],
      "White Wood Helmet": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Wood Chestplate": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Wood Gauntlets": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Wood Leggings": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Wood Boots": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Wood Helmet": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Wood Chestplate": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Wood Gauntlets": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Wood Leggings": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Wood Boots": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Wood Helmet": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Wood Chestplate": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Wood Gauntlets": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Wood Leggings": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Wood Boots": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Wood Helmet": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Wood Chestplate": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Wood Gauntlets": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Wood Leggings": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Wood Boots": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Brown Wood Helmet": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Brown Wood Chestplate": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Brown Wood Gauntlets": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Brown Wood Leggings": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Brown Wood Boots": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Wood Helmet": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Wood Chestplate": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Wood Gauntlets": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Wood Leggings": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Wood Boots": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Wood Helmet": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Wood Chestplate": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Wood Gauntlets": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Wood Leggings": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Wood Boots": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Wood Helmet": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Wood Chestplate": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Wood Gauntlets": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Wood Leggings": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Wood Boots": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Wood Helmet": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Wood Chestplate": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Wood Gauntlets": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Wood Leggings": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Wood Boots": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Wood Helmet": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Wood Chestplate": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Wood Gauntlets": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Wood Leggings": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Wood Boots": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Wood Helmet": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Wood Chestplate": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Wood Gauntlets": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Wood Leggings": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Wood Boots": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Wood Helmet": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Wood Chestplate": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Wood Gauntlets": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Wood Leggings": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Wood Boots": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Wood Helmet": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Wood Chestplate": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Wood Gauntlets": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Wood Leggings": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Wood Boots": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Wood Helmet": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Wood Chestplate": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Wood Gauntlets": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Wood Leggings": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Wood Boots": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Wood Helmet": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Wood Chestplate": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Wood Gauntlets": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Wood Leggings": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Wood Boots": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Wood Helmet": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Wood Helmet"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Wood Chestplate": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Wood Chestplate"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Wood Gauntlets": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Wood Gauntlets"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Wood Leggings": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Wood Leggings"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Wood Boots": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Wood Boots"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      Sandstone: [{
        requires: [{
          items: ["Sand"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Sandstone": [{
        requires: [{
          items: ["Red Sand"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      Bricks: [{
        requires: [{
          items: ["Clay"],
          amt: 4
        }, {
          items: ["Sand"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Stone Bricks": [{
        requires: [{
          items: ["Messy Stone", "Stone"],
          amt: 4
        }, {
          items: ["Sand"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Mossy Stone Bricks": [{
        requires: [{
          items: ["Stone Bricks"],
          amt: 1
        }, {
          items: pt,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cracked Stone Bricks": [{
        requires: [{
          items: ["Stone Bricks"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Sandstone Bricks": [{
        requires: [{
          items: ["Sandstone"],
          amt: 4
        }, {
          items: ["Sand"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Red Sandstone Bricks": [{
        requires: [{
          items: ["Red Sandstone"],
          amt: 4
        }, {
          items: ["Red Sand"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Diorite Bricks": [{
        requires: [{
          items: ["Diorite"],
          amt: 4
        }, {
          items: ["Sand"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Andesite Bricks": [{
        requires: [{
          items: ["Andesite"],
          amt: 4
        }, {
          items: ["Sand"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Granite Bricks": [{
        requires: [{
          items: ["Granite"],
          amt: 4
        }, {
          items: ["Sand"],
          amt: 1
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Ice Bricks": [{
        requires: [{
          items: ["Ice"],
          amt: 1
        }, {
          items: ["Snow"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Smooth Stone": [{
        requires: [{
          items: ["Stone"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Smooth Diorite": [{
        requires: [{
          items: ["Diorite"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Smooth Andesite": [{
        requires: [{
          items: ["Andesite"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Smooth Granite": [{
        requires: [{
          items: ["Granite"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Smooth Sandstone": [{
        requires: [{
          items: ["Sandstone"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Smooth Red Sandstone": [{
        requires: [{
          items: ["Red Sandstone"],
          amt: 2
        }, {
          items: ["Red Sand"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Engraved Stone": [{
        requires: [{
          items: ["Smooth Stone"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Engraved Sandstone": [{
        requires: [{
          items: ["Smooth Sandstone"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Engraved Red Sandstone": [{
        requires: [{
          items: ["Smooth Red Sandstone"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Engraved Diorite": [{
        requires: [{
          items: ["Smooth Diorite"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Engraved Andesite": [{
        requires: [{
          items: ["Smooth Andesite"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Engraved Granite": [{
        requires: [{
          items: ["Smooth Granite"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Messy Dirt": [{
        requires: [{
          items: ["Dirt"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      Dirt: [{
        requires: [{
          items: ["Messy Dirt"],
          amt: 1
        }],
        produces: 2
      }],
      "Rocky Dirt": [{
        requires: [{
          items: ["Dirt"],
          amt: 4
        }, {
          items: dt,
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "Messy Stone": [{
        requires: [{
          items: ["Rocky Dirt"],
          amt: 4
        }],
        produces: 1
      }, {
        requires: [{
          items: ["Compressed Messy Stone"],
          amt: 1
        }],
        produces: 9
      }],
      "Mossy Messy Stone": [{
        requires: [{
          items: ["Messy Stone"],
          amt: 1
        }, {
          items: pt,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Marked Sandstone": [{
        requires: [{
          items: ["Smooth Sandstone"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Marked Red Sandstone": [{
        requires: [{
          items: ["Smooth Red Sandstone"],
          amt: 2
        }],
        produces: 1,
        station: "Artisan Bench"
      }]
    }, vt("Maple Slab", "Maple Wood Planks")), vt("Pine Slab", "Pine Wood Planks")), vt("Plum Slab", "Plum Wood Planks")), vt("Cedar Slab", "Cedar Wood Planks")), vt("Aspen Slab", "Aspen Wood Planks")), vt("Elm Slab", "Elm Wood Planks")), vt("Palm Slab", "Palm Wood Planks")), vt("Pear Slab", "Pear Wood Planks")), vt("Dirt Slab", "Dirt")), vt("Grass Slab", "Grass Block")), vt("Messy Stone Slab", "Messy Stone")), vt("Stone Slab", "Stone")), vt("Smooth Stone Slab", "Smooth Stone")), vt("Engraved Stone Slab", "Engraved Stone")), vt("Stone Bricks Slab", "Stone Bricks")), vt("Mossy Stone Slab", "Mossy Messy Stone")), vt("Mossy Stone Bricks Slab", "Mossy Stone Bricks")), vt("Andesite Slab", "Andesite")), vt("Smooth Andesite Slab", "Smooth Andesite")), vt("Engraved Andesite Slab", "Engraved Andesite")), vt("Andesite Bricks Slab", "Andesite Bricks")), vt("Diorite Slab", "Diorite")), vt("Smooth Diorite Slab", "Smooth Diorite")), vt("Engraved Diorite Slab", "Engraved Diorite")), vt("Diorite Bricks Slab", "Diorite Bricks")), vt("Granite Slab", "Granite")), vt("Smooth Granite Slab", "Smooth Granite")), vt("Engraved Granite Slab", "Engraved Granite")), vt("Granite Bricks Slab", "Granite Bricks")), vt("Sandstone Slab", "Sandstone")), vt("Smooth Sandstone Slab", "Smooth Sandstone")), vt("Engraved Sandstone Slab", "Engraved Sandstone")), vt("Marked Sandstone Slab", "Marked Sandstone")), vt("Sandstone Bricks Slab", "Sandstone Bricks")), vt("Red Sandstone Slab", "Red Sandstone")), vt("Smooth Red Sandstone Slab", "Smooth Red Sandstone")), vt("Engraved Red Sandstone Slab", "Engraved Red Sandstone")), vt("Marked Red Sandstone Slab", "Marked Red Sandstone")), vt("Red Sandstone Bricks Slab", "Red Sandstone Bricks")), vt("Bricks Slab", "Bricks")), vt("Ice Bricks Slab", "Ice Bricks")), {}, {
      "White Planks": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Planks": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Planks": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Planks": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ct,
          amt: 2
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Brown Planks": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Planks": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Planks": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Planks": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Planks": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Planks": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Planks": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Planks": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Planks": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Planks": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Planks": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Planks": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ct,
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Wool": [{
        requires: [{
          items: ht,
          amt: 4
        }, {
          items: pt,
          amt: 4
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Wool": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Wool": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Wool": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Wool": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 2
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Brown Wool": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Wool": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Wool": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Wool": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Wool": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Wool": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Wool": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Wool": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Wool": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Wool": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Wool": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Green Wool"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Glass": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Glass": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Glass": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Glass": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 2
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Brown Glass": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Glass": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Glass": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Glass": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Glass": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Glass": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Glass": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Glass": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Glass": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Glass": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Glass": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Glass": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Glass"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Patterned White Glass": [{
        requires: [{
          items: ["White Glass"],
          amt: 1
        }, {
          items: ["White Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Light Gray Glass": [{
        requires: [{
          items: ["Light Gray Glass"],
          amt: 1
        }, {
          items: ["Light Gray Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Gray Glass": [{
        requires: [{
          items: ["Gray Glass"],
          amt: 1
        }, {
          items: ["Gray Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Black Glass": [{
        requires: [{
          items: ["Black Glass"],
          amt: 1
        }, {
          items: ["Black Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Brown Glass": [{
        requires: [{
          items: ["Brown Glass"],
          amt: 1
        }, {
          items: ["Brown Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Red Glass": [{
        requires: [{
          items: ["Red Glass"],
          amt: 1
        }, {
          items: ["Red Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Orange Glass": [{
        requires: [{
          items: ["Orange Glass"],
          amt: 1
        }, {
          items: ["Orange Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Yellow Glass": [{
        requires: [{
          items: ["Yellow Glass"],
          amt: 1
        }, {
          items: ["Yellow Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Lime Glass": [{
        requires: [{
          items: ["Lime Glass"],
          amt: 1
        }, {
          items: ["Lime Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Green Glass": [{
        requires: [{
          items: ["Green Glass"],
          amt: 1
        }, {
          items: ["Green Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Cyan Glass": [{
        requires: [{
          items: ["Cyan Glass"],
          amt: 1
        }, {
          items: ["Cyan Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Light Blue Glass": [{
        requires: [{
          items: ["Light Blue Glass"],
          amt: 1
        }, {
          items: ["Light Blue Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Blue Glass": [{
        requires: [{
          items: ["Blue Glass"],
          amt: 1
        }, {
          items: ["Blue Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Purple Glass": [{
        requires: [{
          items: ["Purple Glass"],
          amt: 1
        }, {
          items: ["Purple Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Magenta Glass": [{
        requires: [{
          items: ["Magenta Glass"],
          amt: 1
        }, {
          items: ["Magenta Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Patterned Pink Glass": [{
        requires: [{
          items: ["Pink Glass"],
          amt: 1
        }, {
          items: ["Pink Planks"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Baked Clay": [{
        requires: [{
          items: ["Clay"],
          amt: 4
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 4,
        station: "Artisan Bench"
      }],
      "White Baked Clay": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Baked Clay": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Baked Clay": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Baked Clay": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 2
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Brown Baked Clay": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Baked Clay": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Baked Clay": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Baked Clay": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Baked Clay": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Baked Clay": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Baked Clay": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Baked Clay": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Baked Clay": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Baked Clay": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Baked Clay": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Baked Clay": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Baked Clay"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Ceramic": [{
        requires: [{
          items: ["White Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Light Gray Ceramic": [{
        requires: [{
          items: ["Light Gray Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Gray Ceramic": [{
        requires: [{
          items: ["Gray Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Black Ceramic": [{
        requires: [{
          items: ["Black Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Brown Ceramic": [{
        requires: [{
          items: ["Brown Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Red Ceramic": [{
        requires: [{
          items: ["Red Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Orange Ceramic": [{
        requires: [{
          items: ["Orange Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Yellow Ceramic": [{
        requires: [{
          items: ["Yellow Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Lime Ceramic": [{
        requires: [{
          items: ["Lime Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Green Ceramic": [{
        requires: [{
          items: ["Green Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Light Blue Ceramic": [{
        requires: [{
          items: ["Light Blue Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Blue Ceramic": [{
        requires: [{
          items: ["Blue Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Purple Ceramic": [{
        requires: [{
          items: ["Purple Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Magenta Ceramic": [{
        requires: [{
          items: ["Magenta Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Pink Ceramic": [{
        requires: [{
          items: ["Pink Baked Clay"],
          amt: 2
        }, {
          items: ["Sand"],
          amt: 2
        }, {
          items: ["Coal"],
          amt: 1
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Gray Concrete": [{
        requires: [{
          items: dt,
          amt: 1
        }, {
          items: ["Clay"],
          amt: 1
        }, {
          items: ["Sand"],
          amt: 2
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "White Concrete": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Concrete": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Concrete": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 2
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Brown Concrete": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Concrete": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Concrete": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Concrete": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Concrete": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Concrete": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Concrete": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Concrete": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Concrete": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Concrete": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Concrete": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Concrete": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Gray Concrete"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Lime Bed": [{
        requires: [{
          items: ["Green Wool"],
          amt: 3
        }, {
          items: ct,
          amt: 3
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "White Bed": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Gray Bed": [{
        requires: [{
          items: ["White Tulip"],
          amt: 1
        }, {
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Gray Bed": [{
        requires: [{
          items: ["Daisy"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Black Bed": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 2
        }],
        produces: 2,
        station: "Artisan Bench"
      }],
      "Brown Bed": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: pt,
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Red Bed": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Orange Bed": [{
        requires: [{
          items: ["Orange Tulip"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Yellow Bed": [{
        requires: [{
          items: ["Dandelion"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Green Bed": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Cyan Bed": [{
        requires: [{
          items: pt,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Light Blue Bed": [{
        requires: [{
          items: ["Bluebell"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Blue Bed": [{
        requires: [{
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Purple Bed": [{
        requires: [{
          items: ft,
          amt: 1
        }, {
          items: ["Forget-me-not"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Magenta Bed": [{
        requires: [{
          items: ["Allium"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }],
      "Pink Bed": [{
        requires: [{
          items: ["Pink Tulip"],
          amt: 1
        }, {
          items: ["Lime Bed"],
          amt: 1
        }],
        produces: 1,
        station: "Artisan Bench"
      }]
    });
    var gt = function () {
      function e(t) {
        (0, f.Z)(this, e);
        this.bloxd = undefined;
        this.playerRecipes = {};
        this.bloxd = t;
        if (this.bloxd.isClient) {
          this.onPlayerJoin(this.bloxd.noa.playerEntity);
        }
      }
      (0, p.Z)(e, [{
        key: "onPlayerJoin",
        value: function (e) {
          this.playerRecipes[e] = JSON.parse(JSON.stringify(mt));
        }
      }, {
        key: "onPlayerLeave",
        value: function (e) {
          delete this.playerRecipes[e];
        }
      }, {
        key: "onClientReset",
        value: function () {
          this.playerRecipes[this.bloxd.noa.playerEntity] = JSON.parse(JSON.stringify(mt));
        }
      }, {
        key: "editRecipesForPlayer",
        value: function (e, t, r) {
          this.playerRecipes[e][t] = r;
        }
      }, {
        key: "getItemsHavingOneIngredientOf",
        value: function (e, t, r) {
          var i = this;
          var n = this.playerRecipes[e];
          var o = [];
          var s = function (s) {
            n[s].forEach(function (n, a) {
              n.station;
              if (i.canUseRecipeAtStation(e, s, a, r) && i.itemCanBeCrafted(e, t, s, a)) {
                o.push({
                  name: s,
                  craftingIdx: a,
                  haveIngredients: true
                });
              }
            });
          };
          for (var a in n) {
            s(a);
          }
          var u = function (s) {
            n[s].forEach(function (n, a) {
              n.station;
              if (i.canUseRecipeAtStation(e, s, a, r) && i.haveOneOrMoreIngredientOf(e, t, s, a) && !i.itemCanBeCrafted(e, t, s, a)) {
                o.push({
                  name: s,
                  craftingIdx: a,
                  haveIngredients: false
                });
              }
            });
          };
          for (var l in n) {
            u(l);
          }
          return o;
        }
      }, {
        key: "canUseRecipeAtStation",
        value: function (e, t, r, i) {
          var n = this.playerRecipes[e][t][r].station;
          return !(i !== "Workbench" && i !== "Artisan Bench" || n) || i && i === n || !i && !n;
        }
      }, {
        key: "haveOneOrMoreIngredientOf",
        value: function (e, t, r, i) {
          var n;
          var o = this.playerRecipes[e][r];
          var s = (0, b.Z)(o[i].requires);
          try {
            for (s.s(); !(n = s.n()).done;) {
              var a;
              var u = n.value.items;
              var l = (0, b.Z)(u);
              try {
                for (l.s(); !(a = l.n()).done;) {
                  var c = a.value;
                  if (t.getAmountOfItem(c) !== 0) {
                    return true;
                  }
                }
              } catch (h) {
                l.e(h);
              } finally {
                l.f();
              }
            }
          } catch (h) {
            s.e(h);
          } finally {
            s.f();
          }
          return false;
        }
      }, {
        key: "itemCanBeCrafted",
        value: function (e, t, r, i) {
          var n = this.playerRecipes[e][r];
          if (n[i] === undefined) {
            return false;
          }
          var o;
          var s = (0, b.Z)(n[i].requires);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var a;
              var u = o.value;
              var l = u.items;
              var c = u.amt;
              var h = 0;
              var d = (0, b.Z)(l);
              try {
                for (d.s(); !(a = d.n()).done;) {
                  var f = a.value;
                  h += t.getAmountOfItem(f);
                }
              } catch (p) {
                d.e(p);
              } finally {
                d.f();
              }
              if (h < c) {
                return false;
              }
            }
          } catch (p) {
            s.e(p);
          } finally {
            s.f();
          }
          return true;
        }
      }, {
        key: "spaceInInvenToCraft",
        value: function (e, t, r, i) {
          var n = this.playerRecipes[e][r];
          if (this.bloxd.registry.metadatas[r].stackable !== false) {
            if (t.getFreeInventoryPosition() === null) {
              return false;
            }
          } else if (n[i].produces > t.getNumFreeSlots()) {
            return false;
          }
          return true;
        }
      }, {
        key: "craftItem",
        value: function (e, t, r, i) {
          if (!this.itemCanBeCrafted(e, t, r, i)) {
            return false;
          }
          if (!this.spaceInInvenToCraft(e, t, r, i)) {
            return false;
          }
          var n;
          var o = this.playerRecipes[e][r];
          var s = (0, b.Z)(o[i].requires);
          try {
            for (s.s(); !(n = s.n()).done;) {
              var a;
              var u = n.value;
              var l = u.items;
              var c = u.amt;
              var h = [];
              var d = (0, b.Z)(l);
              try {
                for (d.s(); !(a = d.n()).done;) {
                  var f = a.value;
                  h.push({
                    item: f,
                    amt: t.getAmountOfItem(f)
                  });
                }
              } catch (C) {
                d.e(C);
              } finally {
                d.f();
              }
              h.sort(function (e, t) {
                return e.amt - t.amt;
              });
              for (var p = c, m = 0, g = h; m < g.length; m++) {
                var v = g[m];
                var _ = v.item;
                var y = v.amt;
                if (y > 0) {
                  if (y >= p) {
                    t.removeItemName(_, p);
                    p = 0;
                  } else {
                    t.removeItemName(_, y);
                    p -= y;
                  }
                }
                if (p === 0) {
                  break;
                }
              }
            }
          } catch (C) {
            s.e(C);
          } finally {
            s.f();
          }
          var A = o[i].produces;
          var S = 0;
          if (this.bloxd.registry.metadatas[r].stackable !== false) {
            S = t.pickUpItem({
              name: r,
              typeObj: this.bloxd.getItemTypeObj(r),
              amount: A
            });
          } else {
            for (var M = 0; M < A; M++) {
              S += t.pickUpItem({
                name: r,
                typeObj: this.bloxd.getItemTypeObj(r),
                amount: null
              });
            }
          }
          return A === S || (console.error(new Error("Crafted the wrong amount!").stack), false);
        }
      }, {
        key: "getRecipesForPlayer",
        value: function (e) {
          return this.playerRecipes[e];
        }
      }]);
      return e;
    }();
    function vt(e, t) {
      return (0, $e.Z)({}, e, [{
        requires: [{
          items: [t],
          amt: 2
        }],
        produces: 4,
        station: "Artisan Bench"
      }]);
    }
    var _t = r(90574);
    var yt = r(66645);
    var bt = r(79520);
    var At = r(91314);
    var St = function () {
      function e(t) {
        var r = this;
        (0, f.Z)(this, e);
        this.bloxd = t;
        this.metadatas = (0, A.Z)({}, I.EG);
        if (t.isClient) {
          (0, u.rp)(ke.cU.customItemsUpdate, function (e) {
            var t;
            var i = (0, b.Z)(e);
            try {
              for (i.s(); !(t = i.n()).done;) {
                var n = t.value;
                var o = n.name;
                var s = n.itemObj;
                r.registerItem(o, s);
                r.bloxd.rendering.customItemUpdate(o, s);
              }
            } catch (a) {
              i.e(a);
            } finally {
              i.f();
            }
          });
        }
      }
      (0, p.Z)(e, [{
        key: "registerItem",
        value: function (e, t) {
          var r;
          var i = (r = t.id) !== null && r !== undefined ? r : Object.values(this.metadatas).reduce(function (e, t) {
            return Math.max(e, t.id);
          }, 0) + 1;
          var n = (0, A.Z)((0, A.Z)({}, t), {}, {
            name: e,
            id: i,
            isCustom: true
          });
          this.metadatas[e] = n;
          this.metadatas[i] = n;
          if (!this.bloxd.isClient) {
            this.bloxd.room.broadcast(ke.cU.customItemsUpdate, [{
              name: e,
              itemObj: n
            }]);
          }
          (0, N.addMetaInfoForItem)(this.metadatas, n);
        }
      }, {
        key: "onPlayerJoinServer",
        value: function (e) {
          var t = [];
          for (var r in this.metadatas) {
            if (isNaN(Number(r)) && this.metadatas[r].isCustom) {
              t.push({
                name: r,
                itemObj: this.metadatas[r]
              });
            }
          }
          this.bloxd.room.mapEntToClient[e].send(ke.cU.customItemsUpdate, t);
        }
      }]);
      return e;
    }();
    var Mt = r(62043);
    var Ct = function () {
      function e(t, r) {
        var i = this;
        (0, f.Z)(this, e);
        this.isClient = true;
        this.noa = undefined;
        this.ents = undefined;
        this.multiblockManager = undefined;
        this.room = undefined;
        this.blockDataOwner = undefined;
        this.craftingManager = undefined;
        this.rendering = undefined;
        this.registry = new St(this);
        this.chunkTicker = undefined;
        this.noa = t;
        this.ents = t.ents;
        this.multiblockManager = new Ye(t, this);
        this.room = r;
        this.blockDataOwner = new Je(t, this);
        this.craftingManager = new gt(this);
        if (this.isClient) {
          this.rendering = new u.EU.BloxdClientRenderingClass(this);
        } else {
          this.chunkTicker = new ot(this, r);
        }
        if (this.isClient) {
          (0, u.ZC)(function () {
            i.onClientReset();
          });
        }
      }
      (0, p.Z)(e, [{
        key: "setBlock",
        value: function (e, t, r, i) {
          this.multiblockManager.setBlock(e, t, r, i);
        }
      }, {
        key: "setBlockNoMulti",
        value: function (e, t, r, i) {
          var n = this.getBlock(e, t, r);
          if (this.isClient) {
            if (this.hasChunkWithBlockCoordinates(e, t, r)) {
              this.noa.setBlock(i, e, t, r);
            }
          } else {
            this.chunkTicker.blockUpdated(e, t, r, n, i);
            this.room.map.setBlock(e, t, r, i);
          }
          if (this.getMetaInfo(i).rootId !== this.getMetaInfo(n).rootId) {
            this.onBlockRemoved(e, t, r, n, true);
            this.blockDataOwner.blockChanged(e, t, r);
            this.blockAdded(e, t, r, i);
          }
        }
      }, {
        key: "getBlock",
        value: function (e, t, r) {
          if (this.isClient) {
            return this.noa.getBlock(e, t, r);
          } else {
            return this.room.map.getBlock(e, t, r);
          }
        }
      }, {
        key: "playerCanPlaceItem",
        value: function (e, t, r, i, n) {
          if (n in He.E) {
            return this.multiblockManager.playerCanPlaceItem(e, t, r, i, n);
          } else {
            return this.playerCanChangePos(e, t, r, i, n);
          }
        }
      }, {
        key: "playerCanChangePos",
        value: function (e, t, r, i) {
          var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          if (this.isClient) {
            console.log(this.hasChunkWithBlockCoordinates(t, r, i), !this.noa.registry.getBlockSolidity(n), this.noa.world.walkThroughType.has(n), !this.noa.ents.isTerrainBlocked(t, r, i));
            return this.hasChunkWithBlockCoordinates(t, r, i) && this.posSatisfiesModifyConstraints(e, t, r, i) && (!this.noa.registry.getBlockSolidity(n) || this.noa.world.walkThroughType.has(n) || !this.noa.ents.isTerrainBlocked(t, r, i));
          } else {
            return this.hasChunkWithBlockCoordinates(t, r, i) && this.posSatisfiesModifyConstraints(e, t, r, i);
          }
        }
      }, {
        key: "posSatisfiesModifyConstraints",
        value: function (e, t, r, i) {
          if (this.isClient) {
            console.assert(e === this.noa.playerEntity || e === this.noa.serverPlayerEntity, "eId in client posSatisfiesModifyConstraints must be local player");
            return this.noa.world.canChangeBlock(t, r, i);
          }
          var n = this.getBlock(t, r, i);
          var o = this.room.clientOptions[e].canChange;
          var s = this.room.playerAuthInfo[e];
          if (o) {
            return (0, Mt.Np)(t, r, i, n, s.cantChangeBlockCoord, s.canChangeBlockCoord, s.cantChangeBlockType, s.canChangeBlockType, s.cantChangeBlockRect, s.canChangeBlockRect, false);
          } else {
            return (0, Mt.Np)(t, r, i, n, s.canChangeBlockCoord, s.cantChangeBlockCoord, s.canChangeBlockType, s.cantChangeBlockType, s.canChangeBlockRect, s.cantChangeBlockRect, true);
          }
        }
      }, {
        key: "canWaterBucketAtPos",
        value: function (e, t, r, i) {
          return this.playerCanChangePos(e, t, r, i) || !this.getPlayerClientOption(e, "strictWaterBuckets");
        }
      }, {
        key: "getPlayerClientOption",
        value: function (e, t) {
          if (this.isClient) {
            console.assert(e === this.noa.playerEntity || e === this.noa.serverPlayerEntity, "eId in client getPlayerClientOption must be local player");
            return this.noa.serverSettings[t];
          } else {
            return this.room.api.getClientOption(e, t);
          }
        }
      }, {
        key: "getItemId",
        value: function (e) {
          if (e && e !== "Air") {
            if (this.registry.metadatas[e]) {
              return this.registry.metadatas[e].id;
            }
            throw new Error("Invalid block name. You sent ".concat(e, ". The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api"));
          }
          return 0;
        }
      }, {
        key: "getItemName",
        value: function (e) {
          if (e && e !== 0) {
            return this.registry.metadatas[e].name;
          } else {
            return "Air";
          }
        }
      }, {
        key: "getItemTypeObj",
        value: function (e) {
          if (e && e !== "Air") {
            return u.EU.itemsClient[e];
          } else {
            return null;
          }
        }
      }, {
        key: "getMetaInfo",
        value: function (e) {
          if (e && e !== "Air") {
            return this.registry.metadatas[e].meta;
          } else {
            return xt;
          }
        }
      }, {
        key: "getItemStat",
        value: function (e, t, r) {
          var i;
          if (["ttb", "displayName", "harvestLevel", "stoodOnSpeedMultiplier", "specialToolDrop", "description", "altActionable", "eatHealAmt", "hitPlayerDamage"].includes(r)) {
            var n;
            var o;
            var s;
            var a = this.getItemName(t);
            var u = r[0].toUpperCase() + r.slice(1);
            var l = "".concat(a).concat(u);
            if (r === "displayName") {
              if ((s = this.getPlayerClientOption(e, l)) !== null && s !== undefined) {
                return s;
              } else {
                return a;
              }
            } else if ((n = this.getPlayerClientOption(e, l)) !== null && n !== undefined) {
              return n;
            } else if ((o = this.registry.metadatas[t]) === null || o === undefined) {
              return undefined;
            } else {
              return o[r];
            }
          }
          if ((i = this.registry.metadatas[t]) === null || i === undefined) {
            return undefined;
          } else {
            return i[r];
          }
        }
      }, {
        key: "getBlockTypeIsHarvestable",
        value: function (e, t) {
          var r = this.getInvenHeldItem(e);
          if (t && !this.getPlayerClientOption(e, "creative")) {
            var i;
            var n;
            var o;
            var s = (i = I.i[r === null || r === undefined ? undefined : r.name]) === null || i === undefined ? undefined : i.harvests;
            var a = (n = I.i[r === null || r === undefined ? undefined : r.name]) === null || n === undefined ? undefined : n.level;
            var u = this.registry.metadatas[t].harvestType === "rock" && this.registry.metadatas[t].harvestLevel !== 0 && s !== "rock";
            if (s === "rock" && ((o = this.getItemStat(e, t, "harvestLevel")) !== null && o !== undefined ? o : 0) > (a !== null && a !== undefined ? a : 0)) {
              u = true;
            }
            return !u;
          }
          return true;
        }
      }, {
        key: "getInvenHeldItem",
        value: function (e) {
          if (this.noa.ents.hasComponent(e, "inventory")) {
            return this.noa.ents.getInventory(e).getItemAtSelectedSlot();
          } else {
            return null;
          }
        }
      }, {
        key: "getIsStoodOnBlock",
        value: function (e) {
          return (0, _t.So)(this.noa, e, false).length >= 1;
        }
      }, {
        key: "getStoodBlockSpeedMultiplier",
        value: function (e) {
          if (this.isClient) {
            console.assert(e === this.noa.playerEntity, "eId in client getStoodBlockSpeedMultiplier must be local player");
          }
          var t = (0, _t.So)(this.noa, e, false);
          console.assert(t.length > 0, "getStoodBlockSpeedMultiplier called when player is not standing on a block");
          var r;
          var i = (0, b.Z)(t);
          try {
            for (i.s(); !(r = i.n()).done;) {
              var n = r.value;
              var o = this.getItemStat(e, n, "stoodOnSpeedMultiplier");
              if (o !== undefined) {
                return o;
              }
            }
          } catch (s) {
            i.e(s);
          } finally {
            i.f();
          }
          return 1;
        }
      }, {
        key: "getBhopMultiplier",
        value: function (e, t) {
          var r = this.getPlayerClientOption(e, "bunnyhopMaxMultiplier") - 1;
          var i = 0;
          if (t === 1) {
            i = r * 0.5;
          } else if (t === 2) {
            i = r * 0.75;
          } else if (t >= 3) {
            i = r;
          }
          return 1 + i;
        }
      }, {
        key: "getPlayerTargetInfo",
        value: function (e) {
          var t;
          var r;
          var i = this.getPlayerEyePos(e);
          if (this.isClient) {
            console.assert(e === this.noa.playerEntity, "Should only get targeted block for local player");
            t = (r = this.noa.actionDirection) !== null && r !== undefined ? r : this.noa.camera.getDirection();
          } else {
            t = this.room.playerAuthInfo[e].useDir;
          }
          return this.noa.pickBlock(i, t);
        }
      }, {
        key: "getPlayerEidList",
        value: function () {
          var e = this;
          if (this.isClient) {
            return Object.keys(this.noa.playerNames).filter(function (t) {
              return t !== e.noa.playerEntity.toString();
            });
          } else {
            return Object.values(this.room.mapSeshToEnt);
          }
        }
      }, {
        key: "getPlayersAvailableForShopInput",
        value: function (e, t) {
          if (t.userInput.type === "player") {
            var r;
            var i = (r = t.userInput.excludedPlayers) !== null && r !== undefined ? r : [e];
            return this.getPlayerEidList().filter(function (e) {
              return !i.includes(e);
            });
          }
          console.error("Used getPlayersAvailableForInput on non-player userInput ShopItem");
        }
      }, {
        key: "swapDoorTypeOpenClosed",
        value: function (e, t, r, i, n) {
          var o;
          var s = N.blockMetadata[n].name.split("|");
          var a = s[0];
          var l = [t, r, i];
          var c = a;
          if (a in He.a) {
            var h = He.a[a];
            c = h.mainMultiblock;
            l = [t - h.compX, r - h.compY, i - h.compZ];
          }
          var d = [c];
          (o = d).push.apply(o, (0, Ve.Z)(s.slice(1)));
          if (d.length === 1) {
            d.push("meta", "rot1", "closed");
          }
          var f = d[3] === "open" ? "closed" : "open";
          d[3] = f;
          if (d[2] === "rot1" && d[3] === "closed") {
            d = [d[0]];
          }
          var p = d.join("|");
          this.setBlock(l[0], l[1], l[2], (0, N.blockNameToId)(p));
          if (this.isClient) {
            var m = (0, yt.r_)(f === "open" ? "doorOpen" : "doorClose");
            var g = [t + 0.5, r + 1, i + 0.5];
            (0, bt.GW)().play(m, 1, (0, u.dP)(e) === (0, u.Zx)().playerEntity ? undefined : g);
          }
          return {
            setPos: l,
            id: (0, N.blockNameToId)(p)
          };
        }
      }, {
        key: "hasChunkWithBlockCoordinates",
        value: function (e, t, r) {
          if (this.isClient) {
            return this.noa.world.hasChunkWithBlockCoordinates(e, t, r);
          } else {
            return this.room.map.hasChunkWithBlockCoordinates(e, t, r);
          }
        }
      }, {
        key: "chunkAdded",
        value: function (e, t, r, i, n) {
          this.blockDataOwner.chunkAdded(e, t, r, n);
          if (this.isClient) {
            this.rendering.removeBoardsInChunk(e, t, r);
          } else {
            this.chunkTicker.chunkAdded(e, t, r, i);
          }
          var o;
          var s = (0, b.Z)(n);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var a = o.value;
              var u = (0, le.Z)(a.pos, 3);
              var l = u[0];
              var c = u[1];
              var h = u[2];
              var d = i.get(l, c, h);
              var f = e * he.ZP.chunkSize;
              var p = t * he.ZP.chunkSize;
              var m = r * he.ZP.chunkSize;
              this.blockAdded(f + l, p + c, m + h, d);
            }
          } catch (g) {
            s.e(g);
          } finally {
            s.f();
          }
        }
      }, {
        key: "removingChunk",
        value: function (e, t, r, i) {
          this.blockDataOwner.removingChunk(e, t, r, i);
          if (this.isClient) {
            this.rendering.removeBoardsInChunk(e, t, r);
          } else {
            this.chunkTicker.removingChunk(e, t, r);
          }
        }
      }, {
        key: "getPlayerEyePos",
        value: function (e) {
          var t = this.noa.entities.getMoveState(e).crouching;
          var r = this.noa.ents.getPosition(e);
          return [r[0], r[1] + he.ZP.playerHeight * (t ? he.ZP.crouchingEyeHeightRatio : he.ZP.playerEyeToHeightRatio), r[2]];
        }
      }, {
        key: "globalToLocal",
        value: function (e, t) {
          return Qe().subtract(t !== null && t !== undefined ? t : Qe().create(), e, this.noa.worldOriginOffset);
        }
      }, {
        key: "localToGlobal",
        value: function (e, t) {
          return Qe().add(t !== null && t !== undefined ? t : Qe().create(), e, this.noa.worldOriginOffset);
        }
      }, {
        key: "tick",
        value: function () {
          if (!this.isClient) {
            this.chunkTicker.tick();
          }
        }
      }, {
        key: "onPlayerJoin",
        value: function (e) {
          this.craftingManager.onPlayerJoin(e);
          if (!this.isClient) {
            this.registry.onPlayerJoinServer(e);
          }
        }
      }, {
        key: "onPlayerLeave",
        value: function (e) {
          this.craftingManager.onPlayerLeave(e);
        }
      }, {
        key: "onClientReset",
        value: function () {
          this.craftingManager.onClientReset();
        }
      }, {
        key: "onPlayerChangeBlock",
        value: function (e, t, r, i, n, o) {
          if (!this.isClient) {
            if ((0, N.blockIdToName)(o).split(" ").slice(-1)[0] === "Sapling") {
              console.assert(this.blockDataOwner.getBlockData(t, r, i) === undefined, "Sapling block data is not undefined");
              this.blockDataOwner.setBlockData(t, r, i, {
                persisted: {
                  planterDbId: this.room.api.getPlayerDbId(e)
                }
              });
            }
          }
        }
      }, {
        key: "onBlockRemoved",
        value: function (e, t, r, i, n) {
          if (this.isClient) {
            if (this.getMetaInfo(i).rootName === "Board") {
              this.rendering.removeBoard(e, t, r);
            }
          } else {
            if (this.getMetaInfo(i).rootName === "Chest") {
              var o = this.blockDataOwner.getBlockData(e, t, r);
              if (o !== null && o !== undefined && o.openedByPlayer) {
                this.room.closeStandardChestForPlayer(o.openedByPlayer, e, t, r);
              }
            }
            if (!n) {
              return;
            }
            if (this.getMetaInfo(i).rootName === "Chest") {
              var s = this.blockDataOwner.getBlockData(e, t, r);
              if (s !== null && s !== undefined && s.persisted) {
                var a;
                var u = (0, ut.Ii)(s.persisted.chestStr, this.noa);
                var l = (0, b.Z)(u.getItems());
                try {
                  for (l.s(); !(a = l.n()).done;) {
                    var c = a.value;
                    if (c !== null) {
                      var h = c.name;
                      var d = c.amount;
                      this.room.createItem([e + 0.5, t + 0.5, r + 0.5], this.getItemId(h), d !== null && d !== undefined ? d : 1, true);
                    }
                  }
                } catch (f) {
                  l.e(f);
                } finally {
                  l.f();
                }
              }
            }
          }
        }
      }, {
        key: "blockAdded",
        value: function (e, t, r, i) {
          if (this.isClient && this.hasChunkWithBlockCoordinates(e, t, r) && this.getMetaInfo(i).rootName === "Board") {
            this.rendering.addBoard(e, t, r, i);
          }
        }
      }, {
        key: "canAttack",
        value: function (e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
          if (this.isClient) {
            console.error(new Error("canAttack not implemented for client").stack);
            return false;
          }
          if (t !== undefined && this.room.clientOptions[e] && this.room.clientOptions[t] && this.room.clientOptions[t]._health !== null && !this.room.otherPlayerSettings[e][t]._invincible && (r || this.room.otherPlayerSettings[e][t].canAttack) && this.room.api.isAlive(t)) {
            var i = this.room.hasGameReceivedPlayer(e);
            var n = this.room.hasGameReceivedPlayer(t);
            if (!i) {
              console.error(new Error("Game hasn't received player").stack);
            }
            if (!n) {
              console.error(new Error("Game hasn't received player").stack);
            }
            return i && n;
          }
          return false;
        }
      }, {
        key: "playerAttemptDamageOtherPlayer",
        value: function (e, t, r, i, n) {
          var o = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
          var s = !(arguments.length > 6 && arguments[6] !== undefined) || arguments[6];
          var a = !(arguments.length > 7 && arguments[7] !== undefined) || arguments[7];
          var u = !(arguments.length > 8 && arguments[8] !== undefined) || arguments[8];
          var l = !(arguments.length > 9 && arguments[9] !== undefined) || arguments[9];
          var c = arguments.length > 10 ? arguments[10] : undefined;
          var h = arguments.length > 11 && arguments[11] !== undefined && arguments[11];
          if (this.isClient) {
            console.error(new Error("playerAttemptDamageOtherPlayer not implemented for client").stack);
            return false;
          }
          if (!this.canAttack(e, t, h)) {
            return false;
          }
          for (var d = this.room.mapEntToClient[e], f = 0, p = this.ents.getInvenOps(t), m = 0; m < I.XL.length; m++) {
            var g;
            var v = p.playerInventory.numSlots - I.XL.length + m;
            var _ = (g = p.getItemAtIdx(v)) === null || g === undefined ? undefined : g.name;
            if (_) {
              f += I.hz[_].reduction;
            }
          }
          var y = this.room.playerAuthInfo[t];
          r *= 1 - f;
          if (y.currentEffects["Damage Reduction"]) {
            r *= 0.6;
          }
          r *= this.getPlayerClientOption(e, "dealingDamageMultiplier");
          r *= this.getPlayerClientOption(t, "receivingDamageMultiplier");
          var b = r = Math.ceil(r);
          var A = Date.now() - y.lastReceivedCdAttackTime < 400;
          if (l && A) {
            if (y.lastReceivedCdAttackDmg >= r) {
              return false;
            }
            b = r;
            r -= y.lastReceivedCdAttackDmg;
          }
          var S = this.room.gamePlayerCb(d, "onPlayerDamagingOtherPlayer", e, t, r, i);
          if (S === "preventDamage" || S === null) {
            return false;
          }
          if (typeof S === "number") {
            r = S;
          }
          if (l) {
            y.lastReceivedCdAttackDmg = b;
            if (!A) {
              y.lastReceivedCdAttackTime = Date.now();
            }
          }
          var M = this.room.api.getPosition(t);
          var C = this.room.api.changeHealth(t, -r, {
            playerId: e,
            withItem: i
          });
          var x = false;
          if (C) {
            var T = this.room.gamePlayerCb(d, "onPlayerKilledOtherPlayer", e, t, r, i);
            if (T !== "keepInventory") {
              for (var P = this.ents.getInvenOps(t), E = 0; E < P.playerInventory.numSlots; E++) {
                var R = this.room.api.getItemSlot(t, E);
                if (R) {
                  if (R.name === "Protector") {
                    continue;
                  }
                  this.room.api.createItemDrop(M[0] + Math.random() * 0.5 - 0.25, M[1] + 1.5, M[2] + Math.random() * 0.5 - 0.25, R.name, R.amount);
                  this.room.api.setItemSlot(t, E, "Air");
                }
              }
            }
          } else if (u) {
            var w;
            var k;
            var D = this.noa.ents.getMoveState(e).speed;
            if (D > this.room.clientOptions[e].walkingSpeed * this.room.clientOptions[e].speedMultiplier && !this.room.playerAuthInfo[e].hasUsedFirstSprintHit) {
              x = true;
              this.room.playerAuthInfo[e].hasUsedFirstSprintHit = true;
            }
            var B = (w = this.room.api.getHeldItem(e)) === null || w === undefined ? undefined : w.name;
            this.room.mapEntToClient[t].send(ke.cU.attacked, {
              sprinted: x,
              dir: n,
              scalar: (k = I.GI[B]) !== null && k !== undefined ? k : 1,
              redVert: s
            });
          }
          if (a) {
            this.room.broadcast(ke.cU.entityHurt, {
              eId: t,
              yourAttack: false,
              kbPs: false,
              cPs: false
            }, {
              except: d
            });
            d.send(ke.cU.entityHurt, {
              eId: t,
              yourAttack: true,
              kbPs: x,
              cPs: o
            });
            this.room.api.playSound(t, "hit", 1, 1.2 + Math.random() * 0.1);
            if (t !== e) {
              if (c) {
                this.room.api.playSound(e, c.sound, c.volume, c.pitch);
              } else {
                this.room.api.playSound(e, "hit", 1, 1.2 + Math.random() * 0.1);
              }
            }
          }
          y.lastHurtTime = Date.now();
          return true;
        }
      }, {
        key: "useThrowable",
        value: function (e, t, r, i) {
          var n = this;
          var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
          var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          if (this.isClient) {
            console.error(new Error("Should not be called on client").stack);
          } else {
            var a = (this.room.eIdCounter--).toString();
            this.room.gamePlayerCb(e, "onPlayerUsedThrowable", r, t, a);
            var u = new At.O(this, a, t);
            var l = this.getPlayerEyePos(r);
            u.initServer({
              pos: l,
              throwerEId: r,
              thrownDir: i,
              dispose: function () {
                n.noa.ents.deleteEntity(a);
                n.room.state.deleteEntity(a);
              },
              extraVelocityMult: o,
              extraDamageMult: s
            });
            this.room.state.createEntity(a, t);
            this.room.state.setEntityPosition(a, l);
          }
        }
      }, {
        key: "getInventory",
        value: function (e) {
          var t;
          if ((t = this.noa.ents.getInventoryState(e)) === null || t === undefined) {
            return undefined;
          } else {
            return t.inventory;
          }
        }
      }, {
        key: "hasItem",
        value: function (e, t) {
          return this.getInventory(e).getAmountOfItem(t) > 0;
        }
      }]);
      return e;
    }();
    var xt = Object.freeze(new N.ItemMetaInfo("Air", 0, "", null, null, null, null, null, null, null));
    var Tt = r(60136);
    var Pt = r(43668);
    var It = r(47313);
    var Et = r(34703);
    var Rt = r(85008);
    var wt = r(46417);
    var kt = It.memo(function () {
      (0, Rt.iP)();
      return (0, wt.jsx)(Dt, {});
    });
    var Dt = function (e) {
      (0, Tt.Z)(r, e);
      var t = (0, Pt.Z)(r);
      function r(e) {
        var i;
        (0, f.Z)(this, r);
        (i = t.call(this, e)).showQueue = [];
        i.slideDuration = 1;
        i.state = {
          showQueue: [],
          currState: null
        };
        i.currMessage = null;
        i.justShowed = false;
        return i;
      }
      (0, p.Z)(r, [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          this.sub = u.f$.subscribe("TopRightHelper", function (t) {
            e.showQueue.push(t);
            e.setState({
              showQueue: e.showQueue
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          u.f$.unsubscribe(this.sub);
          clearTimeout(this.slideOutTimeout);
          clearTimeout(this.hidingMessageTimeout);
        }
      }, {
        key: "componentDidUpdate",
        value: function (e, t) {
          var r = this;
          if (this.justShowed) {
            this.justShowed = false;
            this.setState({
              currState: "slideIn"
            });
            this.slideOutTimeout = setTimeout(function () {
              r.setState({
                currState: "slideOut"
              });
            }, ((this.currMessage.duration || 8) - 1) * 1000);
            this.hidingMessageTimeout = setTimeout(function () {
              r.showQueue.shift();
              r.currMessage = null;
              r.setState({
                showQueue: r.showQueue,
                currState: null
              });
            }, (this.currMessage.duration || 8) * 1000);
          }
        }
      }, {
        key: "render",
        value: function () {
          var e;
          var t;
          var r;
          var i;
          var n;
          var o = true;
          if (this.state.showQueue.length > 0 && this.state.currState === null) {
            this.currMessage = this.state.showQueue[0];
            this.justShowed = true;
            e = "slideIn";
          } else if (this.state.currState === "slideOut") {
            e = "slideOut";
          } else if (this.currMessage === null) {
            o = false;
          }
          if (this.currMessage) {
            var s = this.currMessage.color || "rgb(102, 102, 102)";
            t = {
              width: this.currMessage.width || "250px",
              height: this.currMessage.height || "70px",
              animation: "1s ".concat(e === "slideOut" ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
            };
            r = {
              backgroundColor: s
            };
            i = {
              animation: "2s ".concat(e === "slideOut" ? "CloseNotification" : "ExpandNotification")
            };
            n = {
              fontSize: this.currMessage.fontSize || "16px",
              animation: "2s ".concat(e === "slideOut" ? "textDisappear" : "textAppear")
            };
          }
          if (o) {
            return (0, wt.jsxs)("div", {
              className: "TopRightHelperBox",
              style: t,
              children: [(0, wt.jsx)("div", {
                className: "LeftSide",
                style: r,
                children: (0, wt.jsx)("i", {
                  className: "fas fa-".concat(this.currMessage.iconSizeMult || 3, "x fa-").concat(this.currMessage.icon, " HelperIcon")
                })
              }), (0, wt.jsx)("div", {
                className: "RightSide",
                style: i,
                children: (0, wt.jsx)("div", {
                  className: "HelperText",
                  style: n,
                  children: this.currMessage.text
                })
              })]
            });
          } else {
            return null;
          }
        }
      }]);
      return r;
    }(It.Component);
    var Bt = r(4873);
    function Ot() {
      var e = (0, It.useState)(0);
      var t = (0, le.Z)(e, 2);
      var r = t[0];
      var i = t[1];
      var n = (0, u.Zx)();
      var o = (0, Et._)("changedHotbarUsingNumkeys", !(0, m.Uu)());
      var s = (0, le.Z)(o, 2);
      var a = s[0];
      var l = s[1];
      var c = function (e) {
        n.ents.getInventory(n.playerEntity).setSelectedSlotIndex(e);
        i(e);
        (0, u.Xi)(ke.Vz.newSelectedInventorySlotI, e);
      };
      (0, Et.lF)("ScrollInventorySlot", function (e) {
        var t = r + e;
        if (t < 0) {
          t = 9;
        } else if (t > 9) {
          t = 0;
        }
        c(t);
      });
      (0, Et.lF)("setSelectedInventorySlotI", function (e) {
        c(e);
        l(false);
      });
      var h = n.ents.getInventory(n.playerEntity);
      var d = (0, It.useState)(h.getHotBar());
      var f = (0, le.Z)(d, 2);
      var p = f[0];
      var g = f[1];
      var v = p[r];
      (0, Et.lF)("updatedInventory", function () {
        g(h.getHotBar());
      });
      (0, It.useEffect)(function () {
        var e = u.f$.subscribe("DropHotbarItem", function (e) {
          if (v) {
            var t;
            var i = e && (t = v.amount) !== null && t !== undefined ? t : 1;
            n.ents.getInvenOps(n.playerEntity).removeItemClient(r, i);
          }
        });
        return function () {
          u.f$.unsubscribe(e);
        };
      }, [v, r, n.ents, n.playerEntity]);
      return (0, wt.jsxs)("div", {
        className: "hotbarContainer",
        children: [(0, wt.jsx)("div", {
          className: "hotbar",
          children: new Array(10).fill(0).map(function (e, t) {
            return (0, wt.jsxs)("div", {
              className: "item ".concat(t === r ? "SelectedItem" : ""),
              style: {
                marginLeft: "".concat(t, "0%")
              },
              onPointerDown: function () {
                c(t);
              },
              children: [p[t] ? (0, wt.jsx)(Bt.a, {
                itemName: p[t].typeObj.name,
                amount: Lt(p[t])
              }) : null, a && (0, wt.jsx)("div", {
                className: "HotbarItemNumber SmallTextBold",
                children: t < 9 ? t + 1 : 0
              })]
            }, t);
          })
        }), (0, wt.jsx)(Ft, {
          selectedItem: v
        })]
      });
    }
    function Ft(e) {
      var t;
      var r = e.selectedItem;
      var i = (0, It.useState)(false);
      var n = (0, le.Z)(i, 2);
      var o = n[0];
      var s = n[1];
      var a = (0, It.useRef)(null);
      var u = (0, Et.GG)();
      var l = (0, It.useCallback)(function () {
        var e;
        clearTimeout(a.current);
        s(true);
        u();
        if ((r === null || r === undefined || (e = r.metadata) === null || e === undefined ? undefined : e.shotsLeft) === undefined) {
          a.current = setTimeout(function () {
            s(false);
          }, 2000);
        }
      }, [r]);
      (0, It.useEffect)(function () {
        l();
        return function () {
          clearTimeout(a.current);
          s(false);
        };
      }, [r, l]);
      (0, Et.lF)("serverOption|".concat(r === null || r === undefined ? undefined : r.typeObj.name, "DisplayName"), function () {
        s(true);
      });
      var c = (0, It.useState)(r === null || r === undefined || (t = r.metadata) === null || t === undefined ? undefined : t.shotsLeft);
      var h = (0, le.Z)(c, 2);
      var d = h[0];
      var f = h[1];
      (0, It.useEffect)(function () {
        var e;
        f(r === null || r === undefined || (e = r.metadata) === null || e === undefined ? undefined : e.shotsLeft);
      }, [r]);
      (0, Et.lF)("localPlayerNewShotsLeft", function (e) {
        f(e);
      });
      var p = (0, Rt.Lm)();
      return (0, wt.jsx)(wt.Fragment, {
        children: o && r ? (0, wt.jsxs)("div", {
          className: "SelectedItemName SmallTextBold",
          style: {
            bottom: "".concat(Math.min(Math.round(p * 0.05), 70), "px")
          },
          children: [(0, wt.jsx)(Et.fD, {
            text: typeof r.typeObj.displayName === "string" ? r.typeObj.displayName.split("|")[0] : r.typeObj.displayName
          }), d !== undefined ? (0, wt.jsx)("div", {
            className: "SelectedItemShotsLeft",
            children: " : ".concat(d, "|").concat(r.typeObj.clipSize)
          }) : null]
        }) : null
      });
    }
    function Lt(e) {
      if (e.typeObj.stackable) {
        return e.amount;
      } else {
        return 0;
      }
    }
    var Nt = r(7727);
    var Ut = r(63368);
    var Gt = r(30845);
    var Wt = r(31493);
    var jt = r(46123);
    var zt = r.n(jt);
    var Vt = It.memo(function (e) {
      var t = e.categories;
      (0, Rt.iP)();
      return (0, wt.jsx)(Ht, {
        categories: t
      });
    });
    var Ht = function (e) {
      (0, Tt.Z)(r, e);
      var t = (0, Pt.Z)(r);
      function r(e) {
        var i;
        var n;
        var o;
        var s;
        var a;
        (0, f.Z)(this, r);
        (s = t.call(this, e)).itemsDivRef = undefined;
        s.useScrollLocation = undefined;
        s.lastRewardedAttempt = undefined;
        s.onBoughtInfoTimeout = undefined;
        s.localCategoryInfo = undefined;
        s.currSub = undefined;
        s.categoriesSub = undefined;
        s.playerNamesUpdatedSub = undefined;
        s.showShopSub = undefined;
        s.forceShopSub = undefined;
        s.isForcedOpen = false;
        s.overShopInfoSub = undefined;
        s.toggleShop = function () {
          var e = {
            showShop: s.isForcedOpen || !s.state.showShop
          };
          if (e.showShop !== s.state.showShop) {
            if (s.state.showShop) {
              e.currentItemsScrollLocation = s.itemsDivRef.current.scrollTop;
            } else {
              s.useScrollLocation = true;
            }
            s.setState(e);
          }
        };
        s.onNewCategories = function (e) {
          var t;
          var r;
          if (e && Object.keys(e).length !== 0) {
            var i = null;
            for (var n in e) {
              if (Object.keys(e[n].items).length === 0) {
                delete e[n];
              }
            }
            var o = new Set();
            for (var a in e) {
              o.add(a);
              if (e[a].autoSelectCategory === true) {
                i = a;
              }
              if (!s.localCategoryInfo[a]) {
                s.localCategoryInfo[a] = {
                  redDot: false,
                  items: {}
                };
              }
              if (e[a].redDot) {
                s.localCategoryInfo[a].redDot = true;
              }
              if (e[a].forceRemoveRedDot) {
                s.localCategoryInfo[a].redDot = false;
              }
              for (var l in e[a].items) {
                var c = e[a].items[l];
                if (!s.localCategoryInfo[a].items[l]) {
                  s.localCategoryInfo[a].items[l] = {
                    redDot: false
                  };
                }
                if (c.redDot) {
                  s.localCategoryInfo[a].items[l].redDot = true;
                }
                if (c.forceRemoveRedDot) {
                  s.localCategoryInfo[a].items[l].redDot = false;
                }
              }
            }
            for (var h in s.localCategoryInfo) {
              if (o.has(h)) {
                for (var d in s.localCategoryInfo[h].items) {
                  var f;
                  if (!((f = e[h]) !== null && f !== undefined && f.items[d])) {
                    delete s.localCategoryInfo[h].items[d];
                  }
                }
              } else {
                delete s.localCategoryInfo[h];
              }
            }
            var p = (0, A.Z)({}, s.state.itemUserInputs);
            var m = {
              categories: e,
              itemUserInputs: p
            };
            for (var g in e) {
              var v = function (t) {
                var r;
                var i;
                var n;
                var o = e[g].items[t];
                var a = s.state.itemUserInputs[t];
                if (((r = o.userInput) === null || r === undefined ? undefined : r.type) === "dropdown") {
                  var l = !a || !o.userInput.dropdownOptions.some(function (e) {
                    return (typeof e === "object" ? e.option : e) === a;
                  });
                  if (l) {
                    var c = o.userInput.dropdownOptions[0];
                    p[t] = typeof c === "object" ? c.option : c;
                  }
                } else if (((i = o.userInput) === null || i === undefined ? undefined : i.type) === "text") {
                  if (!a) {
                    p[t] = "";
                  }
                } else if (((n = o.userInput) === null || n === undefined ? undefined : n.type) === "player") {
                  var h = (0, u.rL)().getPlayersAvailableForShopInput((0, u.Zx)().serverPlayerEntity, o);
                  if (!(a && h.includes(a))) {
                    p[t] = h.length > 0 ? h[0] : null;
                  }
                }
              };
              for (var _ in e[g].items) {
                v(_);
              }
            }
            if (i === null || s.state.showShop) {
              if (e[s.state.selectedCategoryName]) {
                if (!((t = e[s.state.selectedCategoryName]) !== null && t !== undefined && (r = t.items) !== null && r !== undefined && r[s.state.selectedItemName])) {
                  m.selectedItemName = Object.keys(e[s.state.selectedCategoryName].items)[0];
                }
              } else {
                m.selectedCategoryName = Object.keys(e)[0];
                m.selectedItemName = Object.keys(e[m.selectedCategoryName].items)[0];
              }
            } else {
              m.selectedCategoryName = i;
              m.selectedItemName = Object.keys(e[i].items)[0];
            }
            s.setState(m);
            for (var y in e) {
              if (e[y].redDot) {
                u.f$.publish("showShopIconRedDot", true, true);
                break;
              }
            }
            var b = false;
            for (var S in s.localCategoryInfo) {
              if (s.localCategoryInfo[S].redDot) {
                b = true;
              }
            }
            if (!b) {
              u.f$.publish("showShopIconRedDot", false, true);
            }
            return m;
          }
          s.setState({
            categories: {}
          });
        };
        s.setOnBoughtInfo = function (e) {
          s.setState({
            onBoughtInfo: e
          });
          clearTimeout(s.onBoughtInfoTimeout);
          s.onBoughtInfoTimeout = setTimeout(function () {
            s.setState({
              onBoughtInfo: null
            });
          }, 3000);
        };
        s.getShop = function (e) {
          var t = s.state.currencies;
          var r = s.state.categories;
          var i = s.state.selectedCategoryName;
          var n = s.state.selectedItemName;
          var o = r[i];
          var a = o === null || o === undefined ? undefined : o.items[n];
          var l = function (e, t) {
            var r = {
              category: i,
              name: e,
              shopVersion: (0, u.Zx)().serverSettings._shopVersion,
              userInput: s.state.itemUserInputs[e]
            };
            if (t.isRewardedAd) {
              if (Date.now() - s.lastRewardedAttempt < 5000) {
                return;
              }
              (0, d.pD)(function () {
                console.log("bought rewarded ad");
                (0, u.Xi)(ke.Vz.itemBought, r);
                s.setOnBoughtInfo(t.onBoughtMessage);
              }, function () {
                console.log("Rewarded ad failed");
                s.setState({
                  showRewardedAdFail: true
                });
              });
              s.lastRewardedAttempt = Date.now();
            } else {
              (0, u.Xi)(ke.Vz.itemBought, r);
              var n = (0, u.Uo)(e, t, s.state.itemUserInputs[e]);
              if (!isNaN(n) && t.currency) {
                var o = (0, A.Z)({}, s.state.currencies);
                o[t.currency].amount -= n;
                s.setState({
                  currencies: o
                });
              }
              if (t.onBoughtMessage) {
                s.setOnBoughtInfo(t.onBoughtMessage);
              }
            }
          };
          var c = function (e, t) {
            s.setState({
              itemUserInputs: (0, A.Z)((0, A.Z)({}, s.state.itemUserInputs), {}, (0, $e.Z)({}, e, t))
            });
          };
          if (!d.sB[(0, d.cY)()].showRewardedAds) {
            (function (e) {
              for (var t in e) {
                for (var r in e[t].items) {
                  if (e[t].items[r].isRewardedAd) {
                    delete e[t].items[r];
                    if (Object.keys(e[t].items).length === 0) {
                      delete e[t];
                    }
                  }
                }
              }
            })(r);
          }
          var h = s.getShopIsShowing();
          return (0, wt.jsxs)("div", {
            style: {
              display: h ? "" : "none",
              pointerEvents: h ? undefined : "none"
            },
            children: [(0, wt.jsx)(Et.rW, {
              show: d.j5 !== "crazygames" || h,
              close: s.toggleShop,
              forcePointerLock: !h,
              globallyUniqueKey: "ShopComponent",
              children: Object.keys(s.state.categories).length !== 0 && (0, wt.jsx)(wt.Fragment, {
                children: (0, wt.jsxs)("div", {
                  className: "ShopBody SmallTextLight",
                  children: [(0, wt.jsxs)("div", {
                    className: "ShopSidebarMenu",
                    children: [!s.isForcedOpen && (0, wt.jsx)(Ut.El, {
                      onClick: s.toggleShop,
                      className: "ShopResumeButton",
                      children: "Resume"
                    }), (0, wt.jsx)(Et.w3, {
                      className: "ShopCategories",
                      items: Object.keys(r).map(function (e) {
                        return {
                          str: e,
                          redDot: s.localCategoryInfo[e].redDot === true
                        };
                      }),
                      selectedItemStr: i,
                      onClick: function (e) {
                        if (s.localCategoryInfo[e].redDot === true) {
                          s.localCategoryInfo[e].redDot = false;
                          s.redDotCountDecreased();
                        }
                        s.setState({
                          selectedCategoryName: e,
                          selectedItemName: Object.keys(s.state.categories[e].items)[0]
                        });
                      }
                    }), (0, wt.jsx)("div", {
                      className: "ShopCurrencies",
                      children: t && Object.keys(t).map(function (e) {
                        return (0, wt.jsxs)("div", {
                          className: "ShopCurrencyDiv",
                          children: [(0, wt.jsx)("div", {
                            className: "ShopCurrencyAmtIcon",
                            style: {
                              color: t[e].iconColour
                            },
                            children: (0, wt.jsx)(Xt, {
                              iconName: t[e].icon
                            })
                          }), " ", t[e].amount]
                        }, e);
                      })
                    })]
                  }), (0, wt.jsxs)("div", {
                    className: "ShopItemsWrapper",
                    children: [(0, wt.jsx)("div", {
                      className: "ShopBannerDiv",
                      children: (0, wt.jsx)(Nt.YL, {
                        info: e[0],
                        showing: s.state.showShop
                      })
                    }), (0, wt.jsx)("div", {
                      className: "ShopItems",
                      ref: s.itemsDivRef,
                      children: Object.keys(r[i].items).map(function (e) {
                        var r;
                        var a = o.items[e];
                        var h = s.state.itemUserInputs[e];
                        var d = (0, u.Uo)(e, a, h);
                        return (0, wt.jsxs)("div", {
                          className: "ShopItem ".concat(e === n ? "SelectedShopItem" : ""),
                          onClick: function () {
                            s.setState({
                              selectedItemName: e
                            });
                            if (s.localCategoryInfo[i].items[e].redDot === true) {
                              s.localCategoryInfo[i].items[e].redDot = false;
                              s.setState({
                                categories: (0, A.Z)({}, s.state.categories)
                              });
                            }
                          },
                          children: [(0, wt.jsx)("div", {
                            className: "ShopItemHeaderDiv",
                            children: (0, wt.jsx)("div", {
                              className: "ShopItemHeader",
                              children: (0, wt.jsx)(Et.fD, {
                                text: (r = a.customTitle) !== null && r !== undefined ? r : e
                              })
                            })
                          }), (0, wt.jsx)("div", {
                            className: "ItemImageDiv",
                            children: a.image && (0, wt.jsx)(Zt, {
                              image: a.image,
                              color: a.imageColour,
                              minWidth: 5,
                              minHeight: 4.8
                            })
                          }), (0, wt.jsx)(Yt, {
                            item: a,
                            currInput: h,
                            updateInput: function (t) {
                              c(e, t);
                            }
                          }), (0, wt.jsx)(Kt, {
                            item: a,
                            cost: d,
                            currenciesObj: t,
                            outerClassName: "BuyItemDiv",
                            userInputValid: h !== null,
                            onBuy: function () {
                              l(e, a);
                            }
                          }), s.localCategoryInfo[i].items[e].redDot === true && (0, wt.jsx)(Et.op, {
                            top: "-0.2rem",
                            right: "-0.2rem"
                          })]
                        }, e);
                      })
                    })]
                  }), (0, wt.jsx)(qt, {
                    selectedItemName: n,
                    selectedItem: a,
                    currencies: t,
                    buyItem: l,
                    currUserInput: s.state.itemUserInputs[n],
                    updateUserInput: function (e) {
                      c(n, e);
                    }
                  })]
                })
              })
            }), s.state.onBoughtInfo !== null ? (0, wt.jsx)("div", {
              className: "ShopOnBoughtInfo",
              children: (0, wt.jsx)(Et.fD, {
                text: s.state.onBoughtInfo
              })
            }) : null, s.state.showRewardedAdFail ? (0, wt.jsx)(Et.rL, {
              className: "RewardedAdFailInfo",
              hide: function () {
                s.setState({
                  showRewardedAdFail: false
                });
              },
              bgClassName: "RewardedAdFailBg",
              containerClassName: "RewardedAdFailContainer",
              children: (0, wt.jsx)("div", {
                children: "The rewarded ad failed. You need to disable adblock if you have it enabled."
              })
            }) : null]
          });
        };
        if (e.categories) {
          for (var l in a = e.categories) {
            if (Object.keys(a[l].items).length === 0) {
              delete a[l];
            }
          }
        } else {
          a = {};
        }
        var c = Object.keys(a)[0];
        s.state = {
          showShop: false,
          selectedCategoryName: c,
          selectedItemName: (i = Object.keys((n = (o = a[c]) === null || o === undefined ? undefined : o.items) !== null && n !== undefined ? n : {})) === null || i === undefined ? undefined : i[0],
          currentItemsScrollLocation: 0,
          currencies: (0, u.Zx)().serverSettings.currencyAmounts,
          categories: a,
          showRewardedAdFail: false,
          onBoughtInfo: null,
          itemUserInputs: {}
        };
        s.itemsDivRef = It.createRef();
        s.useScrollLocation = false;
        s.lastRewardedAttempt = 0;
        s.onBoughtInfoTimeout = null;
        s.localCategoryInfo = {};
        var h = s.onNewCategories(e.categories);
        s.state = (0, A.Z)((0, A.Z)({}, s.state), h);
        return s;
      }
      (0, p.Z)(r, [{
        key: "shouldComponentUpdate",
        value: function (e, t, r) {
          return t.showShop || this.state.showShop;
        }
      }, {
        key: "componentDidMount",
        value: function () {
          var e = this;
          this.currSub = u.f$.subscribe("serverOption|currencyAmounts", function (t) {
            e.setState({
              currencies: t
            });
          });
          this.categoriesSub = u.f$.subscribe("serverOption|shopInfo", this.onNewCategories);
          this.playerNamesUpdatedSub = u.f$.subscribe("playerNamesUpdated", function () {
            e.onNewCategories((0, A.Z)({}, e.state.categories));
          });
          this.showShopSub = u.f$.subscribe("toggleShop", function () {
            e.toggleShop();
          });
          this.forceShopSub = u.f$.subscribe("forceShowShop", function (t) {
            e.isForcedOpen = t;
            e.toggleShop();
          });
          this.overShopInfoSub = u.f$.subscribe("overShopInfo", function (t) {
            e.setOnBoughtInfo(t);
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          u.f$.unsubscribe(this.currSub);
          u.f$.unsubscribe(this.categoriesSub);
          u.f$.unsubscribe(this.playerNamesUpdatedSub);
          u.f$.unsubscribe(this.showShopSub);
          u.f$.unsubscribe(this.overShopInfoSub);
        }
      }, {
        key: "getShopIsShowing",
        value: function () {
          return Object.keys(this.state.categories).length !== 0 && this.state.showShop;
        }
      }, {
        key: "componentDidUpdate",
        value: function (e, t) {
          if (this.useScrollLocation) {
            if (this.itemsDivRef.current) {
              this.itemsDivRef.current.scrollTop = this.state.currentItemsScrollLocation;
            }
            this.useScrollLocation = false;
          }
          var r = this.state.selectedCategoryName;
          if (this.getShopIsShowing() && this.localCategoryInfo[r].redDot === true) {
            this.localCategoryInfo[r].redDot = false;
            this.redDotCountDecreased();
            this.setState({
              categories: (0, A.Z)({}, this.state.categories)
            });
          }
          if (Object.keys(this.state.categories).length === 0 && this.state.showShop) {
            this.setState({
              showShop: false
            });
          }
          if (this.getShopIsShowing() && !t.showShop) {
            (0, d.D9)();
          } else if (!this.getShopIsShowing() && t.showShop) {
            (0, d.Uz)();
          }
        }
      }, {
        key: "redDotCountDecreased",
        value: function () {
          for (var e in this.state.categories) {
            if (this.localCategoryInfo[e].redDot === true) {
              return;
            }
          }
          u.f$.publish("showShopIconRedDot", false, true);
        }
      }, {
        key: "render",
        value: function () {
          return (0, wt.jsx)(Nt.OV, {
            getChildren: this.getShop,
            useAdBannersArgs: {
              banners: [{
                adId: 2,
                adType: "leaderboard",
                maxWidth: window.innerWidth - (0, u.P3)() * 42,
                maxHeight: 101
              }],
              showing: this.getShopIsShowing()
            }
          });
        }
      }]);
      return r;
    }(It.Component);
    function qt(e) {
      var t;
      var r = e.selectedItemName;
      var i = e.selectedItem;
      var n = e.currencies;
      var o = e.buyItem;
      var s = e.currUserInput;
      var a = e.updateUserInput;
      var l = (0, u.Uo)(r, i, s);
      return (0, wt.jsxs)("div", {
        className: "SelectedItemViewer",
        children: [(0, wt.jsx)("div", {
          className: "SelectedItemHeaderDiv SmallTextBold",
          children: (0, wt.jsx)("div", {
            className: "SelectedItemHeader",
            children: (0, wt.jsx)(Et.fD, {
              text: (t = i.customTitle) !== null && t !== undefined ? t : r
            })
          })
        }), (0, wt.jsx)("div", {
          className: "SelectedItemImageDiv",
          children: i.image && (0, wt.jsx)(Zt, {
            image: i.image,
            color: i.imageColour,
            minWidth: 8,
            minHeight: 7.5
          })
        }), (0, wt.jsx)("div", {
          className: "SelectedItemDescription",
          children: (0, wt.jsx)(Et.fD, {
            text: i.description
          })
        }), (0, wt.jsx)(Yt, {
          item: i,
          currInput: s,
          updateInput: a
        }), (0, wt.jsx)(Kt, {
          item: i,
          cost: l,
          currenciesObj: n,
          outerClassName: "SelectedBuyItemDiv",
          userInputValid: s !== null,
          onBuy: function () {
            o(r, i);
          }
        })]
      });
    }
    function Zt(e) {
      var t;
      var r = e.image;
      var i = e.color;
      var n = e.minWidth;
      var o = e.minHeight;
      var s = r.split("|")[0];
      if (s in u.EU.itemsClient) {
        return (0, wt.jsx)("div", {
          className: "ShopBlock",
          style: {
            minWidth: "".concat(n, "rem"),
            height: "0",
            minHeight: "".concat(o, "rem")
          },
          children: (0, wt.jsx)(Bt.a, {
            itemName: s,
            amount: (t = parseInt(r.split("|")[1])) !== null && t !== undefined ? t : 0,
            amountFontSize: "".concat(o / 4, "rem")
          })
        });
      }
      if (s.slice(-4) === ".jpg" || s.slice(-4) === ".png") {
        var l = s.slice(-4) === ".jpg" ? n * 1.6 : n;
        return (0, wt.jsx)("img", {
          className: zt()({
            ShopPixelImage: s.slice(-4) === ".png"
          }),
          style: {
            width: "".concat(l, "rem"),
            height: "auto",
            fontSize: "1.25rem"
          },
          src: "textures/games/".concat((0, a.$E)(), "/").concat(s),
          alt: s,
          draggable: false
        });
      }
      return (0, wt.jsx)("i", {
        className: "fas fa-".concat(r, " SelectedItemImage"),
        style: {
          color: i
        }
      });
    }
    function Kt(e) {
      var t;
      var r;
      var i = e.item;
      var n = e.cost;
      var o = e.currenciesObj;
      var s = e.outerClassName;
      var a = e.userInputValid;
      var u = e.onBuy;
      var l = (isNaN(n) || i.currency === undefined || n <= o[i.currency].amount) && a && ((t = i.canBuy) === null || t === undefined || t);
      var c = !isNaN(n) && n !== 0;
      if (i.buyButtonText) {
        r = i.buyButtonText;
      } else if (c) {
        r = n;
        if (i.sell === true) {
          r = n * -1;
        }
        r = r.toString();
      } else if (n === 0) {
        r = "Free";
      } else if (i.isRewardedAd) {
        r = "Watch ad";
      } else {
        console.error("Shop item does not have correct values. Defaulting the text on the buy button to Get. Shop item:", i);
        r = "Get";
      }
      return (0, wt.jsx)(Ut.El, {
        className: "".concat(s, " SmallTextLight"),
        disabled: !l,
        onClick: function () {
          var e;
          if ((isNaN(n) || i.currency === undefined || n <= o[i.currency].amount) && a && ((e = i.canBuy) === null || e === undefined || e)) {
            u();
          }
        },
        children: (0, wt.jsxs)("div", {
          className: "BuyItemCostAndIcon",
          children: [c && (0, wt.jsx)("div", {
            style: {
              color: l ? o[i.currency].iconColour : "lightgray"
            },
            className: "BuyItemIcon",
            children: (0, wt.jsx)(Xt, {
              iconName: o[i.currency].icon
            })
          }), (0, wt.jsx)("div", {
            className: "BuyItemCost",
            children: (0, wt.jsx)(Et.fD, {
              text: r
            })
          })]
        })
      });
    }
    function Yt(e) {
      var t = e.item;
      var r = e.currInput;
      var i = e.updateInput;
      var n = (0, It.useRef)(null);
      if (!t.userInput) {
        return null;
      }
      if (t.userInput.type === "text") {
        console.assert(r !== undefined, "Rendered ItemUserInput but currInput is undefined. Item: ".concat(JSON.stringify(t)));
        var o = t.userInput.wordCharsOnly;
        return (0, wt.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, wt.jsx)(Gt.o, {
            className: "ShopItemUserInputText",
            placeholderText: t.userInput.placeholderText,
            defaultValue: r,
            domRef: n,
            onValueChange: function (e, t) {
              if (o === true) {
                e = (0, u.w8)(e);
              }
              n.current.value = e;
              i(e);
            }
          })
        });
      }
      if (t.userInput.type === "dropdown") {
        console.assert(r !== undefined, "Rendered ItemUserInput but currInput is undefined. Item: ".concat(JSON.stringify(t)));
        return (0, wt.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, wt.jsx)(Wt.L, {
            options: t.userInput.dropdownOptions.map(function (e) {
              if (typeof e === "object") {
                return e.option;
              } else {
                return e;
              }
            }),
            value: r,
            onChange: function (e) {
              var t = e.value;
              i(t);
            }
          })
        });
      }
      if (t.userInput.type === "player") {
        var s = (0, u.rL)().getPlayersAvailableForShopInput((0, u.Zx)().serverPlayerEntity, t);
        return (0, wt.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, wt.jsx)(Wt.L, {
            options: s.map(function (e) {
              return {
                value: e,
                label: (0, u.Zx)().playerNames[e]
              };
            }),
            value: r,
            onChange: function (e) {
              var t = e.value;
              i(t);
            }
          })
        });
      }
    }
    function Xt(e) {
      var t = e.iconName;
      if (t in u.EU.itemsClient) {
        return (0, wt.jsx)(Bt.a, {
          itemName: t,
          amount: 1
        });
      } else {
        return (0, wt.jsx)("i", {
          className: "fas fa-".concat(t, " 2x")
        });
      }
    }
    var Qt = r(31382);
    var Jt = r(96724);
    var $t = r(95319);
    function er(e) {
      var t = e.tasks;
      var r = e.lastDisplayedTasks;
      return (0, wt.jsx)(wt.Fragment, {
        children: Object.keys(t).map(function (e) {
          return (0, wt.jsx)(tr, {
            task: t[e],
            lastDisplayedAs: r[e]
          }, t[e].text);
        })
      });
    }
    function tr(e) {
      var t = e.task;
      var r = e.lastDisplayedAs;
      var i = (0, It.useState)((r === null || r === undefined ? undefined : r.progress) / t.goal);
      var n = (0, le.Z)(i, 2);
      var o = n[0];
      var s = n[1];
      var a = (0, It.useState)(false);
      var u = (0, le.Z)(a, 2);
      var l = u[0];
      var c = u[1];
      var h = (0, It.useState)(t.claimed || false);
      var d = (0, le.Z)(h, 2);
      var f = d[0];
      var p = d[1];
      (0, It.useEffect)(function () {
        s(t.progress / t.goal);
      }, [t.progress, t.goal]);
      if (f) {
        return null;
      } else {
        return (0, wt.jsxs)("div", {
          className: "Task",
          children: [(0, wt.jsx)("div", {
            className: "TaskDescDiv",
            children: (0, wt.jsx)(Et.xv, {
              vw: 1.5,
              maxPx: 30,
              children: t.text
            })
          }), t.progress < t.goal ? (0, wt.jsxs)("div", {
            className: "TaskProgress",
            children: [o !== 0 ? (0, wt.jsx)("div", {
              className: "TaskProgressForeground",
              style: {
                width: "".concat(o * 100, "%")
              }
            }) : null, (0, wt.jsx)("div", {
              className: "TaskProgressText",
              children: "".concat(t.progress, "/").concat(t.goal)
            })]
          }) : (0, wt.jsx)("div", {
            className: "ClaimRewardButton Button",
            onClick: function () {
              c(true);
            },
            children: (0, wt.jsx)(Et.xv, {
              vw: 1.5,
              maxPx: 30,
              children: "Claim Reward"
            })
          }), l ? (0, wt.jsx)(rr, {
            task: t,
            close: function () {
              t.claimed = true;
              p(true);
              c(false);
            }
          }) : null]
        });
      }
    }
    function rr(e) {
      var t = e.task;
      var r = e.close;
      var i = (0, It.useState)(0);
      var n = (0, le.Z)(i, 2);
      var o = n[0];
      var s = n[1];
      var a = (0, It.useState)("closed");
      var l = (0, le.Z)(a, 2);
      var c = l[0];
      var h = l[1];
      (0, It.useEffect)(function () {
        var e;
        if (c === "animStart") {
          e = setTimeout(function () {
            h("animEnd");
          }, 700);
        }
        return function () {
          clearTimeout(e);
        };
      }, [c]);
      (0, $t.x)(function () {
        (0, u.Xi)(ke.Vz.completeTask, t.text, true);
      });
      var d = (0, Et.$i)("currencyAmounts");
      return (0, wt.jsxs)("div", {
        className: "RewardBackground",
        onClick: function () {
          if (c === "animEnd") {
            if (t.rewards.length === 0) {
              r();
              (0, u.Xi)(ke.Vz.completeTask, t.text, true);
            } else {
              var e = (0, u.Zx)().serverSettings.currencyAmounts;
              for (var i in o) {
                e[i].amount += o[i];
              }
              u.f$.publish("serverOption|currencyAmounts", e);
              h("closed");
            }
          } else if (c === "closed") {
            s(t.rewards.pop());
            h("animStart");
          }
        },
        children: [(0, wt.jsx)("img", {
          className: "Chest",
          alt: c !== "closed" ? "open chest" : "closed chest",
          src: "/textures/miscImages/Treasure Chest ".concat(c !== "closed" ? "open" : "closed", ".png")
        }), (0, wt.jsx)("div", {
          className: "Rewards",
          children: c !== "closed" ? Object.keys(o).map(function (e) {
            return (0, wt.jsxs)("div", {
              className: "Reward",
              children: [(0, wt.jsx)("i", {
                className: "fas fa-".concat(d[e].icon, " 3x UiCurrencyIcon RewardIcon"),
                style: {
                  color: d[e].iconColour
                }
              }), (0, wt.jsx)("div", {
                className: "RewardAmountText",
                children: c === "animStart" ? 0 : o[e]
              })]
            }, e);
          }) : null
        }), c === "animStart" ? (0, wt.jsx)(ir, {}) : null, (0, wt.jsx)("div", {
          className: "ChestsLeft",
          children: t.rewards.length
        })]
      });
    }
    function ir() {
      var e = (0, It.useState)(0);
      var t = (0, le.Z)(e, 2);
      var r = t[0];
      var i = t[1];
      (0, It.useEffect)(function () {
        i(1);
      }, []);
      return new Array(40).fill().map(function (e, t) {
        return (0, wt.jsx)("i", {
          className: "fas fa-star 3x UiCurrencyIcon OpenStar",
          style: {
            bottom: "".concat(r * 50 * Math.cos(t / 40 * (Math.PI * 2)) + 50, "vh"),
            left: "".concat(r * 50 * Math.sin(t / 40 * (Math.PI * 2)), "vh"),
            opacity: r === 0 ? 1 : 0
          }
        }, t);
      });
    }
    function nr(e) {
      var t = e.lbStats;
      var r = e.storedState;
      var i = r === undefined ? {} : r;
      var n = (0, It.useState)(i.selectedCat || (t === null || t === undefined ? undefined : t[0]) || null);
      var o = (0, le.Z)(n, 2);
      var s = o[0];
      var a = o[1];
      var l = (0, It.useState)(i.selectedTimeframe || "Today");
      var c = (0, le.Z)(l, 2);
      var h = c[0];
      var d = c[1];
      var f = (0, It.useState)(null);
      var p = (0, le.Z)(f, 2);
      var m = p[0];
      var g = p[1];
      (0, It.useEffect)(function () {
        if (s === null && t !== null && t.length > 0) {
          a(t[0]);
        }
      }, [t, s]);
      var v = (0, It.useState)(i.seeingTop || false);
      var _ = (0, le.Z)(v, 2);
      var y = _[0];
      var A = _[1];
      var S = (0, It.useState)(false);
      var M = (0, le.Z)(S, 2);
      var C = M[0];
      var x = M[1];
      var T = (0, It.useCallback)(function () {
        if (s !== null && h !== null) {
          (0, u.Xi)(ke.Vz.leaderboardRequest, {
            category: s.value,
            timeframe: h,
            seeTop: y
          }, true);
          R(true);
          if (N) {
            U(null);
          }
        }
      }, [s, h, i, y]);
      (0, It.useEffect)(function () {
        T();
        i.selectedCat = s;
        i.selectedTimeframe = h;
        i.seeingTop = y;
      }, [s, h, i, y, T]);
      (0, It.useEffect)(function () {
        if ((m === null || m === undefined ? undefined : m.length) > 0) {
          if (y) {
            if (y) {
              x(w(m) === null);
            }
          } else {
            var e;
            var t = (0, b.Z)(m);
            try {
              for (t.s(); !(e = t.n()).done;) {
                if (e.value.place === 1) {
                  return void x(false);
                }
              }
            } catch (r) {
              t.e(r);
            } finally {
              t.f();
            }
            x(true);
          }
        }
      }, [m, y]);
      (0, Et.lF)("leaderboardResponse", function (e) {
        for (var r = e.category, i = e.timeframe, n = e.data, o = 0; o < t; o++) {
          if (t[o].value === r) {
            a(t[o]);
            break;
          }
        }
        d(i);
        g(n);
        R(false);
      });
      var P = (0, It.useState)(true);
      var I = (0, le.Z)(P, 2);
      var E = I[0];
      var R = I[1];
      function w(e) {
        for (var t = 0; t < e.length; t++) {
          if (e[t].name === (0, u.Zx)().playerNames[(0, u.Zx)().playerEntity]) {
            return e[t].place;
          }
        }
        return null;
      }
      var k = (0, It.useState)(false);
      var D = (0, le.Z)(k, 2);
      var B = D[0];
      var O = D[1];
      var F = (0, It.useState)(null);
      var L = (0, le.Z)(F, 2);
      var N = L[0];
      var U = L[1];
      (0, It.useEffect)(function () {
        if (m && !B) {
          var e = w(m);
          if (e < (i.lastSeenPlayerPlace || 0)) {
            U(i.lastSeenPlayerPlace - e);
          }
          O(true);
        }
      }, [m, i, B]);
      (0, It.useEffect)(function () {
        return function () {
          if (m) {
            i.lastSeenPlayerPlace = w(m);
          }
        };
      }, [m, i]);
      var G = (0, It.useRef)(null);
      var W = (0, It.useState)(undefined);
      var j = (0, le.Z)(W, 2);
      var z = j[0];
      var V = j[1];
      (0, It.useEffect)(function () {
        var e;
        var t;
        if (z !== ((e = G.current) === null || e === undefined ? undefined : e.offsetHeight)) {
          V((t = G.current) === null || t === undefined ? undefined : t.offsetHeight);
        }
      });
      if (u.EU.isLoggedIn) {
        return (0, wt.jsxs)(wt.Fragment, {
          children: [(0, wt.jsxs)("div", {
            className: "LeaderboardSelectors",
            children: [(0, wt.jsx)("div", {
              className: "LeaderboardSelect",
              children: (0, wt.jsx)(Wt.L, {
                options: t.map(function (e) {
                  return {
                    label: e.label,
                    value: e.value
                  };
                }),
                value: s,
                onChange: function (e) {
                  a(e);
                },
                controlClassName: "LBSelectClass",
                arrowClassName: "LBSelectArrow",
                menuClassName: "LBDropdownMenu"
              })
            }), (0, wt.jsx)("div", {
              className: "LeaderboardSelect",
              children: (0, wt.jsx)(Wt.L, {
                options: ["Today", "This week", "All Time"].map(function (e) {
                  return {
                    value: e,
                    label: e,
                    className: "LBDropdownMenuItem"
                  };
                }),
                value: h,
                onChange: function (e) {
                  d(e.label);
                },
                controlClassName: "LBSelectClass",
                arrowClassName: "LBSelectArrow",
                menuClassName: "LBDropdownMenu"
              })
            }), C ? (0, wt.jsx)("div", {
              className: "SeeTopText",
              onClick: function () {
                A(!y);
              },
              children: y ? "See Yourself" : "See Top"
            }) : null]
          }), (0, wt.jsx)("div", {
            className: "LBTableWrapper",
            children: E ? (0, wt.jsx)("div", {
              className: "loader"
            }) : N === null ? (0, wt.jsxs)(wt.Fragment, {
              children: [(0, wt.jsx)("div", {
                className: "LBTableHeaderBG",
                style: {
                  height: z ? "calc(".concat(z, "px + 1.4vmin)") : "6.5vmin"
                }
              }), (0, wt.jsxs)("table", {
                className: "LBTable",
                children: [(0, wt.jsx)("thead", {
                  className: "LBTableTHead",
                  ref: G,
                  children: (0, wt.jsxs)("tr", {
                    children: [(0, wt.jsx)("th", {
                      className: "LBTablePlaceTH LBTableTH",
                      children: "PLACE"
                    }), (0, wt.jsx)("th", {
                      className: "LBTablePlayerTH LBTableTH",
                      children: "PLAYER"
                    }), (0, wt.jsx)("th", {
                      className: "LBTableValueTH LBTableTH",
                      children: s.label.toUpperCase()
                    })]
                  })
                }), (0, wt.jsx)("tbody", {
                  children: m.map(function (e) {
                    return (0, wt.jsxs)("tr", {
                      className: "LBTableTR ".concat(e.name === (0, u.Zx)().playerNames[(0, u.Zx)().playerEntity] ? "LBTableTRYou" : ""),
                      children: [(0, wt.jsx)("td", {
                        className: "LBTableTD",
                        children: "#".concat(e.place)
                      }), (0, wt.jsx)("td", {
                        className: "LBTableTD",
                        children: e.name
                      }), (0, wt.jsx)("td", {
                        className: "LBTableTD",
                        children: e.stat
                      })]
                    }, e.name);
                  })
                })]
              })]
            }) : (0, wt.jsx)("div", {
              className: "LBIncreaseWrapper",
              onClick: function () {
                U(null);
              },
              children: (0, wt.jsxs)("div", {
                className: "LBIncreaseDiv",
                children: [(0, wt.jsx)("div", {
                  className: "TriangleUp"
                }), (0, wt.jsx)("div", {
                  className: "LBIncreaseText",
                  children: "".concat(N, " Place").concat(N > 1 ? "s" : "")
                })]
              })
            })
          })]
        });
      } else {
        return (0, wt.jsxs)("div", {
          className: "LBLoginDiv",
          children: [(0, wt.jsx)("div", {
            className: "LBLoginInfo",
            children: "Login to see the leaderboard"
          }), (0, wt.jsx)("div", {
            className: "LBLoginInfo",
            children: "You can login from the top left homescreen"
          })]
        });
      }
    }
    u.f$.subscribe("requiredLibrariesLoaded", function () {
      setTimeout(function () {
        var e = new Image();
        var t = new Image();
        e.src = "/textures/miscImages/Treasure Chest open.png";
        t.src = "/textures/miscImages/Treasure Chest closed.png";
      }, 10000);
    });
    var or = It.memo(function () {
      (0, Rt.iP)();
      var e = (0, Et.$i)("_tasks");
      var t = (0, Et.$i)("_availableLeaderboards");
      var r = (0, It.useState)({});
      var i = (0, le.Z)(r, 2);
      var n = i[0];
      var o = i[1];
      if (e && Object.keys(e).length > 0 && Object.keys(n).length === 0) {
        o(e);
      }
      var s = (0, It.useState)({
        tasks: {},
        leaderboard: {}
      });
      var a = (0, le.Z)(s, 1)[0];
      var u = {
        tasks: {
          Title: "Tasks",
          getIsDefined: function () {
            return !!e && Object.keys(e).length > 0;
          },
          content: (0, wt.jsx)(er, {
            tasks: e,
            lastDisplayedTasks: n
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: function () {
            return (t === null || t === undefined ? undefined : t.length) > 0;
          },
          content: (0, wt.jsx)(nr, {
            lbStats: t,
            storedState: a.leaderboard
          })
        }
      };
      var l = (0, It.useState)(_());
      var c = (0, le.Z)(l, 2);
      var h = c[0];
      var f = c[1];
      var p = (0, It.useState)(false);
      var m = (0, le.Z)(p, 2);
      var g = m[0];
      var v = m[1];
      function _() {
        for (var e in u) {
          if (u[e].getIsDefined()) {
            return e;
          }
        }
        return null;
      }
      (0, Et.lF)("ToggleMenu", function () {
        if (h) {
          if (g) {
            C();
          } else {
            v(true);
          }
        }
      });
      (0, It.useEffect)(function () {
        if (!h) {
          f(_());
        }
      }, [_()]);
      var y = (0, It.useState)(false);
      var b = (0, le.Z)(y, 2);
      var S = b[0];
      var M = b[1];
      function C() {
        v(false);
        o((0, A.Z)({}, e));
      }
      (0, It.useEffect)(function () {
        if (g && h && !S) {
          M(true);
        }
      }, [g, S, h]);
      (0, It.useEffect)(function () {
        if (!S && e && h !== "tasks") {
          f("tasks");
        }
      }, [S, e, h]);
      (0, It.useEffect)(function () {
        if (g && h) {
          (0, d.D9)();
        } else {
          (0, d.Uz)();
        }
      }, [g]);
      var x = (0, Nt.VA)({
        showing: h && g,
        banners: [{
          adType: "leaderboard",
          adId: 4,
          maxWidth: document.documentElement.clientWidth * 0.75,
          maxHeight: document.documentElement.clientHeight * 24 / 100
        }]
      });
      return (0, wt.jsx)(wt.Fragment, {
        children: h ? (0, wt.jsx)("div", {
          style: {
            display: g ? "block" : "none",
            pointerEvents: g ? undefined : "none"
          },
          children: (0, wt.jsxs)(Et.rW, {
            close: C,
            escDoesExit: false,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            forcePointerLock: !g,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, wt.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, wt.jsx)(ar, {}), (0, wt.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, wt.jsx)(sr, {
                  setCategory: f,
                  menuCategories: u,
                  selectedCat: h
                }), (0, wt.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: u[h].content
                })]
              })]
            }), (0, wt.jsxs)("div", {
              className: "BottomScreenMenuWrapper",
              children: [d.j5 !== "crazygames" && (0, wt.jsx)("div", {
                className: "MenuBannerDiv",
                children: (0, wt.jsx)(Nt.YL, {
                  info: x[0],
                  showing: g
                })
              }), (0, wt.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, wt.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, wt.jsx)(ur, {
                    tasks: e
                  })
                })
              })]
            })]
          })
        }) : null
      });
    });
    function sr(e) {
      var t = e.selectedCat;
      var r = e.setCategory;
      var i = e.menuCategories;
      return (0, wt.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(i).map(function (e) {
          if (i[e].getIsDefined()) {
            return (0, wt.jsx)("div", {
              className: "MenuHeaderCategory ".concat(e === t ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
              onClick: function () {
                r(e);
              },
              children: i[e].Title
            }, e);
          } else {
            return null;
          }
        })
      });
    }
    function ar() {
      var e = (0, Et.$i)("currencyAmounts");
      return (0, wt.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(e).map(function (t) {
          return (0, wt.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, wt.jsx)("i", {
              className: "fas fa-".concat(e[t].icon, " 3x UiCurrencyIcon"),
              style: {
                color: e[t].iconColour
              }
            }), (0, wt.jsx)("div", {
              className: "UiCurrencyAmount",
              children: e[t].amount
            })]
          }, t);
        })
      });
    }
    function ur(e) {
      var t = e.tasks;
      return (0, wt.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/vwMp5y25RX",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, wt.jsx)("div", {
          className: "DiscordButton",
          onClick: function () {
            u.Cc.setItem("DiscordPressed", true);
            (0, u.Xi)(ke.Vz.generalCookieSet, {
              cookie: "joinDiscord",
              value: true
            });
            if ("joinDiscord" in t) {
              u.f$.publish("clientTaskProgress", {
                taskId: "joinDiscord",
                progress: 1
              });
            }
          }
        }), (0, wt.jsx)(Et.op, {})]
      });
    }
    var lr = r(69844);
    var cr = r(23455);
    var hr = It.memo(function () {
      (0, Rt.iP)();
      return (0, wt.jsx)(dr, {});
    });
    var dr = function (e) {
      (0, Tt.Z)(r, e);
      var t = (0, Pt.Z)(r);
      function r(e) {
        var i;
        (0, f.Z)(this, r);
        (i = t.call(this, e)).state = {
          weaponHits: []
        };
        i.timeouts = [];
        i.weaponHitIndicatorLifetime = 1000;
        i.weaponHits = [];
        return i;
      }
      (0, p.Z)(r, [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          this.weaponHitsSub = u.f$.subscribe("shotPlayer", function (t) {
            var r = t.damage;
            var i = t.wasCrit;
            var n = t.distance;
            var o = Date.now();
            e.weaponHits = [].concat((0, Ve.Z)(e.weaponHits), [{
              damage: r,
              timeReceived: o,
              wasCrit: i,
              distanceToHit: n
            }]);
            e.setState({
              weaponHits: e.weaponHits
            });
            var s = setTimeout(function () {
              e.timeouts = e.timeouts.filter(function (e) {
                return e !== s;
              });
              e.weaponHits = e.weaponHits.filter(function (e) {
                return e.timeReceived !== o;
              });
              e.setState({
                weaponHits: e.weaponHits
              });
            }, e.weaponHitIndicatorLifetime);
            e.timeouts.push(s);
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          u.f$.unsubscribe(this.weaponHitsSub);
          var e;
          var t = (0, b.Z)(this.timeouts);
          try {
            for (t.s(); !(e = t.n()).done;) {
              var r = e.value;
              clearTimeout(r);
            }
          } catch (i) {
            t.e(i);
          } finally {
            t.f();
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return (0, wt.jsx)("div", {
            className: "WeaponDamageNumberWrapper",
            children: this.weaponHits.map(function (t) {
              var r;
              var i = t.damage;
              var n = t.timeReceived;
              var o = t.wasCrit;
              var s = t.distanceToHit;
              if (!t.pos) {
                t.pos = function (e) {
                  var t = 50 / (Math.pow(e, 0.7) * 0.35);
                  var r = -Math.PI / 4 + Math.random() * Math.PI / 2;
                  return {
                    x: t * Math.sin(r),
                    y: -t * Math.cos(r)
                  };
                }(s);
              }
              r = o ? "WeaponDamageCrit" : "WeaponDamageNormal";
              return (0, wt.jsx)(fr, {
                className: "WeaponDamageNumber ".concat(r),
                classNames: "WeaponDamageNumber",
                timeout: e.weaponHitIndicatorLifetime,
                enterActiveStyle: {
                  transform: "translate(calc(".concat(t.pos.x, "vh - 50%), calc(").concat(t.pos.y, "vh - 50%))"),
                  transition: "transform ".concat(e.weaponHitIndicatorLifetime, "ms ease-out")
                },
                children: (0, wt.jsx)("div", {
                  children: Math.floor(i)
                })
              }, n);
            })
          });
        }
      }]);
      return r;
    }(It.Component);
    function fr(e) {
      var t = e.children;
      var r = e.className;
      var i = e.classNames;
      var n = e.timeout;
      var o = e.enterActiveStyle;
      var s = (0, It.useState)(false);
      var a = (0, le.Z)(s, 2);
      var u = a[0];
      var l = a[1];
      (0, It.useEffect)(function () {
        l(true);
      }, []);
      var c = (0, It.useRef)(null);
      var h = (0, It.useState)(false);
      var d = (0, le.Z)(h, 2);
      var f = d[0];
      var p = d[1];
      return (0, wt.jsx)(cr.Z, {
        className: r,
        classNames: i || r,
        in: u,
        timeout: n,
        nodeRef: c,
        onEntering: function () {
          p(true);
        },
        children: (0, It.cloneElement)(t, {
          ref: c,
          style: f && o || undefined
        })
      });
    }
    function pr() {
      return (0, wt.jsx)(mr, {
        actualValueSetting: "_health",
        maxValueSetting: "maxHealth",
        icon: "heart",
        text: "",
        color: "red"
      });
    }
    function mr(e) {
      var t = e.actualValueSetting;
      var r = e.maxValueSetting;
      var i = e.icon;
      e.text;
      e.color;
      var n = (0, Et.$i)(t);
      var o = (0, Et.$i)(r);
      (0, Rt.Lm)();
      if (n === null) {
        return null;
      } else {
        return (0, wt.jsx)("div", {
          className: "BottomScreenStatBarWrapper",
          children: (0, wt.jsxs)("div", {
            className: "BottomScreenStatBarBackground",
            children: [(0, wt.jsx)("div", {
              className: "BottomScreenStatBar",
              style: {
                transform: "scaleX(".concat(Math.max(n / o, 0), ")"),
                transformOrigin: "left center"
              }
            }), (0, wt.jsxs)(Et.xv, {
              vw: 1.2,
              maxPx: 14.4,
              className: "BottomScreenStatBarText SmallTextBold",
              children: [(0, wt.jsx)("i", {
                className: "fas fa-".concat(i)
              }), " ".concat(Math.ceil(n), "/").concat(o)]
            })]
          })
        });
      }
    }
    var gr = r(93239);
    var vr = It.memo(function () {
      (0, Rt.iP)();
      var e = (0, It.useState)(false);
      var t = (0, le.Z)(e, 2);
      var r = t[0];
      var i = t[1];
      var n = (0, It.useRef)(0);
      var o = (0, It.useRef)(null);
      var s = (0, It.useReducer)(function (e) {
        return e + 1;
      }, 0);
      var a = (0, le.Z)(s, 2);
      a[0];
      var l = a[1];
      var c = (0, Et.$i)("respawnButtonText");
      var h = (0, Et.$i)("usePlayAgainButton");
      var f = (0, It.useState)((0, u.Zx)().serverSettings.secsToRespawn);
      var p = (0, le.Z)(f, 2);
      var m = p[0];
      var g = p[1];
      var v = (0, It.useState)((0, u.Zx)().serverSettings.autoRespawn);
      var _ = (0, le.Z)(v, 2);
      var y = _[0];
      var b = _[1];
      (0, Et.lF)("serverOption|secsToRespawn", function (e) {
        g(e);
        if (r && n.current >= 0 && e < n.current) {
          n.current = e;
          if (y && n.current <= 0) {
            M();
          }
        }
      });
      (0, Et.lF)("serverOption|autoRespawn", function (e) {
        b(e);
        if (e && r && n.current <= 0) {
          M();
        }
      });
      var A = function (e) {
        if (e) {
          i(false);
        } else {
          i(true);
          n.current = m;
          l();
          if (y && n.current <= 0) {
            M();
          }
          clearInterval(o.current);
          if (o.current === null && n.current > 0) {
            o.current = setInterval(function () {
              n.current = Math.max(n.current - 1, 0);
              l();
              if (n.current <= 0) {
                clearInterval(o.current);
                o.current = null;
                if ((0, u.Zx)().serverSettings.autoRespawn) {
                  M();
                }
              }
            }, 1000);
          }
        }
      };
      (0, Et.lF)("otherPlayerSettingsClientifiedEId|".concat((0, u.Zx)().playerEntity, "|_isAlive"), function (e) {
        console.log("Updating respawn component from otherPlayerSettingsClientifiedEId. isAlive:", e);
        A(e);
      });
      (0, It.useEffect)(function () {
        var e = (0, u.Zx)();
        console.log("Updating respawn component from initial mount");
        A(e.otherPlayerSettings[e.playerEntity][e.playerEntity]._isAlive);
      }, []);
      var S = (0, It.useRef)(0);
      var M = function () {
        if (Date.now() - S.current > 1000) {
          var e = function () {
            (0, u.Xi)(ke.Vz.respawn);
            S.current = Date.now();
          };
          if ((0, u.Zx)().serverSettings.autoRespawn) {
            e();
          } else {
            (0, d.kB)(function () {
              e();
            }, "respawn");
          }
        }
      };
      var C = (0, Nt.VA)({
        showing: r,
        banners: [{
          adType: "leaderboard",
          adId: 1,
          maxWidth: document.documentElement.clientWidth * 0.8,
          maxHeight: document.documentElement.clientHeight * 0.35
        }, {
          adType: "square",
          adId: 1,
          maxWidth: window.innerWidth < 1000 || window.innerHeight < 700 ? 0 : 10000,
          maxHeight: 100000
        }]
      });
      var x = n.current === 0;
      var T = x ? "" : " in ".concat(n.current);
      return (0, wt.jsx)(Et.NV, {
        showing: r,
        globallyUniqueKey: "RespawnComponent",
        children: (0, wt.jsxs)(Et.rW, {
          close: function () {
            i(false);
          },
          zIndex: 1,
          togglePointerLock: false,
          closeOnPressBackground: false,
          children: [(0, wt.jsxs)("div", {
            className: "CenteredRespawnDiv",
            children: [(0, wt.jsxs)("div", {
              className: "RespawnMainContent",
              children: [y && (0, wt.jsxs)("div", {
                className: "AutoRespawnText FullyFancyText",
                children: ["Respawning", T]
              }), !y && (0, wt.jsxs)(wt.Fragment, {
                children: [h && (0, wt.jsx)(Ut.gG, {
                  className: "RespawnButton",
                  onClick: function () {
                    (0, d.kB)(function () {
                      (0, gr.I4)(u.EU.connectedPlayingMode, null);
                    });
                  },
                  children: "Play Again"
                }), (0, wt.jsx)(Ut.El, {
                  className: "RespawnButton",
                  onClick: M,
                  disabled: !x,
                  children: "".concat(c).concat(T)
                }), (0, wt.jsx)(Ut.QT, {
                  className: "RespawnButton",
                  onClick: function () {
                    (0, gr.mH)();
                  },
                  disabled: !x,
                  children: "Exit Game".concat(T)
                })]
              })]
            }), (0, wt.jsx)("div", {
              className: "RespawnLbBannerDiv",
              children: (0, wt.jsx)(Nt.YL, {
                info: C[0]
              })
            })]
          }), (0, wt.jsx)("div", {
            className: "RespawnSideSquareBannerDiv",
            children: (0, wt.jsx)(Nt.YL, {
              info: C[1]
            })
          })]
        })
      });
    });
    var _r = r(66293);
    var yr = r(32901);
    var br = he.yE ? 70000000 : 7000;
    var Ar = It.memo(function () {
      var e = (0, It.useRef)([]);
      var t = (0, Et.GG)();
      (0, Et.lF)("playerKilled", function (r) {
        var i;
        var n;
        var o = r.deadEId;
        var s = r.killerEId;
        var a = r.withItem;
        var l = r.headshot;
        var c = r.killstreak;
        var h = e.current;
        if (h.length >= 3) {
          var d = h.shift();
          clearTimeout(d.timeout);
        }
        if ((0, u.Zx)().otherPlayerSettings[(0, u.Zx)().playerEntity][s].killfeedColour !== "") {
          i = (0, u.Zx)().otherPlayerSettings[(0, u.Zx)().playerEntity][s].killfeedColour;
          n = (0, u.Zx)().otherPlayerSettings[(0, u.Zx)().playerEntity][o].killfeedColour;
        } else {
          i = s === (0, u.Zx)().serverPlayerEntity ? "#2727f1" : "#912c2c";
          n = o === (0, u.Zx)().serverPlayerEntity ? "#2727f1" : "#912c2c";
        }
        var f = {
          deadName: (0, u.Zx)().playerNames[o],
          killerName: (0, u.Zx)().playerNames[s],
          withItem: a,
          wasHeadshot: l,
          killstreak: c,
          timeout: setTimeout(function () {
            h.shift();
            t();
          }, br),
          reactId: "".concat(s, "|").concat(o, "|").concat(Date.now()),
          killerColour: i,
          deadColour: n
        };
        h.push(f);
        t();
      });
      (0, It.useEffect)(function () {
        var t = e.current;
        return function () {
          for (; t.length > 0;) {
            var e = t.pop().timeout;
            clearTimeout(e);
          }
        };
      }, []);
      return (0, wt.jsx)("div", {
        className: "Killfeed",
        children: e.current.map(function (e) {
          var t;
          var r = e.deadName;
          var i = e.killerName;
          var n = e.withItem;
          var o = e.wasHeadshot;
          var s = e.killstreak;
          var a = e.killerColour;
          var l = e.deadColour;
          var c = e.reactId;
          return (0, wt.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: "linear-gradient(90deg, ".concat(yr(a).alpha(0.5), " calc(100% - 10rem), ").concat(yr(l).alpha(0.5), " 100%)")
            },
            children: [s >= 2 ? (0, wt.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, u.jM)(s)
            }) : null, (0, wt.jsx)("div", {
              className: "KillfeedKillerName",
              children: i
            }), (0, wt.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: ((t = u.EU.itemsClient[n]) === null || t === undefined ? undefined : t.type) === "Gun" ? "7.5vmin" : "5vmin"
              },
              children: (0, wt.jsx)(Bt.a, {
                itemName: n,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), o ? (0, wt.jsx)("i", {
              className: "fas fa-crosshairs 3x KillfeedHeadshotIcon"
            }) : null, (0, wt.jsx)("div", {
              className: "KillfeedDeadName",
              children: r
            })]
          }, c);
        })
      });
    });
    var Sr = r(3170);
    var Mr = It.memo(function () {
      return (0, wt.jsx)("div", {
        className: "BottomRightElements",
        children: (0, wt.jsx)(Tr, {})
      });
    });
    var Cr = 0;
    var xr = 1;
    function Tr() {
      var e = (0, It.useRef)([]);
      var t = (0, It.useRef)(Cr);
      var r = (0, It.useRef)();
      var i = (0, It.useRef)();
      var n = (0, Et.$i)("showProgressBar");
      (0, It.useEffect)(function () {
        return function () {
          t.current = Cr;
          clearTimeout(r.current);
        };
      }, [n]);
      (0, Et.lF)("progressBarUpdate", function (r) {
        var i = r.toFraction;
        var n = r.toDuration;
        e.current.push({
          toFraction: i,
          toDuration: n
        });
        if (t.current === Cr) {
          o();
        }
      });
      var o = function n() {
        console.assert(t.current === Cr);
        var o = e.current;
        if (o.length > 0) {
          var s = o.shift();
          var a = s.toFraction;
          var u = s.toDuration;
          t.current = xr;
          i.current.style.transition = "transform ".concat(Math.max(u - 50, 0), "ms linear");
          i.current.style.backgroundColor = "var(--darkerColourShaded)";
          r.current = setTimeout(function () {
            i.current.style.transform = "scaleX(".concat(a, ")");
            r.current = setTimeout(function () {
              if (a === 1) {
                i.current.style.backgroundColor = "var(--buttonColourShaded)";
              }
              t.current = Cr;
              n();
            }, Math.max(u - 50, 0));
          }, 50);
        }
      };
      if (!n) {
        return null;
      }
      return (0, wt.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, wt.jsx)("div", {
          className: "ProgressBarForeground",
          ref: i,
          style: {
            width: "".concat(15, "vw"),
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      });
    }
    var Pr = r(34177);
    var Ir = {
      Helmet: r(82113),
      Chestplate: r(7673),
      Gauntlets: r(5827),
      Leggings: r(45100),
      Boots: r(3145)
    };
    var Er = 0;
    u.f$.subscribe("noaTick", function () {
      if (Date.now() - Er > 9200) {
        (0, u.Xi)(ke.Vz.chestConf, (0, u.xO)(), true);
        Er = Date.now();
      }
    });
    var Rr = It.memo(function (e) {
      var t = e.touchScreen;
      var r = (0, u.Zx)();
      var i = r.ents.getInventory(r.playerEntity);
      var n = r.ents.getInvenOps(r.playerEntity);
      var o = n.openChest;
      var s = (0, It.useState)(false);
      var a = (0, le.Z)(s, 2);
      var l = a[0];
      var c = a[1];
      var h = (0, It.useState)(null);
      var d = (0, le.Z)(h, 2);
      var f = d[0];
      var p = d[1];
      var m = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !l;
        if (!t && J.current) {
          $.current = J.current.scrollTop;
        }
        p(e);
        c(t);
        if (o) {
          (0, u.Xi)(ke.Vz.closeChest, null);
          n.chestClosed();
          var r = (0, bt.GW)().play("chestClose", 1);
          r.rate(0.8 + Math.random() * 0.4);
        }
      };
      (0, Et.lF)("ToggleInventory", m);
      (0, Et.lF)("chestToggleFromServer", function (e) {
        p(null);
        c(e);
        if (e) {
          (0, bt.GW)().play("chestOpen", 1).rate(0.8 + Math.random() * 0.4);
        } else if (o) {
          (0, bt.GW)().play("chestClose", 1).rate(0.8 + Math.random() * 0.4);
        }
      });
      (0, Et.lF)("updatedInventory", function (e) {
        A();
      });
      var g = (0, It.useRef)(null);
      var v = (0, It.useRef)(null);
      var _ = (0, It.useRef)(null);
      var y = (0, It.useReducer)(function (e) {
        return e + 1;
      }, 0);
      var b = (0, le.Z)(y, 2);
      b[0];
      var A = b[1];
      var S = (0, Et.$i)("inventoryItemsMoveable");
      var M = function (e, t) {
        if (n.movePosWithAmtClient(v.current.idx, e, t)) {
          v.current.amount -= t;
          if (v.current.amount <= 0) {
            v.current = null;
          }
        } else {
          console.error("movePosWithAmtClient failed");
        }
      };
      var C = (0, It.useRef)(0);
      var x = function (e) {
        return function (t) {
          var r = Gr(t);
          if (!r) {
            k(t.pageX, t.pageY);
          }
          if (S) {
            w(t);
            C.current = Date.now();
            if (r) {
              R.current.itemBeingDragged = true;
            }
            T(t, e);
          }
        };
      };
      var T = function (e, t) {
        var r;
        var s = n.getItemAtIdx(t);
        var a = (r = e).button === 0 || r.button === undefined;
        if (t === -1) {
          if (v.current) {
            var u = a && v.current.amount || 1;
            if (n.removeItemClient(v.current.idx, u)) {
              v.current.amount -= u;
              if (v.current.amount <= 0) {
                v.current = null;
              }
            }
          } else if (a) {
            m();
          }
        } else if (Ur(e)) {
          var l;
          if (!s) {
            return;
          }
          var c = s.amount;
          if (t === ((l = v.current) === null || l === undefined ? undefined : l.idx)) {
            c = v.current.amount <= 0 ? 0 : s.amount - v.current.amount;
          }
          if (c === 0) {
            return;
          }
          var h = (0, I.r9)(s.name);
          var d = h ? (0, I.sW)(h) : null;
          if (!I.XL.includes(h) || n.getItemAtIdx(d) !== null && t !== d) {
            if (o) {
              if (t < i.numSlots) {
                n.moveItemIntoIdxsClient(i.numSlots, i.numSlots + o.numSlots, t, c);
              } else {
                n.moveItemIntoIdxsClient(0, i.numSlots - I.XL.length, t, c);
              }
            } else if (n.inCreative) {
              if (t < 10) {
                n.moveItemIntoIdxsClient(10, i.numSlots - I.XL.length, t, c);
              } else if (t < i.numSlots) {
                n.moveItemIntoIdxsClient(0, 10, t, c);
              } else {
                n.moveItemIntoIdxsClient(0, i.numSlots - I.XL.length, t, c);
              }
            } else if (t < 10) {
              n.moveItemIntoIdxsClient(10, i.numSlots - I.XL.length, t, c);
            } else {
              n.moveItemIntoIdxsClient(0, 10, t, c);
            }
          } else if (t < i.numSlots - I.XL.length || t >= i.numSlots) {
            n.swapPosClient(d, t);
          } else {
            n.moveItemIntoIdxsClient(0, i.numSlots - I.XL.length, d, c);
            (0, bt.GW)().play("equip_leather1", 1).rate(0.9 + Math.random() * 0.3);
          }
        } else if (v.current) {
          var f = v.current.idx;
          if (s && v.current.name === s.name && v.current.amount > 0 && Lt(s) > 0 && (s.amount < he.ZP.maxItemStackSize || t === f)) {
            if (a) {
              if (s.amount + v.current.amount <= he.ZP.maxItemStackSize || t === f) {
                M(t, v.current.amount);
              } else {
                M(t, he.ZP.maxItemStackSize - s.amount);
              }
            } else {
              M(t, 1);
            }
          } else if (v.current.amount > 0 && !s) {
            M(t, a ? v.current.amount : 1);
          } else if (a || s || v.current.amount === 0) {
            if (n.swapPosClient(t, v.current.idx)) {
              var p = n.getItemAtIdx(f);
              var g = !n.openChest && n.inCreative && v.current.idx >= n.playerInventory.numSlots;
              if (p && v.current.idx !== t && !g) {
                v.current = {
                  idx: v.current.idx,
                  name: p.typeObj.name,
                  amount: Lt(p)
                };
              } else {
                v.current = null;
              }
            }
          } else {
            M(t, 1);
          }
        } else {
          if (!s) {
            return;
          }
          if (a) {
            v.current = {
              idx: t,
              name: s.typeObj.name,
              amount: Lt(s)
            };
          } else {
            var _ = Math.ceil(Lt(s) / 2);
            v.current = {
              idx: t,
              name: s.typeObj.name,
              amount: _
            };
          }
        }
        A();
      };
      var P = function (e) {
        return function (e) {
          var t = Gr(e);
          w(e);
          if (t && v.current && Date.now() - C.current > 150) {
            var r = document.elementFromPoint(e.clientX, e.clientY);
            var i = r.getAttribute("data-inven-idx");
            if (i !== null) {
              T(e, parseInt(i));
            } else if (r.classList.contains("InventoryBackgroundScreen")) {
              T(e, -1);
            }
          }
          R.current.itemBeingDragged = false;
          k(e.pageX, e.pageY);
        };
      };
      var E = (0, It.useRef)({
        x: 0,
        y: 0
      });
      var R = (0, It.useRef)({
        isTouch: false,
        itemBeingDragged: false
      });
      var w = function (e) {
        R.current.isTouch = Gr(e);
      };
      (0, It.useEffect)(function () {
        var e;
        if (l) {
          if (!R.current.isTouch) {
            var t = E.current;
            k(t.x, t.y);
          }
          e = function (e) {
            e.preventDefault();
            w(e);
            k(e.pageX, e.pageY);
          };
          document.addEventListener("pointermove", e);
        }
        return function () {
          document.removeEventListener("pointermove", e);
        };
      });
      var k = function (e, t) {
        var r = E.current;
        r.x = e;
        r.y = t;
        if (g.current) {
          if (R.current.isTouch && !R.current.itemBeingDragged) {
            g.current.style.transform = "translate(0.5rem, 0.5rem)";
          } else {
            g.current.style.transform = "translate(".concat(r.x, "px, ").concat(r.y, "px)");
          }
        } else if (_.current) {
          _.current.style.transform = "translate(".concat(r.x + 10, "px, ").concat(r.y + 10, "px)");
        }
      };
      (0, It.useEffect)(function () {
        je.bo.setInventoryOpen(l);
        return function () {
          je.bo.setInventoryOpen(false);
        };
      }, [l]);
      var D = (0, It.useState)(null);
      var B = (0, le.Z)(D, 2);
      var O = B[0];
      var F = B[1];
      var L = (0, It.useState)(null);
      var N = (0, le.Z)(L, 2);
      var U = N[0];
      var G = N[1];
      var W = function (e) {
        return function (t, r) {
          if (e !== undefined) {
            F(t ? e : null);
          }
          if (t && r === undefined) {
            console.error(new Error("here").stack);
          }
          G(t ? r : null);
        };
      };
      (0, Et.lF)("DropInvenItem", function (e) {
        if (O !== null && n.getItemAtIdx(O) !== null) {
          var t;
          var r;
          var i = n.getItemAtIdx(O);
          var o = e && (t = i.amount) !== null && t !== undefined ? t : 1;
          n.removeItemClient(O, o);
          if (O === ((r = v.current) === null || r === undefined ? undefined : r.idx)) {
            v.current.amount -= o;
            if (v.current.amount <= 0) {
              v.current = null;
            }
            A();
          }
        }
      });
      (0, Et.lF)("numkeyPressed", function (e) {
        var t = e - 1;
        if (O !== null && l) {
          if (n.swapPosClient(t, O) && v.current) {
            if (v.current.idx === O) {
              v.current.idx = t;
            } else if (v.current.idx === t) {
              v.current.idx = O;
            }
          }
          A();
        }
      });
      (0, It.useEffect)(function () {
        if (!l) {
          v.current = null;
          G(null);
          A();
        }
      }, [l]);
      (0, Et.lF)("EscKeyPressed", function () {
        m(null, false);
      });
      (0, Et.lF)("syncedInvenFromServer", function () {
        v.current = null;
        A();
      });
      (0, Et.lF)("craftingRecipesEdited", function (e) {
        var t = e.itemName;
        var r = e.recipesForItem;
        if ((q === null || q === undefined ? undefined : q.name) === t && (q === null || q === undefined ? undefined : q.craftingIdx) >= r.length) {
          Z(null);
        }
        A();
      });
      var j;
      var z = (0, Et.$i)("canCraft");
      var V = (0, It.useReducer)(function (e, t) {
        if ((e === null || e === undefined ? undefined : e.name) !== (t === null || t === undefined ? undefined : t.name) || (e === null || e === undefined ? undefined : e.craftingIdx) !== (t === null || t === undefined ? undefined : t.craftingIdx)) {
          return t;
        } else {
          return e;
        }
      }, null);
      var H = (0, le.Z)(V, 2);
      var q = H[0];
      var Z = H[1];
      var K = (0, It.useState)("");
      var Y = (0, le.Z)(K, 2);
      var X = Y[0];
      var Q = Y[1];
      var J = (0, It.useRef)(null);
      var $ = (0, It.useRef)(0);
      (0, It.useEffect)(function () {
        if (l && J.current) {
          J.current.scrollTop = $.current;
        }
      }, [l]);
      if (o) {
        j = (0, wt.jsx)("div", {
          className: "GridItemSlots LeftSideItemSlots",
          children: new Array(n.openChest.numSlots).fill(0).map(function (e, t) {
            var r = i.numSlots + t;
            return (0, wt.jsx)(Br, {
              idx: r,
              draggedInfo: v.current,
              setHovered: W(r),
              pointerDown: x(r),
              pointerUp: P()
            }, r);
          })
        });
      } else if (!n.inCreative || f !== null && z) {
        if (z) {
          j = (0, wt.jsx)(wr, {
            onCraft: function () {
              !function () {
                if (v.current) {
                  var e = v.current;
                  var t = e.idx;
                  var r = e.name;
                  var i = e.amount;
                  if (n.getItemAtIdx(t) === null || n.getItemAtIdx(t).name !== r || n.getItemAtIdx(t).amount < i) {
                    v.current = null;
                  }
                }
              }();
            },
            craftingStation: f,
            selectedCraftable: q,
            dispatchSelectedCraftable: Z,
            setHovered: W()
          });
        }
      } else {
        j = (0, wt.jsx)(Nr, {
          creativeScrollDiv: J,
          playerInven: i,
          getSetHoveringForIdx: W,
          getPointerDownForIdx: x,
          getPointerUpForIdx: P,
          creativeSearchVal: X,
          setCreativeSearchVal: Q
        });
      }
      return (0, wt.jsxs)("div", {
        className: "InventoryCompWrapper",
        style: {
          touchAction: l ? "none" : null
        },
        children: [v.current && (0, wt.jsx)(Or, {
          draggedInfo: v.current,
          toAddRef: g
        }), !v.current && U !== null && (0, wt.jsx)(Fr, {
          itemName: U,
          domRef: _
        }), (0, wt.jsx)(Lr, {
          touchScreen: t
        }), (0, wt.jsx)(Et.rW, {
          show: l,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: m,
          forcePointerLock: !l,
          zIndex: 3,
          closeOnPressBackground: false,
          preventContextMenu: true,
          pointerDown: x(-1),
          pointerUp: P(),
          doGameplayStartStopOnShow: true,
          children: (0, wt.jsxs)("div", {
            className: "Inventory",
            children: [(0, wt.jsxs)("div", {
              className: "InvenBody",
              children: [j, (0, wt.jsxs)("div", {
                className: "InvenBodyRight",
                children: [(0, wt.jsx)("div", {
                  className: "ArmourItemSlots",
                  children: new Array(I.XL.length).fill(0).map(function (e, t) {
                    var r;
                    var n = i.numSlots - I.XL.length + t;
                    var o = (r = v.current) === null || r === undefined ? undefined : r.name;
                    var s = I.XL[t];
                    var a = x(n);
                    var u = P();
                    return (0, wt.jsx)(Br, {
                      idx: n,
                      draggedInfo: v.current,
                      setHovered: W(n),
                      pointerDown: function (e) {
                        if (!(o && (0, I.r9)(o) !== s)) {
                          a(e);
                        }
                      },
                      pointerUp: function (e) {
                        if (!(o && o.split(" ")[1] !== s)) {
                          u(e);
                        }
                      },
                      defaultIconB64: Ir[s]
                    }, n);
                  })
                }), (0, wt.jsx)("div", {
                  className: "GridItemSlots",
                  children: new Array(i.numSlots - 10 - I.XL.length).fill(0).map(function (e, t) {
                    var r = t + 10;
                    return (0, wt.jsx)(Br, {
                      idx: r,
                      draggedInfo: v.current,
                      setHovered: W(r),
                      pointerDown: x(r),
                      pointerUp: P()
                    }, r);
                  })
                })]
              })]
            }), (0, wt.jsx)("div", {
              className: "InvenHotbar",
              children: new Array(10).fill(0).map(function (e, t) {
                return (0, wt.jsx)(Br, {
                  idx: t,
                  draggedInfo: v.current,
                  setHovered: W(t),
                  pointerDown: x(t),
                  pointerUp: P()
                }, t);
              })
            })]
          })
        })]
      });
    });
    function wr(e) {
      var t = e.onCraft;
      var r = e.dispatchSelectedCraftable;
      var i = e.selectedCraftable;
      var n = e.craftingStation;
      var o = e.setHovered;
      var s = (0, u.Zx)();
      var a = s.ents.getInventory(s.playerEntity);
      var l = (0, u.rL)().craftingManager.getItemsHavingOneIngredientOf(s.playerEntity, a, n);
      var c = i;
      if (l.length > 0 && i === null) {
        c = l[0];
      }
      (0, It.useEffect)(function () {
        var e;
        if (!l.some(function (e) {
          return e.name === (i === null || i === undefined ? undefined : i.name) && e.craftingIdx === (i === null || i === undefined ? undefined : i.craftingIdx);
        })) {
          r((e = l[0]) !== null && e !== undefined ? e : null);
        }
      });
      return (0, wt.jsx)("div", {
        className: "Craftables",
        children: l.length > 0 && (0, wt.jsxs)(wt.Fragment, {
          children: [(0, wt.jsxs)("div", {
            className: "CraftablesLeftSide",
            children: [(0, wt.jsx)("div", {
              className: "CraftingStationHeader SmallTextBold",
              children: n
            }), (0, wt.jsx)("div", {
              className: "CraftableItems",
              children: l.map(function (e) {
                var t = e.name;
                var i = e.craftingIdx;
                var n = e.haveIngredients;
                return (0, wt.jsx)(Dr, {
                  itemName: t,
                  onClick: function () {
                    r(e);
                  },
                  isSelected: c.name === t && c.craftingIdx === i,
                  haveIngredients: n,
                  setHovered: o
                }, "".concat(t, "_").concat(i));
              })
            })]
          }), (0, wt.jsx)(kr, {
            recipeItem: c,
            onCraft: t,
            setHovered: o
          })]
        })
      });
    }
    function kr(e) {
      var t = e.recipeItem;
      var r = t.name;
      var i = t.craftingIdx;
      var n = e.onCraft;
      var o = e.setHovered;
      var s = (0, u.Zx)();
      var a = s.ents.getInventory(s.playerEntity);
      var l = !(0, u.rL)().craftingManager.spaceInInvenToCraft(s.playerEntity, a, r, i);
      var c = (0, u.rL)().craftingManager.itemCanBeCrafted(s.playerEntity, a, r, i);
      var h = (0, u.rL)().craftingManager.getRecipesForPlayer(s.playerEntity)[r];
      var d = "4rem";
      if (h[i].requires.length === 3) {
        d = "3.75rem";
      } else if (h[i].requires.length >= 4) {
        d = "3.25rem";
      }
      return (0, wt.jsxs)("div", {
        className: "CraftableInfo SmallTextBold",
        children: [(0, wt.jsx)("div", {
          className: "CraftableHeader",
          children: r
        }), h[i].requires.map(function (e) {
          var t = e.items;
          var r = e.amt;
          return (0, wt.jsx)("div", {
            className: "CraftingRecipeItemReq",
            style: {
              width: d,
              height: d
            },
            onPointerEnter: function () {
              if (!(o === null || o === undefined)) {
                o(true, t[0]);
              }
            },
            onPointerLeave: function () {
              if (!(o === null || o === undefined)) {
                o(false);
              }
            },
            children: (0, wt.jsx)(Bt.a, {
              itemName: t[0],
              amount: r
            })
          }, t[0]);
        }), (!c || l) && (0, wt.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!c && "Missing ingredients", (0, wt.jsx)("br", {}), l && "Inventory is full"]
        }), (0, wt.jsx)(Ut.El, {
          className: "DoCraftButton",
          onClick: function (e) {
            if (Ur(e)) {
              for (var t = []; (0, u.rL)().craftingManager.craftItem(s.playerEntity, a, r, i);) {
                n();
                t.push({
                  itemName: r,
                  craftingIdx: i
                });
              }
              (0, u.Xi)(ke.Vz.craftItem, t);
            } else if ((0, u.rL)().craftingManager.craftItem(s.playerEntity, a, r, i)) {
              n();
              (0, u.Xi)(ke.Vz.craftItem, [{
                itemName: r,
                craftingIdx: i
              }]);
            }
          },
          disabled: !c || l,
          children: (0, wt.jsx)("div", {
            className: "DoCraftItem",
            onPointerEnter: function () {
              if (!(o === null || o === undefined)) {
                o(true, r);
              }
            },
            onPointerLeave: function () {
              if (!(o === null || o === undefined)) {
                o(false);
              }
            },
            children: (0, wt.jsx)(Bt.a, {
              itemName: r,
              amount: h[i].produces
            })
          })
        })]
      });
    }
    function Dr(e) {
      var t = e.onClick;
      var r = e.itemName;
      var i = e.isSelected;
      var n = e.haveIngredients;
      var o = e.setHovered;
      return (0, wt.jsx)("div", {
        className: zt()("InvenItem", {
          CraftableItemNotEnoughIngredients: !n
        }),
        onClick: t,
        style: {
          cursor: i ? null : "pointer"
        },
        onPointerEnter: function () {
          if (!(o === null || o === undefined)) {
            o(true, r);
          }
        },
        onPointerLeave: function () {
          if (!(o === null || o === undefined)) {
            o(false);
          }
        },
        children: (0, wt.jsx)(Bt.a, {
          itemName: r,
          amount: 1
        })
      });
    }
    function Br(e) {
      var t = e.idx;
      var r = e.setHovered;
      var i = e.pointerDown;
      var n = e.pointerUp;
      var o = e.draggedInfo;
      var s = e.defaultIconB64;
      var a = s === undefined ? null : s;
      var l = (0, u.Zx)();
      var c = l.ents.getInvenOps(l.playerEntity).getItemAtIdx(t);
      return (0, wt.jsxs)("div", {
        className: "InvenItem",
        onPointerEnter: function () {
          var e;
          if (!(r === null || r === undefined)) {
            r(true, (e = c === null || c === undefined ? undefined : c.name) !== null && e !== undefined ? e : null);
          }
        },
        onPointerLeave: function () {
          if (!(r === null || r === undefined)) {
            r(false);
          }
        },
        onPointerDown: i,
        onPointerUp: n,
        "data-inven-idx": t,
        children: [c && function () {
          var e = Lt(c);
          if ((o === null || o === undefined ? undefined : o.idx) === t && e > 0) {
            e -= o.amount;
          }
          return ((o === null || o === undefined ? undefined : o.idx) !== t || e > 0) && (0, wt.jsx)(Bt.a, {
            itemName: c.typeObj.name,
            amount: e
          });
        }(), a && (!c || (o === null || o === undefined ? undefined : o.idx) === t) && (0, wt.jsx)("div", {
          className: "InvenItemUnfilled",
          style: {
            backgroundImage: "url(".concat(a, ")")
          }
        })]
      });
    }
    function Or(e) {
      var t = e.draggedInfo;
      var r = t.name;
      var i = t.amount;
      var n = e.toAddRef;
      return (0, wt.jsx)("div", {
        className: "DraggedInvenItem",
        ref: n,
        children: (0, wt.jsx)(Bt.a, {
          itemName: r,
          amount: i
        })
      });
    }
    function Fr(e) {
      var t = e.itemName;
      var r = e.domRef;
      var i = (0, u.Zx)();
      var n = (0, u.rL)().getItemStat(i.playerEntity, t, "displayName");
      var o = (0, u.rL)().getItemStat(i.playerEntity, t, "description");
      return (0, wt.jsxs)("div", {
        className: "InvenHoveredItemInfo SmallTextBold",
        ref: r,
        children: [(0, wt.jsx)(Et.fD, {
          text: n
        }), (0, wt.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, wt.jsx)(Et.fD, {
            text: o
          })
        })]
      });
    }
    function Lr(e) {
      var t = e.touchScreen;
      var r = function () {
        var e = (0, u.Zx)().ents.getInventoryState((0, u.Zx)().playerEntity);
        if (e !== null && e !== undefined && e.inventory) {
          var t = e.inventory;
          return lt.some(function (e) {
            return t.getAmountOfItem(e) > 0;
          });
        }
        return false;
      };
      (0, Et.lF)("updatedInventory", function (e) {
        if (!((0, u.Zx)().serverSettings.creative || u.Cc.getItem("LogInInventoryRedDotTutorialComplete"))) {
          if (r()) {
            u.f$.publish("RedDotOpenInventoryIcon", true);
            u.f$.publish("TouchTutorialOpenInventoryIcon", true);
          } else {
            u.f$.publish("RedDotOpenInventoryIcon", false);
            u.f$.publish("TouchTutorialOpenInventoryIcon", false);
          }
        }
      });
      (0, Et.lF)("ToggleInventory", function () {
        if (r()) {
          u.Cc.setItem("LogInInventoryRedDotTutorialComplete", true);
          u.f$.publish("RedDotOpenInventoryIcon", false);
          u.f$.publish("TouchTutorialOpenInventoryIcon", false);
        }
      });
      return (0, wt.jsx)("div", {
        className: "OpenInventoryEllipses",
        onPointerDown: function () {
          u.f$.publish("ToggleInventory");
        },
        children: (0, wt.jsx)(Et.z2, {
          touchScreen: t,
          icon: "ellipsis",
          keyboardButton: "Tab",
          keyboardButtonClassname: "OpenInventoryEllipsesPrompt",
          onPointerDown: function (e) {
            u.f$.publish("ToggleInventory");
            e.stopPropagation();
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      });
    }
    var Nr = It.memo(function (e) {
      var t = e.creativeScrollDiv;
      var r = e.playerInven;
      var i = e.getSetHoveringForIdx;
      var n = e.getPointerDownForIdx;
      var o = e.getPointerUpForIdx;
      var s = e.creativeSearchVal;
      var a = e.setCreativeSearchVal;
      var u = (0, Pr.O)(s);
      return (0, wt.jsxs)("div", {
        className: "CreativeItemSlotsWrapper",
        children: [(0, wt.jsx)("div", {
          className: "CreativeItemSlotsSearchWrapper",
          children: (0, wt.jsx)(Gt.o, {
            className: "CreativeItemSlotsSearch",
            placeholderText: "Search",
            defaultValue: s,
            maxLength: 10000,
            onValueChange: function (e, t) {
              a(e);
            },
            blurOnEnter: true
          })
        }), (0, wt.jsx)("div", {
          className: "CreativeItemSlots",
          ref: t,
          children: (0, wt.jsx)("div", {
            className: "CreativeItemSlotsInner",
            children: u.map(function (e) {
              var t = r.numSlots + e;
              return (0, wt.jsx)(Br, {
                idx: t,
                draggedInfo: null,
                setHovered: i(t),
                pointerDown: n(t),
                pointerUp: o(t)
              }, t);
            })
          })
        })]
      });
    });
    function Ur(e) {
      return !!e.shiftKey;
    }
    function Gr(e) {
      return !(!e.touches && e.pointerType !== "touch" && e.pointerType !== "pen");
    }
    var Wr;
    var jr;
    var zr;
    var Vr;
    var Hr = r(32692);
    var qr = r(43971);
    var Zr = r(90690);
    var Kr = r(37105);
    var Yr = r(4268);
    var Xr = r(23056);
    var Qr = {
      head: "Head",
      body: "Body",
      legs: "Legs"
    };
    var Jr = {
      Head: "head",
      Body: "body",
      Legs: "legs"
    };
    var $r = document.createElement("canvas");
    $r.classList.add("CharCustomisationPreviewCanvas");
    var ei = It.memo(function () {
      var e = (0, It.useState)(false);
      var t = (0, le.Z)(e, 2);
      var r = t[0];
      var i = t[1];
      var n = function () {
        i(!r);
      };
      (0, Et.lF)("ToggleCharCustomisation", function () {
        n();
      });
      var o = (0, It.useRef)({
        head: "Bob",
        body: "Bob",
        legs: "Bob"
      });
      var s = (0, Et.GG)();
      var a = (0, It.useRef)(false);
      (0, Et.lF)("charCustomisationUpdated", function (e) {
        var t;
        var i = false;
        var n = (0, b.Z)(e);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var l = t.value;
            var c = l.eId;
            var h = l.part;
            var d = l.selected;
            if (c !== (0, u.Zx)().serverPlayerEntity) {
              return;
            }
            i = true;
            if (!(r && a.current)) {
              o.current = (0, A.Z)((0, A.Z)({}, o.current), {}, (0, $e.Z)({}, h, d));
              if (zr) {
                zr.updateInstanceCustomisation(Vr, h, d);
              }
            }
            s();
          }
        } catch (f) {
          n.e(f);
        } finally {
          n.f();
        }
        if (i) {
          a.current = true;
        }
      });
      var l = (0, It.useState)(Object.values(Jr)[0]);
      var c = (0, le.Z)(l, 2);
      var h = c[0];
      var d = c[1];
      var f = (0, It.useRef)(null);
      (0, It.useEffect)(function () {
        if (r) {
          f.current.appendChild($r);
          if (!Wr) {
            Wr = new Zr.D($r, true, {
              preserveDrawingBuffer: true
            });
            (jr = new Kr.x(Wr)).clearColor = new x.HE(61 / 255, 75 / 255, 121 / 255, 1);
            jr.ambientColor = new x.Wo(1, 1, 1);
            new Yr.Y("Camera", Math.PI * 3 / 2, Math.PI / 2, 22, R.P.Zero(), jr).attachControl($r, true);
            (0, Ge.sM)(jr).then(function (e) {
              var t = e.container;
              var r = e.customisationMgr;
              zr = r;
              var i = (0, Ge.ur)(t, r);
              Vr = i;
              i.setEnabled(true);
              i.position = new R.P(0, -8.2, 0);
              i.rotation = new R.P(0, 0.2, 0);
              i.rotationQuaternion = null;
              for (var n in qr.uH) {
                r.updateInstanceCustomisation(i, n, o.current[n]);
              }
              var s = new Xr.e("light", new R.P(-0.1, 1, -0.3), jr);
              s.diffuse = new x.Wo(1, 1, 1);
              s.specular = new x.Wo(1, 1, 1);
              s.groundColor = new x.Wo(0.5, 0.5, 0.5);
            });
          }
          Wr.runRenderLoop(function () {
            jr.render();
          });
          return function () {
            Wr.stopRenderLoop();
          };
        }
      }, [r]);
      return (0, wt.jsx)(Et.rW, {
        close: function () {
          n();
        },
        zIndex: 2,
        togglePointerLock: true,
        show: r,
        globallyUniqueKey: "CharCustomisationUI",
        forcePointerLock: !r,
        doGameplayStartStopOnShow: true,
        children: (0, wt.jsxs)("div", {
          className: "CharCustomisation SmallTextLight",
          children: [(0, wt.jsx)(Et.w3, {
            items: Object.keys(Jr),
            onClick: function (e) {
              d(Jr[e]);
            },
            selectedItemStr: Qr[h]
          }), (0, wt.jsxs)("div", {
            className: "CharCustomisPartSelectorWrapper",
            children: [(0, wt.jsx)("div", {
              className: "CharCustomisPartSelector",
              children: Object.keys(qr.uH[h]).map(function (e) {
                var t = e === o.current[h];
                return (0, wt.jsx)("div", {
                  className: zt()("CharCustomPartWrapper", {
                    SelectedCharCustomPartWrapper: t
                  }),
                  children: (0, wt.jsx)("div", {
                    className: "CharCustomPart",
                    style: {
                      backgroundImage: "url(".concat(qr.uH[h][e].previewTex, ")")
                    },
                    onClick: function () {
                      if (e !== o.current[h]) {
                        o.current = (0, A.Z)((0, A.Z)({}, o.current), {}, (0, $e.Z)({}, h, e));
                        s();
                        var t = {
                          partType: h,
                          selected: e
                        };
                        (0, u.Xi)(ke.Vz.updateMyCosmetic, t);
                        if (zr) {
                          zr.updateInstanceCustomisation(Vr, h, e);
                        }
                      }
                    }
                  })
                }, e);
              })
            }), (0, wt.jsx)("div", {
              className: "CharCustomisSelectedText",
              children: "Selected: ".concat(o.current[h])
            })]
          }), (0, wt.jsx)("div", {
            className: "CharCustomisationPreview",
            ref: f
          })]
        })
      });
    });
    var ti = It.memo(function () {
      var e = (0, Et.GG)();
      var t = function (t, i) {
        r(t);
        (0, u.Xi)(ke.Vz.UiRequestResp, {
          id: t,
          response: i
        });
        e();
      };
      var r = function (t) {
        var r = i.current.findIndex(function (e) {
          return e.id === t;
        });
        if (r !== -1) {
          i.current.splice(r, 1);
          e();
        }
      };
      (0, Et.lF)("newUiRequest", function (t) {
        i.current.push(t);
        e();
      });
      (0, Et.lF)("removeUiRequest", function (e) {
        r(e);
      });
      (0, Et.lF)("YKeyPressed", function () {
        if (i.current.length > 0) {
          t(i.current[0].id, true);
        }
      });
      (0, Et.lF)("XKeyPressed", function () {
        if (i.current.length > 0) {
          t(i.current[0].id, false);
        }
      });
      var i = (0, It.useRef)([]);
      return (0, wt.jsx)("div", {
        className: "UiRequests",
        children: i.current.map(function (e) {
          var r = e.id;
          var n = e.text;
          var o = r !== i.current[0].id;
          return (0, wt.jsxs)("div", {
            className: "UiRequest",
            children: [(0, wt.jsx)("div", {
              className: "UiReqText",
              children: (0, wt.jsx)(Et.fD, {
                text: n
              })
            }), (0, wt.jsx)(Ut.gG, {
              className: "UiReqAcceptButt UiReqButton",
              onClick: function () {
                t(r, true);
              },
              disabled: o,
              children: "Y"
            }), (0, wt.jsx)(Ut.QT, {
              className: "UiReqDismissButt UiReqButton",
              onClick: function () {
                t(r, false);
              },
              disabled: o,
              children: "X"
            })]
          }, r);
        })
      });
    });
    var ri = It.memo(function () {
      var e = (0, It.useRef)([]);
      var t = (0, Et.GG)();
      (0, Et.lF)("uiRequestPopup", function (r) {
        var i = r.text;
        var n = r.callback;
        e.current.push({
          text: i,
          callback: n
        });
        t();
      });
      var r = function (r) {
        (0, e.current.shift().callback)(r);
        t();
      };
      var i = e.current.length > 0;
      if (i) {
        return (0, wt.jsx)(Et.rW, {
          close: function () {
            r(false);
          },
          escDoesExit: true,
          show: i,
          forcePointerLock: !i,
          globallyUniqueKey: "UiRequestPopup",
          children: (0, wt.jsxs)("div", {
            className: "UiRequestPopupWrapper",
            children: [(0, wt.jsx)(Et.fD, {
              text: e.current[0].text
            }), (0, wt.jsxs)("div", {
              className: "UiRequestPopupButtons",
              children: [(0, wt.jsx)(Ut.El, {
                className: "UiRequestPopupButton",
                onClick: function () {
                  return r(true);
                },
                children: "Yes"
              }), (0, wt.jsx)(Ut.QT, {
                className: "UiRequestPopupButton",
                onClick: function () {
                  return r(false);
                },
                children: "No"
              })]
            })]
          })
        });
      } else {
        return null;
      }
    });
    var ii = It.memo(function () {
      var e = (0, It.useRef)({});
      var t = (0, It.useReducer)(function (e) {
        return e + 1;
      }, 0);
      var r = (0, le.Z)(t, 2);
      r[0];
      var i = r[1];
      (0, Et.lF)("EffectUpdate", function (t) {
        var r = t.name;
        var n = t.icon;
        var o = t.duration;
        if (o === 0) {
          delete e.current[r];
        } else {
          e.current[r] = {
            icon: n,
            duration: o,
            startTime: Date.now()
          };
        }
        i();
      });
      (0, It.useEffect)(function () {
        var t = setInterval(function () {
          if (Object.keys(e.current).length !== 0) {
            for (var t in e.current) {
              if (Date.now() - e.current[t].startTime >= e.current[t].duration) {
                delete e.current[t];
              }
            }
            i();
          }
        }, 1000);
        return function () {
          clearInterval(t);
        };
      }, []);
      return (0, wt.jsx)("div", {
        className: "EffectInfosWrapper",
        children: Object.entries(e.current).map(function (t) {
          var r = (0, le.Z)(t, 2);
          var i = r[0];
          var n = r[1];
          var o = n.icon;
          var s = n.duration;
          return (0, wt.jsxs)("div", {
            className: "EffectInfo",
            children: [(0, wt.jsx)("div", {
              className: "EffectInfoIcon",
              children: (0, wt.jsx)(Bt.a, {
                itemName: o,
                amount: 0
              })
            }), (0, wt.jsxs)("div", {
              className: "EffectInfoRightSide",
              children: [(0, wt.jsx)("div", {
                className: "EffectInfoName SmallTextBold",
                children: i
              }), (0, wt.jsx)("div", {
                className: "EffectInfoDuration SmallTextLight",
                children: (0, u.l8)(s - (Date.now() - e.current[i].startTime))
              })]
            })]
          }, i);
        })
      });
    });
    var ni = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];
    function oi(e, t) {
      for (var r = ni[t], i = r.numLines, n = r.charsPerLine, o = e.split("\n"), s = 0; s < o.length; s++) {
        var a = o[s];
        if (a.length > n) {
          o[s] = a.substring(0, n);
          if (o.length < i) {
            o.splice(s + 1, 0, a.substring(n));
          }
        }
      }
      if (o.length > i) {
        o.splice(i, o.length - i);
      }
      return o.join("\n");
    }
    var si = It.memo(function () {
      var e = (0, It.useState)(null);
      var t = (0, le.Z)(e, 2);
      var r = t[0];
      var i = t[1];
      var n = (0, It.useState)("");
      var o = (0, le.Z)(n, 2);
      var s = o[0];
      var a = o[1];
      var l = (0, It.useState)(0);
      var c = (0, le.Z)(l, 2);
      var h = c[0];
      var d = c[1];
      var f = function (e) {
        a(oi(s, e));
        d(e);
        u.Cc.setItem("lastBoardTextSize", e);
      };
      (0, Et.lF)("EditBoard", function (e) {
        var t = e.pos;
        i(t);
        if (t !== null) {
          var r;
          var n;
          var o;
          var s = (0, u.rL)().blockDataOwner.getBlockData(t[0], t[1], t[2]);
          a((r = s === null || s === undefined ? undefined : s.persisted.shared.text) !== null && r !== undefined ? r : "");
          var l = (n = (o = s === null || s === undefined ? undefined : s.persisted.shared.textSize) !== null && o !== undefined ? o : u.Cc.getItem("lastBoardTextSize")) !== null && n !== undefined ? n : 0;
          d(l);
          u.Cc.setItem("lastBoardTextSize", l);
        }
      });
      (0, It.useEffect)(function () {
        (0, Qt.IA)(r === null);
        return function () {
          (0, Qt.IA)(true);
        };
      });
      (0, It.useEffect)(function () {
        setTimeout(function () {
          if (p.current) {
            p.current.focus();
          }
        }, 1);
      }, [r]);
      (0, It.useEffect)(function () {
        var e = (0, u.Zx)().ents.getMoveState((0, u.Zx)().playerEntity);
        if (r !== null) {
          e.speedMultiplier.setMultiplierType("signOpened", 0);
        } else {
          e.speedMultiplier.setMultiplierType("signOpened", 1);
        }
      }, [r]);
      var p = (0, It.useRef)(null);
      var m = ni[h].uiFontSize;
      var g = m * 1.3;
      return (0, wt.jsxs)(Et.rW, {
        className: "WriteOnBoardBg",
        close: function () {
          i(null);
          (0, u.Xi)(ke.Vz.updateBoard, {
            pos: r,
            newText: s,
            textSize: h
          });
        },
        escDoesExit: true,
        show: r !== null,
        forcePointerLock: r === null,
        globallyUniqueKey: "WriteOnSignComp",
        children: [(0, wt.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, wt.jsx)("img", {
            src: "".concat((0, u.jH)("board_full")),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, wt.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: s,
            ref: p,
            style: {
              fontSize: "".concat(m, "rem"),
              lineHeight: "".concat(g, "rem")
            },
            onKeyDown: function (e) {
              e.stopPropagation();
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: function (e) {
              a(oi(e.target.value, h));
            }
          })]
        }), (0, wt.jsx)("div", {
          className: "WriteOnBoardTextSizeHeader SmallTextBold",
          children: "Text Size"
        }), (0, wt.jsxs)("div", {
          className: "WriteOnBoardTextSizeButtons",
          children: [(0, wt.jsx)(Ut.El, {
            className: "WriteOnBoardTextSizeButton",
            onClick: function () {
              f(0);
            },
            disabled: h === 0,
            children: "Small"
          }), (0, wt.jsx)(Ut.El, {
            className: "WriteOnBoardTextSizeButton",
            onClick: function () {
              f(1);
            },
            disabled: h === 1,
            children: "Medium"
          }), (0, wt.jsx)(Ut.El, {
            className: "WriteOnBoardTextSizeButton",
            onClick: function () {
              f(2);
            },
            disabled: h === 2,
            children: "Large"
          })]
        })]
      });
    });
    var ai = r(82700);
    var ui = function (e) {
      (0, Tt.Z)(r, e);
      var t = (0, Pt.Z)(r);
      function r(e) {
        var i;
        var n;
        (0, f.Z)(this, r);
        (n = t.call(this, e)).serverOptionSub = undefined;
        n.leftRoomSub = undefined;
        n.state = {
          serverSettings: ((i = (0, u.Zx)()) === null || i === undefined ? undefined : i.serverSettings) || {}
        };
        return n;
      }
      (0, p.Z)(r, [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          this.serverOptionSub = u.f$.subscribe("newAllServerOptions", function (t) {
            e.setState({
              serverSettings: t
            });
          });
          (0, u.Qo)("CookieConsent", true);
          setTimeout(function () {
            (0, u.gx)();
          }, 0);
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          u.f$.unsubscribe(this.serverOptionSub);
          u.f$.unsubscribe(this.leftRoomSub);
        }
      }, {
        key: "render",
        value: function () {
          return (0, wt.jsxs)(wt.Fragment, {
            children: [(0, wt.jsx)(fi, {
              touchScreen: this.props.touchScreen,
              useProfanityFilter: this.props.escMenuOptions.useProfanityFilter,
              showChat: this.props.escMenuOptions.showChat,
              showCoordinates: this.props.escMenuOptions.showCoordinates,
              showChunkCoordinates: this.props.escMenuOptions.showChunkCoordinates
            }), (0, wt.jsx)(_r.X, {}), this.props.touchScreen ? (0, wt.jsx)(Jt.a, {
              escMenuOptions: this.props.escMenuOptions
            }) : null, (0, wt.jsx)(kt, {}), (0, wt.jsx)(pi, {}), (0, wt.jsx)(Vt, {
              categories: this.state.serverSettings.shopInfo
            }), (0, wt.jsx)(mi, {
              ShopClick: function () {
                u.f$.publish("toggleShop");
              },
              touchScreen: this.props.touchScreen
            }), (0, wt.jsx)(Et.sC, {
              touchScreen: this.props.touchScreen
            }), (0, wt.jsx)(Et.xM, {}), (0, wt.jsx)(lr.Tx, {
              touchScreen: this.props.touchScreen,
              optionChangeCBs: this.props.optionChangeCBs,
              escMenuOptions: this.props.escMenuOptions,
              showingOptions: this.props.settingsAreOpen
            }), (0, wt.jsx)(or, {}), (0, wt.jsx)(li, {}), (0, wt.jsx)(hr, {}), (0, wt.jsx)(vr, {}), this.state.serverSettings.showKillfeed && (0, wt.jsx)(Ar, {}), (0, wt.jsx)(ei, {}), (0, wt.jsx)(Sr.t, {}), (0, wt.jsx)(Mr, {}), (0, wt.jsx)(ri, {}), (0, wt.jsx)(ti, {}), (0, wt.jsx)(si, {}), (0, wt.jsx)(ai.o, {}), this.state.serverSettings.useInventory && this.state.serverSettings.useFullInventory && (0, wt.jsx)(Rr, {
              touchScreen: this.props.touchScreen
            }), (0, wt.jsx)(ii, {}), (0, wt.jsx)(gi, {})]
          });
        }
      }]);
      return r;
    }(It.Component);
    var li = It.memo(function () {
      (0, Rt.iP)();
      var e = (0, Et.$i)("middleTextUpper");
      var t = (0, Et.$i)("middleTextLower");
      var r = (0, Et.$i)("useInventory");
      return (0, wt.jsxs)("div", {
        className: "BottomMiddleElements",
        children: [e && e !== "" ? (0, wt.jsx)("div", {
          className: "MiddleText MiddleTextUpper SmallTextBold",
          children: (0, wt.jsx)(Et.fD, {
            text: e
          })
        }) : null, t && t !== "" ? (0, wt.jsx)("div", {
          className: "MiddleText",
          children: (0, wt.jsx)(Et.fD, {
            text: t
          })
        }) : null, (0, wt.jsx)(Et.g4, {}), (0, wt.jsx)(pr, {}), r ? (0, wt.jsx)(Ot, {}) : null]
      });
    });
    function ci() {
      var e = (0, It.useRef)(null);
      (0, It.useEffect)(function () {
        var t;
        var r;
        var i = 0;
        var n = 0;
        var o = performance.now();
        var s = 0;
        var a = function () {
          i++;
          n++;
          var t = performance.now();
          if (!(t - o < 1000)) {
            var r = Math.round(i / (t - o) * 1000);
            e.current.textContent = r;
            i = 0;
            o = t;
            if (r < 55) {
              var a;
              var l;
              s += 1;
              var c = (0, u.Zx)();
              var h = u.Cc.getItem("decreaseLoadDistPromptDeniedCount");
              var d = c.serverSettings.minChunkAddDist;
              if (s >= 15 && ((0, u.Zx)().world._chunkAddDistance[0] > d || (0, u.Zx)().world._chunkAddDistance[1] > he.ZP.minVertChunkLoadDist) && ((a = u.Cc.getItem("lastDecreaseLoadDistPromptTime")) !== null && a !== undefined ? a : 0) + 43200000 < Date.now() && ((l = u.Cc.getItem("decreaseLoadDistPromptDeniedCount")) !== null && l !== undefined ? l : 0) < 3) {
                u.Cc.setItem("lastDecreaseLoadDistPromptTime", Date.now());
                u.f$.publish("uiRequestPopup", {
                  text: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                  callback: function (e) {
                    if (e) {
                      c.world.setAddRemoveDistance([d, he.ZP.minVertChunkLoadDist], [d + 1, he.ZP.minVertChunkLoadDist + 1]);
                      u.Cc.setItem("chunkHorizAddDist", d);
                      u.Cc.setItem("chunkVertAddDist", he.ZP.minVertChunkLoadDist);
                      u.f$.publish("updatedChunkLoadDist");
                      u.Cc.setItem("decreaseLoadDistPromptDeniedCount", 0);
                    } else {
                      u.Cc.setItem("decreaseLoadDistPromptDeniedCount", h + 1);
                    }
                  }
                });
              }
            } else {
              s = 0;
            }
          }
        };
        (0, u.Zx)().on("afterRender", a);
        if ((0, u.Zx)().GA) {
          t = setTimeout(function () {
            var e = performance.now();
            n = 0;
            r = setTimeout(function () {
              var t = performance.now() - e;
              var r = n * 1000 / t;
              (0, u.Zx)().GA.addDesignEvent("bloxdFps", r);
            }, 15000);
          }, 15000);
        }
        return function () {
          (0, u.Zx)().off("afterRender", a);
          clearTimeout(t);
          clearTimeout(r);
        };
      }, []);
      return (0, wt.jsxs)("div", {
        className: "FpsWrapperDiv",
        children: [(0, wt.jsx)("div", {
          children: "FPS"
        }), (0, wt.jsx)("div", {
          className: "FpsNumberDiv",
          ref: e
        })]
      });
    }
    function hi() {
      var e = (0, It.useRef)(null);
      var t = (0, It.useRef)(null);
      var r = (0, It.useRef)(null);
      var i = (0, It.useRef)(0);
      (0, It.useEffect)(function () {
        var n = function () {
          if (e.current && ++i.current === 2) {
            var n = (0, u.Zx)().ents.getPosition((0, u.Zx)().playerEntity);
            e.current.textContent = n[0].toFixed(2);
            t.current.textContent = n[1].toFixed(2);
            r.current.textContent = n[2].toFixed(2);
            i.current = 0;
          }
        };
        (0, u.Zx)().on("tick", n);
        return function () {
          (0, u.Zx)().off("tick", n);
        };
      });
      return (0, wt.jsxs)("div", {
        className: "CoordinateUI",
        children: [(0, wt.jsx)("div", {
          className: "SingleCoordinateUI",
          ref: e
        }), (0, wt.jsx)("div", {
          className: "SingleCoordinateUI",
          ref: t
        }), (0, wt.jsx)("div", {
          className: "SingleCoordinateUI",
          ref: r
        })]
      });
    }
    function di() {
      var e = (0, It.useRef)(null);
      var t = (0, It.useRef)(null);
      var r = (0, It.useRef)(null);
      var i = (0, It.useRef)(null);
      var n = (0, It.useRef)(0);
      (0, It.useEffect)(function () {
        var o = (0, u.Zx)();
        var s = function () {
          if (e.current && ++n.current === 2) {
            var s = o.ents.getPosition(o.playerEntity);
            var a = Pe(s[0], s[1], s[2]);
            e.current.textContent = "".concat(a[0], " ").concat(a[1], " ").concat(a[2]);
            var u = he.ZP.chunkSize;
            var l = s[0] % u;
            if (l < 0) {
              l += 32;
            }
            var c = s[1] % u;
            if (c < 0) {
              c += 32;
            }
            var h = s[2] % u;
            if (h < 0) {
              h += 32;
            }
            t.current.textContent = l.toFixed(2);
            r.current.textContent = c.toFixed(2);
            i.current.textContent = h.toFixed(2);
            n.current = 0;
          }
        };
        o.on("tick", s);
        return function () {
          o.off("tick", s);
        };
      });
      return (0, wt.jsxs)("div", {
        className: "CoordinateUI ChunkCoordUI",
        children: [(0, wt.jsx)("div", {
          className: "SingleCoordinateUI",
          ref: e
        }), (0, wt.jsx)("div", {
          className: "SingleCoordinateUI",
          ref: t
        }), (0, wt.jsx)("div", {
          className: "SingleCoordinateUI",
          ref: r
        }), (0, wt.jsx)("div", {
          className: "SingleCoordinateUI",
          ref: i
        })]
      });
    }
    var fi = It.memo(function (e) {
      var t = e.touchScreen;
      var r = e.useProfanityFilter;
      var i = e.showChat;
      var n = e.showCoordinates;
      var o = e.showChunkCoordinates;
      (0, Rt.iP)();
      var s = a.ob[u.EU.modeAttemptedPlay];
      var l = "".concat(s !== null && s !== undefined && s.combinedTitle ? "".concat(s === null || s === undefined ? undefined : s.combinedTitle, " ") : "").concat(s.title).concat(s.subText ? " ".concat(s.subText) : "");
      return (0, wt.jsxs)("div", {
        className: "TopLeftElements",
        children: [i && (0, wt.jsx)(Qt.en, {
          touchScreen: t,
          useProfanityFilter: r
        }), (0, wt.jsxs)("div", {
          className: "RightOfChatWrapper",
          children: [(0, wt.jsxs)("div", {
            className: "LobbyNameWrapper",
            children: [(0, wt.jsx)("div", {
              children: "Lobby"
            }), (0, wt.jsx)("div", {
              className: "LobbyNameGamemode",
              children: l
            }), (0, wt.jsx)("div", {
              children: u.EU.connectedLobbyName !== null ? u.EU.connectedLobbyName : "null"
            })]
          }), (0, wt.jsx)(ci, {})]
        }), (0, wt.jsxs)("div", {
          className: "CoordinatesWrapper",
          children: [n && (0, wt.jsx)(hi, {}), o && (0, wt.jsx)(di, {})]
        })]
      });
    });
    var pi = It.memo(function () {
      (0, Rt.iP)();
      var e = (0, Et.$i)("RightInfoText");
      if (e !== null && e !== "") {
        return (0, wt.jsx)("div", {
          className: "RightInfoDiv",
          children: (0, wt.jsx)(Et.fD, {
            text: e
          })
        });
      } else {
        return null;
      }
    });
    var mi = It.memo(function (e) {
      var t = e.ShopClick;
      var r = e.touchScreen;
      (0, Rt.iP)();
      var i = !!(0, Et.$i)("shopInfo");
      var n = {
        Shop: {
          icon: (0, u.Zx)().serverSettings.useCommandsShopIcon ? "terminal" : "cart-shopping",
          key: "B",
          clickCb: t,
          showTouchTutorialPubSubId: "showShopTouchTutorial",
          showRedDotPubSubId: "showShopIconRedDot"
        },
        Menu: {
          icon: "bars",
          key: "M",
          clickCb: function () {
            u.f$.publish("ToggleMenu");
          }
        },
        CharCustomisation: {
          icon: "shirt",
          key: "N",
          clickCb: function () {
            u.f$.publish("ToggleCharCustomisation");
          }
        }
      };
      var o = [];
      var s = (0, Et.$i)("_tasks");
      var a = (0, Et.$i)("_availableLeaderboards");
      if (s || a) {
        o.push("Menu");
      }
      if (i) {
        o.push("Shop");
      }
      o.push("CharCustomisation");
      return (0, wt.jsx)("div", {
        className: "BottomLeftIcons",
        children: o.map(function (e) {
          var t = n[e];
          var i = t.icon;
          var o = t.key;
          var s = t.clickCb;
          var a = t.showTouchTutorialPubSubId;
          var u = t.showRedDotPubSubId;
          return (0, wt.jsx)("div", {
            className: "BottomLeftIcon",
            children: (0, wt.jsx)(Et.z2, {
              touchScreen: r,
              icon: i,
              keyboardButton: o,
              onClick: function () {
                s();
              },
              showTouchTutorialPubSubId: a,
              showRedDotPubSubId: u
            })
          }, e);
        })
      });
    });
    var gi = It.memo(function () {
      var e = (0, It.useState)(false);
      var t = (0, le.Z)(e, 2);
      var r = t[0];
      var i = t[1];
      var n = function () {
        i(false);
      };
      (0, Et.lF)("ctrlCrouchWithoutFullscreen", function () {
        i(true);
      });
      (0, Et.lF)("displaymodeFullscreenChange", function (e) {
        if (e) {
          n();
        }
      });
      var o = d.j5 === "crazygames";
      return (0, wt.jsx)(Et.rW, {
        close: n,
        escDoesExit: true,
        show: r,
        forcePointerLock: !r,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, wt.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, wt.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), o && (0, wt.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, wt.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, wt.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!o && (0, wt.jsx)(Ut.gG, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: function () {
                (0, Hr.V9)();
                n();
              },
              children: (0, wt.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, wt.jsx)(Ut.QT, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: function () {
                n();
              },
              children: (0, wt.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      });
    });
    var vi = r(24412);
    var _i = r(90673);
    var yi = r(77129);
    var bi = {
      debug: false,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: false,
      drawText: function (e, t, r, i, n, o) {
        var s = this;
        if (n <= 0 || o <= 0 || this.fontSize <= 0) {
          return {
            height: 0
          };
        }
        var a = r + n;
        var l = i + o;
        var c = this.fontStyle;
        var h = this.fontVariant;
        var d = this.fontWeight;
        var f = this.fontSize;
        var p = this.font;
        var m = "".concat(c, " ").concat(h, " ").concat(d, " ").concat(f, "px ").concat(p);
        e.font = m;
        var g;
        var v = i + o / 2 + this.fontSize / 2;
        if (this.align === "right") {
          g = a;
          e.textAlign = "right";
        } else if (this.align === "left") {
          g = r;
          e.textAlign = "left";
        } else {
          g = r + n / 2;
          e.textAlign = "center";
        }
        var _;
        var y = (0, b.Z)(t);
        try {
          for (y.s(); !(_ = y.n()).done;) {
            var A = _.value;
            if (e.measureText(A).width >= n) {
              t = t.replace(A, "");
            }
          }
        } catch (E) {
          y.e(E);
        } finally {
          y.f();
        }
        t = (0, u.Xl)(t);
        var S = [];
        var M = t.split("\n");
        var C = this.justify ? e.measureText(" ").width : 0;
        M.forEach(function (t) {
          var r = e.measureText(t).width;
          if (r <= n) {
            S.push(t);
          } else {
            var i;
            var o;
            var a;
            var u = t;
            var l = n;
            for (r = e.measureText(u).width; r > l;) {
              i = 0;
              o = 0;
              a = "";
              for (; o < l;) {
                i++;
                a = u.substr(0, i);
                o = e.measureText(a).width;
              }
              i--;
              a = a.substr(0, i);
              var c = i;
              if (u.substr(i, 1) != " ") {
                for (; u.substr(i, 1) != " " && i != 0;) {
                  i--;
                }
                if (i == 0) {
                  i = c;
                }
                a = u.substr(0, i);
              }
              a = s.justify ? s.justifyLine(e, a, C, " ", n) : a;
              u = u.substr(i);
              r = e.measureText(u).width;
              S.push(a);
            }
            if (r > 0) {
              S.push(u);
            }
          }
        });
        var x = this.lineHeight ? this.lineHeight : this.getTextHeight(e, t, m);
        var T = x * (S.length - 1);
        var P = T / 2;
        var I = i;
        if (this.vAlign === "top") {
          v = i + this.fontSize;
        } else if (this.vAlign === "bottom") {
          v = l - T;
          I = l;
        } else {
          I = i + o / 2;
          v -= P;
        }
        S.forEach(function (t) {
          t = t.trim();
          e.fillText(t, g, v);
          v += x;
        });
        if (this.debug) {
          e.lineWidth = 3;
          e.strokeStyle = "#00909e";
          e.strokeRect(r, i, n, o);
          e.lineWidth = 2;
          e.strokeStyle = "#f6d743";
          e.beginPath();
          e.moveTo(g, i);
          e.lineTo(g, l);
          e.stroke();
          e.strokeStyle = "#ff6363";
          e.beginPath();
          e.moveTo(r, I);
          e.lineTo(a, I);
          e.stroke();
        }
        return {
          height: T + x
        };
      },
      getTextHeight: function (e, t, r) {
        var i = e.textBaseline;
        var n = e.font;
        e.textBaseline = "bottom";
        e.font = r;
        var o = e.measureText(t).actualBoundingBoxAscent;
        e.textBaseline = i;
        e.font = n;
        return o;
      },
      justifyLine: function (e, t, r, i, n) {
        var o = t.trim();
        var s = e.measureText(o).width;
        var a = o.split(/\s+/).length - 1;
        var u = Math.floor((n - s) / r);
        if (a <= 0 || u <= 0) {
          return o;
        }
        for (var l = Math.floor(u / a), c = u - a * l, h = [], d = 0; d < l; d++) {
          h.push(i);
        }
        h = h.join("");
        return o.replace(/\s+/g, function (e) {
          var t = c > 0 ? h + i : h;
          c--;
          return e + t;
        });
      }
    };
    var Ai = r(52644);
    var Si = r(44811);
    var Mi = r(23886);
    var Ci = function () {
      function e(t) {
        var r = this;
        (0, f.Z)(this, e);
        this.bloxd = undefined;
        this.noa = undefined;
        this.cachedEntityMeshTypes = {};
        this.bloxd = t;
        this.noa = t.noa;
        this.noa.ents.createComponent({
          name: "isBoard"
        });
        (0, u.ZC)(function () {
          var e;
          var t = (0, b.Z)(r.bloxd.ents.getStatesList("isBoard"));
          try {
            for (t.s(); !(e = t.n()).done;) {
              var i = e.value;
              r.bloxd.ents.deleteEntity(i.__id);
            }
          } catch (n) {
            t.e(n);
          } finally {
            t.f();
          }
        });
      }
      (0, p.Z)(e, [{
        key: "addBoard",
        value: function (e, t, r, i) {
          var n;
          var o;
          var s = this;
          this.removeBoard(e, t, r);
          var a = this.bloxd.blockDataOwner.getBlockData(e, t, r);
          var u = (n = a === null || a === undefined ? undefined : a.persisted.shared.text) !== null && n !== undefined ? n : "";
          var l = (o = a === null || a === undefined ? undefined : a.persisted.shared.textSize) !== null && o !== undefined ? o : 0;
          var c = this.bloxd.noa.rendering.getScene();
          var h = this.noa.ents.add([e, t, r], 1, 1);
          var d = null;
          this.noa.ents.addComponent(h, "hidingMeshManager", {
            addMeshComponent: function () {
              var e = function () {
                var e;
                var t = new yi.Y("BoardTextTransform", c);
                if (u.trim() === "") {
                  e = new M.Kj("EmptyBoardMesh", c);
                } else {
                  var r = 7 / 8;
                  e = F.V.CreatePlane("BoardPlane", {
                    width: 1,
                    height: r
                  }, c);
                  var n = 256;
                  var o = new _i.c("BoardDynamicTexture", {
                    width: n,
                    height: 224
                  }, c);
                  var s = o.getContext();
                  bi.fontSize = ni[l].ingameFontSize;
                  bi.fontWeight = "bolder";
                  bi.font = "'Jetbrains Mono'";
                  bi.drawText(s, u, 0, 0, n, 224);
                  o.update();
                  var a = new C.K("mat", c);
                  a.diffuseTexture = o;
                  a.diffuseTexture.hasAlpha = true;
                  a.specularColor = new x.Wo(0, 0, 0);
                  a.freeze();
                  e.material = a;
                  e.freezeWorldMatrix();
                  oe(t, 0, 0, 0, i, 0.375);
                  t.rotation.y += Math.PI;
                  e.rotation = t.rotation;
                }
                return {
                  mesh: e,
                  transform: t
                };
              }();
              var t = e.mesh;
              var r = e.transform;
              d = t;
              s.noa.entities.addComponent(h, "mesh", {
                mesh: t,
                offset: [0.5 + r.position.x, 0.5 + r.position.y, 0.5 + r.position.z]
              });
            },
            removeMeshComponent: function () {
              var e;
              if (!((e = d) === null || e === undefined)) {
                e.dispose(false, true);
              }
              s.noa.entities.removeComponent(h, "mesh");
            },
            addShadow: false,
            hideDist: 25
          });
          this.noa.ents.addComponent(h, "isBoard");
        }
      }, {
        key: "removeBoard",
        value: function (e, t, r) {
          var i;
          var n = [e, t, r];
          var o = (0, b.Z)(this.bloxd.ents.getStatesList("isBoard"));
          try {
            for (o.s(); !(i = o.n()).done;) {
              var s = i.value;
              if (Qe().squaredDistance(this.bloxd.ents.getPosition(s.__id), n) < 0.01) {
                return void this.bloxd.ents.deleteEntity(s.__id);
              }
            }
          } catch (a) {
            o.e(a);
          } finally {
            o.f();
          }
        }
      }, {
        key: "removeBoardsInChunk",
        value: function (e, t, r) {
          var i;
          var n = (0, b.Z)(this.bloxd.ents.getStatesList("isBoard"));
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = i.value;
              var s = xe(this.bloxd.ents.getPosition(o.__id));
              var a = (0, le.Z)(s, 3);
              var u = a[0];
              var l = a[1];
              var c = a[2];
              if (u === e && l === t && c === r) {
                this.bloxd.ents.deleteEntity(o.__id);
              }
            }
          } catch (h) {
            n.e(h);
          } finally {
            n.f();
          }
        }
      }, {
        key: "getThrowableMesh",
        value: function (e) {
          var t;
          if (e === "Fireball") {
            t = u.EU.itemsClient["Fireball Block"].getMesh(0.95);
          } else if (e === "Iceball") {
            t = u.EU.itemsClient["Iceball Block"].getMesh(0.95);
          } else {
            (t = u.EU.itemsClient[e].getMesh(0.13)).billboardMode = Ai.x.BILLBOARDMODE_Y;
          }
          return t;
        }
      }, {
        key: "newParticleSystem",
        value: function (e) {
          var t = this.noa.rendering.getScene();
          var r = new Si.pc(e.name, 50, t);
          r.particleTexture = new S.x((0, vi.NG)(e.texture), t, undefined, undefined, S.x.NEAREST_SAMPLINGMODE);
          var i;
          var n = (0, b.Z)(e.colorGradients);
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = i.value;
              r.addColorGradient(o.gradient, (0, Mi.Vt)(o.minColor[0], o.minColor[1], o.minColor[2], o.minColor[3]), (0, Mi.Vt)(o.maxColor[0], o.maxColor[1], o.maxColor[2], o.maxColor[3]));
            }
          } catch (l) {
            n.e(l);
          } finally {
            n.f();
          }
          r.minLifeTime = e.minLifeTime;
          r.maxLifeTime = e.maxLifeTime;
          r.minEmitPower = e.minEmitPower;
          r.maxEmitPower = e.maxEmitPower;
          r.minSize = e.minSize;
          r.maxSize = e.maxSize;
          var s;
          var a = (0, b.Z)(e.velocityGradients);
          try {
            for (a.s(); !(s = a.n()).done;) {
              var u = s.value;
              r.addVelocityGradient(u.timeFraction, u.factor, u.factor2);
            }
          } catch (l) {
            a.e(l);
          } finally {
            a.f();
          }
          (0, Mi.$t)(this.noa, r);
          r.createBoxEmitter(new R.P(1, 1, 1), new R.P(-1, -1, -1), new R.P(Math.min(e.pos1[0], e.pos2[0]), Math.min(e.pos1[1], e.pos2[1]), Math.min(e.pos1[2], e.pos2[2])), new R.P(Math.max(e.pos1[0], e.pos2[0]), Math.max(e.pos1[1], e.pos2[1]), Math.max(e.pos1[2], e.pos2[2])));
          r.manualEmitCount = 0;
          new vi.Ul(r, e.maxLifeTime).emitAmount(e.manualEmitCount);
          setTimeout(function () {
            r.dispose();
          }, e.maxLifeTime * 10000);
        }
      }, {
        key: "getEntityMesh",
        value: function (e, t, r) {
          var i = this.noa.rendering.getScene();
          if (e === "BloxdBlock") {
            return {
              mesh: u.EU.itemsClient[t.blockName].getMesh(t.size, r),
              meshOffset: Qe().fromValues(0, t.size / 2, 0),
              nameYOffset: t.size + 0.3
            };
          }
          if (e === "Box") {
            var n = "".concat(e, "|").concat(JSON.stringify(t));
            if (!this.cachedEntityMeshTypes[n]) {
              var o = E.BoxBuilder.CreateBox("".concat(n, "EntityMesh"), {
                width: t.width,
                height: t.height,
                depth: t.depth
              }, this.noa.rendering.getScene());
              var s = new C.K("".concat(n, "EntityMesh"), i);
              console.log("Creating with opts", t, t.diffuseColor[0] / 255, t.diffuseColor[1] / 255, t.diffuseColor[2] / 255);
              s.diffuseColor = new x.Wo(t.diffuseColor[0] / 255, t.diffuseColor[1] / 255, t.diffuseColor[2] / 255);
              s.specularColor = new x.Wo(0, 0, 0);
              s.emissiveColor = new x.Wo(t.emissiveColor[0] / 255, t.emissiveColor[1] / 255, t.emissiveColor[2] / 255);
              s.freeze();
              o.material = s;
              o.alwaysSelectAsActiveMesh = true;
              o.doNotSyncBoundingInfo = true;
              o.setEnabled(false);
              i.removeMesh(o);
              this.cachedEntityMeshTypes[n] = o;
            }
            var a = this.cachedEntityMeshTypes[n].createInstance("".concat(n, "EntityMeshInstance"));
            this.noa.rendering.addMeshToScene(a);
            a.position.x = 0;
            a.position.y = 0;
            a.position.z = 0;
            r(a);
            return {
              mesh: a,
              meshOffset: Qe().fromValues(0, t.height / 2, 0),
              nameYOffset: t.height + 0.3
            };
          }
          console.error("Not implemented custom meshes for type", e);
        }
      }, {
        key: "customItemUpdate",
        value: function (e, t) {
          (0, w.JJ)(e, t.id, this.bloxd.noa.rendering.getScene(), t.type);
        }
      }]);
      return e;
    }();
    function xi() {
    }
    var Ti;
    var Pi;
    var Ii = y().GameAnalytics;
    var Ei = y();
    var Ri = r(52126).ZP;
    var wi = function () {};
    function ki(e) {
      if (u.EU.noa) {
        console.log("client csv detection");
      }
      try {
        var t;
        if ((t = (0, a.K7)()) !== null && t !== undefined && t.GAConfig) {
          var r = (0, a.K7)().GAConfig;
          u.EU.GameAnalytics = Ii;
          u.EU.gaENums = Ei;
          if (["development", "test"].includes("production") && Ri.logGameAnalyticsDebug) {
            Ii.setEnabledInfoLog(true);
          } else {
            Ii.setEnabledInfoLog(false);
          }
          Ii.configureAvailableResourceCurrencies(r.AvailableCurrencies);
          Ii.configureAvailableResourceItemTypes(r.AvailableItemCategories);
          Ii.initialize(r.GAGameKey, r.GASecretKey);
          var i = l.parse(document.location.search);
          Ii.addDesignEvent("portal:".concat(i.portal || "root"), 234);
          var n = {
            hey: {
              category: "hi",
              subCategory: "noway",
              value: 2
            }
          };
          var o = u.f$.subscribe("leaveValues", function (e) {
            var t = e.leaveEventType;
            var r = e.category;
            var i = e.subCategory;
            var o = e.value;
            console.log(t, r, i, o);
            n[t] = {
              category: r,
              subCategory: i,
              value: o
            };
          });
          wi = function () {
            for (var e in n) {
              var t = n[e];
              var r = t.category;
              var i = t.subCategory;
              var o = t.value;
              var s = e;
              if (r) {
                s += ":" + r;
              }
              if (i) {
                s += ":" + i;
              }
              Ii.addDesignEvent(s, o || 0);
            }
          };
          e.GA = u.EU.GameAnalytics;
          e.gaENums = u.EU.gaENums;
          e.logErrorMessage = (0, u.fj)(e.GA, e.gaENums);
          console.log("Defined noa.logErrorMessage");
          var s = function (t) {
            var r = t.message;
            var i = t.filename;
            var n = t.lineno;
            var o = t.colno;
            var s = t.error;
            e.logErrorMessage("Uncaught error in window event listener ".concat(r, ", ").concat(i, ", ").concat(n, ", ").concat(o, ", ").concat(s), s);
          };
          window.addEventListener("error", s);
          (0, u.Xr)(function () {
            wi();
            Ii.endSession();
            u.f$.unsubscribe(o);
            wi = function () {};
            e.GA = undefined;
            e.gaENums = undefined;
            e.logErrorMessage = (0, u.fj)(null, null);
            window.removeEventListener("error", s);
          });
        }
      } catch (c) {
        console.error("ERROR initialising gameanalytics");
      }
    }
    function Di(e, t) {
      return Bi.apply(this, arguments);
    }
    function Bi() {
      Bi = (0, i.Z)(o().mark(function e(t, r) {
        var n;
        var s;
        var a;
        var c;
        var f;
        var p;
        var m;
        var g;
        var _;
        return o().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                console.log("Play attempted.");
                n = t;
                s = r;
                console.log("Awaiting for all libs needed for gameplay to be loaded.");
                console.log("Libs needed for gameplay loaded.");
                if (!(a = l.parse(document.location.search).forcedIp) || Ri.testLocalMatchmaking) {
                  e.next = 13;
                  break;
                }
                c = a || Ri.localGameserverUrl;
                console.log("Colyseus connecting to ".concat(c));
                Pi = new v.KU(c);
                u.EU.connectedWebsocketUrl = c;
                e.next = 25;
                break;
              case 13:
                e.next = 15;
                return h()((0, i.Z)(o().mark(function e() {
                  return o().wrap(function (e) {
                    for (;;) {
                      switch (e.prev = e.next) {
                        case 0:
                          e.next = 2;
                          return Oi(t, r);
                        case 2:
                          return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })), {
                  onFailedAttempt: function (e) {
                    console.log("Attempt ".concat(e.attemptNumber, " to get game server IP failed."));
                  },
                  retries: 3
                });
              case 15:
                f = e.sent;
                p = f.succeeded;
                m = f.failReason;
                g = f.lobbyName;
                _ = f.playingMode;
                if (p) {
                  e.next = 23;
                  break;
                }
                console.log("Join room did not succeed, reason:", m);
                return e.abrupt("return", {
                  succeeded: false,
                  failReason: m,
                  playingMode: null,
                  lobby: null
                });
              case 23:
                n = g;
                s = _;
              case 25:
                console.log("Playing", s);
                u.EU.connectedPlayingMode = s;
                u.f$.publish("enterLoadingScreen");
                u.f$.publish("loadingScreenState", "Loading Game");
                (0, d.Uz)();
                if (Ti) {
                  Ui(Ti, n, s);
                } else {
                  Li(n, s);
                }
                return e.abrupt("return", {
                  succeeded: true,
                  failReason: null,
                  playingMode: s,
                  lobby: n
                });
              case 32:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return Bi.apply(this, arguments);
    }
    function Oi(e, t) {
      return Fi.apply(this, arguments);
    }
    function Fi() {
      Fi = (0, i.Z)(o().mark(function e(t, r) {
        return o().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", (0, u.ni)("".concat(Ri.matchmakingUrl, "/play"), {
                  requestedLobbyName: t !== null && t !== undefined ? t : null,
                  languages: (0, u.HZ)(),
                  game: r,
                  dbId: u.EU.id
                }).then(function (e) {
                  var t = e.ip;
                  var r = e.lobbyName;
                  var i = e.game;
                  var n = e.succeeded;
                  var o = e.failReason;
                  if (!n) {
                    return {
                      succeeded: false,
                      failReason: o,
                      lobbyName: null,
                      playingMode: null
                    };
                  }
                  var s = "wss://";
                  console.log("Connecting to ".concat(s).concat(t));
                  var a = "".concat(s).concat(t);
                  Pi = new v.KU(a);
                  u.EU.connectedWebsocketUrl = a;
                  return {
                    succeeded: true,
                    failReason: null,
                    lobbyName: r,
                    playingMode: i
                  };
                }));
              case 1:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return Fi.apply(this, arguments);
    }
    function Li(e, t) {
      ze(Ti = new s.D({
        tickRate: Ri.clientTicksPerSecond,
        debug: false,
        showFPS: false,
        inverseY: false,
        inverseX: false,
        chunkSize: Ri.chunkSize,
        blockTestDistance: Ri.blockTestDistance,
        playerStart: [0, 5, 0],
        playerHeight: Ri.playerHeight,
        playerWidth: Ri.playerWidth,
        playerAutoStep: Ri.playerAutoStep,
        useAO: true,
        AOmultipliers: [0.92, 0.8, 0.5],
        reverseAOmultiplier: 1,
        chunkAddDistance: [Ri.chunkHorizAddDistance, Ri.chunkVertAddDistance],
        chunkRemoveDistance: [Ri.chunkHorizAddDistance + 1, Ri.chunkVertAddDistance + 1],
        preventDefaults: false,
        fluidDrag: 1,
        fluidDensity: 3,
        isBodyInsideUnloadedBlock: function (e) {
          var t = u.EU.bloxd;
          if (e === Ti.ents.getPhysicsBody(Ti.playerEntity)) {
            return (0, _t.IE)(t, e);
          }
          var r = [Math.floor((e.aabb.base[0] + e.aabb.max[0]) / 2), Math.floor(e.aabb.base[1]), Math.floor((e.aabb.base[2] + e.aabb.max[2]) / 2)];
          t.localToGlobal(r, r);
          return !t.hasChunkWithBlockCoordinates(r[0], r[1], r[2]);
        },
        getMeshingWorker: function () {
          return new xi();
        }
      }));
      u.EU.BloxdClientRenderingClass = Ci;
      u.EU.bloxd = new Ct(Ti);
      Ti.bloxd = u.EU.bloxd;
      u.EU.bloxd;
      u.EU.noa = Ti;
      u.f$.publish("noaDefined");
      console.log("noaDefined");
      u.EU.pointerLockWrapper = new g(Ti);
      (0, u.ZC)(function () {
        u.EU.pointerLockWrapper.reset();
      });
      var r = function (e) {
        return j.apply(this, arguments);
      }(Ti);
      var i = (0, Ge.fs)(Ti);
      var n = Promise.all([r, i]);
      Ti.colyClient = Pi;
      (0, We.rI)(Ti, e, t, n);
      Ue(Ti);
      n.then(function () {
        (0, je.ix)(Ti);
      });
      (0, vi.vh)(Ti);
      u.Cc.setItem("numTimesPlayed", u.Cc.getItem("numTimesPlayed") + 1);
      ki(Ti);
      console.log("Running with webgl version", Ti.rendering._engine.webGLVersion);
    }
    function Ni() {
      var e;
      var t;
      var r;
      var i;
      console.log("Leaving game");
      u.f$.publish("leaveGame");
      if (!((e = Ti.colyRoom) === null || e === undefined || (t = e.removeAllListeners) === null || t === undefined)) {
        t.call(e);
      }
      if (!((r = Ti.colyRoom) === null || r === undefined || (i = r.leave) === null || i === undefined)) {
        i.call(r);
      }
      delete Ti.colyRoom;
      delete Ti.serverPlayerEntity;
      (0, u.eM)(Ti);
      (function (e) {
        Fe = false;
        Ee = false;
        Le.destroySeed(Re);
        Re = null;
        e.world.markAllChunksForRemoval();
        Be = {};
        Ne = {};
      })(Ti);
      u.EU.connectedWebsocketUrl = null;
      Ti.setPaused(true);
    }
    function Ui(e, t, r) {
      (0, u.eM)(e);
      e.colyClient = Pi;
      (0, We.rI)(e, t, r);
      ki(e);
      e.setPaused(false);
    }
    window.addEventListener("beforeunload", function () {
      wi();
    });
    r.e(622).then(r.t.bind(r, 67882, 23)).then(function (e) {
      e.polyfill();
    });
    window.leaveGame = function () {
      Ni();
    };
  },
  66293: function (e, t, r) {
    "use strict";

    r.d(t, {
      X: function () {
        return l;
      },
      b: function () {
        return d;
      }
    });
    var i = r(29439);
    var n = r(85774);
    var o = r(34703);
    var s = r(47313);
    var a = r(44695);
    var u = r(46417);
    var l = s.memo(function () {
      var e;
      var t;
      var r = (0, n.Zx)();
      var l = (0, o.$i)("canChange");
      (0, o.I4)("cameraZoomSet", null);
      (0, o.I4)("newLocalPlayerHeldItem", null);
      var c = (0, s.useState)(false);
      var h = (0, i.Z)(c, 2);
      var d = h[0];
      var f = h[1];
      (0, o.lF)("mouseState", function (e) {
        var t = e.isDown;
        f(t);
      });
      var m = (e = (0, n.Zx)().ents.getHeldItemState((0, n.Zx)().playerEntity)) === null || e === undefined ? undefined : e.heldItem;
      var g = r.camera.zoomDistance <= 1 || l || r.entities.getHeldItemState(r.playerEntity).heldItemName !== null;
      var v = (m === null || m === undefined ? undefined : m.gunTypeObj) || (m === null || m === undefined || (t = m.typeObj) === null || t === undefined ? undefined : t.holdAsAiming);
      if (a.vO === "touchOnly" && !v || !g) {
        return null;
      } else if (r.entities.getHeldItemState(r.playerEntity).heldType === "Gun") {
        return (0, u.jsx)(p, {});
      } else {
        return (0, u.jsx)("div", {
          className: "CrossHair",
          style: {
            transform: "scale(".concat(d ? 1.4 : 1, ")")
          },
          children: "+"
        });
      }
    });
    var c = [{
      current: null
    }, {
      current: null
    }, {
      current: null
    }, {
      current: null
    }];
    var h = 0;
    function d(e) {
      if (c[0].current) {
        f(e);
      } else {
        h = e;
      }
    }
    function f(e) {
      var t = "".concat(e * 0.1, "vh");
      c[0].current.style.transform = "translateX(calc(0px - ".concat(t, "))");
      c[1].current.style.transform = "translateX(calc(0px + ".concat(t, "))");
      c[2].current.style.transform = "translateY(calc(0px - ".concat(t, "))");
      c[3].current.style.transform = "translateY(calc(0px + ".concat(t, "))");
    }
    function p() {
      var e = 0.6;
      var t = 0.15;
      var r = "".concat(1.2, "vh");
      var i = "".concat(0.3, "vh");
      (0, s.useEffect)(function () {
        if (h) {
          f(h);
        }
      }, []);
      return (0, u.jsxs)("div", {
        className: "GunCrosshairWrapper",
        children: [(0, u.jsx)("div", {
          className: "GunCrosshair",
          style: {
            width: r,
            height: i,
            top: "".concat(49.85, "vh"),
            left: "calc(50vw - ".concat(e, "vh)")
          },
          ref: c[0]
        }), (0, u.jsx)("div", {
          className: "GunCrosshair",
          style: {
            width: r,
            height: i,
            top: "".concat(49.85, "vh"),
            left: "calc(50vw - ".concat(e, "vh)")
          },
          ref: c[1]
        }), (0, u.jsx)("div", {
          className: "GunCrosshair",
          style: {
            width: i,
            height: r,
            top: "".concat(49.4, "vh"),
            left: "calc(50vw - ".concat(t, "vh)")
          },
          ref: c[2]
        }), (0, u.jsx)("div", {
          className: "GunCrosshair",
          style: {
            width: i,
            height: r,
            top: "".concat(49.4, "vh"),
            left: "calc(50vw - ".concat(t, "vh)")
          },
          ref: c[3]
        })]
      });
    }
  },
  3170: function (e, t, r) {
    "use strict";

    r.d(t, {
      t: function () {
        return u;
      },
      $: function () {
        return l;
      }
    });
    var i = r(34703);
    var n = r(85774);
    var o = r(47313);
    var s = r(46417);
    var a = {};
    var u = o.memo(function () {
      var e = (0, i.GG)();
      (0, i.lF)("damagedByOtherPlayer", function (t) {
        var r = t.whoShotEId;
        var i = t.direction;
        if (a[r]) {
          var n = a[r];
          clearTimeout(n.timeout);
          n.direction = i;
          n.timeout = setTimeout(function () {
            delete a[r];
            e();
          }, 800);
        } else {
          a[r] = {
            direction: i,
            domElement: null,
            timeout: setTimeout(function () {
              delete a[r];
              e();
            }, 800)
          };
        }
        e();
      });
      (0, i.lF)("playerKilled", function (t) {
        var r = t.deadEId;
        if (t.killerEId === (0, n.Zx)().serverPlayerEntity && r in a) {
          clearTimeout(a[r].timeout);
          delete a[r];
          e();
        }
      });
      (0, o.useEffect)(function () {
        return function () {
          for (var e in a) {
            clearTimeout(a[e].timeout);
            delete a[e];
          }
        };
      }, []);
      return (0, s.jsx)("div", {
        className: "DirectionalDamage",
        children: Object.keys(a).map(function (e) {
          return (0, s.jsx)("div", {
            className: "DamageIndicator",
            ref: function (t) {
              if (a[e]) {
                a[e].domElement = t;
              }
            },
            style: {
              width: c,
              height: c
            }
          }, e);
        })
      });
    });
    function l(e) {
      for (var t = 0, r = Object.values(a); t < r.length; t++) {
        var i = r[t];
        h(e, i.domElement, i.direction);
      }
    }
    var c = "".concat(3.5, "vw");
    function h(e, t, r) {
      var i = r - e.camera.heading;
      var n = Math.sin(i) * 13;
      var o = Math.cos(i) * 13;
      t.style.transform = "translate(calc(".concat(n, "vw - 50%), calc(0px - ").concat(o, "vw - 50%)) rotate(").concat(i, "rad)");
    }
  },
  96724: function (e, t, r) {
    "use strict";

    r.d(t, {
      a: function () {
        return y;
      },
      v6: function () {
        return P;
      }
    });
    var i = r(29439);
    var n = r(47313);
    var o = r(85774);
    var s = r(13529);
    var a = r.n(s);
    var u = r(44695);
    var l = r(47077);
    var c = r.n(l);
    var h = r(52126);
    var d = r(34703);
    var f = r(46123);
    var p = r.n(f);
    var m = r(85008);
    var g = r(80427);
    var v = r(55250);
    var _ = r(46417);
    var y = n.memo(function (e) {
      var t = e.escMenuOptions;
      (0, n.useEffect)(function () {
        var e = (0, o.Zx)().camera;
        e.sensitivityX = t.touchscreenSensitivity;
        e.sensitivityY = t.touchscreenSensitivity;
        var r = (0, o.Zx)().ents;
        r.getState((0, o.Zx)().playerEntity, r.names.receivesInputs).isTouchscreen = true;
        console.log(u.vO);
        if (u.vO !== "touchOnly") {
          o.f$.publish("showError", {
            error: "Touch detected, setting controls to touch. Mouse and keyboard control will be disabled. Change control type by visiting the options in the top right",
            timeoutLength: 15000
          });
        }
        return function () {
          r.getState((0, o.Zx)().playerEntity, r.names.receivesInputs).isTouchscreen = false;
          e.sensitivityX = t.mouseSensitivity;
          e.sensitivityY = t.mouseSensitivity;
        };
      }, [t.mouseSensitivity, t.touchscreenSensitivity]);
      return (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(M, {}), (0, _.jsx)(S, {}), (0, _.jsx)(I, {}), (0, _.jsx)(A, {}), (0, _.jsx)(b, {})]
      });
    });
    function b() {
      var e = (0, o.Zx)();
      (0, n.useEffect)(function () {
        var t = function (t, r) {
          var i = e.rendering.getScene().createPickingRay(t, r);
          var n = i.origin;
          var s = i.direction;
          e.actionOrigin = [n.x, n.y, n.z];
          e.actionDirection = [isNaN(s.x) ? 1 : s.x, isNaN(s.y) ? 0 : s.y, isNaN(s.z) ? 0 : s.z];
          n = [n.x, n.y, n.z];
          s = [s.x, s.y, s.z];
          (0, o.rL)().localToGlobal(n, n);
          var a = e.pickBlock(n, s, e.camera.zoomDistance + h.ZP.blockTestDistance, function (e) {
            return e !== 0;
          });
          if (a && a.blockID && c().dist(a.position, (0, o.rL)().getPlayerEyePos(e.playerEntity)) <= h.ZP.blockTestDistance) {
            e.blockTestDistance = e.camera.zoomDistance + h.ZP.blockTestDistance;
            return void e.updateBlockTargets();
          }
          e.blockTestDistance = 0;
        };
        var r = document.getElementById("noa-container");
        var i = null;
        var n = null;
        var s = false;
        var a = function (r) {
          n = Date.now();
          if (s = function (e, t) {
            for (var r in E) {
              if (E[r](e, t)) {
                return true;
              }
            }
            return false;
          }(r.targetTouches[0].clientX, r.targetTouches[0].clientY)) {
            e.actionOrigin = null;
            return void (e.actionDirection = null);
          }
          t(r.targetTouches[0].clientX, r.targetTouches[0].clientY);
          if (e.targetedBlock) {
            var a = e.targetedBlock.position.join("|");
            i = setTimeout(function () {
              if (e.targetedBlock) {
                var t = e.targetedBlock.position.join("|");
                if (a === t) {
                  (0, o.Xi)(g.Vz.ingameClick, {
                    type: v.j.TouchDownLong,
                    doubleClick: (0, o.QY)()
                  }, true);
                  e.ents.getHeldItem(e.playerEntity).touchDownLong();
                }
                i = null;
              }
            }, 300);
          }
        };
        var u = function (e) {
          if (!s) {
            t(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
          }
        };
        var l = function (r) {
          if (s) {
            s = false;
          } else {
            t(r.changedTouches[0].clientX, r.changedTouches[0].clientY);
            if (Date.now() - n < 200) {
              (0, o.Xi)(g.Vz.ingameClick, {
                type: v.j.TouchShort,
                doubleClick: (0, o.QY)()
              }, true);
              e.ents.getHeldItem(e.playerEntity).touchShort();
            }
            e.ents.getHeldItem(e.playerEntity).upFirePrimary();
            e.actionOrigin = null;
            e.actionDirection = null;
            clearTimeout(i);
          }
        };
        r.addEventListener("touchstart", a, {
          passive: true
        });
        r.addEventListener("touchmove", u, {
          passive: true
        });
        r.addEventListener("touchend", l, {
          passive: true
        });
        return function () {
          r.removeEventListener("touchstart", a);
          r.removeEventListener("touchmove", u);
          r.removeEventListener("touchend", l);
          clearTimeout(i);
        };
      }, [e]);
      return null;
    }
    function A() {
      var e = (0, n.useRef)(false);
      var t = (0, n.useRef)(false);
      var r = (0, n.useRef)(0);
      var i = (0, d.GG)();
      var s = function () {
        var r = (0, o.Zx)();
        r.entities.getMoveState(r.playerEntity).crouching = e.current || t.current;
        T();
        i();
      };
      var a = e.current || t.current;
      return (0, _.jsx)("div", {
        className: "TouchCrouchBackground",
        children: (0, _.jsx)("div", {
          className: p()("TouchCrouch", {
            TouchCrouchDown: a
          }),
          children: (0, _.jsx)("i", {
            className: "fas fa-angle-down",
            onPointerDown: function () {
              e.current = true;
              if (t.current) {
                t.current = false;
              } else if (Date.now() - r.current < 400) {
                t.current = true;
              }
              r.current = Date.now();
              s();
            },
            onPointerUp: function () {
              e.current = false;
              s();
            }
          })
        })
      });
    }
    function S() {
      return (0, _.jsx)("div", {
        className: "JumpCircle TouchButton",
        onTouchStart: function () {
          (0, o.Zx)().ents.getMoveState((0, o.Zx)().playerEntity).jumping = true;
        },
        onTouchEnd: function () {
          (0, o.Zx)().ents.getMoveState((0, o.Zx)().playerEntity).jumping = false;
        },
        children: (0, _.jsx)("i", {
          className: "fas fa-arrow-up JumpIcon"
        })
      });
    }
    function M() {
      var e = (0, o.Zx)();
      var t = (0, n.useRef)(null);
      var r = (0, n.useState)(false);
      var s = (0, i.Z)(r, 2);
      var u = s[0];
      var l = s[1];
      (0, n.useEffect)(function () {
        var r = a().create({
          zone: t.current,
          mode: u ? "dynamic" : "static",
          color: "white",
          dynamicPage: true,
          fadeTime: 1,
          multitouch: true,
          maxNumberOfNipples: 1,
          restOpacity: 1,
          position: {
            bottom: "50vh",
            left: "20vw"
          }
        });
        r.on("move", function (t, r) {
          var i = e.ents;
          i.getState(e.playerEntity, i.names.receivesInputs).joystickHeading = r.angle.radian;
          x = r.distance / 50;
          T();
        });
        r.on("end", function (e, t) {
          x = 0;
          T();
          l(true);
        });
        return function () {
          r.destroy();
        };
      }, [u]);
      return (0, _.jsx)(_.Fragment, {
        children: (0, _.jsx)("div", {
          id: "NippleZone",
          className: "NippleZone",
          ref: t
        })
      });
    }
    var C;
    var x = 0;
    function T() {
      var e = (0, o.Zx)();
      var t = e.ents.getMoveState(e.playerEntity);
      var r = e.serverSettings.runningSpeed;
      var i = e.ents.getMovement(e.playerEntity);
      if (t.crouching && !i.shouldIgnoreCrouchingSpeedReduction() || !e.ents.getState(e.playerEntity, "receivesInputs").canRunCombinator.getTotalBooleanVal()) {
        r = e.serverSettings.crouchingSpeed;
      }
      t.speed = x * r;
      t.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", e.serverSettings.speedMultiplier);
    }
    function P() {
      var e;
      if (!((e = C) === null || e === undefined)) {
        e();
      }
    }
    function I() {
      var e;
      var t;
      var r;
      var s = (e = (0, o.Zx)().ents.getHeldItemState((0, o.Zx)().playerEntity)) === null || e === undefined ? undefined : e.heldItem;
      var a = (0, d.$i)("touchscreenActionButton");
      var u = s !== null && s !== undefined && s.gunTypeObj ? [{
        icon: "arrows-rotate"
      }] : a;
      var l = null;
      if (s !== null && s !== undefined && s.gunTypeObj || s !== null && s !== undefined && (t = s.typeObj) !== null && t !== undefined && t.holdAsAiming) {
        l = [{
          icon: "Arrow"
        }];
      } else if ((s === null || s === undefined || (r = s.typeObj) === null || r === undefined ? undefined : r.type) === "Chargeable") {
        l = [{
          icon: s.typeObj.name
        }];
      }
      var c = s !== null && s !== undefined && s.gunTypeObj ? [{
        icon: "crosshairs"
      }] : null;
      var h = (0, n.useReducer)(function (e) {
        return e + 1;
      }, 0);
      var f = (0, i.Z)(h, 2);
      f[0];
      var p = f[1];
      C = p;
      var m = [{
        bottom: 6,
        right: 15,
        size: 5
      }, {
        bottom: 12,
        right: 11,
        size: 8
      }, {
        bottom: 15,
        right: 5,
        size: 5
      }];
      var v = [{
        onPointerDown: function () {
          (0, o.Xi)(g.Vz.touchscreenActionButtonPress, true);
          if (s !== null && s !== undefined && s.gunTypeObj) {
            s.reload();
          }
        },
        onPointerUp: function () {
          (0, o.Xi)(g.Vz.touchscreenActionButtonPress, false);
        }
      }, {
        onPointerDown: function () {
          if (!(s === null || s === undefined)) {
            s.touchDownSecondary();
          }
        },
        onPointerUp: function () {
          if (!(s === null || s === undefined)) {
            s.touchUpSecondary();
          }
        }
      }, {
        onPointerDown: function () {
          if (!(s === null || s === undefined)) {
            s.touchDownTertiary();
          }
        },
        onPointerUp: function () {
          if (!(s === null || s === undefined)) {
            s.touchUpTertiary();
          }
        }
      }];
      return (0, _.jsx)(_.Fragment, {
        children: [u, l, c].map(function (e, t) {
          if (!e) {
            return null;
          }
          var r = m[t];
          return (0, _.jsx)(R, {
            icon: e,
            bottom: r.bottom,
            right: r.right,
            size: r.size,
            pointerDown: v[t].onPointerDown,
            pointerUp: v[t].onPointerUp
          }, JSON.stringify(e));
        })
      });
    }
    var E = {};
    function R(e) {
      var t = e.icon;
      var r = e.bottom;
      var o = e.right;
      var s = e.size;
      var a = e.pointerDown;
      var u = e.pointerUp;
      var l = JSON.stringify(t);
      var c = (0, n.useRef)(false);
      var h = (0, n.useRef)({
        centreX: 0,
        centreY: 0,
        radius: 0
      });
      var f = (0, m.iP)();
      var p = (0, i.Z)(f, 2);
      var g = p[0];
      var v = p[1];
      (0, n.useEffect)(function () {
        var e = document.getElementById(l).getBoundingClientRect();
        var t = e.left + e.width / 2;
        var r = e.top + e.height / 2;
        var i = e.width / 2;
        h.current = {
          centreX: t,
          centreY: r,
          radius: i
        };
      }, [g, v]);
      var y = function (e) {
        if (A(e.changedTouches[0].clientX, e.changedTouches[0].clientY)) {
          c.current = true;
          a();
        }
      };
      var b = function () {
        if (c.current) {
          c.current = false;
          u();
        }
      };
      var A = function (e, t) {
        return Math.hypot(e - h.current.centreX, t - h.current.centreY) < h.current.radius;
      };
      (0, n.useEffect)(function () {
        E[l] = A;
        return function () {
          delete E[l];
        };
      }, [l]);
      (0, n.useEffect)(function () {
        var e = document.getElementById("noa-container");
        e.addEventListener("touchstart", y, {
          passive: true
        });
        e.addEventListener("touchend", b, {
          passive: true
        });
        return function () {
          e.removeEventListener("touchstart", y);
          e.removeEventListener("touchend", b);
        };
      });
      return (0, _.jsx)("div", {
        className: "TouchArbitraryActionButton TouchButton",
        id: l,
        style: {
          bottom: "".concat(r, "rem"),
          right: "".concat(o, "rem"),
          width: "".concat(s, "rem"),
          height: "".concat(s, "rem"),
          fontSize: "".concat(s * 2 / 5, "rem")
        },
        children: (0, _.jsx)(d.fD, {
          text: t
        })
      });
    }
  },
  14848: function (e, t, r) {
    "use strict";

    r.d(t, {
      Al: function () {
        return o;
      },
      Ng: function () {
        return s;
      },
      zz: function () {
        return n;
      }
    });
    var i = r(85774);
    var n = {
      Wood: 0,
      Iron: 1,
      Gold: 2,
      Diamond: 3
    };
    var o = (0, i.hu)(Object.keys(n).length * 2 * 64) / 64;
    var s = r(74304);
  },
  43971: function (e, t, r) {
    "use strict";

    r.d(t, {
      $: function () {
        return c;
      },
      _h: function () {
        return l;
      },
      uH: function () {
        return n;
      }
    });
    var i = r(85774);
    var n = {
      head: {
        Bob: {
          texture: "bob_head",
          previewTex: h("bob_head_preview"),
          skinColour: [220, 157, 118]
        },
        Emma: {
          texture: "emma_head",
          previewTex: h("emma_head_preview"),
          skinColour: [239, 216, 177]
        },
        Leo: {
          texture: "leo_head",
          previewTex: h("leo_head_preview"),
          skinColour: [255, 224, 177]
        },
        Isabel: {
          texture: "isabel_head",
          previewTex: h("isabel_head_preview"),
          skinColour: [220, 157, 118]
        },
        Sanjay: {
          texture: "sanjay_head",
          previewTex: h("sanjay_head_preview"),
          skinColour: [181, 135, 72]
        },
        Sara: {
          texture: "sara_head",
          previewTex: h("sara_head_preview"),
          skinColour: [140, 112, 91]
        }
      },
      body: {
        Bob: {
          texture: "bob_body",
          previewTex: h("bob_body_preview")
        },
        Emma: {
          texture: "emma_body",
          previewTex: h("emma_body_preview")
        },
        "Light Blue Polo": {
          texture: "light_blue_polo",
          previewTex: h("light_blue_polo_preview")
        },
        "Green Top With Rolled Up Sleeves": {
          texture: "green_top_with_rolled_up_sleeves",
          previewTex: h("green_top_with_rolled_up_sleeves_preview")
        },
        Khakis: {
          texture: "khakis_body",
          previewTex: h("khakis_body_preview")
        },
        "Light Blue Crop Top": {
          texture: "light_blue_crop_top",
          previewTex: h("light_blue_crop_top_preview")
        }
      },
      legs: {
        Bob: {
          texture: "bob_legs",
          previewTex: h("bob_legs_preview")
        },
        Emma: {
          texture: "emma_legs",
          previewTex: h("emma_legs_preview")
        },
        "Navy Blue Jeans": {
          texture: "navy_blue_jeans",
          previewTex: h("navy_blue_jeans_preview")
        },
        "Tan Shorts": {
          texture: "tan_shorts",
          previewTex: h("tan_shorts_preview")
        },
        Khakis: {
          texture: "khakis_legs",
          previewTex: h("khakis_legs_preview")
        },
        "Navy Blue Denim Shorts": {
          texture: "navy_blue_denim_shorts",
          previewTex: h("navy_blue_denim_shorts_preview")
        }
      }
    };
    var o = 0;
    for (var s in n) {
      var a = n[s];
      for (var u in a) {
        a[u].atlasIdx = o++;
      }
    }
    var l = (0, i.hu)(o * 64) / 64;
    var c = h("componentAtlas");
    function h(e) {
      return r(86940)("./".concat(e, ".png"));
    }
  },
  37928: function (e, t, r) {
    "use strict";

    r.d(t, {
      Fu: function () {
        return v;
      },
      J5: function () {
        return _;
      },
      XT: function () {
        return m;
      },
      cd: function () {
        return g;
      }
    });
    var i = r(60136);
    var n = r(43668);
    var o = r(93433);
    var s = r(37762);
    var a = r(15671);
    var u = r(43144);
    var l = r(96558);
    var c = r(80105);
    var h = r(43971);
    var d = r(9488);
    var f = r(14848);
    var p = r(23886);
    var m = {
      "LegLeft|Armour": 1,
      "LegRight|Armour": 1,
      "LowerBody|Armour": 1,
      "GauntletLeft|Armour": 0,
      "GauntletRight|Armour": 0,
      "Body|Armour": 0,
      "Helmet|Armour": 0,
      "BootsLeft|Armour": 0,
      "BootsRight|Armour": 0
    };
    var g = function () {
      function e(t, r) {
        (0, a.Z)(this, e);
        this.bloxd = undefined;
        this.playerCharMeshNames = [];
        this.bloxd = t;
        var i;
        var n = r.meshes.slice(1);
        var o = (0, s.Z)(n);
        try {
          for (o.s(); !(i = o.n()).done;) {
            var u = i.value;
            if (m[u.name] === undefined) {
              this.playerCharMeshNames.push(u.name);
            }
          }
        } catch (v) {
          o.e(v);
        } finally {
          o.f();
        }
        var l;
        var f = (0, s.Z)(n);
        try {
          for (f.s(); !(l = f.n()).done;) {
            var p = l.value;
            if (m[p.name] !== undefined) {
              p.registerInstancedBuffer("aAtlasIdx1", 1);
              p.registerInstancedBuffer("aHueColour", 4);
              p.instancedBuffers.aAtlasIdx1 = 0;
              p.instancedBuffers.aHueColour = new d.HE(0, 0, 0, 0);
            } else {
              p.registerInstancedBuffer("aAtlasIdx1", 1);
              p.registerInstancedBuffer("aAtlasIdx2", 1);
              p.registerInstancedBuffer("aAtlasIdx3", 1);
              p.registerInstancedBuffer("aSkinColour", 3);
              p.registerInstancedBuffer("aOverlayColour", 4);
              p.instancedBuffers.aAtlasIdx1 = h.uH.head.Bob.atlasIdx;
              p.instancedBuffers.aAtlasIdx2 = h.uH.body.Bob.atlasIdx;
              p.instancedBuffers.aAtlasIdx3 = h.uH.legs.Bob.atlasIdx;
              var g = h.uH.head.Bob.skinColour;
              p.instancedBuffers.aSkinColour = new c.P(g[0] / 255, g[1] / 255, g[2] / 255);
              p.instancedBuffers.aOverlayColour = new d.HE(0, 0, 0, 0);
            }
          }
        } catch (v) {
          f.e(v);
        } finally {
          f.f();
        }
      }
      (0, u.Z)(e, [{
        key: "updateInstanceCustomisation",
        value: function (e, t, r) {
          var i;
          var n = this.getPlayerInstanceChildren(e);
          var o = (0, s.Z)(n);
          try {
            for (o.s(); !(i = o.n()).done;) {
              var a = i.value;
              if (t === "head") {
                a.instancedBuffers.aAtlasIdx1 = h.uH.head[r].atlasIdx;
                var u = h.uH.head[r].skinColour;
                a.instancedBuffers.aSkinColour = new c.P(u[0] / 255, u[1] / 255, u[2] / 255);
              } else if (t === "body") {
                a.instancedBuffers.aAtlasIdx2 = h.uH.body[r].atlasIdx;
              } else if (t === "legs") {
                a.instancedBuffers.aAtlasIdx3 = h.uH.legs[r].atlasIdx;
              }
            }
          } catch (l) {
            o.e(l);
          } finally {
            o.f();
          }
        }
      }, {
        key: "updateInstanceOverlayColour",
        value: function (e, t) {
          var r;
          var i = this.getPlayerInstanceChildren(e);
          var n = (0, s.Z)(i);
          try {
            for (n.s(); !(r = n.n()).done;) {
              r.value.instancedBuffers.aOverlayColour = t;
            }
          } catch (o) {
            n.e(o);
          } finally {
            n.f();
          }
        }
      }, {
        key: "updateInstanceArmour",
        value: function (e, t, r, i) {
          var n = [];
          if (t === "Helmet") {
            n.push("Helmet|Armour");
          } else if (t === "Chestplate") {
            n.push("Body|Armour");
          } else if (t === "Gauntlets") {
            n.push("GauntletLeft|Armour");
            n.push("GauntletRight|Armour");
          } else if (t === "Leggings") {
            n.push("LegLeft|Armour");
            n.push("LegRight|Armour");
            n.push("LowerBody|Armour");
          } else if (t === "Boots") {
            n.push("BootsLeft|Armour");
            n.push("BootsRight|Armour");
          }
          for (var s = this.bloxd.noa.ents.getPlayerMeshState(e).namedNodes, a = 0, u = n; a < u.length; a++) {
            var l = u[a];
            var h = s[l];
            if (r === null) {
              h.setEnabled(false);
            } else {
              h.instancedBuffers.aAtlasIdx1 = f.zz[r] * 2 + m[l];
              h.instancedBuffers.aHueColour = i ? p.Vt.apply(undefined, (0, o.Z)(i).concat([1])) : new c.Lt(0, 0, 0, 0);
              h.setEnabled(true);
            }
          }
        }
      }, {
        key: "getPlayerInstanceChildren",
        value: function (e) {
          var t = this;
          var r = e.getChildMeshes(false).filter(function (e) {
            return t.playerCharMeshNames.includes(e.name);
          });
          if (r.length !== 6) {
            console.error("getPlayerInstanceChildren num instance descendance failed.");
            console.log("root instance that failed:", e);
          }
          return r;
        }
      }]);
      return e;
    }();
    var v = function (e) {
      (0, i.Z)(r, e);
      var t = (0, n.Z)(r);
      function r(e) {
        var i;
        (0, a.Z)(this, r);
        var n = {
          ATLAS_TEX_NUM: "".concat(h._h.toString(), ".0")
        };
        e.customShaderNameResolve = function (e, t, r, n, o, s) {
          if (s) {
            i.getAttributes(s);
          }
          return e;
        };
        (i = t.call(this, e, "Player", 200, n))._enable(true);
        return i;
      }
      (0, u.Z)(r, [{
        key: "getClassName",
        value: function () {
          return "PlayerMaterialPlugin";
        }
      }, {
        key: "getAttributes",
        value: function (e) {
          if (!e.includes("aAtlasIdx1")) {
            e.push("aAtlasIdx1");
            e.push("aAtlasIdx2");
            e.push("aAtlasIdx3");
            e.push("aSkinColour");
            e.push("aOverlayColour");
          }
        }
      }, {
        key: "getCustomCode",
        value: function (e) {
          if (e === "vertex") {
            return {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute highp float aAtlasIdx1;\n                attribute highp float aAtlasIdx2;\n                attribute highp float aAtlasIdx3;\n                attribute lowp vec3 aSkinColour;\n                \n                attribute lowp vec4 aOverlayColour;\n                                \n                // vMainUV1 is inbuilt into the babylon shader\n                varying highp vec2 vMainUV2;\n                varying highp vec2 vMainUV3;\n                varying lowp vec3 vSkinColour;\n                \n                varying lowp vec4 vOverlayColour;\n            ",
              CUSTOM_VERTEX_MAIN_END: "\n\t\t\t\tvMainUV2 = vec2((vMainUV1.x+aAtlasIdx2)/ATLAS_TEX_NUM, vMainUV1.y);\n\t\t\t\tvMainUV3 = vec2((vMainUV1.x+aAtlasIdx3)/ATLAS_TEX_NUM, vMainUV1.y);\n\t\t\t\t\n\t\t\t\tvMainUV1 = vec2((vMainUV1.x+aAtlasIdx1)/ATLAS_TEX_NUM, vMainUV1.y);\n\t\t\t\t\n\t\t\t\tvSkinColour = aSkinColour;\n\t\t\t\tvOverlayColour = aOverlayColour;\n\t\t\t"
            };
          } else if (e === "fragment") {
            return {
              CUSTOM_FRAGMENT_DEFINITIONS: "\n                varying highp vec2 vMainUV2;\n                varying highp vec2 vMainUV3;\n                varying lowp vec3 vSkinColour;\n                \n                varying lowp vec4 vOverlayColour;\n            ",
              "!baseColor\\=texture2D\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);": "\n\t\t\t\t// Apply selected skins\n\t\t\t\tvec4 col1 = texture2D(diffuseSampler, vMainUV1);\n\t\t\t\tvec4 col2 = texture2D(diffuseSampler, vMainUV2);\n\t\t\t\tvec4 col3 = texture2D(diffuseSampler, vMainUV3);\n\t\t\t\tbaseColor = col1+col2*(1.0-col1.a)+col3*(max(1.0-col1.a-col2.a, 0.0))+vec4(vSkinColour, 1)*(max(1.0-col1.a-col2.a-col3.a, 0.0));\n\t\t\t\t\n\t\t\t\t// Apply overlay\n\t\t\t\tbaseColor = baseColor*(1.0-vOverlayColour.a) + vOverlayColour*vOverlayColour.a;\n\t\t\t"
            };
          } else {
            return null;
          }
        }
      }]);
      return r;
    }(l.n);
    var _ = function (e) {
      (0, i.Z)(r, e);
      var t = (0, n.Z)(r);
      function r(e, i) {
        var n;
        (0, a.Z)(this, r);
        var o = {
          ATLAS_TEX_NUM: i
        };
        e.customShaderNameResolve = function (e, t, r, i, o, s) {
          if (s) {
            n.getAttributes(s);
          }
          return e;
        };
        (n = t.call(this, e, "Armour", 200, o))._enable(true);
        return n;
      }
      (0, u.Z)(r, [{
        key: "getClassName",
        value: function () {
          return "ArmourMaterialPlugin";
        }
      }, {
        key: "getAttributes",
        value: function (e) {
          if (!e.includes("aAtlasIdx1")) {
            e.push("aAtlasIdx1");
            e.push("aHueColour");
          }
        }
      }, {
        key: "getCustomCode",
        value: function (e) {
          if (e === "vertex") {
            return {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute highp float aAtlasIdx1;\n                attribute lowp vec4 aHueColour;\n                \n                varying lowp vec4 vHueColour;\n            ",
              CUSTOM_VERTEX_MAIN_END: "\n                // vMainUV1 is inbuilt into the babylon shader\n\t\t\t\tvMainUV1 = vec2((vMainUV1.x+aAtlasIdx1)/ATLAS_TEX_NUM, vMainUV1.y);\n\t\t\t\tvHueColour = aHueColour;\n\t\t\t"
            };
          } else if (e === "fragment") {
            return {
              CUSTOM_FRAGMENT_DEFINITIONS: "\n                varying lowp vec4 vHueColour;\n            ",
              "!baseColor\\=texture2D\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);": "\n\t\t\t\tvec4 col1 = texture2D(diffuseSampler, vMainUV1);\n\t\t\t\tbaseColor = col1;\n\t\t\t\t\n\t\t\t\tbaseColor = baseColor*(1.0-vHueColour.a) + vec4(baseColor.rgb*vHueColour.rgb, baseColor.a)*vHueColour.a;\n\t\t\t"
            };
          } else {
            return null;
          }
        }
      }]);
      return r;
    }(l.n);
  },
  23886: function (e, t, r) {
    "use strict";

    r.d(t, {
      $t: function () {
        return s;
      },
      Vt: function () {
        return o;
      },
      W7: function () {
        return l;
      },
      Y0: function () {
        return a;
      }
    });
    var i = r(37762);
    var n = r(9488);
    function o(e, t, r, i) {
      return new n.HE(e / 255, t / 255, r / 255, i);
    }
    function s(e, t) {
      var r = e.worldOriginOffset;
      t.worldOffset.x = -r[0];
      t.worldOffset.y = -r[1];
      t.worldOffset.z = -r[2];
    }
    function a(e, t) {
      var r = e.maxEmitBox.x - e.minEmitBox.x;
      e.minEmitBox.x = t[0];
      e.minEmitBox.y = t[1];
      e.minEmitBox.z = t[2];
      e.maxEmitBox.x = t[0] + r;
      e.maxEmitBox.y = t[1] + r;
      e.maxEmitBox.z = t[2] + r;
    }
    var u = ["vapemenubutton6"];
    var l = false;
    try {
      for (var c = 0, h = ["vape.gui.openedcombat", "vape.gui.guicolor", "vape.gui.openedfriends", "vape.gui.combat"]; c < h.length; c++) {
        var d = h[c];
        if (localStorage.getItem(d) !== null) {
          l = true;
        }
      }
    } catch (g) {}
    setTimeout(function () {
      var e;
      var t = (0, i.Z)(u);
      try {
        for (t.s(); !(e = t.n()).done;) {
          var r = e.value;
          if (document.getElementById(r)) {
            l = true;
          }
        }
      } catch (n) {
        t.e(n);
      } finally {
        t.f();
      }
    }, 2000);
    for (var f = 0, p = Array.from(document.body.children); f < p.length; f++) {
      var m = p[f];
      if (!(m.style.zIndex !== "999" && m.style.zIndex !== "19999")) {
        l = true;
      }
    }
  },
  89117: function (e, t, r) {
    "use strict";

    r.d(t, {
      JJ: function () {
        return Y;
      },
      Ku: function () {
        return D;
      },
      RW: function () {
        return L;
      },
      k2: function () {
        return H;
      },
      l3: function () {
        return w;
      },
      tM: function () {
        return V;
      },
      tq: function () {
        return k;
      }
    });
    var i = r(93433);
    var n = r(60136);
    var o = r(43668);
    var s = r(37762);
    var a = r(15671);
    var u = r(43144);
    var l = r(87683);
    var c = r(70937);
    var h = r(65847);
    var d = r(64400);
    var f = r(9488);
    var p = r(85774);
    var m = r(92643);
    var g = r(67269);
    var v = r(77129);
    var _ = r(49620);
    var y = r(47077);
    var b = r.n(y);
    var A = r(80105);
    var S = r(52126);
    var M = r(38017);
    var C = r(37928);
    var x = r(23886);
    var T = r(66645);
    var P = r(79520);
    var I = r(54951);
    var E = r(735);
    var R = r(80427);
    function w(e, t) {
      k((0, p.rL)().getBlock(t[0], t[1], t[2]), true);
      (0, p.rL)().setBlock(t[0], t[1], t[2], 0);
      (0, p.Xi)(R.Vz.changeBlock, {
        toBlock: 0,
        pos: b().copy([], t),
        checker: E.W
      }, true);
    }
    function k(e, t) {
      var r = (0, T.r_)((0, P.sb)(e, t));
      (0, P.GW)().play(r, 1);
    }
    var D = function (e, t, r, i) {
      var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var o = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
      var s = H[i].name;
      e.ents.add([r[0], r[1], r[2]], S._G.droppedBlockSize, S._G.droppedBlockSize, null, null, false, false, t);
      e.ents.addComponent(t, "autoRemoveMesh");
      e.ents.addComponent(t, "hidingMeshManager", {
        addMeshComponent: function () {
          var r = H[i].getDroppedMesh();
          e.entities.addComponent(t, "mesh", {
            mesh: r,
            offset: b().fromValues(0, H[s].droppedMeshOffset + Math.random() * 0.05, 0),
            shouldAddMeshToScene: false
          });
          e.entities.addComponent(t, "autoRotate");
        },
        removeMeshComponent: function () {
          e.entities.removeComponent(t, "mesh");
          e.entities.removeComponent(t, "autoRotate");
        },
        addShadow: true,
        shadowSize: S._G.droppedBlockSize
      });
      e.ents.addComponent(t, "itemState", {
        name: s,
        typeObj: H[s],
        amount: n,
        cantPickUp: o
      });
      e.ents.addComponent(t, "smoothToServerPos", {
        serverPosition: r
      });
    };
    var B = function () {
      function e(t, r) {
        var i;
        var n;
        var o;
        var s;
        (0, a.Z)(this, e);
        this.bakeInScaling = undefined;
        this.name = undefined;
        this.id = undefined;
        this.scene = undefined;
        this.weight = undefined;
        this.heldItemScale = undefined;
        this.stackable = undefined;
        this.texture = undefined;
        this.itemTexture = undefined;
        this.solid = undefined;
        this.droppedMeshOffset = undefined;
        this.droppedMeshScale = undefined;
        this._sourceMesh = undefined;
        this._meshParents = undefined;
        this._meshCounter = undefined;
        this.onLoadMesh = undefined;
        this.modelFullUrl = undefined;
        this.displayName = undefined;
        this.isCustom = false;
        this.meta = undefined;
        this.type = "Item";
        this.chargeStages = undefined;
        this.requiresArrow = undefined;
        this.chargeTime = undefined;
        this.secondaryDamage = undefined;
        this.holdAsAiming = undefined;
        this.eatable = undefined;
        this.eatSound = undefined;
        this.afterEatenItem = undefined;
        var u = (0, p.rL)().registry.metadatas[t];
        for (var l in u) {
          this[l] = u[l];
        }
        this.bakeInScaling = 1;
        this.name = t;
        this.scene = r;
        this.weight = (i = u.weight) !== null && i !== undefined ? i : 1;
        this.heldItemScale = (n = u.heldItemScale) !== null && n !== undefined ? n : 1;
        this.stackable = (o = u.stackable) === null || o === undefined || o;
        this.texture = u.texture;
        this.itemTexture = u.itemTexture;
        this.solid = (s = u.solid) === null || s === undefined || s;
        this.droppedMeshOffset = S._G.droppedBlockSize;
        this.droppedMeshScale = S._G.droppedBlockSize;
        this._sourceMesh = null;
        this._meshParents = [];
        this._meshCounter = 0;
        this.onLoadMesh = null;
        this.modelFullUrl = this.isCustom ? "".concat(S._G.staticUrl, "/models/").concat((0, I.$E)(), "/").concat(t.replaceAll("|", ""), ".glb") : "".concat(S._G.staticUrl, "/models/").concat(t.replaceAll("|", ""), ".glb");
        this._setupListeners();
      }
      (0, u.Z)(e, [{
        key: "_setupListeners",
        value: function () {
          var e = this;
          this.displayName = this.name;
          p.f$.subscribe("serverOption|".concat(this.name, "DisplayName"), function (t) {
            e.displayName = t || e.name;
          });
          (0, p.ZC)(function () {
            e.displayName = e.name;
          });
        }
      }, {
        key: "getDroppedMesh",
        value: function () {
          return this.getMesh(this.droppedMeshScale);
        }
      }, {
        key: "getHeldMesh",
        value: function () {
          return this.getMesh();
        }
      }, {
        key: "getMesh",
        value: function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          if (this._sourceMesh) {
            var r = new v.Y("".concat(this.name, "AbstractMeshParent").concat(this._meshCounter++), this.scene);
            r.scaling = new A.P(e, e, e);
            this._attachNewMeshInstanceToParent(r, t);
            return r;
          }
          if (this._meshParents.length === 0) {
            this._loadMeshFirstTime();
          }
          var i = new v.Y("earlyLoaded".concat(this.name, "AbstractMeshParent").concat(this._meshParents.length), this.scene);
          i.scaling = new A.P(e, e, e);
          this._meshParents.push({
            parent: i,
            onFullyLoaded: t
          });
          this.preloadMetaItems();
          return i;
        }
      }, {
        key: "_loadMeshFirstTime",
        value: function () {
          var e = this;
          g.n.ImportMesh("", this.modelFullUrl, null, this.scene, function (t) {
            try {
              var r;
              (t = t.filter(function (e) {
                return e.subMeshes && e.subMeshes.length > 0;
              })).forEach(function (e) {
                e.overrideMaterialSideOrientation = null;
              });
              var i = h.Kj.MergeMeshes(t, true, false, null, false, true);
              i.name = "".concat(e.name, "GlbModel");
              i.isPickable = false;
              i.scaling = new A.P(e.bakeInScaling, e.bakeInScaling, e.bakeInScaling);
              i.bakeCurrentTransformIntoVertices(false);
              var n;
              var o = (0, s.Z)(i.material.subMaterials);
              try {
                for (o.s(); !(n = o.n()).done;) {
                  n.value.unlit = true;
                }
              } catch (f) {
                o.e(f);
              } finally {
                o.f();
              }
              if (!((r = e.onLoadMesh) === null || r === undefined)) {
                r.call(e, i);
              }
              i.material.freeze();
              e._sourceMesh = i;
              i.setEnabled(false);
              var a;
              var u = (0, s.Z)(e._meshParents);
              try {
                for (u.s(); !(a = u.n()).done;) {
                  var l = a.value;
                  var c = l.parent;
                  var d = l.onFullyLoaded;
                  if (!c.isDisposed()) {
                    e._attachNewMeshInstanceToParent(c, d);
                  }
                }
              } catch (f) {
                u.e(f);
              } finally {
                u.f();
              }
              e._meshParents = [];
            } catch (p) {
              console.error("Error loading mesh", e.name, "\n", p, p.stack);
              throw p;
            }
          });
        }
      }, {
        key: "_attachNewMeshInstanceToParent",
        value: function (e, t) {
          var r = this._sourceMesh.createInstance("".concat(this.name, "Model").concat(this._meshCounter++));
          r.parent = e;
          (0, p.Zx)().rendering.addMeshToScene(r, false);
          r.position.x = 0;
          r.position.y = 0;
          r.position.z = 0;
          if (!(t === null || t === undefined)) {
            t(e);
          }
        }
      }, {
        key: "preloadMetaItems",
        value: function () {
          for (var e in (0, p.S7)(m.fe)) {
            if ((0, p.rL)().getMetaInfo(e).rootId === this.id && e !== this.name) {
              H[e].getMesh().dispose();
            }
          }
        }
      }]);
      return e;
    }();
    var O = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, i) {
        var n;
        (0, a.Z)(this, r);
        (n = t.call(this, e, i)).harvestType = undefined;
        n.ttb = undefined;
        n.name = e;
        var o = (0, p.rL)().registry.metadatas[e];
        n.ttb = o.ttb;
        n.type = "Block";
        n._setupBlockListeners();
        return n;
      }
      (0, u.Z)(r, [{
        key: "_setupBlockListeners",
        value: function () {
          var e = this;
          var t = this.ttb;
          var r = this.ttb;
          var i = false;
          var n = 1;
          p.f$.subscribe("serverOption|creative", function (t) {
            if (t) {
              i = true;
              e.ttb = Math.min(150, r * n);
            } else {
              i = false;
              e.ttb = r * n;
            }
          });
          p.f$.subscribe("serverOption|".concat(this.name, "Ttb"), function (o) {
            r = o || t;
            if (!i) {
              e.ttb = r * n;
            }
          });
          p.f$.subscribe("serverOption|ttbMultiplier", function (t) {
            n = t;
            if (!i) {
              e.ttb = r * n;
            }
          });
          (0, p.ZC)(function () {
            e.ttb = t;
            i = false;
            r = t;
            n = 1;
          });
        }
      }]);
      return r;
    }(B);
    var F = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, i) {
        var n;
        (0, a.Z)(this, r);
        (n = t.call(this, e, i))._sourceMesh = null;
        n.cuboidHeight = 1;
        n.harvestLevel = undefined;
        n.meshMaterial = undefined;
        n.transTex = undefined;
        n.sprite = undefined;
        n.texturePerSide = undefined;
        n.unlitStandaloneMesh = undefined;
        var o = M.default[e];
        n.harvestLevel = o.harvestLevel;
        n.transTex = o.transTex;
        n.sprite = o.sprite;
        n.texturePerSide = o.texturePerSide;
        n.unlitStandaloneMesh = o.unlitStandaloneMesh;
        var s;
        var u = n.texture;
        if (u) {
          n.meshMaterial = new l.K("".concat(e, "BlockMaterial"), i);
          if (typeof u === "string") {
            n.meshMaterial.diffuseTexture = new c.x(u, i, null, null, c.x.NEAREST_SAMPLINGMODE);
            n.meshMaterial.diffuseTexture.wrapU = c.x.CLAMP_ADDRESSMODE;
            n.meshMaterial.diffuseTexture.wrapV = c.x.CLAMP_ADDRESSMODE;
            if (n.transTex) {
              n.meshMaterial.diffuseTexture.hasAlpha = true;
            }
          } else if (typeof u[0] === "number") {
            n.meshMaterial.diffuseColor = new f.Wo(u[0], u[1], u[2]);
            if (u[3] !== undefined) {
              n.meshMaterial.alpha = u[3] || 0.1;
            }
          } else {
            n.meshMaterial.diffuseTexture = new c.x(n.sprite, i, null, null, c.x.NEAREST_SAMPLINGMODE);
            n.meshMaterial.diffuseTexture.wrapU = c.x.CLAMP_ADDRESSMODE;
            n.meshMaterial.diffuseTexture.wrapV = c.x.CLAMP_ADDRESSMODE;
            if (n.transTex) {
              n.meshMaterial.diffuseTexture.hasAlpha = true;
            }
          }
          n.meshMaterial.specularColor = new f.Wo(0, 0, 0);
          if ((s = n.unlitStandaloneMesh) !== null && s !== undefined && s) {
            n.meshMaterial.emissiveColor = new f.Wo(1, 1, 1);
          }
          n.meshMaterial.freeze();
        }
        n.type = "CubeBlock";
        return n;
      }
      (0, u.Z)(r, [{
        key: "getDroppedMesh",
        value: function () {
          var e = this.getMesh(S._G.droppedBlockSize);
          e.rotation = new A.P(0, Math.PI, Math.PI);
          return e;
        }
      }, {
        key: "getHeldMesh",
        value: function () {
          return this.getMesh(1);
        }
      }, {
        key: "getMesh",
        value: function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          if (!this._sourceMesh) {
            this._sourceMesh = this._makeSourceMesh();
          }
          var r = this._sourceMesh.createInstance("".concat(this.name, "Model").concat(this._meshCounter++));
          (0, p.Zx)().rendering.addMeshToScene(r, false);
          r.position = new A.P(0, 0, 0);
          r.rotation = new A.P(0, 0, 0);
          r.scaling = new A.P(e, e, e);
          if (!(t === null || t === undefined)) {
            t(r);
          }
          return r;
        }
      }, {
        key: "_makeSourceMesh",
        value: function () {
          var e;
          if (this.texturePerSide) {
            if (this.texturePerSide.length !== 6) {
              throw new Error("Must have a texture for each side of block");
            }
            e = [];
            var t = this.texture.length;
            var r = 0.005;
            e.push(new A.Lt((this.texturePerSide[5] + r) / t, 0, (this.texturePerSide[5] + 1 - r) / t, 1));
            e.push(new A.Lt((this.texturePerSide[4] + r) / t, 0, (this.texturePerSide[4] + 1 - r) / t, 1));
            e.push(new A.Lt((this.texturePerSide[1] + r) / t, 0, (this.texturePerSide[1] + 1 - r) / t, 1));
            e.push(new A.Lt((this.texturePerSide[0] + r) / t, 0, (this.texturePerSide[0] + 1 - r) / t, 1));
            e.push(new A.Lt((this.texturePerSide[3] + r) / t, 0, (this.texturePerSide[3] + 1 - r) / t, 1));
            e.push(new A.Lt((this.texturePerSide[2] + r) / t, 0, (this.texturePerSide[2] + 1 - r) / t, 1));
          }
          var i = d.BoxBuilder.CreateBox("".concat(this.name, "Block"), {
            width: 1,
            height: this.cuboidHeight,
            faceUV: e,
            wrap: true
          }, (0, p.Zx)().rendering.getScene());
          i.material = this.meshMaterial;
          i.setEnabled(false);
          i.isPickable = false;
          return i;
        }
      }]);
      return r;
    }(O);
    var L = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, i) {
        var n;
        (0, a.Z)(this, r);
        (n = t.call(this, e, i)).type = "SlabBlock";
        n.cuboidHeight = 0.5;
        return n;
      }
      return (0, u.Z)(r);
    }(F);
    var N = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, i) {
        var n;
        var o;
        (0, a.Z)(this, r);
        (o = t.call(this, e, i)).droppedMeshScale = S._G.droppedBlockSize * 0.8;
        o.droppedMeshOffset = S._G.droppedBlockSize * 1.3;
        o.bakeInScaling = 1 / 4 * ((n = o.heldItemScale) !== null && n !== undefined ? n : 1);
        var s = M.default[e];
        if (s.blockModelItem) {
          console.assert(s.blockModel !== undefined, "If blockModelItem is true blockModel must be defined: Failed for ".concat(e));
          o.modelFullUrl = s.blockModel;
        }
        o.type = "TwoDBlock";
        return o;
      }
      return (0, u.Z)(r);
    }(O);
    var U = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, i) {
        var n;
        var o;
        (0, a.Z)(this, r);
        (o = t.call(this, e, i)).type = undefined;
        o.droppedMeshScale = S._G.droppedBlockSize * 0.8;
        o.droppedMeshOffset = S._G.droppedBlockSize * 1.3;
        o.bakeInScaling = 1 / 4 * ((n = o.heldItemScale) !== null && n !== undefined ? n : 1);
        o.type = "TwoDItem";
        return o;
      }
      return (0, u.Z)(r);
    }(B);
    var G = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, i) {
        var n;
        (0, a.Z)(this, r);
        (n = t.call(this, e, i)).harvests = undefined;
        n.multiplier = undefined;
        n.level = undefined;
        n.type = "TwoDTool";
        n.harvests = m.i[e].harvests;
        n.multiplier = m.i[e].multiplier;
        n.level = m.i[e].level;
        return n;
      }
      return (0, u.Z)(r);
    }(U);
    var W = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r() {
        var e;
        (0, a.Z)(this, r);
        for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) {
          n[o] = arguments[o];
        }
        (e = t.call.apply(t, [this].concat(n))).type = "Chargeable";
        return e;
      }
      return (0, u.Z)(r);
    }(U);
    var j = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, i) {
        var n;
        (0, a.Z)(this, r);
        (n = t.call(this, e, i)).reduction = undefined;
        n.type = "TwoDArmour";
        n.reduction = m.hz[e].reduction;
        return n;
      }
      return (0, u.Z)(r);
    }(U);
    var z = function (e) {
      (0, n.Z)(r, e);
      var t = (0, o.Z)(r);
      function r(e, n) {
        var o;
        (0, a.Z)(this, r);
        (o = t.call(this, e, n)).type = "GrayscaleTwoDArmour";
        var s = "Wood ".concat((0, m.r9)(e));
        o.modelFullUrl = o.isCustom ? "".concat(S._G.staticUrl, "/models/").concat((0, I.$E)(), "/").concat(s, ".glb") : "".concat(S._G.staticUrl, "/models/").concat(s, ".glb");
        o.onLoadMesh = function (t) {
          var r = (0, m.r9)(e);
          var o = (0, m.yE)(e);
          var s = new l.K("GrayscaleArmourItemMat", n);
          new C.J5(s, "1.0");
          s.diffuseTexture = new c.x(m.wM[r], n, null, null, c.x.NEAREST_SAMPLINGMODE);
          s.diffuseTexture.wrapU = c.x.CLAMP_ADDRESSMODE;
          s.diffuseTexture.wrapV = c.x.CLAMP_ADDRESSMODE;
          s.specularColor = new f.Wo(0, 0, 0);
          t.material = s;
          t.registerInstancedBuffer("aHueColour", 4);
          t.registerInstancedBuffer("aAtlasIdx1", 1);
          t.instancedBuffers.aHueColour = x.Vt.apply(undefined, (0, i.Z)(o).concat([1]));
          t.instancedBuffers.aAtlasIdx1 = 0;
          s.freeze();
        };
        return o;
      }
      return (0, u.Z)(r);
    }(j);
    function V() {
      p.EU.itemsClient = H;
      p.EU.blocksClient = q;
      p.EU.nonBlocksClient = Z;
    }
    var H = {};
    var q = {};
    var Z = {};
    var K = {
      Gun: function (e) {
        (0, n.Z)(r, e);
        var t = (0, o.Z)(r);
        function r(e, i) {
          var n;
          var o;
          var s;
          var u;
          (0, a.Z)(this, r);
          (u = t.call(this, e, i)).type = undefined;
          u.gunType = undefined;
          u.fireRate = undefined;
          u.damage = undefined;
          u.shotPelletCount = undefined;
          u.msPerRound = undefined;
          u.msPerRoundTouchScreen = undefined;
          u.reloadTime = undefined;
          u.clipSize = undefined;
          u.reloadBulletsIndividually = undefined;
          u.bulletReloadTime = undefined;
          u.tagSpeedMult = undefined;
          u.subsequentTagSpeedReductionScalar = undefined;
          u.inaccuracyStanding = undefined;
          u.inaccuracyFromShot = undefined;
          u.inaccuracyMovement = undefined;
          u.inaccuracyFromJump = undefined;
          u.yVelocityInaccuracy = undefined;
          u.altInaccuracyStanding = undefined;
          u.altInaccuracyFromShot = undefined;
          u.altInaccuracyMovement = undefined;
          u.altYVelocityInaccuracy = undefined;
          u.altInaccuracyFromJump = undefined;
          u.recoveryRate = undefined;
          u.kickbackFromShot = undefined;
          u.kickbackDecreaseRate = undefined;
          u.autoFireWithMouse = undefined;
          u.spriteTrackname = undefined;
          u.soundPrefix = undefined;
          u.cockTime = undefined;
          u.timeToStartAim = undefined;
          u.timeToStopAim = undefined;
          u.muzzleFlashTexture = undefined;
          u.muzzleFlashOffsetFromGun = undefined;
          u.bulletCasingMesh = undefined;
          u.bulletHitBillboardPlane = undefined;
          u.muzzleFlashPlane = undefined;
          u.movingBulletMesh = undefined;
          u.type = "Gun";
          u.scene = i;
          var p = m.YO[e];
          u.gunType = p.gunType;
          u.fireRate = p.fireRate;
          u.damage = p.damage;
          u.shotPelletCount = p.shotPelletCount;
          u.msPerRound = p.msPerRound;
          u.msPerRoundTouchScreen = p.msPerRoundTouchScreen;
          u.reloadTime = p.reloadTime;
          u.clipSize = p.clipSize;
          u.reloadBulletsIndividually = p.reloadBulletsIndividually;
          u.bulletReloadTime = p.bulletReloadTime;
          u.tagSpeedMult = p.tagSpeedMult;
          u.subsequentTagSpeedReductionScalar = p.subsequentTagSpeedReductionScalar;
          u.inaccuracyStanding = p.inaccuracyStanding;
          u.inaccuracyFromShot = p.inaccuracyFromShot;
          u.inaccuracyMovement = p.inaccuracyMovement;
          u.inaccuracyFromJump = p.inaccuracyFromJump;
          u.yVelocityInaccuracy = p.yVelocityInaccuracy;
          u.altInaccuracyStanding = p.altInaccuracyStanding;
          u.altInaccuracyFromShot = p.altInaccuracyFromShot;
          u.altInaccuracyMovement = p.altInaccuracyMovement;
          u.altYVelocityInaccuracy = (n = p.altYVelocityInaccuracy) !== null && n !== undefined ? n : p.yVelocityInaccuracy;
          u.altInaccuracyFromJump = (o = p.altInaccuracyFromJump) !== null && o !== undefined ? o : p.inaccuracyFromJump;
          u.recoveryRate = p.recoveryRate;
          u.kickbackFromShot = p.kickbackFromShot;
          u.kickbackDecreaseRate = p.kickbackDecreaseRate;
          u.autoFireWithMouse = p.autoFireWithMouse;
          if (u.gunType === "semi_automatic") {
            u.spriteTrackname = "gunSemiAutomatic";
            u.soundPrefix = "semiAuto";
            u.cockTime = 400;
          } else if (u.gunType === "submachine") {
            u.spriteTrackname = "gunSubmachineGun";
            u.soundPrefix = "submachine";
            u.cockTime = 300;
          } else if (u.gunType === "rifle") {
            u.spriteTrackname = "gunRifle";
            u.soundPrefix = "rifle";
            u.cockTime = 550;
          } else if (u.gunType === "pistol") {
            u.spriteTrackname = "gunPistol";
            u.soundPrefix = "pistol";
            u.cockTime = 300;
          } else if (u.gunType === "shotgun") {
            u.spriteTrackname = "gunShotgun";
            u.soundPrefix = "shotgun";
            u.cockTime = 300;
          }
          u.cockTime = (s = p.cockTime) !== null && s !== undefined ? s : u.cockTime;
          u.timeToStartAim = 100;
          u.timeToStopAim = u.timeToStartAim / 2;
          u.muzzleFlashTexture = p.muzzleFlashTexture;
          u.muzzleFlashOffsetFromGun = p.muzzleFlashOffsetFromGun;
          var g = new l.K("".concat(e, "BulletMeshMaterial"), i);
          g.diffuseColor = new f.Wo(199 / 255, 190 / 255, 88 / 255);
          g.specularColor = new f.Wo(0, 0, 0);
          g.freeze();
          u.bulletCasingMesh = d.BoxBuilder.CreateBox("".concat(u.name, "BulletCasingMesh"), {
            width: 0.01,
            height: 0.02,
            depth: 0.01
          }, i);
          u.bulletCasingMesh.material = g;
          u.bulletCasingMesh.isPickable = false;
          var v = new l.K("".concat(e, "BulletHitBillboard"), i);
          v.diffuseColor = new f.Wo(0, 0, 0);
          v.specularColor = new f.Wo(0, 0, 0);
          g.freeze();
          u.bulletHitBillboardPlane = _.mx.CreatePlane("".concat(u.name, "BulletHitBillboardPlane"), {
            size: 0.05
          }, i);
          u.bulletHitBillboardPlane.isPickable = false;
          u.bulletHitBillboardPlane.material = v;
          var y = new l.K("".concat(e, "MuzzleFlashMaterial"), i);
          y.diffuseTexture = new c.x("textures/miscImages/".concat(u.muzzleFlashTexture), i);
          y.diffuseTexture.wrapU = c.x.CLAMP_ADDRESSMODE;
          y.diffuseTexture.wrapV = c.x.CLAMP_ADDRESSMODE;
          y.diffuseTexture.hasAlpha = true;
          y.emissiveColor = new f.Wo(1, 1, 1);
          g.freeze();
          u.muzzleFlashPlane = _.mx.CreatePlane("".concat(u.name, "MuzzleFlashPlane"), {
            size: 0.05,
            sideOrientation: h.Kj.DOUBLESIDE
          }, i);
          u.muzzleFlashPlane.material = y;
          u.muzzleFlashPlane.isPickable = false;
          var b = new l.K("".concat(e, "BulletMeshMaterial"), i);
          b.diffuseColor = f.Wo.Yellow();
          b.specularColor = new f.Wo(0, 0, 0);
          b.emissiveColor = new f.Wo(0.8, 0.8, 0.8);
          g.freeze();
          u.movingBulletMesh = (0, d.CreateBox)("".concat(u.name, "MovingBulletMesh"), {
            width: 0.3,
            height: 0.3,
            depth: 3
          }, i);
          u.movingBulletMesh.material = b;
          u.movingBulletMesh.isPickable = false;
          u.bakeInScaling = u.heldItemScale * 0.19;
          u.droppedMeshScale = S._G.droppedBlockSize * 0.5;
          return u;
        }
        (0, u.Z)(r, [{
          key: "getBulletCasingMesh",
          value: function () {
            return this.bulletCasingMesh.createInstance("".concat(this.name, "BulletCasingMesh"));
          }
        }, {
          key: "getBulletHitBillboard",
          value: function () {
            return this.bulletHitBillboardPlane.createInstance("".concat(this.name, "BulletHitBillboardPlane"));
          }
        }, {
          key: "getMuzzleFlashPlane",
          value: function () {
            return this.muzzleFlashPlane.createInstance("".concat(this.name, "MuzzleFlashPlane"));
          }
        }, {
          key: "getMovingBulletMesh",
          value: function () {
            return this.movingBulletMesh.createInstance("".concat(this.name, "BulletCasingMesh"));
          }
        }]);
        return r;
      }(B),
      Tool: G,
      Armour: j,
      GrayscaleArmour: z,
      Slab: L,
      Chargeable: W
    };
    function Y(e, t, r, i) {
      var n;
      if (e in M.default) {
        n = M.default[e].model ? K[M.default[e].model] ? new K[M.default[e].model](e, r) : new N(e, r) : new F(e, r);
        q[e] = n;
        q[t] = n;
      } else {
        n = K[i] ? new K[i](e, r) : new U(e, r);
        Z[e] = n;
        Z[t] = n;
      }
      H[e] = n;
      H[t] = n;
    }
  },
  24412: function (e, t, r) {
    "use strict";

    r.d(t, {
      JC: function () {
        return b;
      },
      NG: function () {
        return A;
      },
      QI: function () {
        return i;
      },
      Qk: function () {
        return n;
      },
      Tt: function () {
        return m;
      },
      Ul: function () {
        return y;
      },
      vh: function () {
        return _;
      }
    });
    var i;
    var n;
    var o = r(15671);
    var s = r(43144);
    var a = r(44811);
    var u = r(70937);
    var l = r(80105);
    var c = r(23886);
    var h = r(38017);
    var d = r(52126);
    var f = r(11442);
    var p = {};
    var m = function () {
      function e(t) {
        (0, o.Z)(this, e);
        this.pSystem = undefined;
        this.startedSystem = false;
        this.noa = undefined;
        this.boxWidth = 0.8;
        this.noa = t;
        var r = new a.pc("breakingParticles", 400, t.rendering.getScene());
        this.pSystem = r;
        r.particleTexture = new u.x("textures/miscImages/square_particle.png", t.rendering.getScene(), undefined, undefined, u.x.NEAREST_SAMPLINGMODE);
        r.blendMode = a.pc.BLENDMODE_STANDARD;
        r.color1 = (0, c.Vt)(255, 255, 255, 1);
        r.color2 = (0, c.Vt)(255, 255, 255, 1);
        r.colorDead = (0, c.Vt)(255, 255, 255, 1);
        r.minLifeTime = 0.1;
        r.maxLifeTime = 0.2;
        r.minEmitPower = 30;
        r.maxEmitPower = 50;
        r.gravity = new l.P(0, -200, 0);
        r.emitRate = 60;
        r.minSize = 0.075;
        r.maxSize = 0.1;
        r.addVelocityGradient(0, 0.05, 0.1);
        r.addVelocityGradient(1, 0.05, 0.1);
        (0, c.$t)(t, r);
        r.createBoxEmitter(new l.P(), new l.P(), new l.P(0, 0, 0), new l.P(this.boxWidth, this.boxWidth, this.boxWidth));
        r.stop();
      }
      (0, s.Z)(e, [{
        key: "tick",
        value: function (e) {
          (0, c.$t)(this.noa, this.pSystem);
          if (e) {
            (0, c.Y0)(this.pSystem, this.noa.targetedBlock.position);
            this.updateParticleSystemColour();
            var t = this.pSystem.direction1;
            var r = this.pSystem.direction2;
            t.x = this.noa.targetedBlock.normal[0] + 1;
            t.y = this.noa.targetedBlock.normal[1] + 1;
            t.z = this.noa.targetedBlock.normal[2] + 1;
            r.x = this.noa.targetedBlock.normal[0] - 1;
            r.y = this.noa.targetedBlock.normal[1] - 1;
            r.z = this.noa.targetedBlock.normal[2] - 1;
            if (this.noa.targetedBlock.normal[0] !== 0) {
              t.x = this.noa.targetedBlock.normal[0];
              r.x = this.noa.targetedBlock.normal[0];
            } else if (this.noa.targetedBlock.normal[1] !== 0) {
              t.y = this.noa.targetedBlock.normal[1];
              r.y = this.noa.targetedBlock.normal[1];
            } else if (this.noa.targetedBlock.normal[2] !== 0) {
              t.z = this.noa.targetedBlock.normal[2];
              r.z = this.noa.targetedBlock.normal[2];
            }
            if (!this.startedSystem) {
              this.pSystem.start();
              this.startedSystem = true;
            }
          } else if (this.startedSystem) {
            this.pSystem.stop();
            this.startedSystem = false;
          }
        }
      }, {
        key: "updateParticleSystemColour",
        value: function () {
          var e = this.noa.getBlock(this.noa.targetedBlock.position);
          if (e !== 0) {
            var t = (0, h.blockIdToName)(e).split("|")[0];
            if (!p[t]) {
              var r = f[t];
              if (!r) {
                return void console.error("Did not find noMetaName ".concat(t, " in blockAvgColours"));
              }
              p[t] = (0, c.Vt)(r[0], r[1], r[2], 1);
            }
            this.pSystem.color1 = p[t];
            this.pSystem.color2 = p[t];
            this.pSystem.colorDead = p[t];
          }
        }
      }]);
      return e;
    }();
    var g = A("generic_2");
    var v = A("critical_hit");
    function _(e) {
      var t = new a.pc("sprintParticles", 50, e.rendering.getScene());
      t.particleTexture = new u.x(g, e.rendering.getScene(), undefined, undefined, u.x.NEAREST_SAMPLINGMODE);
      t.blendMode = a.pc.BLENDMODE_STANDARD;
      t.addColorGradient(0, (0, c.Vt)(213, 237, 255, 1), (0, c.Vt)(109, 170, 238, 1));
      t.addColorGradient(0.2, (0, c.Vt)(213, 237, 255, 1), (0, c.Vt)(109, 170, 238, 1));
      t.addColorGradient(1, (0, c.Vt)(213, 237, 255, 0), (0, c.Vt)(109, 170, 238, 0));
      t.minLifeTime = 0.15;
      t.maxLifeTime = 0.3;
      t.minEmitPower = 30;
      t.maxEmitPower = 50;
      t.emitRate = 5;
      t.gravity = new l.P(0, -100, 0);
      t.minSize = 0.15;
      t.maxSize = 0.3;
      t.addVelocityGradient(0, 0.075, 0.15);
      t.addVelocityGradient(1, 0.075, 0.15);
      (0, c.$t)(e, t);
      t.createBoxEmitter(new l.P(1, 1, 1), new l.P(-1, -1, -1), new l.P(0, 0, 0), new l.P(d.ZP.playerWidth * 1.2, d.ZP.playerHeight * 0.7, d.ZP.playerWidth * 1.2));
      t.manualEmitCount = 0;
      i = new y(t, 0.3);
      var r = new a.pc("critParticles", 50, e.rendering.getScene());
      r.particleTexture = new u.x(v, e.rendering.getScene(), undefined, undefined, u.x.NEAREST_SAMPLINGMODE);
      r.blendMode = a.pc.BLENDMODE_STANDARD;
      r.addColorGradient(0, (0, c.Vt)(255, 167, 0, 1), (0, c.Vt)(255, 103, 0, 1));
      r.addColorGradient(0.2, (0, c.Vt)(255, 167, 0, 1), (0, c.Vt)(255, 103, 0, 1));
      r.addColorGradient(1, (0, c.Vt)(255, 167, 0, 0), (0, c.Vt)(255, 103, 0, 0));
      r.minLifeTime = 0.15;
      r.maxLifeTime = 0.3;
      r.minEmitPower = 30;
      r.maxEmitPower = 50;
      r.emitRate = 5;
      r.gravity = new l.P(0, -100, 0);
      r.minSize = 0.15;
      r.maxSize = 0.3;
      r.addVelocityGradient(0, 0.075, 0.15);
      r.addVelocityGradient(1, 0.075, 0.15);
      (0, c.$t)(e, r);
      r.createBoxEmitter(new l.P(1, 1, 1), new l.P(-1, -1, -1), new l.P(0, 0, 0), new l.P(d.ZP.playerWidth * 1.2, d.ZP.playerHeight * 0.7, d.ZP.playerWidth * 1.2));
      r.manualEmitCount = 0;
      n = new y(r, 0.3);
    }
    var y = function () {
      function e(t, r) {
        (0, o.Z)(this, e);
        this.pSystem = t;
        this.maxLifetimeSecs = r;
        this.stopTimeout = null;
        this.started = false;
        t.manualEmitCount = 0;
      }
      (0, s.Z)(e, [{
        key: "emitAmount",
        value: function (e) {
          var t = this;
          this.pSystem.manualEmitCount = e;
          clearTimeout(this.stopTimeout);
          if (!this.started) {
            this.pSystem.start();
            this.started = true;
          }
          this.stopTimeout = setTimeout(function () {
            t.pSystem.stop();
            t.started = false;
          }, this.maxLifetimeSecs * 1000);
        }
      }]);
      return e;
    }();
    function b(e, t, r, i) {
      (0, c.$t)(e, t.pSystem);
      (0, c.Y0)(t.pSystem, r);
      t.emitAmount(i);
    }
    function A(e) {
      return r(4841)("./".concat(e, ".png"));
    }
  },
  41494: function (e, t, r) {
    "use strict";

    r.d(t, {
      Bj: function () {
        return A;
      },
      bo: function () {
        return S;
      },
      ix: function () {
        return m;
      },
      oN: function () {
        return y;
      }
    });
    var i = r(15671);
    var n = r(43144);
    var o = r(37762);
    var s = r(85774);
    var a = r(3170);
    var u = r(32692);
    var l = r(79520);
    var c = r(38172);
    var h = r(80427);
    var d = r(735);
    var f = r(55250);
    var p = r(52126).ZP;
    function m(e) {
      function t() {
        return e.ents.getHeldItem(e.playerEntity);
      }
      var r = new s.oq(30000);
      var i = false;
      var n = false;
      function m(e) {
        var t = 0;
        for (var r in e) {
          t++;
        }
        return t;
      }
      e.inputs.down.on("fire", function (e) {
        if (e.altKey) {
          y();
        } else {
          t().downFirePrimary();
          i = true;
          s.f$.publish("mouseState", {
            isDown: i || n
          });
        }
        (0, s.Xi)(h.Vz.ingameClick, {
          type: f.j.DownFirePrimary,
          doubleClick: (0, s.QY)()
        }, true);
        r.click();
        var o = r.getMaxClickSeparationInMs(30000) < 1000 / 30;
        var a = r.getMaxClickSeparationInMs(5000) < 20;
        var u = r.getMaxClickSeparationInMs(2000) < 1000 / 70;
        if (o || a || u) {
          var l;
          if (o) {
            l = 30;
          } else if (a) {
            l = 50;
          } else {
            if (!u) {
              throw new Error("???");
            }
            l = 70;
          }
          (0, s.Xi)(h.Vz.xclick, l);
        }
        if (m(e) === 0) {
          (0, d.S)(true);
        }
      });
      e.inputs.up.on("fire", function (e) {
        t().upFirePrimary();
        i = false;
        s.f$.publish("mouseState", {
          isDown: i || n
        });
        if (m(e) === 0) {
          (0, d.S)(true);
        }
      });
      e.inputs.down.on("alt-fire", function (r) {
        (0, s.Xi)(h.Vz.ingameClick, {
          type: f.j.DownFireSecondary,
          doubleClick: (0, s.QY)()
        }, true);
        t().downFireSecondary();
        n = true;
        s.f$.publish("mouseState", {
          isDown: i || n
        });
        if (e.targetedBlock && !e.targetedBlock.position) {
          (0, c.ij)();
        }
        if (m(r) === 0) {
          (0, d.S)(true);
        }
      });
      e.inputs.up.on("alt-fire", function (e) {
        t().upFireSecondary();
        n = false;
        s.f$.publish("mouseState", {
          isDown: i || n
        });
        if (m(e) === 0) {
          (0, d.S)(true);
        }
      });
      var y = function () {
        t().downFireTertiary();
      };
      e.inputs.down.on("mid-fire", function () {
        y();
      });
      e.inputs.bind("KeyR", "KeyR");
      e.inputs.down.on("KeyR", function () {
        (0, s.Xi)(h.Vz.keydown, "R");
        if (e.entities.getHeldItemState(e.playerEntity).heldType === "Gun") {
          t().reload();
        }
      });
      e.inputs.up.on("KeyR", function () {
        (0, s.Xi)(h.Vz.keyup, "R");
      });
      e.inputs.bind("KeyF", "KeyF");
      e.inputs.down.on("KeyF", function () {
        (0, s.Xi)(h.Vz.keydown, "F");
      });
      e.inputs.up.on("KeyF", function () {
        (0, s.Xi)(h.Vz.keyup, "F");
      });
      e.inputs.bind("OpenInven", "Tab");
      e.inputs.down.on("OpenInven", function (e) {
        e.preventDefault();
        s.f$.publish("ToggleInventory");
      });
      e.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      e.inputs.bind("DropItem", "KeyQ");
      e.inputs.down.on("DropItem", function () {
        s.f$.publish("DropItemKeyPressed", e.inputs.state.crouch);
      });
      e.inputs.down.on("jump", function () {
        if (e.entities.getHeldItemState(e.playerEntity).heldType === "Gun") {
          t().inaccuracyCalculator.jump();
        }
      });
      e.inputs.bind("Shop", "KeyB");
      e.inputs.down.on("Shop", function () {
        if (e.serverSettings.shopInfo) {
          s.f$.publish("toggleShop");
        }
      });
      for (var S = function (t) {
          e.inputs.bind(t.toString(), "Digit".concat(t));
          e.inputs.down.on(t.toString(), function () {
            !function (e) {
              if (e === 0) {
                e = 10;
              }
              s.f$.publish("setSelectedInventorySlotI", e - 1);
              s.f$.publish("numkeyPressed", e);
            }(t);
          });
        }, M = 0; M < 10; M++) {
        S(M);
      }
      function C(e) {
        if (s.EU.inGame && !s.EU.settingsAreOpen) {
          if (!(0, u.Sm)()) {
            s.f$.publish("ctrlCrouchWithoutFullscreen");
          }
          e.preventDefault();
        }
      }
      e.inputs.bind("Menu", "KeyM");
      e.inputs.down.on("Menu", function () {
        s.f$.publish("ToggleMenu");
      });
      e.inputs.bind("OOptions", "KeyO");
      e.inputs.down.on("OOptions", function () {
        s.f$.publish("ToggleOptions");
      });
      e.inputs.bind("EscOptions", "Escape");
      e.inputs.down.on("EscOptions", function () {
        s.f$.publish("OpenOptions");
      });
      e.inputs.bind("CharCustomisation", "KeyN");
      e.inputs.down.on("CharCustomisation", function () {
        s.f$.publish("ToggleCharCustomisation");
      });
      e.inputs.bind("SwapCameraZoom", "KeyP");
      e.inputs.down.on("SwapCameraZoom", function () {
        _(e);
      });
      s.f$.subscribe("SwapCameraZoom", function () {
        _(e);
      });
      e.inputs.bind("OpenInviteLink", "KeyI");
      e.inputs.down.on("OpenInviteLink", function () {
        s.f$.publish("ToggleInviteLinkUI");
      });
      e.inputs.bind("Esc", "Escape");
      e.inputs.down.on("Esc", function (e) {
        s.f$.publish("EscKeyPressed");
      });
      e.inputs.bind("Y", "KeyY");
      e.inputs.down.on("Y", function (e) {
        s.f$.publish("YKeyPressed");
      });
      e.inputs.bind("X", "KeyX");
      e.inputs.down.on("X", function (e) {
        s.f$.publish("XKeyPressed");
      });
      e.inputs.bind("ctrlCrouch", "ControlLeft");
      e.inputs.down.on("ctrlCrouch", C);
      e.inputs.up.on("ctrlCrouch", C);
      var x = function (e) {
        if (s.EU.inGame && e.ctrlKey && !s.EU.settingsAreOpen) {
          e.preventDefault();
        }
      };
      document.addEventListener("keydown", x);
      document.addEventListener("keyup", x);
      document.addEventListener("keypress", x);
      e.inputs.bind("Alt", "AltLeft", "AltRight");
      e.inputs.down.on("Alt", function (e) {
        e.preventDefault();
      });
      e.on("afterRender", function (t) {
        (0, a.$)(e);
      });
      var T = 0;
      e.on("tick", function (t) {
        s.f$.publish("noaTick");
        if (e.entities.getGenericPlayerState(e.playerEntity).isAlive) {
          if (Date.now() - T > 9000) {
            !function () {
              var e = (0, s.Zx)();
              if (typeof e.serverSettings.speedMultiplier === "number" && typeof e.serverSettings.jumpAmount === "number") {
                (0, s.Xi)(h.Vz.phys, {
                  dmmg: (0, s.c4)(e.serverSettings.speedMultiplier),
                  multt: (0, s.ON)(e.serverSettings.jumpAmount),
                  crchSpd: (0, s.c4)(e.serverSettings.crouchingSpeed),
                  wlkSpd: (0, s.c4)(e.serverSettings.walkingSpeed),
                  runSpd: (0, s.c4)(e.serverSettings.runningSpeed),
                  time: (0, s.ON)(e.timeScale),
                  amount: e.ents.getMovement(e.playerEntity).jumpForce,
                  dimWidth: e.ents.getPositionData(1).width,
                  dimHeight: e.ents.getPositionData(1).height
                }, true);
              }
            }();
            T = Date.now();
          }
          var r = e.inputs.state;
          if (r.jump || r.forward || r.backward || r.left || r.right) {
            s.f$.publish("usedKeyboard");
          }
          if (e.ents.hasInventory(e.playerEntity) && e.serverSettings.canPickUpItems === true) {
            var i = e.ents.getPosition(e.playerEntity);
            var n = p.playerWidth / 2;
            var a = [i[0] - n - 0.6, i[1] - 0.6, i[2] - n - 0.6];
            var u = [i[0] + n + 0.6, i[1] + p.playerHeight + 0.6, i[2] + n + 0.6];
            var d = e.ents.getEntitiesInAABB({
              base: a,
              max: u
            }, e.ents.names.autoRotate);
            if (d.length > 0) {
              var f;
              var m = (0, o.Z)(d);
              try {
                for (m.s(); !(f = m.n()).done;) {
                  var g = f.value;
                  if (!e.ents.getState(g, "itemState").cantPickUp) {
                    var _ = e.ents.getState(g, e.ents.names.itemState);
                    var y = e.ents.getInventory(e.playerEntity).pickUpItem({
                      name: _.name,
                      typeObj: _.typeObj,
                      amount: _.amount
                    });
                    if (y !== 0) {
                      if (y === null || y === -1) {
                        e.ents.deleteEntity(g);
                      } else {
                        _.amount -= y;
                        if (_.amount < 0) {
                          console.error("Picking up led to less than 0 of item!");
                        } else if (_.amount === 0) {
                          e.ents.deleteEntity(g);
                        }
                      }
                      (0, s.Xi)(h.Vz.itemPickedUp, {
                        itemEId: g,
                        itemAmt: y,
                        sendInfo: c.K4
                      }, true);
                      (0, l.GW)().play("pickUp", p.pickupSoundVol).rate(1 + Math.random() * p.pickupSoundRateVariation);
                    }
                  }
                }
              } catch (M) {
                m.e(M);
              } finally {
                m.f();
              }
            }
          }
          if (e.ents.getMeshData(e.playerEntity)) {
            if (P) {
              P = false;
              A(e);
            }
            var b = e.inputs.pointerState.scrolly;
            if (b !== 0) {
              var S = b > 0 ? 1 : -1;
              if (e.inputs.state["mid-fire"] || e.inputs.state.Alt || !e.serverSettings.useInventory) {
                v(e, S);
              } else {
                s.f$.publish("ScrollInventorySlot", S);
              }
            }
          }
        }
      });
      var P = false;
      s.f$.subscribe("serverOption|playerZoom", function (t) {
        g(e, t);
        if (!e.ents.getMeshData(e.playerEntity)) {
          P = true;
        }
      });
      e.camera.onCurrentZoomChange = function (t, r) {
        e.entities.getHeldItem(e.playerEntity).cameraZoomChanged(r, t);
        A(e);
      };
      e.camera.onCurrentZoomSetFromInternals = function (t, r) {
        b(e, t, r);
      };
    }
    function g(e, t) {
      v(e, t - e.camera.zoomDistance);
    }
    function v(e, t) {
      if (e.entities.getHeldItem(e.playerEntity).shouldChangeCameraZoom(t)) {
        if (e.camera.zoomDistance === 0 && t === 1) {
          t++;
        } else if (e.camera.zoomDistance === 2 && t === -1) {
          t--;
        }
        y(e, e.camera.zoomDistance + t);
      }
    }
    function _(e) {
      if (e.camera.zoomDistance === 0) {
        g(e, e.serverSettings.zoomOutDistance || 3);
      } else {
        g(e, 0);
      }
    }
    function y(e, t) {
      var r = e.camera.zoomDistance;
      if (t < 0) {
        e.camera.zoomDistance = 0;
      } else if (t > (e.serverSettings.maxPlayerZoom || 10)) {
        e.camera.zoomDistance = e.serverSettings.maxPlayerZoom || 10;
      } else {
        e.camera.zoomDistance = t;
      }
      b(e, r, t);
    }
    function b(e, t, r) {
      e.entities.getHeldItem(e.playerEntity).cameraZoomSet(t, r);
      s.f$.publish("cameraZoomSet", e.camera.zoomDistance);
    }
    function A(e) {
      e.ents.getGenericPlayerState(e.playerEntity).meshEnabledCombinator.setBooleanType("cameraZoom", e.camera.currentZoom > 1.2);
    }
    var S = new (function () {
      function e() {
        var t = this;
        (0, i.Z)(this, e);
        this.inventoryOpen = false;
        s.f$.subscribe("DropItemKeyPressed", function (e) {
          if (t.inventoryOpen) {
            s.f$.publish("DropInvenItem", e);
          } else {
            s.f$.publish("DropHotbarItem", e);
          }
        });
      }
      (0, n.Z)(e, [{
        key: "setInventoryOpen",
        value: function (e) {
          this.inventoryOpen = e;
        }
      }]);
      return e;
    }())();
    var M = 10000;
    var C = function (e) {
      e.preventDefault();
      document.documentElement.scrollIntoView({
        behavior: "instant",
        block: "center"
      });
      M = 0;
    };
    var x = function () {
      if (M < 120) {
        document.documentElement.scrollIntoView({
          behavior: "instant",
          block: "start"
        });
        M++;
      }
    };
    var T = false;
    s.f$.subscribe("displaymodeFullscreenChange", function (e) {
      P();
    });
    s.f$.subscribe("pointerLockUpdate", function (e) {
      T = e;
      P();
    });
    var P = function () {
      var e;
      var t;
      window.removeEventListener("wheel", C);
      if (!((e = (0, s.Zx)()) === null || e === undefined)) {
        e.off("beforeRender", x);
      }
      if (s.S2 && !(0, u.Sm)() && T) {
        window.addEventListener("wheel", C, {
          passive: false
        });
        if (!((t = (0, s.Zx)()) === null || t === undefined)) {
          t.on("beforeRender", x);
        }
      }
    };
  },
  42845: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return n;
      }
    });
    var i = r(37762);
    function n(e) {
      return {
        name: "autoRemoveMesh",
        order: 1000,
        state: {
          tick: 0
        },
        onAdd: function (e, t) {},
        onRemove: null,
        system: function (t, r) {
          if (!r[0] || r[0].tick++ === 100) {
            var n;
            var o = e.ents.getPosition(e.playerEntity);
            var s = (0, i.Z)(r);
            try {
              for (s.s(); !(n = s.n()).done;) {
                for (var a = n.value, u = e.ents.getPosition(a.__id), l = 0, c = 0; c < 3; c++) {
                  l += Math.abs(o[c] - u[c]);
                }
                if (l > 500) {
                  e.ents.deleteEntity(a.__id);
                }
                a.tick = 0;
              }
            } catch (h) {
              s.e(h);
            } finally {
              s.f();
            }
          }
        }
      };
    }
  },
  17309: function (e) {
    e.exports = function (e) {
      return {
        name: "autoRotate",
        order: 105,
        state: {
          heading: 0
        },
        onAdd: function (e, t) {
          t.heading = Math.random() * Math.PI * 2;
        },
        onRemove: null,
        system: function (t, r) {
          r.forEach(function (t) {
            t.heading = (t.heading + Math.PI / 50) % (Math.PI * 2);
            e.entities.getMeshData(t.__id).mesh.rotation.y = t.heading;
          });
        }
      };
    };
  },
  48912: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return u;
      }
    });
    var i = r(37762);
    var n = r(29439);
    var o = r(47077);
    var s = r.n(o);
    var a = r(80105);
    function u(e) {
      return {
        name: "bullet",
        order: 50,
        state: {
          distanceToTravel: null,
          onEnd: null,
          directionTravelling: null
        },
        onAdd: function (t, r) {
          var i = e.entities.getMeshData(t).mesh;
          var o = e.entities._localGetPosition(t);
          var s = (0, n.Z)(o, 3);
          var u = s[0];
          var l = s[1];
          var c = s[2];
          i.lookAt(new a.P(u + r.directionTravelling[0], l + r.directionTravelling[1], c + r.directionTravelling[2]));
        },
        onRemove: function (e) {},
        renderSystem: function (t, r) {
          var n;
          var o = (0, i.Z)(r);
          try {
            for (o.s(); !(n = o.n()).done;) {
              var a = n.value;
              var u = s().length(a.directionTravelling) * 5;
              if (a.distanceToTravel - u < 0) {
                a.onEnd();
                e.entities.deleteEntity(a.__id);
              } else {
                a.distanceToTravel -= u;
                for (var l = e.entities.getPosition(a.__id), c = 0; c < 3; c++) {
                  l[c] += a.directionTravelling[c] * 5;
                }
                e.entities.setPosition(a.__id, l);
              }
            }
          } catch (h) {
            o.e(h);
          } finally {
            o.f();
          }
        }
      };
    }
  },
  39269: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return u;
      },
      doSingleEntityProjectileCollisionFromPhysics: function () {
        return l;
      },
      processEntityProjectileCollisions: function () {
        return d;
      }
    });
    var i = r(37762);
    var n = r(47077);
    var o = r.n(n);
    var s = r(53984);
    var a = r.n(s);
    function u(e) {
      return {
        name: "collideEntitiesProjectile",
        order: 70,
        state: {
          callback: null,
          _lastPos: null
        },
        onAdd: function (e, t) {},
        onRemove: null,
        system: function (t, r) {
          d(e);
        }
      };
    }
    function l(e, t) {
      var r = p(e);
      var i = e.ents.getPhysicsBody(t);
      var n = e.ents.getPositionData(t);
      var o = [i.aabb.base[0] + n.width / 2, i.aabb.base[1] + n.height / 2, i.aabb.base[2] + n.width / 2];
      f(e, e.ents.getState(t, "collideEntitiesProjectile"), r, o);
    }
    var c = o().create();
    var h = [];
    function d(e) {
      var t = e.ents.getStatesList("collideEntitiesProjectile");
      if (t.length !== 0) {
        var r;
        var n = p(e);
        var o = (0, i.Z)(t);
        try {
          for (o.s(); !(r = o.n()).done;) {
            f(e, r.value, n);
          }
        } catch (s) {
          o.e(s);
        } finally {
          o.f();
        }
      }
    }
    function f(e, t, r) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.ents.getPosition(t.__id);
      if (t._lastPos !== null) {
        o().sub(c, i, t._lastPos);
        var n = o().length(c);
        if (n === 0) {
          c[0] = 0.0001;
        }
        for (var s = 0; s < h.length; s++) {
          if (r[s].collideBits) {
            var u = a().distance(t._lastPos, c, h[s]);
            if ((m(t._lastPos, h[s]) || Math.abs(u) <= n) && (t.callback(r[s].__id), !e.ents.hasComponent(t.__id, "collideEntitiesProjectile"))) {
              break;
            }
          }
        }
        o().copy(t._lastPos, i);
      } else {
        t._lastPos = o().create();
      }
    }
    function p(e) {
      for (var t = e.ents.getStatesList("collideEntities"), r = 0; r < t.length; r++) {
        var i = e.ents.getPositionData(t[r].__id);
        var n = t[r].widthExpandAmt / 2;
        var o = t[r].heightExpandAmt / 2;
        h[r] = [[i._extents[0] - n, i._extents[1] - o, i._extents[2] - n], [i._extents[3] + n, i._extents[4] + o, i._extents[5] + n]];
        h.length = t.length;
      }
      return t;
    }
    function m(e, t) {
      return e[0] >= t[0][0] && e[0] <= t[1][0] && e[1] >= t[0][1] && e[1] <= t[1][1] && e[2] >= t[0][2] && e[2] <= t[1][2];
    }
  },
  36764: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return o;
      }
    });
    var i = r(37762);
    var n = r(85774);
    function o(e) {
      return {
        name: "crouchingHandler",
        order: 25,
        state: {
          _preventFallOffLastTick: false
        },
        onAdd: function (e, t) {},
        onRemove: null,
        system: function (t, r) {
          var o;
          var s = (0, i.Z)(r);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var a = o.value;
              var u = a.__id;
              if (e.ents.getPhysicsBody(u).preventFallOffEdge && !a._preventFallOffLastTick) {
                (0, n.qL)();
              }
              e.ents.getPhysicsBody(u).preventFallOffEdge = e.ents.getMoveState(u).crouching;
              a._preventFallOffLastTick = e.ents.getMoveState(u).crouching;
            }
          } catch (l) {
            s.e(l);
          } finally {
            s.f();
          }
        }
      };
    }
  },
  95933: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return n;
      }
    });
    var i = r(37762);
    function n(e) {
      return {
        name: "doOnFirstTick",
        order: 105,
        state: {
          cb: null
        },
        onAdd: function (e, t) {},
        onRemove: function (e, t) {},
        system: function (t, r) {
          var n;
          var o = (0, i.Z)(r);
          try {
            for (o.s(); !(n = o.n()).done;) {
              var s = n.value;
              s.cb();
              e.ents.removeComponent(s.__id, "doOnFirstTick");
            }
          } catch (a) {
            o.e(a);
          } finally {
            o.f();
          }
        }
      };
    }
  },
  32052: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return c;
      }
    });
    var i = r(37762);
    var n = r(9488);
    var o = r(64400);
    var s = r(87683);
    var a = r(47077);
    var u = r.n(a);
    var l = r(52126).ZP;
    function c(e) {
      var t = o.BoxBuilder.CreateBox("phBox", {
        width: 1,
        depth: 0.7,
        height: l.playerHitboxHeights.head
      }, e.rendering.getScene());
      t.material = new s.K("flashingMeshOverlayMat", e.rendering.getScene());
      t.material.diffuseColor = n.Wo.Yellow();
      t.visibility = 0.5;
      t.setEnabled(false);
      t.material.freeze();
      return {
        name: "flashingMeshOverlay",
        order: 100,
        state: {
          lastFlash: 0,
          isEnabled: true,
          flashingMeshEid: 0,
          instance: null,
          forceSetEnabled: null
        },
        onAdd: function (r, i) {
          i.instance = t.createInstance("mesh overlay ".concat(r));
          e.rendering.addMeshToScene(i.instance, false, null);
          i.lastFlash = Date.now();
        },
        onRemove: function (t, r) {
          e.ents.deleteEntity(r.flashingMeshEid);
          r.instance.dispose();
        },
        renderSystem: function (t, r) {
          var n;
          var o = Date.now();
          var s = (0, i.Z)(r);
          try {
            for (s.s(); !(n = s.n()).done;) {
              var a;
              var c = n.value;
              var d = e.entities.getState(c.__id, "meshRotation").renderHeading;
              var f = e.entities.getPositionData(c.__id)._renderPosition;
              u().set(h, f[0], f[1] + l.playerHitboxHeights.head / 2, f[2] + 0.1);
              u().rotateY(h, h, f, d);
              c.instance.position.copyFromFloats(h[0], h[1], h[2]);
              c.instance.rotation.y = d;
              if (o > c.lastFlash + 400) {
                c.isEnabled = !c.isEnabled;
                c.instance.setEnabled((a = c.forceSetEnabled) !== null && a !== undefined ? a : c.isEnabled);
                c.lastFlash = o;
              }
            }
          } catch (p) {
            s.e(p);
          } finally {
            s.f();
          }
        }
      };
    }
    var h = u().create();
  },
  40060: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return s;
      }
    });
    var i = r(37762);
    var n = r(9488);
    var o = r(85853);
    function s(e) {
      return {
        name: "genericAliveEntity",
        order: 100,
        state: {
          lastHurtTime: 0,
          _hurtOverlaySet: false
        },
        onAdd: function (e, t) {},
        onRemove: function (e, t) {},
        renderSystem: function (t, r) {
          var s;
          var a = Date.now();
          var u = (0, i.Z)(r);
          try {
            for (u.s(); !(s = u.n()).done;) {
              var l = s.value;
              if (e.ents.getMeshData(l.__id)) {
                if (!l._hurtOverlaySet && a - l.lastHurtTime < 300) {
                  var c = e.ents.getMeshData(l.__id).mesh;
                  o.$e.updateInstanceOverlayColour(c, new n.HE(1, 0, 0, 0.5));
                  l._hurtOverlaySet = true;
                } else if (l._hurtOverlaySet && a - l.lastHurtTime >= 300) {
                  var h = e.ents.getMeshData(l.__id).mesh;
                  o.$e.updateInstanceOverlayColour(h, new n.HE(0, 0, 0, 0));
                  l._hurtOverlaySet = false;
                }
              }
            }
          } catch (d) {
            u.e(d);
          } finally {
            u.f();
          }
        }
      };
    }
  },
  67389: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return a;
      }
    });
    var i = r(37762);
    var n = r(41038);
    var o = r(85774);
    var s = r(84906);
    function a(e) {
      return {
        name: "genericPlayerState",
        order: 100,
        state: {
          isAlive: true,
          meshEnabledCombinator: null,
          playerComponentsOn: true,
          addedTime: null,
          lastSlowdownUpdate: 0,
          _isAliveSub: null
        },
        onAdd: function (t, r) {
          r._isAliveSub = o.f$.subscribe("otherPlayerSettingsClientifiedEId|".concat(r.__id, "|_isAlive"), function (e) {
            r.isAlive = e;
            (0, s.updateLocalPlayerHeldItem)();
          });
          r.addedTime = Date.now();
          r.meshEnabledCombinator = new n.C(function (i) {
            var n;
            var s;
            var a;
            var u;
            if (!((n = e.entities.getMeshData(t)) === null || n === undefined)) {
              n.mesh.setEnabled(i);
            }
            if ((s = r.meshEnabledCombinator.getBooleanType("invisibleEffect")) === null || s === undefined || s) {
              e.entities.getHitboxState(t).hitboxMesh.setEnabled(i);
            } else {
              var l = true;
              for (var c in r.meshEnabledCombinator.booleans) {
                if (!r.meshEnabledCombinator.getBooleanType(c) && c !== "invisibleEffect") {
                  l = false;
                  break;
                }
              }
              e.entities.getHitboxState(t).hitboxMesh.setEnabled(l);
            }
            var h = (a = e.entities.getState(t, "playerName")) === null || a === undefined ? undefined : a.planeEId;
            if (h) {
              e.ents.getMeshData(h).mesh.setEnabled(i);
            }
            var d = (u = e.entities.getState(t, "flashingMeshOverlay")) === null || u === undefined ? undefined : u.flashingMeshEid;
            if (d) {
              d.forceSetEnabled = !i && null;
            }
            if (r.__id !== e.playerEntity) {
              if (i) {
                if (!e.entities.hasComponent(t, "collideTerrain")) {
                  e.entities.addComponent(t, "collideTerrain");
                }
              } else if (e.entities.hasComponent(t, "collideTerrain")) {
                e.entities.removeComponent(t, "collideTerrain");
              }
            }
            if (t === e.playerEntity) {
              o.f$.publish("clientPlayerModelVisible", i);
            }
          });
          e.entities.getState(t, "shadow").enabledCombinator = new n.C();
        },
        onRemove: function (e, t) {
          o.f$.unsubscribe(t._isAliveSub);
        },
        system: function (t, r) {
          var n;
          var o = (0, i.Z)(r);
          try {
            for (o.s(); !(n = o.n()).done;) {
              var s = n.value;
              var a = e.entities.getMoveState(s.__id);
              if (a) {
                var u = a.speedMultiplier.getMultiplierType("taggedSlowdown");
                if (u) {
                  var l = u + (Date.now() - s.lastSlowdownUpdate) * 0.0004;
                  if (l < 1) {
                    a.speedMultiplier.setMultiplierType("taggedSlowdown", l);
                  } else {
                    a.speedMultiplier.removeMultiplier("taggedSlowdown");
                  }
                  s.lastSlowdownUpdate = Date.now();
                }
              }
            }
          } catch (c) {
            o.e(c);
          } finally {
            o.f();
          }
        },
        renderSystem: null
      };
    }
  },
  84906: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      HeldItem: function () {
        return Y;
      },
      default: function () {
        return q;
      },
      updateHeldItemState: function () {
        return Z;
      },
      updateLocalPlayerHeldItem: function () {
        return H;
      }
    });
    var i = r(1413);
    var n = r(5647);
    var o = r(29439);
    var s = r(11752);
    var a = r(61120);
    var u = r(60136);
    var l = r(43668);
    var c = r(93433);
    var h = r(15671);
    var d = r(43144);
    var f = r(37762);
    var p;
    var m = r(89117);
    var g = r(85774);
    var v = r(80105);
    var _ = r(52126);
    var y = r(47077);
    var b = r.n(y);
    var A = r(41494);
    var S = function () {
      function e(t) {
        (0, h.Z)(this, e);
        this.zoomXYOffsetLerpFactor = 0.2;
        this.noa = t;
      }
      (0, d.Z)(e, [{
        key: "renderTick",
        value: function () {
          this._moveCameraXYOffsetTowardsZero();
        }
      }, {
        key: "_moveCameraXYOffsetTowardsZero",
        value: function () {
          if (!(this.noa.rendering._camera.position.x === 0 && this.noa.rendering._camera.position.y === 0)) {
            if (this.noa.rendering._camera.position.x < 0.0001) {
              this.noa.rendering._camera.position.x = 0;
            } else {
              this.noa.rendering._camera.position.x += (0 - this.noa.rendering._camera.position.x) * this.zoomXYOffsetLerpFactor;
            }
            if (this.noa.rendering._camera.position.y < 0.0001) {
              this.noa.rendering._camera.position.y = 0;
            } else {
              this.noa.rendering._camera.position.y += (0 - this.noa.rendering._camera.position.y) * this.zoomXYOffsetLerpFactor;
            }
          }
        }
      }, {
        key: "forceXyOffsetToZero",
        value: function () {
          this.noa.rendering._camera.position.x = 0;
          this.noa.rendering._camera.position.y = 0;
        }
      }]);
      return e;
    }();
    var M = function (e) {
      (0, u.Z)(r, e);
      var t = (0, l.Z)(r);
      function r() {
        var e;
        (0, h.Z)(this, r);
        for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) {
          n[o] = arguments[o];
        }
        (e = t.call.apply(t, [this].concat(n))).camZoomToOffsets = [{
          zoom: 0,
          x: 0,
          y: 0
        }, {
          zoom: 1.2,
          x: 0,
          y: 0
        }, {
          zoom: 2,
          x: 0.5,
          y: 0.55
        }, {
          zoom: 3,
          x: 0.7,
          y: 1
        }, {
          zoom: 4,
          x: 0.8,
          y: 1.1
        }, {
          zoom: 99999,
          x: 0.9,
          y: 1.3
        }];
        return e;
      }
      (0, d.Z)(r, [{
        key: "renderTick",
        value: function () {
          this._adjustCameraXYOffset();
        }
      }, {
        key: "_adjustCameraXYOffset",
        value: function () {
          var e;
          var t = (0, f.Z)(this.camZoomToOffsets);
          try {
            for (t.s(); !(e = t.n()).done;) {
              var r = e.value;
              if (r.zoom >= this.noa.camera.zoomDistance) {
                return void this._adjustTowardsZoomLevel(r);
              }
            }
          } catch (i) {
            t.e(i);
          } finally {
            t.f();
          }
        }
      }, {
        key: "_adjustTowardsZoomLevel",
        value: function (e) {
          var t = e.x;
          var r = e.y;
          var i = {
            x: 0,
            y: 0
          };
          if (Math.abs(this.noa.rendering._camera.position.x - t) < 0.0001) {
            i.x = t;
          } else {
            i.x = this.noa.rendering._camera.position.x + (t - this.noa.rendering._camera.position.x) * this.zoomXYOffsetLerpFactor;
          }
          if (Math.abs(this.noa.rendering._camera.position.y - r) < 0.0001) {
            i.y = r;
          } else {
            i.y = this.noa.rendering._camera.position.y + (r - this.noa.rendering._camera.position.y) * this.zoomXYOffsetLerpFactor;
          }
          this.noa.rendering._camera.position.x = i.x;
          this.noa.rendering._camera.position.y = i.y;
          this.noa.camera.targetX = i.x;
          this.noa.camera.targetY = i.y;
        }
      }]);
      return r;
    }(S);
    var C = r(44695);
    !function (e) {
      e[e.HIT_ENTITY = 0] = "HIT_ENTITY";
      e[e.HIT_BLOCK = 1] = "HIT_BLOCK";
      e[e.HIT_NOTHING = 2] = "HIT_NOTHING";
    }(p || (p = {}));
    var x = r(11126);
    var T = function () {
      function e(t, r) {
        (0, h.Z)(this, e);
        this.noa = undefined;
        this._playerEId = undefined;
        this.noa = t;
        this._playerEId = r;
      }
      (0, d.Z)(e, [{
        key: "getAttackBlockedPosition",
        value: function (e) {
          var t;
          var r = this.doAttack((t = this.noa.actionDirection) !== null && t !== undefined ? t : this.noa.camera.getDirection(), e);
          if (this._attackWasBlocked(r) && r.localHitPosition && r.hitNormal) {
            return {
              localBlockedPosition: r.localHitPosition,
              normal: r.hitNormal
            };
          } else {
            return null;
          }
        }
      }, {
        key: "doAttack",
        value: function (e, t) {
          var r = (0, g.rL)();
          var n = r.globalToLocal(r.getPlayerEyePos(this._playerEId));
          if (this._playerEId === this.noa.playerEntity && this.noa.camera.currentZoom !== 0) {
            var o;
            var s = b().fromValues(this.noa.rendering._camera.globalPosition.x, this.noa.rendering._camera.globalPosition.y, this.noa.rendering._camera.globalPosition.z);
            var a = this._tryDoAttack(s, e, t);
            var u = b().create();
            if (a.localHitPosition) {
              o = a.localHitPosition;
            } else {
              b().normalize(e, e);
              o = b().create();
              b().scaleAndAdd(o, s, e, 1000);
            }
            b().subtract(u, o, n);
            b().normalize(u, u);
            var l = this._tryDoAttack(n, u, t);
            return (0, i.Z)((0, i.Z)({}, l), {}, {
              thirdPersonPOVResult: a
            });
          }
          return this._tryDoAttack(n, e, t);
        }
      }, {
        key: "_attackWasBlocked",
        value: function (e) {
          var t;
          var r;
          return !(e.localHitPosition && (t = e.thirdPersonPOVResult) !== null && t !== undefined && t.localHitPosition && this._getVectorsAproxEqual(e.localHitPosition, e.thirdPersonPOVResult.localHitPosition) || !(e.localHitPosition || (r = e.thirdPersonPOVResult) !== null && r !== undefined && r.localHitPosition));
        }
      }, {
        key: "_tryDoAttack",
        value: function (e, t, r) {
          try {
            this._makePlayerMeshUnpickable();
            return this._getAttackResult(e, t, r);
          } finally {
            this._makePlayerMeshPickable();
          }
        }
      }, {
        key: "_getAttackResult",
        value: function (e, t, r) {
          var i = this._getBabylonPickResult(e, t, r);
          var n = this._getNoaPickResult(e, t, r);
          var o = this;
          if (i.pickedMesh !== null) {
            var s;
            if (((s = i.pickedMesh.metadata) === null || s === undefined ? undefined : s.eId) !== undefined) {
              if (n) {
                var a = b().dist(e, n._localPosition);
                var u = i.pickedPoint;
                if (b().dist(e, b().fromValues(u.x, u.y, u.z)) < a) {
                  return l();
                } else {
                  return c();
                }
              }
              return l();
            }
            console.error("Picked mesh that was not player:", i.pickedMesh.name, i);
          }
          if (n) {
            return c();
          } else {
            return {
              hitResult: p.HIT_NOTHING,
              distanceTravelled: null,
              localHitPosition: null,
              globalHitPosition: null,
              hitNormal: null,
              hitEId: null,
              bodyPartHit: null
            };
          }
          function l() {
            var r = b().dist(e, b().fromValues(i.pickedPoint.x, i.pickedPoint.y, i.pickedPoint.z));
            var n = b().fromValues(i.pickedPoint.x, i.pickedPoint.y, i.pickedPoint.z);
            var s = b().create();
            o.noa.localToGlobal(n, s);
            var a = b().create();
            b().scale(a, t, -1);
            return {
              hitResult: p.HIT_ENTITY,
              distanceTravelled: r,
              localHitPosition: n,
              globalHitPosition: s,
              hitNormal: a,
              hitEId: i.pickedMesh.metadata.eId,
              bodyPartHit: o._getBabylonBodyPartHit(i)
            };
          }
          function c() {
            var t = b().create();
            b().copy(t, n.position);
            var r = b().create();
            b().copy(r, n._localPosition);
            var i = b().create();
            b().copy(i, n.normal);
            return {
              hitResult: p.HIT_BLOCK,
              distanceTravelled: b().dist(e, n._localPosition),
              localHitPosition: r,
              globalHitPosition: t,
              hitNormal: i,
              hitEId: null,
              bodyPartHit: null
            };
          }
        }
      }, {
        key: "_getBabylonPickResult",
        value: function (e, t, r) {
          var i = new v.P(e[0], e[1], e[2]);
          var n = new v.P(t[0], t[1], t[2]);
          var o = new x.z(i, n, r);
          return this.noa.rendering.getScene().pickWithRay(o, P);
        }
      }, {
        key: "_getBabylonBodyPartHit",
        value: function (e) {
          var t = e.pickedMesh.getBoundingInfo().boundingBox.minimumWorld.y;
          var r = e.pickedPoint.y - t;
          for (var i in _.ZP.playerHitboxHeights) {
            if (r <= _.ZP.playerHitboxHeights[i] + 0.03) {
              return i;
            }
          }
          return "torso";
        }
      }, {
        key: "_getNoaPickResult",
        value: function (e, t, r) {
          return this.noa._localPick(e, t, r);
        }
      }, {
        key: "_makePlayerMeshUnpickable",
        value: function () {
          this._makeMeshPickableImpl(false);
        }
      }, {
        key: "_makePlayerMeshPickable",
        value: function () {
          this._makeMeshPickableImpl(true);
        }
      }, {
        key: "_makeMeshPickableImpl",
        value: function (e) {
          this.noa.entities.getState(this._playerEId, "hitbox").hitboxMesh.isPickable = e;
        }
      }, {
        key: "_getVectorsAproxEqual",
        value: function (e, t) {
          var r = 0.15;
          return Math.abs(e[0] - t[0]) <= r && Math.abs(e[1] - t[1]) <= r && Math.abs(e[2] - t[2]) <= r;
        }
      }]);
      return e;
    }();
    function P(e) {
      return e.isPickable && e.isEnabled();
    }
    var I = r(87683);
    var E = r(9488);
    var R = r(49620);
    var w = r(66645);
    var k = r(79520);
    var D = r(66293);
    var B = r(92643);
    var O = r(38017);
    var F = r(24412);
    var L = r(34177);
    var N = r(62043);
    var U = r(39378);
    var G = r(96724);
    var W = r(735);
    var j = r(77796);
    var z = r(80427);
    var V = r(13813);
    function H() {
      var e = (0, g.Zx)();
      var t = e.entities.getHeldItemState(e.playerEntity);
      Z(e, t);
      (0, G.v6)();
    }
    function q(e) {
      g.f$.subscribe("updatedInventory", function () {
        H();
      });
      return {
        name: "heldItem",
        order: 45,
        state: {
          heldItem: null,
          itemChanged: null,
          swingDuration: 200,
          heldItemName: null,
          heldType: null,
          networkedHeldItemName: null,
          _fistItem: null,
          _standardItem: null,
          _blockItem: null,
          _chargeableItem: null,
          _gunItem: null,
          _itemChangeSub: null,
          _lastSwingStart: 0,
          _playerVisSub: null,
          _lastInvenIdx: null
        },
        onAdd: function (t, r) {
          var i = new S(e);
          var n = new M(e);
          var o = new T(e, t);
          r._fistItem = new X(e, r, i, o);
          r.heldItem = r._fistItem;
          r.heldType = "Fist";
          r._standardItem = new Q(e, r, i, r._fistItem);
          r._blockItem = new J(e, r, i, r._fistItem);
          r._chargeableItem = new $(e, r, i, r._fistItem);
          r._gunItem = new ie(e, r, n, r._fistItem, o);
          if (r.__id === e.playerEntity) {
            r._playerVisSub = g.f$.subscribe("clientPlayerModelVisible", function (e) {
              r.heldItem.setupHeldMesh();
            });
            (0, g.ZC)(function () {
              if (r.heldItem !== r._fistItem) {
                r.heldItem.reset();
                r.heldItem = r._fistItem;
                r.heldType = "Fist";
                r.heldItemName = null;
                r._fistItem.selected();
                g.f$.publish("newLocalPlayerHeldItem", r.heldItem);
              }
            });
          }
        },
        onRemove: function (e, t) {
          t._fistItem.reset();
          t._blockItem.reset();
          t._standardItem.reset();
          t._gunItem.reset();
          t._fistItem.destroy();
          t._blockItem.destroy();
          t._standardItem.destroy();
          t._gunItem.destroy();
          g.f$.unsubscribe(t._playerVisSub);
        },
        system: function (t, r) {
          var i;
          var n = (0, f.Z)(r);
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = i.value;
              Z(e, o);
              if (o.heldItem) {
                o.heldItem.tick();
              } else {
                console.error(new Error("state.helditem for player ".concat(o.__id, " is falsy - ").concat(o.heldItem)));
              }
            }
          } catch (s) {
            n.e(s);
          } finally {
            n.f();
          }
        },
        renderSystem: function (t, r) {
          var i;
          var n = (0, f.Z)(r);
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = i.value;
              if (o.heldItem) {
                if (o.__id === e.playerEntity) {
                  o.heldItem.renderTickLocalPlayer();
                } else {
                  o.heldItem.renderTickNetworkedPlayer();
                }
              } else {
                console.error(new Error("state.helditem for player ".concat(o.__id, " is falsy - ").concat(o.heldItem)));
              }
            }
          } catch (s) {
            n.e(s);
          } finally {
            n.f();
          }
        }
      };
    }
    function Z(e, t) {
      var r;
      var i;
      var n;
      var o;
      var s = e.entities.getGenericPlayerState(t.__id);
      if (s.isAlive && s.playerComponentsOn) {
        if (e.ents.hasInventory(t.__id)) {
          var a = e.ents.getInventoryState(t.__id).selectedItem;
          o = a === null || a === undefined ? undefined : a.typeObj;
        } else if (t.networkedHeldItemName) {
          o = m.k2[t.networkedHeldItemName];
        }
      } else {
        o = undefined;
      }
      var u;
      var l;
      var c;
      var h;
      var d;
      var f;
      var p;
      var v = e.ents.hasInventory(t.__id) && e.ents.getInventory(t.__id).getSelectedSlotIndex() !== t._lastInvenIdx;
      if ((((r = o) === null || r === undefined ? undefined : r.name) || null) !== t.heldItemName || v) {
        if (!(t.heldItem === t._fistItem || ((u = o) === null || u === undefined ? undefined : u.meta.rootId) === e.bloxd.getMetaInfo(t.heldItemName).rootId && !v)) {
          t.heldItem.reset();
        }
        if (((l = o) === null || l === undefined ? undefined : l.type) === "CubeBlock" || ((c = o) === null || c === undefined ? undefined : c.type) === "TwoDBlock" || ((h = o) === null || h === undefined ? undefined : h.type) === "SlabBlock") {
          t.heldItem = t._blockItem;
          t.heldType = o.type;
        } else if (K.includes((d = o) === null || d === undefined ? undefined : d.type)) {
          t.heldItem = t._standardItem;
          t.heldType = o.type;
        } else if (((f = o) === null || f === undefined ? undefined : f.type) === "Gun") {
          t.heldItem = t._gunItem;
          t.heldType = o.type;
        } else if (((p = o) === null || p === undefined ? undefined : p.type) === "Chargeable") {
          t.heldItem = t._chargeableItem;
          t.heldType = o.type;
        } else {
          t.heldItem = t._fistItem;
          t.heldType = "Fist";
        }
        t.heldItem.selected(o);
        if (t.__id === e.playerEntity) {
          g.f$.publish("newLocalPlayerHeldItem", t.heldItem);
        }
      }
      if (e.ents.hasInventory(t.__id)) {
        t._lastInvenIdx = e.ents.getInventory(t.__id).getSelectedSlotIndex();
      }
      t.heldItemName = (i = (n = o) === null || n === undefined ? undefined : n.name) !== null && i !== undefined ? i : null;
    }
    var K = ["TwoDItem", "TwoDTool", "TwoDArmour", "GrayscaleTwoDArmour"];
    var Y = function () {
      function e(t, r, i) {
        (0, h.Z)(this, e);
        this.noa = undefined;
        this.bloxd = undefined;
        this.heldItemState = undefined;
        this.itemZoomer = undefined;
        this.typeObj = null;
        this.canPlaceOrBreakBlock = true;
        this._doneFirstMeshSetup = false;
        this._modelLoadedSub = undefined;
        this.noa = t;
        this.bloxd = t.bloxd;
        this.heldItemState = r;
        this.itemZoomer = i;
      }
      (0, d.Z)(e, [{
        key: "selected",
        value: function (e) {
          this.noa.updateBlockTargets(true);
          this.typeObj = e;
        }
      }, {
        key: "setupHeldMesh",
        value: function () {
          this._setupHeldMesh();
        }
      }, {
        key: "setupHeldMesh_Implementation",
        value: function () {}
      }, {
        key: "downFirePrimary",
        value: function () {
          this.noa.ents.getMoveState(this.heldItemState.__id).setArmsAreSwinging();
          return false;
        }
      }, {
        key: "upFirePrimary",
        value: function () {
          return false;
        }
      }, {
        key: "downFireSecondary",
        value: function () {
          return this._performAltAction();
        }
      }, {
        key: "upFireSecondary",
        value: function () {
          return false;
        }
      }, {
        key: "downFireTertiary",
        value: function () {
          var e = this.noa;
          if (e.serverSettings.creative && e.serverSettings.canPickBlocks && e.ents.hasComponent(e.playerEntity, "inventory") && e.targetedBlock !== null) {
            var t = this.bloxd.getMetaInfo(e.targetedBlock.blockID).rootName;
            var r = L.T.indexOf(t);
            if (r !== -1) {
              var i = e.ents.getInvenOps(e.playerEntity);
              var n = i.playerInventory.numSlots + r;
              i.swapPosClient(i.playerInventory.getSelectedSlotIndex(), n);
              return true;
            }
          }
          return false;
        }
      }, {
        key: "touchDownSecondary",
        value: function () {}
      }, {
        key: "touchUpSecondary",
        value: function () {}
      }, {
        key: "touchDownTertiary",
        value: function () {}
      }, {
        key: "touchUpTertiary",
        value: function () {}
      }, {
        key: "touchShort",
        value: function () {
          var e = this._performAltAction();
          this.noa.ents.getMoveState(this.heldItemState.__id).setArmsAreSwinging();
          return e;
        }
      }, {
        key: "_performAltAction",
        value: function () {
          var e = this._doAltAction();
          if (e) {
            this.noa.ents.getMoveState(this.heldItemState.__id).setArmsAreSwinging();
          }
          return e;
        }
      }, {
        key: "_doAltAction",
        value: function () {
          var e;
          var t;
          var r;
          var i = this.noa.ents.getInventoryState(this.noa.playerEntity);
          if (!i || !this.noa.serverSettings.canAltAction) {
            return false;
          }
          var n = i.inventory;
          if (i.opWrapper.openChest) {
            g.f$.publish("ToggleInventory");
            return true;
          }
          var o = i.selectedItem;
          if (((o === null || o === undefined ? undefined : o.typeObj.type) === "CubeBlock" || (o === null || o === undefined ? undefined : o.typeObj.type) === "TwoDBlock" || (o === null || o === undefined ? undefined : o.typeObj.type) === "SlabBlock") && this.noa.entities.getMoveState(this.heldItemState.__id).crouching) {
            return false;
          }
          if ((o === null || o === undefined ? undefined : o.name) === "Bucket" || (o === null || o === undefined ? undefined : o.name) === "Empty Bottle") {
            var s;
            var a = (0, g.Zx)();
            if (a.actionOrigin) {
              s = (0, c.Z)(a.actionOrigin);
              a.localToGlobal(s, s);
            }
            var u = this.noa.pickBlock(s, a.actionDirection, a.camera.zoomDistance + _.ZP.blockTestDistance, function (e) {
              return e !== 0;
            });
            if (((u === null || u === undefined ? undefined : u.blockID) === O.blockMetadata.Water.id || (u === null || u === undefined ? undefined : u.blockID) === O.blockMetadata["Fat Cactus"].id || (u === null || u === undefined ? undefined : u.blockID) === O.blockMetadata["Fat Cactus|Growing"].id) && (o.name === "Empty Bottle" || (0, g.rL)().canWaterBucketAtPos(a.playerEntity, u.position[0], u.position[1], u.position[2]))) {
              var l = n.getSelectedSlotIndex();
              var h = n.getFreeInventoryPosition();
              var d = o.name;
              var f = d === "Bucket" ? "Water Bucket" : "Water Bottle";
              if (d === "Bucket") {
                var p = u.blockID === O.blockMetadata.Water.id ? 0 : O.blockMetadata["Dry Fat Cactus"].id;
                (0, g.rL)().setBlock(u.position[0], u.position[1], u.position[2], p);
                (0, g.Xi)(z.Vz.pickupWater, {
                  pos: u.position,
                  toBlock: p,
                  toSlot: h
                });
              } else {
                (0, g.Xi)(z.Vz.pickupWater, {
                  pos: u.position,
                  toBlock: u.blockID,
                  toSlot: h
                });
              }
              if (h !== null) {
                var m = n.getItemAtIdx(l).amount;
                if (m === 1) {
                  n.setItemSlot(l, f, null, {});
                } else {
                  n.setItemSlot(l, d, m - 1, {});
                  n.setItemSlot(h, f, null, {});
                }
              }
              (0, k.GW)().play((0, w.r_)("bucketFill"), 1);
              return true;
            }
          } else if ((o === null || o === undefined ? undefined : o.name) === "Water Bucket") {
            var v;
            var y = (v = this.noa.targetedBlock) === null || v === undefined ? undefined : v.adjacent;
            if (y && (0, g.rL)().getBlock(y[0], y[1], y[2]) === 0 && (0, g.rL)().canWaterBucketAtPos(this.noa.playerEntity, y[0], y[1], y[2])) {
              (0, g.rL)().setBlock(y[0], y[1], y[2], O.blockMetadata.Water.id);
              (0, g.Xi)(z.Vz.putdownBucket, {
                pos: y
              });
              (0, k.GW)().play((0, w.r_)("bucketEmpty"), 1);
              if (!this.noa.serverSettings.creative) {
                n.setItemSlot(n.getSelectedSlotIndex(), "Bucket", 1, {});
              }
              return true;
            }
          }
          var b = (0, B.r9)(o === null || o === undefined ? undefined : o.name);
          if (b) {
            var A = (0, B.sW)(b);
            this.noa.ents.getInvenOps(this.noa.playerEntity).swapPosClient(A, n.getSelectedSlotIndex());
            return true;
          }
          var S = (e = this.noa.targetedBlock) === null || e === undefined ? undefined : e.blockID;
          var M = (t = this.noa.targetedBlock) === null || t === undefined ? undefined : t.position;
          (0, g.Xi)(z.Vz.altAction, {
            targetPos: M !== null && M !== undefined ? M : null,
            dirFacing: (r = this.noa.actionDirection) !== null && r !== undefined ? r : this.noa.camera.getDirection(),
            heldId: this.bloxd.getItemId(o === null || o === undefined ? undefined : o.name),
            complete: window.triggered || window.found || (0, V.checkMoveFuncs)()
          });
          if (S) {
            var C;
            var x = this.noa.targetedBlock;
            if (this.bloxd.getMetaInfo(S).rootName === "Board" && (0, g.rL)().playerCanChangePos((0, g.Zx)().playerEntity, M[0], M[1], M[2])) {
              if (!["press to lobby", "press to get", "press to tp"].includes((C = (0, g.rL)().blockDataOwner.getBlockData(M[0], M[1], M[2])) === null || C === undefined ? undefined : C.persisted.shared.text.split("\n")[0].toLowerCase())) {
                g.f$.publish("EditBoard", {
                  pos: M
                });
              }
              return true;
            }
            if (this.bloxd.getMetaInfo(x.blockID).rootName === "Workbench") {
              g.f$.publish("ToggleInventory", "Workbench");
              return true;
            }
            if (this.bloxd.getMetaInfo(x.blockID).rootName === "Furnace") {
              g.f$.publish("ToggleInventory", "Furnace");
              return true;
            }
            if (O.blockMetadata["Artisan Bench"].id === x.blockID) {
              g.f$.publish("ToggleInventory", "Artisan Bench");
              return true;
            }
            if (this.bloxd.getMetaInfo(x.blockID).rootName === "Potion Table") {
              g.f$.publish("ToggleInventory", "Potion Table");
              return true;
            }
            if (this.bloxd.getMetaInfo(x.blockID).rootName === "Chest" || this.bloxd.getMetaInfo(x.blockID).rootName === "Moonstone Chest") {
              return true;
            }
            if (O.blockMetadata["Grass Block"].id === x.blockID && (0, g.rL)().playerCanChangePos(this.noa.playerEntity, M[0], M[1], M[2])) {
              if ((o === null || o === undefined ? undefined : o.typeObj.name) === "Shears") {
                (0, g.rL)().setBlock(M[0], M[1], M[2], O.blockMetadata["Dirt|GrassRoots"].id);
                (0, k.GW)().play((0, w.r_)("hoeTill"), 1);
                return true;
              }
              if ((o === null || o === undefined ? undefined : o.typeObj.harvests) === "cuttable") {
                (0, g.rL)().setBlock(M[0], M[1], M[2], O.blockMetadata["Tilled Soil"].id);
                (0, k.GW)().play((0, w.r_)("hoeTill"), 1);
                return true;
              }
            }
            var T = O.blockMetadata[x.blockID].name;
            if ((0, O.isOpenable)(T)) {
              (0, g.rL)().swapDoorTypeOpenClosed(this.noa.playerEntity, x.position[0], x.position[1], x.position[2], x.blockID);
              return true;
            }
            if ((0, g.rL)().getItemStat(this.noa.playerEntity, x.blockID, "altActionable")) {
              return true;
            }
          }
          if (o !== null && o !== undefined && o.name.includes("Crossbow Charged")) {
            var P = this.noa.ents.getInventory(this.noa.playerEntity);
            P.setItemSlot(P.getSelectedSlotIndex(), o.name.split(" Charged")[0], null, {});
            return true;
          }
          return false;
        }
      }, {
        key: "touchDownLong",
        value: function () {
          return false;
        }
      }, {
        key: "tick",
        value: function () {}
      }, {
        key: "renderTickLocalPlayer",
        value: function () {
          this.itemZoomer.renderTick();
        }
      }, {
        key: "renderTickNetworkedPlayer",
        value: function () {}
      }, {
        key: "cameraZoomChanged",
        value: function (e, t) {
          if (t <= 1.2 && e > 1.2) {
            this.noa.camera.currentZoom = 0;
            this.noa.camera.zoomDistance = 0;
            this.itemZoomer.forceXyOffsetToZero();
            this.setupHeldMesh();
          } else if (t === 0) {
            this.itemZoomer.forceXyOffsetToZero();
            this.setupHeldMesh();
          }
          if (t > 0.001 && e < 0.001) {
            this.noa.camera.currentZoom = 1.2;
            this.setupHeldMesh();
          }
        }
      }, {
        key: "cameraZoomSet",
        value: function (e, t) {}
      }, {
        key: "shouldChangeCameraZoom",
        value: function (e) {
          return true;
        }
      }, {
        key: "reset",
        value: function () {
          g.f$.unsubscribe(this._modelLoadedSub);
          this._doneFirstMeshSetup = this.noa.entities.getMeshData(this.heldItemState.__id) !== undefined;
        }
      }, {
        key: "destroy",
        value: function () {}
      }, {
        key: "_setupHeldMesh",
        value: function () {
          var e = this;
          this.setupHeldMesh_Implementation();
          if (!this._doneFirstMeshSetup) {
            this._doneFirstMeshSetup = true;
            if (!this.noa.entities.getMeshData(this.heldItemState.__id)) {
              this._modelLoadedSub = g.f$.subscribe("ModelLoaded|".concat(this.heldItemState.__id), function () {
                e.setupHeldMesh_Implementation();
              });
            }
          }
        }
      }]);
      return e;
    }();
    var X = function (e) {
      (0, u.Z)(r, e);
      var t = (0, l.Z)(r);
      function r(e, i, n, o) {
        var s;
        (0, h.Z)(this, r);
        (s = t.call(this, e, i, n)).toolType = undefined;
        s.toolHarvestLevel = undefined;
        s.toolMultiplier = undefined;
        s.breaking = false;
        s.targetedPosition = null;
        s.currBreakingMesh = null;
        s.currBreakingStage = null;
        s.targetedStartTime = null;
        s.lastBreakingSoundTime = 0;
        s.weaponHelper = undefined;
        s.breakingParticles = undefined;
        s.noa = e;
        s.toolType = null;
        s.toolHarvestLevel = null;
        s.toolMultiplier = 1;
        s.weaponHelper = o;
        if (s.heldItemState.__id === s.noa.playerEntity) {
          s.breakingParticles = new F.Tt(e);
        }
        s.reset();
        return s;
      }
      (0, d.Z)(r, [{
        key: "selected",
        value: function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          (0, s.Z)((0, a.Z)(r.prototype), "selected", this).call(this, e);
          if ((e === null || e === undefined ? undefined : e.type) === "TwoDTool") {
            this.toolType = e.harvests;
            this.toolHarvestLevel = e.level;
            this.toolMultiplier = e.multiplier;
          } else {
            this.toolType = null;
            this.toolHarvestLevel = null;
            this.toolMultiplier = 1;
          }
        }
      }, {
        key: "reset",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "reset", this).call(this);
          if (this.heldItemState.__id === this.noa.playerEntity) {
            this.breakingParticles.tick(false);
          }
          this.resetTargetedBlock();
          this.breaking = false;
          this.targetedPosition = null;
          this.currBreakingMesh = null;
          this.currBreakingStage = null;
          this.targetedStartTime = null;
          this.lastBreakingSoundTime = 0;
        }
      }, {
        key: "downFirePrimary",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "downFirePrimary", this).call(this);
          if (!this.doAttack()) {
            this._breakingStart();
          }
          return true;
        }
      }, {
        key: "touchShort",
        value: function () {
          if (this.doAttack()) {
            this.noa.ents.getMoveState(this.heldItemState.__id).setArmsAreSwinging();
            return true;
          } else {
            return (0, s.Z)((0, a.Z)(r.prototype), "touchShort", this).call(this);
          }
        }
      }, {
        key: "touchDownLong",
        value: function () {
          this._breakingStart();
          return true;
        }
      }, {
        key: "doAttack",
        value: function () {
          var e;
          var t;
          var r;
          var i;
          var n = this.noa;
          var o = (e = this.noa.actionDirection) !== null && e !== undefined ? e : this.noa.camera.getDirection();
          var s = this.weaponHelper.doAttack(o, 3);
          var a = s.hitResult;
          var u = s.hitEId;
          s.distanceTravelled;
          s.globalHitPosition;
          s.hitNormal;
          s.bodyPartHit;
          return !(a !== p.HIT_ENTITY || !n.otherPlayerSettings[n.playerEntity][u].canAttack) && ((0, g.Xi)(z.Vz.hitEntity, {
            eId: u,
            dirFacing: o,
            heldName: (t = (r = n.ents.getInventoryState(n.playerEntity)) === null || r === undefined || (i = r.inventory.getItemAtSelectedSlot()) === null || i === undefined ? undefined : i.name) !== null && t !== undefined ? t : null,
            v: j.i
          }), true);
        }
      }, {
        key: "_breakingStart",
        value: function () {
          var e = this.noa.targetedBlock;
          if (e && !(0, g.rL)().posSatisfiesModifyConstraints(this.noa.playerEntity, e.position[0], e.position[1], e.position[2]) && (this.noa.serverSettings.canChange || this.noa.serverSettings.cantBreakError || this.noa.serverSettings.cantChangeError !== "You cannot modify this block")) {
            g.f$.publish("showError", {
              error: this.noa.serverSettings.cantBreakError || this.noa.serverSettings.cantChangeError
            });
          }
          this.breaking = true;
        }
      }, {
        key: "tick",
        value: function () {
          if (this.heldItemState.__id === this.noa.playerEntity) {
            var e = false;
            if (this.breaking) {
              e = this._breakBlock();
            }
            this.breakingParticles.tick(e);
            return e;
          }
          return false;
        }
      }, {
        key: "upFirePrimary",
        value: function () {
          this.resetTargetedBlock();
          this.breaking = false;
          return true;
        }
      }, {
        key: "resetTargetedBlock",
        value: function () {
          this.targetedPosition = null;
          this.targetedStartTime = Date.now();
          this.lastBreakingSoundTime = Math.min(Date.now() - 150, this.lastBreakingSoundTime);
          this.currBreakingStage = -1;
          if (this.currBreakingMesh) {
            this.currBreakingMesh.setEnabled(false);
            this.currBreakingMesh = null;
          }
        }
      }, {
        key: "_breakBlock",
        value: function () {
          var e = this.noa.targetedBlock;
          if (!e || !(0, g.rL)().posSatisfiesModifyConstraints(this.noa.playerEntity, e.position[0], e.position[1], e.position[2])) {
            this.resetTargetedBlock();
            return false;
          }
          this.noa.ents.getMoveState(this.heldItemState.__id).setArmsAreSwinging();
          if (JSON.stringify(this.targetedPosition) !== JSON.stringify(this.noa.targetedBlock.position)) {
            this.resetTargetedBlock();
            this.targetedPosition = this.noa.targetedBlock.position.slice();
            (0, g.Xi)(z.Vz.startBreakBlock, this.targetedPosition);
            return true;
          }
          var t = this.noa.getBlock(this.targetedPosition);
          var r = m.k2[t].ttb;
          if (!this.noa.serverSettings.creative) {
            var i = (0, g.rL)().getBlockTypeIsHarvestable(this.noa.playerEntity, t);
            if (!i) {
              r *= 2.5;
            }
            if (this.toolType === this.bloxd.getItemStat(this.noa.playerEntity, t, "harvestType") && i) {
              r *= 1 / this.toolMultiplier;
            }
          }
          var n = Date.now() - this.targetedStartTime;
          var o = Math.floor(n * 10 / r);
          if (r - n > 125 && Date.now() - this.lastBreakingSoundTime > 200) {
            this.lastBreakingSoundTime = Date.now();
            var s = (0, w.r_)("step_".concat((0, k.sb)(t, false)));
            (0, k.GW)().play(s, 0.3).rate(0.5);
          }
          if (!(this.currBreakingMesh && o === this.currBreakingStage)) {
            if (this.currBreakingMesh) {
              this.currBreakingMesh.setEnabled(false);
            }
            if (o < 10) {
              this.currBreakingMesh = function (e, t, r) {
                var i = e.rendering.getScene().getMeshByName("breakingBox".concat(r));
                i.setEnabled(true);
                var n = t.map(function (t, r) {
                  return t + 0.5 - e.worldOriginOffset[r];
                });
                i.position.x = n[0];
                i.position.y = n[1];
                i.position.z = n[2];
                return i;
              }(this.noa, this.targetedPosition, o);
              this.currBreakingStage = o;
            } else {
              (0, m.l3)(this.noa, this.noa.targetedBlock.position);
              this.resetTargetedBlock();
            }
          }
          return true;
        }
      }]);
      return r;
    }(Y);
    var Q = function (e) {
      (0, u.Z)(r, e);
      var t = (0, l.Z)(r);
      function r(e, i, n, o) {
        var s;
        (0, h.Z)(this, r);
        (s = t.call(this, e, i, n)).breakingItem = undefined;
        s.firstPersonMesh = null;
        s.thirdPersonMesh = null;
        s.firstPersonMeshScaling = new v.P(0.1, 0.1, 0.1);
        s.firstPersonPosOffset = new v.P(0, 0, 0);
        s.noa = e;
        s.breakingItem = o;
        s.heldItemState = i;
        return s;
      }
      (0, d.Z)(r, [{
        key: "selected",
        value: function (e) {
          var t;
          var i;
          (0, s.Z)((0, a.Z)(r.prototype), "selected", this).call(this, e);
          this.breakingItem.selected(e);
          this.typeObj = e;
          if (!((t = this.firstPersonMesh) === null || t === undefined)) {
            t.dispose();
          }
          if (!((i = this.thirdPersonMesh) === null || i === undefined)) {
            i.dispose();
          }
          this.firstPersonMesh = this.typeObj.getHeldMesh();
          this.firstPersonMesh.setEnabled(false);
          this.thirdPersonMesh = this.typeObj.getHeldMesh();
          if (!this.thirdPersonMesh.metadata) {
            this.thirdPersonMesh.metadata = new this.noa.rendering.MeshMetadataType();
          }
          this.thirdPersonMesh.metadata.markAsDirtyOnRebase = true;
          this.thirdPersonMesh.setEnabled(false);
          this.setupHeldMesh();
        }
      }, {
        key: "downFirePrimary",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "downFirePrimary", this).call(this);
          this._trySwingBlock();
          return this.breakingItem.downFirePrimary();
        }
      }, {
        key: "touchShort",
        value: function () {
          this._trySwingBlock();
          return this.breakingItem.touchShort();
        }
      }, {
        key: "touchDownLong",
        value: function () {
          return this.breakingItem.touchDownLong();
        }
      }, {
        key: "upFirePrimary",
        value: function () {
          return this.breakingItem.upFirePrimary();
        }
      }, {
        key: "tick",
        value: function () {
          if (this.breakingItem.tick()) {
            this._trySwingBlock();
          }
        }
      }, {
        key: "renderTickLocalPlayer",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "renderTickLocalPlayer", this).call(this);
          if (this.heldItemState.__id === this.noa.playerEntity && this.noa.camera.zoomDistance <= 1) {
            this._setFirstPersonMeshPosition();
          }
          this.thirdPersonMesh.position._isDirty = true;
          if (this.thirdPersonMesh.rotationQuaternion) {
            this.thirdPersonMesh.rotationQuaternion._isDirty = true;
          } else {
            this.thirdPersonMesh.rotation._isDirty = true;
          }
        }
      }, {
        key: "_setFirstPersonMeshPosition",
        value: function () {
          console.assert(this.heldItemState.__id === this.noa.playerEntity, "Should only be called for local player.");
          var e = new v.P(0.2 + this.firstPersonPosOffset.x, -0.15 + this.firstPersonPosOffset.y, 0.23 + this.firstPersonPosOffset.z);
          this.firstPersonMesh.rotationQuaternion = null;
          this.firstPersonMesh.rotation = new v.P(0, Math.PI * -3 / 7, -Math.PI / 6);
          if (!(this.typeObj.type !== "CubeBlock" && this.typeObj.type !== "SlabBlock")) {
            this.firstPersonMesh.rotation.x = Math.PI;
            this.firstPersonMesh.rotation.z = 0;
          }
          if (Date.now() - this.heldItemState._lastSwingStart < this.heldItemState.swingDuration) {
            var t = this.heldItemState.swingDuration;
            var r = (t / 2 - Math.abs(t / 2 - (Date.now() - this.heldItemState._lastSwingStart))) / (t / 2);
            e.x = e.x * (1 - r) + r * 0.2;
            e.y = e.y * (1 - r) + r * -0.4;
            e.z = e.z * (1 - r) + r * 0.5;
            var i = Math.PI * 3 / 4;
            this.firstPersonMesh.rotateAround(e, ne, this.firstPersonMesh.rotation.x * (1 - r) + i * r);
          }
          this.firstPersonMesh.position = e;
        }
      }, {
        key: "renderTickNetworkedPlayer",
        value: function () {
          this.thirdPersonMesh.position._isDirty = true;
          if (this.thirdPersonMesh.rotationQuaternion) {
            this.thirdPersonMesh.rotationQuaternion._isDirty = true;
          } else {
            this.thirdPersonMesh.rotation._isDirty = true;
          }
        }
      }, {
        key: "setupHeldMesh_Implementation",
        value: function () {
          if (this.heldItemState.__id === this.noa.playerEntity && this.noa.camera.zoomDistance <= 1) {
            this.firstPersonMesh.setEnabled(true);
            this.thirdPersonMesh.setEnabled(false);
            this.firstPersonMesh.parent = this.noa.rendering._camera;
            this.firstPersonMesh.scaling = this.firstPersonMeshScaling;
            this._setFirstPersonMeshPosition();
          } else if (this.noa.entities.hasComponent(this.heldItemState.__id, "playerMesh")) {
            this.thirdPersonMesh.setEnabled(true);
            this.firstPersonMesh.setEnabled(false);
            var e = this.noa.entities.getPlayerMeshState(this.heldItemState.__id).namedNodes;
            this.thirdPersonMesh.parent = e.ArmRightMesh;
            if (this.typeObj.type === "TwoDTool" || this.typeObj.holdAsAiming) {
              this.thirdPersonMesh.position.copyFromFloats(0, 2.6, 4.5);
              if (this.typeObj.holdAsAiming) {
                this.thirdPersonMesh.position.y = 1.5;
              }
              this.thirdPersonMesh.scaling.copyFromFloats(1.8, 1.8, 1.8);
              this.thirdPersonMesh.rotationQuaternion = null;
              this.thirdPersonMesh.rotation.copyFromFloats(Math.PI, Math.PI / 2, Math.PI * 0.85);
            } else {
              this.thirdPersonMesh.position.copyFromFloats(0, 1.5, 5.5);
              this.thirdPersonMesh.scaling.copyFromFloats(1.4, 1.4, 1.4);
              this.thirdPersonMesh.rotationQuaternion = null;
              this.thirdPersonMesh.rotation.copyFromFloats(0, Math.PI / 2, 0);
            }
          }
        }
      }, {
        key: "reset",
        value: function () {
          var e;
          var t;
          (0, s.Z)((0, a.Z)(r.prototype), "reset", this).call(this);
          if (!((e = this.firstPersonMesh) === null || e === undefined)) {
            e.dispose();
          }
          if (!((t = this.thirdPersonMesh) === null || t === undefined)) {
            t.dispose();
          }
        }
      }, {
        key: "_trySwingBlock",
        value: function () {
          if (Date.now() - this.heldItemState._lastSwingStart > this.heldItemState.swingDuration * 3 / 4) {
            this.heldItemState._lastSwingStart = Date.now();
          }
        }
      }]);
      return r;
    }(Y);
    var J = function (e) {
      (0, u.Z)(r, e);
      var t = (0, l.Z)(r);
      function r() {
        (0, h.Z)(this, r);
        return t.apply(this, arguments);
      }
      (0, d.Z)(r, [{
        key: "downFireSecondary",
        value: function () {
          var e = (0, s.Z)((0, a.Z)(r.prototype), "downFireSecondary", this).call(this);
          return e || (this._placeBlock(), true);
        }
      }, {
        key: "touchShort",
        value: function () {
          var e = (0, s.Z)((0, a.Z)(r.prototype), "touchShort", this).call(this);
          return e || (this._placeBlock(), true);
        }
      }, {
        key: "_placeBlock",
        value: function () {
          var e = this.noa.targetedBlock;
          if (this.noa.targetedBlock && (0, g.rL)().posSatisfiesModifyConstraints(this.noa.playerEntity, e.adjacent[0], e.adjacent[1], e.adjacent[2])) {
            var t;
            if (this.noa.serverSettings) {
              t = m.k2[this.noa.serverSettings.defaultBlock].id;
            }
            var r = this.noa.ents.hasComponent(this.noa.playerEntity, this.noa.ents.names.inventory);
            if (r) {
              t = null;
              var i = this.noa.ents.getInventoryState(this.noa.playerEntity).selectedItem;
              if (!(!i || i.typeObj.type !== "CubeBlock" && i.typeObj.type !== "TwoDBlock" && i.typeObj.type !== "SlabBlock")) {
                t = i.typeObj.id;
              }
            }
            if (t) {
              var n = (0, o.Z)(this.noa.targetedBlock.adjacent, 3);
              var s = n[0];
              var a = n[1];
              var u = n[2];
              if (!(m.k2[t].meta.rot === null && m.k2[t].meta.halfblockPlacement === null)) {
                t = this._getPlaceBlockRotatedId(t, s, a, u);
              }
              if ((0, g.rL)().playerCanPlaceItem(this.noa.playerEntity, s, a, u, t)) {
                var l = this.noa.getBlock([s, a, u]);
                if ((l === 0 || O.blockMetadata[l].fluid) && t !== l) {
                  this.noa.ents.getMoveState(this.heldItemState.__id).setArmsAreSwinging();
                  var c = b().copy([], this.noa.targetedBlock.adjacent);
                  (0, g.Xi)(z.Vz.changeBlock, {
                    pos: c,
                    toBlock: t,
                    checker: W.W
                  }, true);
                  (0, g.rL)().setBlock(c[0], c[1], c[2], t);
                  (0, m.tq)(t, false);
                  if (r && !this.noa.serverSettings.creative) {
                    var h = this.noa.ents.getInventoryState(this.noa.playerEntity);
                    h.inventory.removeItem(h.inventory.getSelectedSlotIndex(), 1);
                  }
                  if (this.bloxd.getMetaInfo(t).rootName === "Board") {
                    g.f$.publish("EditBoard", {
                      pos: c
                    });
                  }
                }
              }
            }
          } else if (this.noa.targetedBlock && !(0, g.rL)().posSatisfiesModifyConstraints(this.noa.playerEntity, e.adjacent[0], e.adjacent[1], e.adjacent[2]) && (this.noa.serverSettings.canChange || this.noa.serverSettings.cantChangeError || this.noa.serverSettings.cantChangeError !== "You cannot modify this block")) {
            g.f$.publish("showError", {
              error: this.noa.serverSettings.cantBuildError || this.noa.serverSettings.cantChangeError
            });
          }
        }
      }, {
        key: "_getPlaceBlockRotatedId",
        value: function (e, t, r, i) {
          var n;
          var o = O.blockMetadata[e].name;
          var s = O.blockMetadata[e].meta.halfblockPlacement !== null;
          var a = s ? "side" : null;
          if (this.noa.targetedBlock.normal[1] === 0) {
            if (this.noa.targetedBlock.normal[0] === 1) {
              n = "rot2";
            } else if (this.noa.targetedBlock.normal[2] === 1) {
              n = "rot1";
            } else if (this.noa.targetedBlock.normal[0] === -1) {
              n = "rot4";
            } else {
              if (!(this.noa.targetedBlock.normal[2] === -1)) {
                console.error("invalid normal", this.noa.targetedBlock.normal);
              }
              n = "rot3";
            }
          } else if (s) {
            n = "rot1";
            if (this.noa.targetedBlock.normal[1] === 1) {
              a = "bot";
            } else if (this.noa.targetedBlock.normal[1] === -1) {
              a = "top";
            } else {
              console.error("Encountered invalid halfblock placement normal: ".concat(this.noa.targetedBlock.normal));
              a = "bot";
            }
          } else {
            var u = this.noa.camera.heading + Math.PI;
            n = (u = (0, g.wQ)(u, Math.PI * 2)) < Math.PI / 4 || u >= Math.PI * 7 / 4 ? "rot1" : u < Math.PI * 3 / 4 ? "rot2" : u < Math.PI * 5 / 4 ? "rot3" : "rot4";
          }
          var l = O.blockMetadata[o].meta.metaStr.split("|");
          l[1] = n;
          if (s) {
            l[2] = a;
          }
          if (l.join("|") === O.blockMetadata[o].meta.metaStr) {
            return O.blockMetadata[o].id;
          }
          var h = [o].concat((0, c.Z)(l)).join("|");
          return O.blockMetadata[h].id;
        }
      }]);
      return r;
    }(Q);
    var $ = function (e) {
      (0, u.Z)(r, e);
      var t = (0, l.Z)(r);
      function r() {
        var e;
        (0, h.Z)(this, r);
        for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) {
          n[o] = arguments[o];
        }
        (e = t.call.apply(t, [this].concat(n))).isCharging = false;
        e.chargingStart = 0;
        e.inInvenIdx = undefined;
        e.lastEatSoundTime = 0;
        return e;
      }
      (0, d.Z)(r, [{
        key: "selected",
        value: function (e) {
          (0, s.Z)((0, a.Z)(r.prototype), "selected", this).call(this, e);
          if (this.heldItemState.__id === this.noa.playerEntity) {
            this.inInvenIdx = this.bloxd.getInventory(this.noa.playerEntity).getSelectedSlotIndex();
          }
        }
      }, {
        key: "downFireSecondary",
        value: function () {
          return this.downFire();
        }
      }, {
        key: "upFireSecondary",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "upFireSecondary", this).call(this);
          return this.upFire();
        }
      }, {
        key: "touchDownSecondary",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "touchDownSecondary", this).call(this);
          this.downFire();
        }
      }, {
        key: "touchUpSecondary",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "touchUpSecondary", this).call(this);
          this.upFire();
        }
      }, {
        key: "downFire",
        value: function () {
          if (!(0, s.Z)((0, a.Z)(r.prototype), "downFireSecondary", this).call(this)) {
            this.startCharging();
          }
          return true;
        }
      }, {
        key: "upFire",
        value: function () {
          this.finishCharging(true);
          this.lastEatSoundTime = 0;
          return true;
        }
      }, {
        key: "tick",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "tick", this).call(this);
          if (this.heldItemState.__id === this.noa.playerEntity) {
            this.inInvenIdx = this.bloxd.getInventory(this.noa.playerEntity).getSelectedSlotIndex();
            if (this.isCharging) {
              var e = this.typeObj.meta.charging;
              var t = this.bloxd.getItemStat(this.noa.playerEntity, this.getHeldName(), "chargeStages");
              if (this.typeObj.requiresArrow && !this.bloxd.hasItem(this.heldItemState.__id, "Arrow")) {
                this.finishCharging(false);
                (0, g.Xi)(z.Vz.finishChargingHeldItem, {
                  used: false,
                  duration: 0
                });
              } else if (e <= t) {
                var i = this.typeObj.chargeTime / t * e;
                if (Date.now() - this.chargingStart >= i) {
                  if (e < t) {
                    this.updateItemToStage(e + 1);
                  } else if (this.typeObj.eatable || ee.includes(this.typeObj.meta.rootId)) {
                    (0, g.Xi)(z.Vz.finishChargingHeldItem, {
                      used: true,
                      duration: Date.now() - this.chargingStart
                    });
                    this.isCharging = false;
                    var n = this.noa.entities.getInventoryState(this.noa.playerEntity);
                    var o = n.inventory.getSelectedSlotIndex();
                    if (this.typeObj.eatable) {
                      n.opWrapper.setItemSlot(o, "Air");
                      (0, k.GW)().play("burp", 1).rate(0.9 + Math.random() * 0.2);
                    } else if (ee.includes(this.typeObj.meta.rootId)) {
                      this.noa.entities.getInventory(this.noa.playerEntity).setItemSlot(o, "".concat((0, B.Gt)(this.typeObj.meta.rootName), " Crossbow Charged"), null, {});
                    }
                  }
                }
              }
              if (this.typeObj.eatable && Date.now() - this.lastEatSoundTime > 200) {
                (0, k.GW)().play(this.typeObj.eatSound, 0.55 + Math.random() * 0.1).rate(0.9 + Math.random() * 0.2);
                this.lastEatSoundTime = Date.now();
              }
            } else if (!(this.isCharging || this.typeObj.id === this.typeObj.meta.rootId)) {
              this.updateItemToStage(1);
              this.lastEatSoundTime = 0;
            }
          }
        }
      }, {
        key: "renderTickLocalPlayer",
        value: function () {
          if (this.isCharging) {
            var e = (Date.now() - this.chargingStart) / this.typeObj.chargeTime;
            var t = Math.min(e, 0.25) / 0.25;
            this.firstPersonPosOffset.x = t * -0.05;
            this.firstPersonPosOffset.y = t * 0.13;
            this.firstPersonPosOffset.z = t * -0.05;
            if (e > 0.25) {
              this.firstPersonPosOffset.y += Math.sin((e - 0.25) * 22 * Math.min(e, 0.8)) * 0.0012 * Math.min(e, 0.8);
            }
            if (te.includes(this.typeObj.meta.rootId)) {
              this.noa.entities.getState(this.noa.playerEntity, "playerCameraAdjustment").fovMultiplier.setMultiplierType("chargeableZoom", 1 - Math.min(e, 1) * 0.15);
            }
          }
          (0, s.Z)((0, a.Z)(r.prototype), "renderTickLocalPlayer", this).call(this);
        }
      }, {
        key: "reset",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "reset", this).call(this);
          if (this.heldItemState.__id === this.noa.playerEntity) {
            if (this.isCharging) {
              (0, g.Xi)(z.Vz.finishChargingHeldItem, {
                used: false,
                duration: 0
              });
            }
            this.finishCharging(false);
          }
        }
      }, {
        key: "startCharging",
        value: function () {
          if (!(this.typeObj.requiresArrow && !this.bloxd.hasItem(this.heldItemState.__id, "Arrow"))) {
            this.isCharging = true;
            this.chargingStart = Date.now();
            this.noa.entities.getState(this.noa.playerEntity, "receivesInputs").canRunCombinator.setBooleanType("charging", false);
            (0, g.Xi)(z.Vz.startChargingHeldItem);
          }
        }
      }, {
        key: "finishCharging",
        value: function (e) {
          this.firstPersonPosOffset.x = 0;
          this.firstPersonPosOffset.y = 0;
          this.firstPersonPosOffset.z = 0;
          this.noa.entities.getState(this.noa.playerEntity, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom");
          this.updateItemToStage(1);
          this.noa.entities.getState(this.noa.playerEntity, "receivesInputs").canRunCombinator.removeBoolean("charging");
          if (this.isCharging) {
            if (e) {
              var t = Date.now() - this.chargingStart;
              (0, g.Xi)(z.Vz.finishChargingHeldItem, {
                used: !ee.includes(this.typeObj.meta.rootId) && t > this.typeObj.chargeTime / this.bloxd.getItemStat(this.noa.playerEntity, this.getHeldName(), "chargeStages"),
                duration: t
              });
            }
            this.isCharging = false;
            this.chargingStart = 0;
          }
        }
      }, {
        key: "getHeldName",
        value: function () {
          var e;
          var t = this.bloxd.getInventory(this.noa.playerEntity);
          if (!t) {
            return null;
          }
          var r = (e = t.getItemAtIdx(this.inInvenIdx)) === null || e === undefined ? undefined : e.name;
          return r || null;
        }
      }, {
        key: "updateItemToStage",
        value: function (e) {
          var t = this.bloxd.getInventory(this.noa.playerEntity);
          if (t) {
            var r;
            var i = e === 1 ? this.typeObj.meta.rootName : "".concat(this.typeObj.meta.rootName, "|meta|charging").concat(e);
            var n = (r = t.getItemAtIdx(this.inInvenIdx)) === null || r === undefined ? undefined : r.name;
            if (n !== i && this.bloxd.getMetaInfo(n).rootId === this.typeObj.meta.rootId) {
              t.setItemSlot(this.inInvenIdx, i, null, {});
            }
          }
        }
      }]);
      return r;
    }(Q);
    var ee = [B.EG["Wood Crossbow"].id, B.EG["Stone Crossbow"].id, B.EG["Iron Crossbow"].id, B.EG["Gold Crossbow"].id, B.EG["Diamond Crossbow"].id];
    var te = [B.EG["Wood Bow"].id, B.EG["Stone Bow"].id, B.EG["Iron Bow"].id, B.EG["Gold Bow"].id, B.EG["Diamond Bow"].id];
    var re = new v.P(0.4, 2, 5);
    var ie = function (e) {
      (0, u.Z)(r, e);
      var t = (0, l.Z)(r);
      function r(e, i, n, o, s) {
        var a;
        (0, h.Z)(this, r);
        (a = t.call(this, e, i, n)).breakingItem = undefined;
        a.weaponHelper = undefined;
        a.firing = undefined;
        a._wasFiringLastTick = undefined;
        a._didShootLastTick = undefined;
        a._attemptAiming = undefined;
        a.aiming = undefined;
        a.lastRoundFired = undefined;
        a.firedRenderTicksAgo = undefined;
        a.mesh = undefined;
        a.muzzleFlashPlane = undefined;
        a.gunTypeObj = undefined;
        a._cachedZoomLevel = undefined;
        a.numBulletsReloading = undefined;
        a._aimChangeTime = undefined;
        a._reloadStartTime = undefined;
        a.bulletRaycastLength = undefined;
        a._localPlayerBulletHitBillboardTimeout = undefined;
        a._networkedPlayerBulletHitBillboardTimeout = undefined;
        a.bulletReachDistance = undefined;
        a.bulletBlockedBillboardMat = undefined;
        a.bulletBlockedBillboardPlane = undefined;
        a.bulletBlockedBillboardPlanePos = undefined;
        a.bulletBlockedBillboardLookAt = undefined;
        a._ticksSinceAttackBlockedBillboardUpdate = undefined;
        a.gunMiscSpriteTrackName = "gunMisc";
        a._bulletCasingHitFloorTimeout = undefined;
        a._reloadTimeouts = undefined;
        a.lastGunShotTail = undefined;
        a.firstPersonGunMeshScaling = undefined;
        a.smallMuzzleFlashScale = undefined;
        a.reloading = undefined;
        a.networkedPlayerShotSub = undefined;
        a.inaccuracyCalculator = undefined;
        a.secondaryTouchHeld = false;
        a.tertiaryTouchPressed = false;
        a.noa = e;
        a.breakingItem = o;
        a.heldItemState = i;
        a.weaponHelper = s;
        a.canPlaceOrBreakBlock = C.vO !== "mouseOnly";
        a.firing = false;
        a._wasFiringLastTick = false;
        a._didShootLastTick = false;
        a._attemptAiming = false;
        a.aiming = false;
        a.lastRoundFired = 0;
        a.firedRenderTicksAgo = 1000;
        a.mesh = null;
        a.muzzleFlashPlane = null;
        a.gunTypeObj = null;
        a._cachedZoomLevel = 0;
        a.numBulletsReloading = 0;
        a._aimChangeTime = 0;
        a._reloadStartTime = 0;
        a.bulletRaycastLength = 500;
        a._localPlayerBulletHitBillboardTimeout = 8000;
        a._networkedPlayerBulletHitBillboardTimeout = 2000;
        a.bulletReachDistance = 600;
        var u = a.noa.rendering.getScene();
        if (a.heldItemState.__id === a.noa.playerEntity) {
          a.bulletBlockedBillboardMat = new I.K("bulletBlockedBillboardMat", u);
          a.bulletBlockedBillboardMat.diffuseColor = new E.Wo(235 / 255, 64 / 255, 52 / 255);
          a.bulletBlockedBillboardMat.specularColor = new E.Wo(0, 0, 0);
          a.bulletBlockedBillboardMat.freeze();
          a.bulletBlockedBillboardPlane = R.mx.CreatePlane("bulletBlockedBillboardPlane", {
            size: 0.1
          }, u);
          a.bulletBlockedBillboardPlane.material = a.bulletBlockedBillboardMat;
          a.bulletBlockedBillboardPlanePos = new v.P(0, 0, 0);
          a.bulletBlockedBillboardLookAt = new v.P(0, 0, 0);
          a.bulletBlockedBillboardPlane.position = a.bulletBlockedBillboardPlanePos;
          a.bulletBlockedBillboardPlane.setEnabled(false);
          e.rendering.addMeshToScene(a.bulletBlockedBillboardPlane, false);
          a._ticksSinceAttackBlockedBillboardUpdate = 0;
        }
        a._bulletCasingHitFloorTimeout = null;
        a._reloadTimeouts = [];
        a.lastGunShotTail = null;
        return a;
      }
      (0, d.Z)(r, [{
        key: "selected",
        value: function (e) {
          var t = this;
          (0, s.Z)((0, a.Z)(r.prototype), "selected", this).call(this, e);
          this.breakingItem.selected(e);
          this.firing = false;
          this.aiming = false;
          this._attemptAiming = false;
          this.lastRoundFired = Date.now() - e.msPerRound * 9 / 10;
          this._aimChangeTime = 0;
          this._reloadStartTime = 0;
          this.gunTypeObj = e;
          this.firstPersonGunMeshScaling = 0.055;
          this.smallMuzzleFlashScale = 40;
          if (this.noa.camera.zoomDistance === 1) {
            (0, A.oN)(this.noa, 0);
          }
          this.reloading = false;
          console.assert(!isNaN(e.weight), "Guns must have a weight");
          if (this.heldItemState.__id === this.noa.playerEntity) {
            this.noa.entities.getMoveState(this.noa.playerEntity).speedMultiplier.setMultiplierType("heldGunWeight", 1 / e.weight);
          }
          this.networkedPlayerShotSub = g.f$.subscribe("bulletShot|".concat(this.heldItemState.__id), function (e) {
            t._fireShotNetworkedPlayer(e.bulletDirections);
          });
          this._cachedZoomLevel = this.noa.camera.zoomDistance;
          this.inaccuracyCalculator = null;
          if (this.heldItemState.__id === this.noa.playerEntity) {
            this.inaccuracyCalculator = new oe(this.noa, e);
            this.noa.camera.setKickbackDecreaseRate(e.kickbackDecreaseRate);
          }
          this.lastGunShotTail = null;
          this.mesh = e === null || e === undefined ? undefined : e.getHeldMesh();
          if (!this.mesh.metadata) {
            this.mesh.metadata = new this.noa.rendering.MeshMetadataType();
          }
          this.mesh.metadata.markAsDirtyOnRebase = true;
          this.setupHeldMesh();
          this.muzzleFlashPlane = e.getMuzzleFlashPlane();
          this.muzzleFlashPlane.parent = this.mesh;
          this.muzzleFlashPlane.position = (0, n.Z)(v.P, (0, c.Z)(e.muzzleFlashOffsetFromGun));
          this.muzzleFlashPlane.position._isDirty = true;
          this.noa.rendering.addMeshToScene(this.muzzleFlashPlane, false, null);
          this.muzzleFlashPlane.scaling.scaleInPlace(this.smallMuzzleFlashScale);
          this.muzzleFlashPlane.setEnabled(false);
        }
      }, {
        key: "reset",
        value: function () {
          var e;
          var t;
          var i;
          (0, s.Z)((0, a.Z)(r.prototype), "reset", this).call(this);
          if (this.aiming) {
            (0, A.oN)(this.noa, this._cachedZoomLevel);
          }
          this.firing = false;
          this.aiming = false;
          this._attemptAiming = false;
          this.lastRoundFired = 0;
          this._aimChangeTime = 0;
          this._reloadStartTime = 0;
          if (!((e = this.mesh) === null || e === undefined)) {
            e.dispose();
          }
          this.mesh = null;
          this.numBulletsReloading = 0;
          if (!((t = this.muzzleFlashPlane) === null || t === undefined)) {
            t.dispose();
          }
          if (this.heldItemState.__id === this.noa.playerEntity) {
            this.noa.entities.getMoveState(this.noa.playerEntity).speedMultiplier.removeMultiplier("heldGunWeight");
            this.noa.entities.getState(this.noa.playerEntity, "playerCameraAdjustment").fovMultiplier.removeMultiplier("aimingGunZoom");
            this.noa.entities.getState(this.noa.playerEntity, "receivesInputs").canRunCombinator.removeBoolean("canRunBecauseNotAiming");
          }
          g.f$.unsubscribe(this.networkedPlayerShotSub);
          if (!((i = this.bulletBlockedBillboardPlane) === null || i === undefined)) {
            i.setEnabled(false);
          }
          var n;
          var o = (0, f.Z)(this._reloadTimeouts);
          try {
            for (o.s(); !(n = o.n()).done;) {
              var u = n.value;
              clearTimeout(u);
            }
          } catch (l) {
            o.e(l);
          } finally {
            o.f();
          }
        }
      }, {
        key: "destroy",
        value: function () {
          var e;
          var t;
          if (!((e = this.bulletBlockedBillboardMat) === null || e === undefined)) {
            e.dispose();
          }
          if (!((t = this.bulletBlockedBillboardPlane) === null || t === undefined)) {
            t.dispose();
          }
        }
      }, {
        key: "downFirePrimary",
        value: function () {
          this.firing = true;
          return true;
        }
      }, {
        key: "upFirePrimary",
        value: function () {
          this.breakingItem.upFirePrimary();
          this.firing = false;
          return true;
        }
      }, {
        key: "downFireSecondary",
        value: function () {
          this._attemptAiming = true;
          return true;
        }
      }, {
        key: "upFireSecondary",
        value: function () {
          this._attemptAiming = false;
          return true;
        }
      }, {
        key: "touchDownSecondary",
        value: function () {
          this.firing = true;
          this.secondaryTouchHeld = true;
          this.updateAttemptAimingFromTouch();
        }
      }, {
        key: "touchUpSecondary",
        value: function () {
          this.firing = false;
          this.secondaryTouchHeld = false;
          this.updateAttemptAimingFromTouch();
        }
      }, {
        key: "touchDownTertiary",
        value: function () {
          this.tertiaryTouchPressed = !this.tertiaryTouchPressed;
          this.updateAttemptAimingFromTouch();
        }
      }, {
        key: "updateAttemptAimingFromTouch",
        value: function () {
          this._attemptAiming = this.secondaryTouchHeld || this.tertiaryTouchPressed;
        }
      }, {
        key: "touchDownLong",
        value: function () {
          this.breakingItem.touchDownLong();
          return true;
        }
      }, {
        key: "tick",
        value: function () {
          var e = U.f2.state.touchScreen;
          var t = false;
          if (this.firing) {
            var r = e ? this.gunTypeObj.msPerRoundTouchScreen : this.gunTypeObj.msPerRound;
            if (Date.now() - this.lastRoundFired > r) {
              t = this._fireBulletLocal();
            }
          }
          if (!(!this.firing || this.gunTypeObj.autoFireWithMouse || e)) {
            this.firing = false;
          }
          if (this.heldItemState.__id === this.noa.playerEntity) {
            if (this.noa.camera.currentZoom !== 0) {
              this._updateAttackBlockedBillboard();
            } else if (this.bulletBlockedBillboardPlane.isEnabled()) {
              this.bulletBlockedBillboardPlane.setEnabled(false);
            }
          }
          if (this.heldItemState.__id === this.noa.playerEntity && !t && this._didShootLastTick) {
            this._handleBulletCasingHitFloorSound();
          }
          if (this.heldItemState.__id === this.noa.playerEntity) {
            this.inaccuracyCalculator.tick(this.aiming);
          }
          this._wasFiringLastTick = this.firing;
          this._didShootLastTick = t;
        }
      }, {
        key: "renderTickLocalPlayer",
        value: function () {
          (0, s.Z)((0, a.Z)(r.prototype), "renderTickLocalPlayer", this).call(this);
          var e;
          var t = this._attemptAiming && !this.reloading;
          if (t !== this.aiming) {
            if (t) {
              this.setAiming();
            } else {
              this.setNotAiming();
            }
          }
          this.aiming = t;
          e = t ? Math.min(1, (performance.now() - this._aimChangeTime) / this.gunTypeObj.timeToStartAim) : Math.max(0, 1 - (performance.now() - this._aimChangeTime) / this.gunTypeObj.timeToStopAim);
          var i = this._getReloadingAnimFraction();
          this._setFirstPersonMeshPosition(e, i);
          this._updateAimingFov(e);
          this._updateMuzzleFlashFromRenderTick();
          this.mesh.position._isDirty = true;
          if (this.mesh.rotationQuaternion) {
            this.mesh.rotationQuaternion._isDirty = true;
          } else {
            this.mesh.rotation._isDirty = true;
          }
        }
      }, {
        key: "setAiming",
        value: function () {
          this._aimChangeTime = performance.now();
          this.noa.entities.getState(this.noa.playerEntity, "receivesInputs").canRunCombinator.setBooleanType("canRunBecauseNotAiming", false);
          this._cachedZoomLevel = this.noa.camera.zoomDistance;
          (0, A.oN)(this.noa, 0);
        }
      }, {
        key: "setNotAiming",
        value: function () {
          this._aimChangeTime = performance.now();
          this.noa.entities.getState(this.noa.playerEntity, "receivesInputs").canRunCombinator.setBooleanType("canRunBecauseNotAiming", true);
          (0, A.oN)(this.noa, this._cachedZoomLevel);
        }
      }, {
        key: "cameraZoomSet",
        value: function (e, t) {
          if (t === 1) {
            if (e === 0) {
              (0, A.oN)(this.noa, 2);
            } else {
              (0, A.oN)(this.noa, 0);
            }
          }
        }
      }, {
        key: "shouldChangeCameraZoom",
        value: function (e) {
          return !this.aiming || (this._cachedZoomLevel += e, false);
        }
      }, {
        key: "renderTickNetworkedPlayer",
        value: function () {
          this._updateMuzzleFlashFromRenderTick();
          this.mesh.position._isDirty = true;
          if (this.mesh.rotationQuaternion) {
            this.mesh.rotationQuaternion._isDirty = true;
          } else {
            this.mesh.rotation._isDirty = true;
          }
        }
      }, {
        key: "_updateMuzzleFlashFromRenderTick",
        value: function () {
          if (this.firedRenderTicksAgo === 1) {
            this.muzzleFlashPlane.setEnabled(false);
          }
          this.firedRenderTicksAgo++;
        }
      }, {
        key: "setupHeldMesh_Implementation",
        value: function () {
          var e = false;
          if (this.heldItemState.__id === this.noa.playerEntity && this.noa.camera.zoomDistance === 0) {
            this.mesh.parent = this.noa.rendering._camera;
            this.mesh.scaling = new v.P(this.firstPersonGunMeshScaling, this.firstPersonGunMeshScaling, this.firstPersonGunMeshScaling);
            this.mesh.position = new v.P(0, 0, 0);
            this.mesh.rotation = new v.P(0, 0, 0);
            e = true;
          } else if (this.noa.entities.hasComponent(this.heldItemState.__id, "playerMesh")) {
            var t = this.noa.entities.getPlayerMeshState(this.heldItemState.__id).namedNodes;
            this.mesh.parent = t.ArmRightMesh;
            this.mesh.scaling = new v.P(1, 1, 1);
            this.mesh.position = re;
            this.mesh.rotation = new v.P(Math.PI * -0.18, Math.PI * -0.2, 0);
            e = true;
          }
          if (!e && this.mesh.isEnabled()) {
            this.mesh.setEnabled(false);
          }
          if (e && !this.mesh.isEnabled()) {
            this.mesh.setEnabled(true);
          }
        }
      }, {
        key: "_fireBulletLocal",
        value: function () {
          var e;
          console.assert(this.heldItemState.__id === this.noa.playerEntity, "fireBulletLocal should only be called for local player.");
          if (this.reloading) {
            return false;
          }
          if (this._getShotsLeftCount() === 0) {
            if (!this._wasFiringLastTick) {
              this.reload();
            }
            return false;
          }
          var t = this.noa.entities.getInventory(this.noa.playerEntity).getItemAtSelectedSlot();
          t.metadata.shotsLeft--;
          var r = (e = this.gunTypeObj.shotPelletCount) !== null && e !== undefined ? e : 1;
          this._spawnBulletCasing();
          this._bulletsFired();
          for (var n, o, s = [], a = false, u = false, l = 0; l < r; l++) {
            var c = this.inaccuracyCalculator.getDirectionWithInaccuracy(this.noa.camera.getDirection());
            var h = this._fireBullet(c, this._localPlayerBulletHitBillboardTimeout);
            var d = h.hitResult;
            var m = h.hitEId;
            var v = h.globalBulletOrigin;
            var _ = h.bulletDistTravelled;
            var y = h.bodyPartHit;
            o = v;
            var b = y === "head";
            if (b) {
              u = true;
            }
            var A = y === "leg";
            var S = d === p.HIT_ENTITY && this.noa.otherPlayerSettings[this.noa.playerEntity][m].canAttack && !this.noa.otherPlayerSettings[this.noa.playerEntity][m]._invincible;
            if (S) {
              a = true;
              n = _;
            }
            s.push((0, i.Z)({
              dir: c,
              dist: _
            }, S ? {
              player: m,
              head: b,
              leg: A
            } : {
              player: null,
              head: null,
              leg: null
            }));
          }
          (0, g.Xi)(z.Vz.shot, {
            origin: o,
            shots: s
          });
          if (a) {
            var M;
            var C = this.noa.serverSettings;
            var x = 0;
            var T = (0, f.Z)(s);
            try {
              for (T.s(); !(M = T.n()).done;) {
                var P = M.value;
                var I = P.player;
                var E = P.head;
                var R = P.leg;
                if (I !== null) {
                  var w = C.dealingDamageMultiplier;
                  w *= R ? C.dealingDamageLegMultiplier : E ? C.dealingDamageHeadMultiplier : C.dealingDamageDefaultMultiplier;
                  x += this.gunTypeObj.damage * w;
                }
              }
            } catch (k) {
              T.e(k);
            } finally {
              T.f();
            }
            g.f$.publish("shotPlayer", {
              damage: x,
              wasCrit: u,
              distance: n
            });
          }
          if (a) {
            if (u) {
              this._playHeadshotSound();
            } else {
              this._playBodyshotSound();
            }
          }
          g.f$.publish("localPlayerNewShotsLeft", t.metadata.shotsLeft);
          this.inaccuracyCalculator.shot();
          this.noa.camera.addKickback(this.gunTypeObj.kickbackFromShot);
          return true;
        }
      }, {
        key: "_fireShotNetworkedPlayer",
        value: function (e) {
          this._bulletsFired();
          var t;
          var r = (0, f.Z)(e);
          try {
            for (r.s(); !(t = r.n()).done;) {
              var i = t.value;
              this._fireBullet(i, this._networkedPlayerBulletHitBillboardTimeout);
            }
          } catch (n) {
            r.e(n);
          } finally {
            r.f();
          }
        }
      }, {
        key: "_bulletsFired",
        value: function () {
          this._makeShotSound();
          this._makeMuzzleFlash();
        }
      }, {
        key: "_fireBullet",
        value: function (e, t) {
          var r = this;
          var i = this.noa.entities._localGetPosition(this.heldItemState.__id);
          var n = (0, o.Z)(i, 3);
          var s = n[0];
          var a = n[1];
          var u = n[2];
          var l = this.noa.entities.getMoveState(this.heldItemState.__id).crouching;
          var c = [s, a + _.ZP.playerHeight * (l ? _.ZP.crouchingEyeHeightRatio : _.ZP.playerEyeToHeightRatio), u];
          var h = [];
          this.noa.localToGlobal(c, h);
          var d = this.weaponHelper.doAttack(e, this.bulletReachDistance);
          var f = d.hitResult;
          var m = d.hitEId;
          var g = d.distanceTravelled;
          var v = d.globalHitPosition;
          var y = d.hitNormal;
          var b = d.bodyPartHit;
          g = g || this.bulletReachDistance;
          var A = this.gunTypeObj.getMovingBulletMesh();
          var S = e.map(function (e) {
            return e * 2.5;
          });
          var M = [].concat(h);
          M[0] += S[0];
          M[1] += S[1];
          M[2] += S[2];
          var C = this.noa.entities.add(M, 0.1, 0.1, A);
          this.noa.entities.addComponent(C, "bullet", {
            onEnd: function () {
              if (f === p.HIT_BLOCK) {
                r._makeBulletHole(v, y, t);
              }
            },
            distanceToTravel: g,
            directionTravelling: e
          });
          var x = g;
          this.lastRoundFired = Date.now();
          return {
            hitResult: f,
            hitEId: m,
            globalBulletOrigin: h,
            bulletDistTravelled: x,
            bodyPartHit: b
          };
        }
      }, {
        key: "reload",
        value: function (e) {
          var t = this;
          if (!(this.reloading || this.heldItemState.__id === this.noa.playerEntity && this._getShotsLeftCount() === this.gunTypeObj.clipSize)) {
            this.reloading = true;
            this._reloadStartTime = Date.now();
            if (this.heldItemState.__id === this.noa.playerEntity) {
              this.numBulletsReloading = this.gunTypeObj.clipSize - this._getShotsLeftCount();
              (0, g.Xi)(z.Vz.reload, null);
            } else {
              this.numBulletsReloading = e;
            }
            var r = this._getTotalReloadTime();
            this._reloadTimeouts.push(setTimeout(function () {
              t.reloading = false;
              t.numBulletsReloading = 0;
              t._reloadTimeouts = [];
              if (t.heldItemState.__id === t.noa.playerEntity) {
                t._setShotsLeft(t.gunTypeObj.clipSize);
                g.f$.publish("localPlayerNewShotsLeft", t._getShotsLeftCount());
              }
            }, r));
            var i = this.heldItemState.__id === this.noa.playerEntity ? k.xR.firstPersonReload : k.xR.thirdPersonReload;
            var n = function (e) {
              (0, k.GW)().play((0, w.r_)(e), i, t.heldItemState.__id, undefined, undefined, true);
            };
            var o = this.gunTypeObj.soundPrefix;
            if (this.gunTypeObj.reloadBulletsIndividually) {
              n("".concat(o, "_load_bullet_"));
              for (var s = 1; s < this.numBulletsReloading; s++) {
                this._reloadTimeouts.push(setTimeout(function () {
                  n("".concat(o, "_load_bullet_"));
                }, this.gunTypeObj.bulletReloadTime * s));
              }
              this._reloadTimeouts.push(setTimeout(function () {
                n("".concat(o, "_cock_"));
              }, this.gunTypeObj.bulletReloadTime * this.numBulletsReloading));
            } else {
              n("".concat(o, "_magazine_unload_"));
              this._reloadTimeouts.push(setTimeout(function () {
                n("".concat(o, "_magazine_load_"));
              }, this.gunTypeObj.reloadTime / 2));
              this._reloadTimeouts.push(setTimeout(function () {
                n("".concat(o, "_cock_"));
              }, this.gunTypeObj.reloadTime - this.gunTypeObj.cockTime));
            }
          }
        }
      }, {
        key: "getThirdPersonArmPitchFromReloading",
        value: function () {
          return this._getReloadingAnimFraction() * (Math.PI / 8);
        }
      }, {
        key: "_getReloadingAnimFraction",
        value: function () {
          var e = Date.now() - this._reloadStartTime;
          if (this.reloading) {
            var t = this._getTotalReloadTime();
            var r = t / 15;
            if (e < r) {
              return e / r;
            } else if (e > t - r) {
              return 1 - (e - (t - r)) / r;
            } else {
              return 1;
            }
          }
          return 0;
        }
      }, {
        key: "_getTotalReloadTime",
        value: function () {
          if (this.gunTypeObj.reloadBulletsIndividually) {
            return this.numBulletsReloading * this.gunTypeObj.bulletReloadTime + this.gunTypeObj.cockTime;
          } else {
            return this.gunTypeObj.reloadTime;
          }
        }
      }, {
        key: "_setShotsLeft",
        value: function (e) {
          this.noa.entities.getInventory(this.heldItemState.__id).getItemAtSelectedSlot().metadata.shotsLeft = e;
        }
      }, {
        key: "_getShotsLeftCount",
        value: function () {
          return this.noa.entities.getInventory(this.heldItemState.__id).getItemAtSelectedSlot().metadata.shotsLeft;
        }
      }, {
        key: "_makeMuzzleFlash",
        value: function () {
          this.firedRenderTicksAgo = 0;
          this.muzzleFlashPlane.setEnabled(true);
          this.muzzleFlashPlane.scaling = new v.P(this.smallMuzzleFlashScale, this.smallMuzzleFlashScale, this.smallMuzzleFlashScale);
          this.muzzleFlashPlane.rotationQuaternion = v._f.RotationAxis(new v.P(0, 0, 1), Math.random() * 2 * Math.PI);
        }
      }, {
        key: "_spawnBulletCasing",
        value: function () {
          var e = this;
          console.assert(this.noa.playerEntity === this.heldItemState.__id, "bullet casings should only be used locally");
          var t = this.mesh.getAbsolutePosition();
          var r = t.x;
          var i = t.y;
          var n = t.z;
          var o = [];
          this.noa.localToGlobal([r, i, n], o);
          var s;
          var a = this.noa.entities.add(o, 0.1, 0.1, this.gunTypeObj.getBulletCasingMesh(), null, true);
          var u = 1.5 + Math.random() * 0.3;
          var l = 0.7 + Math.random() * 0.3;
          s = this.noa.playerEntity === this.heldItemState.__id && this.noa.camera.zoomDistance <= 1 ? this.noa.camera.heading : this.noa.entities.getMoveState(this.heldItemState.__id).heading;
          this.noa.ents.getPhysicsBody(a).applyImpulse([Math.cos(s) * l, u, -Math.sin(s) * l]);
          setTimeout(function () {
            e.noa.entities.deleteEntity(a);
          }, 5000);
        }
      }, {
        key: "_makeBulletHole",
        value: function (e, t, r) {
          var i = this.gunTypeObj.getBulletHitBillboard();
          var n = 0.008;
          var o = b().create();
          this.noa.globalToLocal(e, null, o);
          var s = new v.P(o[0] + t[0] * n, o[1] + t[1] * n, o[2] + t[2] * n);
          var a = new v.P(o[0] - t[0], o[1] - t[1], o[2] - t[2]);
          i.position = s;
          i.lookAt(a);
          var u = [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
          i.isPickable = false;
          this.noa.rendering.addMeshToScene(i, false, u);
          setTimeout(function () {
            i.dispose();
          }, r);
        }
      }, {
        key: "_setFirstPersonMeshPosition",
        value: function (e, t) {
          console.assert(this.heldItemState.__id === this.noa.playerEntity, "Should only be called for local player.");
          if (this.noa.camera.zoomDistance <= 1) {
            var r = (1 - e) * 0.25;
            var i = (1 - e) * -0.12 - 0.07;
            var n = t * -0.35;
            this.mesh.position = new v.P(r, i + n, 0.3);
          } else if (!(this.mesh.position.x === 0 && this.mesh.position.y === 0 && this.mesh.position.z === 0)) {
            this.mesh.position = re;
          }
        }
      }, {
        key: "_updateAimingFov",
        value: function (e) {
          var t = 1 - e * 0.25;
          this.noa.entities.getState(this.noa.playerEntity, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", t);
        }
      }, {
        key: "_updateAttackBlockedBillboard",
        value: function () {
          if (!(this._ticksSinceAttackBlockedBillboardUpdate++ < 1)) {
            this._ticksSinceAttackBlockedBillboardUpdate = 0;
            var e = this.weaponHelper.getAttackBlockedPosition(this.bulletReachDistance);
            if (e) {
              b().scaleAndAdd(e.localBlockedPosition, e.localBlockedPosition, e.normal, 0.001);
              this.bulletBlockedBillboardPlanePos.x = e.localBlockedPosition[0];
              this.bulletBlockedBillboardPlanePos.y = e.localBlockedPosition[1];
              this.bulletBlockedBillboardPlanePos.z = e.localBlockedPosition[2];
              this.bulletBlockedBillboardPlane.position = this.bulletBlockedBillboardPlanePos;
              b().scaleAndAdd(e.localBlockedPosition, e.localBlockedPosition, e.normal, -1);
              this.bulletBlockedBillboardLookAt.x = e.localBlockedPosition[0];
              this.bulletBlockedBillboardLookAt.y = e.localBlockedPosition[1];
              this.bulletBlockedBillboardLookAt.z = e.localBlockedPosition[2];
              this.bulletBlockedBillboardPlane.lookAt(this.bulletBlockedBillboardLookAt);
              this.bulletBlockedBillboardPlane.setEnabled(true);
            } else {
              this.bulletBlockedBillboardPlane.setEnabled(false);
            }
          }
        }
      }, {
        key: "_makeShotSound",
        value: function () {
          if (this.lastGunShotTail) {
            var e = this.gunTypeObj.msPerRound / 3;
            this.lastGunShotTail.fade(this.lastGunShotTail.getVolume(), 0, e);
          }
          var t = this.gunTypeObj.spriteTrackname;
          var r = this.gunTypeObj.soundPrefix;
          if (Date.now() - this.lastRoundFired > this.gunTypeObj.msPerRound * 3 && (0, w.Tn)(t, "".concat(r, "_first_shot_01"))) {
            this.lastGunShotTail = (0, k.GW)().play("".concat(r, "_first_shot_01"), k.xR.gunShot, this.heldItemState.__id, 75, 10, true);
          } else {
            var i = (0, w.r_)("".concat(r, "_shot_"));
            this.lastGunShotTail = (0, k.GW)().play(i, k.xR.gunShot, this.heldItemState.__id, 75, 10, true);
          }
          if ((0, w.Tn)(t, "".concat(r, "_tail_only_shot_01"))) {
            this.lastGunShotTail = (0, k.GW)().play("".concat(r, "_tail_only_shot_01"), k.xR.gunShot, this.heldItemState.__id, 75, 10, true);
          }
        }
      }, {
        key: "_playHeadshotSound",
        value: function () {
          (0, k.GW)().play((0, w.r_)("headshot_"), k.xR.gunHeadshot);
        }
      }, {
        key: "_playBodyshotSound",
        value: function () {}
      }, {
        key: "_handleBulletCasingHitFloorSound",
        value: function () {
          clearTimeout(this._bulletCasingHitFloorTimeout);
          this._bulletCasingHitFloorTimeout = setTimeout(function () {
            (0, k.GW)().play((0, w.r_)("bullet_shell_bounce_general_"), k.xR.bulletShellBounce);
          }, 400);
        }
      }]);
      return r;
    }(Y);
    var ne = new v.P(1, 0, 0);
    var oe = function () {
      function e(t, r) {
        (0, h.Z)(this, e);
        this.noa = undefined;
        this.gunTypeObj = undefined;
        this._currInacc = undefined;
        this._nonMoveSpeedInacc = undefined;
        this._nonMoveInacc = undefined;
        this._currMoveInacc = undefined;
        this._prevBroadcastedInacc = undefined;
        this._ticksSinceBroadcast = undefined;
        this._lastTick = undefined;
        this._isAiming = undefined;
        this.noa = t;
        this.gunTypeObj = r;
        this._currInacc = r.inaccuracyStanding;
        this._nonMoveSpeedInacc = 0;
        this._nonMoveInacc = 0;
        this._currMoveInacc = r.inaccuracyStanding;
        this._prevBroadcastedInacc = -200;
        this._ticksSinceBroadcast = 100;
        this._lastTick = Date.now();
        this._isAiming = false;
      }
      (0, d.Z)(e, [{
        key: "shot",
        value: function () {
          if (this._isAiming) {
            this._nonMoveInacc += this.gunTypeObj.altInaccuracyFromShot;
          } else {
            this._nonMoveInacc += this.gunTypeObj.inaccuracyFromShot;
          }
        }
      }, {
        key: "jump",
        value: function () {
          if (this._isAiming) {
            this._nonMoveInacc += this.gunTypeObj.altInaccuracyFromJump;
          } else {
            this._nonMoveInacc += this.gunTypeObj.inaccuracyFromJump;
          }
        }
      }, {
        key: "tick",
        value: function (e) {
          var t;
          var r = Date.now() - this._lastTick;
          this._isAiming = e;
          t = e ? {
            inaccuracyStanding: this.gunTypeObj.altInaccuracyStanding,
            inaccuracyMovement: this.gunTypeObj.altInaccuracyMovement,
            yVelocityInaccuracy: this.gunTypeObj.altYVelocityInaccuracy
          } : {
            inaccuracyStanding: this.gunTypeObj.inaccuracyStanding,
            inaccuracyMovement: this.gunTypeObj.inaccuracyMovement,
            yVelocityInaccuracy: this.gunTypeObj.yVelocityInaccuracy
          };
          var i = this.noa.entities.getPhysicsBody(this.noa.playerEntity);
          var n = Math.pow(Math.pow(i.velocity[0], 2) + Math.pow(i.velocity[2], 2), 0.5);
          var o = this.noa.serverSettings.runningSpeed * this.noa.entities.getMoveState(this.noa.playerEntity).speedMultiplier.getTotalMultipliedVal();
          var s = t.inaccuracyStanding + n / o * t.inaccuracyMovement + t.yVelocityInaccuracy * Math.abs(i.velocity[1]);
          if (s >= this._currMoveInacc) {
            this._currMoveInacc = s;
          } else {
            this._currMoveInacc = this._decreaseInacc(this._currMoveInacc, s, r);
          }
          if (this._nonMoveInacc !== 0) {
            this._nonMoveInacc = this._decreaseInacc(this._nonMoveInacc, 0, r);
          }
          var a = this._currMoveInacc + this._nonMoveInacc;
          var u = Math.abs(this._prevBroadcastedInacc - a);
          if (++this._ticksSinceBroadcast >= 6 && u > 0.5 || u > 10) {
            (0, D.b)(a);
            this._prevBroadcastedInacc = a;
            this._ticksSinceBroadcast = 0;
          }
          this._currInacc = a;
          this._lastTick = Date.now();
        }
      }, {
        key: "_decreaseInacc",
        value: function (e, t, r) {
          var i = e - t;
          if (i < 0.05) {
            return t;
          } else {
            return Math.max(e - r * this.gunTypeObj.recoveryRate * i, t);
          }
        }
      }, {
        key: "getDirectionWithInaccuracy",
        value: function (e) {
          var t = this._currInacc * B.qe;
          var r = (0, N.NQ)(e);
          var i = r.theta;
          var n = r.phi;
          var o = Math.random() * t - t / 2;
          var s = Math.random() * t - t / 2;
          return (0, N.EH)(i + o, n + s);
        }
      }]);
      return e;
    }();
  },
  94899: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return h;
      }
    });
    var i = r(37762);
    var n = r(47077);
    var o = r.n(n);
    var s = r(41038);
    var a = r(85774);
    var u = 0;
    var l = o().create();
    var c = o().create();
    function h(e) {
      return {
        name: "hidingMeshManager",
        order: 105,
        state: {
          addMeshComponent: null,
          removeMeshComponent: null,
          addShadow: false,
          shadowSize: undefined,
          hideDist: 55,
          movingHideDist: null,
          _lastPos: null,
          _lastEnabled: false,
          _forceUpdate: false
        },
        onAdd: function (t, r) {
          if (!r.addMeshComponent || !r.removeMeshComponent) {
            throw new Error("Added hidingMeshManager without addMeshComponent or removeMeshComponent ".concat(r.addMeshComponent, " ").concat(r.removeMeshComponent));
          }
          r._lastPos = o().create();
          o().copy(r._lastPos, e.ents.getPosition(t));
          r._forceUpdate = true;
        },
        onRemove: function (e, t) {
          t.removeMeshComponent();
        },
        system: function (r, n) {
          var s = false;
          var a = e.entities.getPosition(e.playerEntity);
          if (o().dist(a, c) > 5) {
            s = true;
          }
          var l;
          var h = Date.now();
          var d = false;
          var f = (0, i.Z)(n);
          try {
            for (f.s(); !(l = f.n()).done;) {
              var p = l.value;
              if ((p.movingHideDist !== null || s || p._forceUpdate) && (t(p), p._forceUpdate = false, Date.now() - h > 5)) {
                u++;
                d = true;
                break;
              }
            }
          } catch (m) {
            f.e(m);
          } finally {
            f.f();
          }
          if (!d) {
            u = 0;
            if (s) {
              o().copy(c, a);
            }
          }
          if (u > 10) {
            console.error("hidingMeshManagerProcessor update took too long and is skipping update for some entities");
          }
        }
      };
      function t(t) {
        var r = t.__id;
        var i = o().copy(l, e.ents.getPosition(r));
        var n = t.hideDist;
        if (t.movingHideDist !== null) {
          var u = o().dist(t._lastPos, i);
          o().copy(t._lastPos, i);
          if (u > 0.01) {
            n = t.movingHideDist;
          }
        }
        o().floor(i, i);
        var c = o().dist(e.entities.getPosition(e.playerEntity), i) < n && (0, a.rL)().hasChunkWithBlockCoordinates(i[0], i[1], i[2]);
        if (!(t._lastEnabled && c || !t._lastEnabled && !c)) {
          if (c) {
            if (!e.entities.getMeshData(r)) {
              t.addMeshComponent();
            }
            if (t.addShadow && !e.entities.getState(r, "shadow")) {
              e.ents.addComponent(r, "shadow", {
                size: t.shadowSize
              });
              e.entities.getState(r, "shadow").enabledCombinator = new s.C();
            }
          } else {
            t.removeMeshComponent();
            if (t.addShadow && e.entities.getState(r, "shadow")) {
              e.ents.removeComponent(r, "shadow");
            }
          }
          t._lastEnabled = c;
        }
      }
    }
  },
  68564: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return a;
      }
    });
    var i = r(37762);
    var n = r(64400).BoxBuilder;
    var o = r(47077);
    var s = r(52126).ZP;
    function a(e) {
      var t = n.CreateBox("playerHitbox", {
        width: 1,
        depth: 0.7,
        height: s.playerHitboxHeights.head
      }, e.rendering.getScene());
      t.visibility = 0;
      t.setEnabled(false);
      e.rendering.getScene().removeMesh(t);
      return {
        name: "hitbox",
        order: 105,
        state: {
          hitboxMesh: null
        },
        onAdd: function (r, i) {
          var n = t.createInstance("playerHitbox".concat(r));
          n.metadata = new e.rendering.MeshMetadataType();
          n.metadata.eId = r;
          i.hitboxMesh = n;
        },
        onRemove: function (e, t) {
          t.hitboxMesh.dispose();
        },
        system: function (t, r) {
          var n;
          var a = (0, i.Z)(r);
          try {
            for (a.s(); !(n = a.n()).done;) {
              var l = n.value;
              var c = e.entities.getState(l.__id, "meshRotation").renderHeading;
              var h = e.entities.getPositionData(l.__id)._renderPosition;
              o.set(u, h[0], h[1] + s.playerHitboxHeights.head / 2, h[2] + 0.1);
              o.rotateY(u, u, h, c);
              l.hitboxMesh.position.copyFromFloats(u[0], u[1], u[2]);
              l.hitboxMesh.rotation.y = c;
            }
          } catch (d) {
            a.e(d);
          } finally {
            a.f();
          }
        }
      };
    }
    var u = o.create();
  },
  36217: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return o;
      }
    });
    var i = r(37762);
    var n = r(85774);
    function o(e) {
      return {
        name: "inLoadedChunk",
        order: 105,
        state: {
          checkEvery: 5,
          inChunkChange: null,
          _tick: 0,
          _wasInChunk: false
        },
        onAdd: function (e, r) {
          console.assert(r.inChunkChange !== null, "Should pass inChunkChange when adding inLoadedChunk component.");
          t(r);
        },
        system: function (e, r) {
          var n;
          var o = (0, i.Z)(r);
          try {
            for (o.s(); !(n = o.n()).done;) {
              var s = n.value;
              if (++s._tick === s.checkEvery) {
                t(s);
                s._tick = 0;
              }
            }
          } catch (a) {
            o.e(a);
          } finally {
            o.f();
          }
        }
      };
      function t(t) {
        var r = e.entities.getPosition(t.__id);
        var i = (0, n.rL)().hasChunkWithBlockCoordinates(r[0], r[1], r[2]);
        if (t._wasInChunk && !i) {
          t.inChunkChange(false);
        }
        if (!t._wasInChunk && i) {
          t.inChunkChange(true);
        }
        t._wasInChunk = i;
      }
    }
  },
  17870: function (e) {
    e.exports = function (e) {
      return {
        name: "itemState",
        order: 105,
        state: {
          amount: 1,
          name: null,
          typeObj: null,
          cantPickUp: false
        },
        onAdd: null,
        onRemove: null,
        system: null
      };
    };
  },
  21262: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return o;
      }
    });
    var i = r(37762);
    var n = r(85774);
    function o(e) {
      return {
        name: "meshRotation",
        order: 100,
        state: {
          renderHeading: 0,
          serverSetHeading: 0
        },
        onAdd: function (e, t) {},
        onRemove: null,
        renderSystem: function (r, n) {
          var o;
          var s = (0, i.Z)(n);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var a = o.value;
              var u = e.ents.getMoveState(a.__id);
              var l = undefined;
              l = a.__id === e.playerEntity ? e.camera.heading : e.entities.getGenericPlayerState(a.__id) ? u.heading : a.serverSetHeading;
              a.renderHeading = t(a.renderHeading, l);
              var c = e.entities.getMeshData(a.__id);
              if (c) {
                c.mesh.rotation.y = a.renderHeading + Math.PI;
              }
            }
          } catch (h) {
            s.e(h);
          } finally {
            s.f();
          }
        }
      };
      function t(e, t) {
        var r = (0, n.wQ)(t - e + Math.PI, Math.PI * 2) - Math.PI;
        var i = Math.max(Math.abs(r) / 5, Math.min(Math.abs(r), 0.15));
        if (r < 0) {
          return (e - i) % (Math.PI * 2);
        } else {
          return (e + i) % (Math.PI * 2);
        }
      }
    }
  },
  92199: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return o;
      }
    });
    var i = r(37762);
    var n = r(41038);
    function o(e) {
      return {
        name: "moveState",
        order: 30,
        state: {
          heading: 0,
          crouching: false,
          speed: 0,
          jumping: false,
          cameraPitch: 0,
          speedMultiplier: null,
          jumpMultiplier: null,
          hitInPrevTick: false,
          setArmsAreSwinging: null,
          armSwinging: false,
          _renderTickSinceSwing: false,
          _armSwungLastTick: false,
          _tickSinceSwing: false
        },
        onAdd: function (t, r) {
          r.speedMultiplier = new n.N();
          r.jumpMultiplier = new n.N();
          r.setArmsAreSwinging = function () {
            if (t === e.playerEntity) {
              r.armSwinging = true;
              r._armSwungLastTick = true;
              r._renderTickSinceSwing = false;
              r._tickSinceSwing = false;
            }
          };
        },
        onRemove: null,
        system: function (t, r) {
          var n;
          var o = (0, i.Z)(r);
          try {
            for (o.s(); !(n = o.n()).done;) {
              var s = n.value;
              if (s.__id === e.playerEntity) {
                if (!s._armSwungLastTick && s._tickSinceSwing && s._renderTickSinceSwing) {
                  s.armSwinging = false;
                }
                s._tickSinceSwing = true;
                s._armSwungLastTick = false;
                s.hitInPrevTick = false;
              }
            }
          } catch (a) {
            o.e(a);
          } finally {
            o.f();
          }
        },
        renderSystem: function (t, r) {
          var n;
          var o = (0, i.Z)(r);
          try {
            for (o.s(); !(n = o.n()).done;) {
              var s = n.value;
              if (s.__id === e.playerEntity) {
                s._renderTickSinceSwing = true;
              }
            }
          } catch (a) {
            o.e(a);
          } finally {
            o.f();
          }
        }
      };
    }
  },
  13813: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      checkMoveFuncs: function () {
        return m;
      },
      default: function () {
        return g;
      },
      jumpOffLadderApplyForceOverTicks: function () {
        return f;
      },
      tickMovementPrePhysics: function () {
        return v;
      }
    });
    var i;
    var n;
    var o = r(15671);
    var s = r(43144);
    var a = r(47077);
    var u = r.n(a);
    var l = r(85774);
    var c = r(90574);
    var h = r(38017);
    var d = {
      Vines: {
        upForceScalar: 1
      },
      Ladder: {
        upForceScalar: 1
      },
      "Pine Ladder": {
        upForceScalar: 1
      },
      "Plum Ladder": {
        upForceScalar: 1
      },
      "Cedar Ladder": {
        upForceScalar: 1.2
      },
      "Aspen Ladder": {
        upForceScalar: 1
      },
      "Elm Ladder": {
        upForceScalar: 1.2
      },
      "Palm Ladder": {
        upForceScalar: 1.2
      },
      "Pear Ladder": {
        upForceScalar: 1
      },
      "Iron Ladder": {
        upForceScalar: 1.4
      },
      "Maple Trapdoor": {
        upForceScalar: 0.7
      },
      "Pine Trapdoor": {
        upForceScalar: 0.7
      },
      "Plum Trapdoor": {
        upForceScalar: 0.7
      },
      "Cedar Trapdoor": {
        upForceScalar: 0.7
      },
      "Aspen Trapdoor": {
        upForceScalar: 0.7
      },
      "Elm Trapdoor": {
        upForceScalar: 0.7
      },
      "Palm Trapdoor": {
        upForceScalar: 0.7
      },
      "Pear Trapdoor": {
        upForceScalar: 0.7
      }
    };
    var f = 6;
    var p = function () {
      function e() {
        (0, o.Z)(this, e);
        this.__id = undefined;
        this.maxSpeed = 4;
        this.moveForce = 80;
        this.responsiveness = 20;
        this.movingFriction = 0;
        this.standingFriction = 5;
        this.airMoveMult = 1;
        this.jumpForce = 0;
        this.jumpTime = 500;
        this._jumpCount = 0;
        this._currjumptime = 0;
        this._isJumping = false;
        this._bhopCount = 0;
        this._onGroundPrevTick = true;
        this._hadJumpInputPrevTick = false;
        this._hadCrouchInputPrevTick = false;
        this.ladderMinForce = 140;
        this.ladderMaxForce = 410;
        this.ladderAccelTicks = 105;
        this._ticksSinceSwappedLadderDir = 0;
        this._lastLadderDirWasUp = true;
        this.jumpOffLadderApplyForceOverTicks = f;
        this.jumpOffLadderMaxForce = 175;
        this.jumpOffLadderMinForce = 0;
        this._ticksSinceJumpOffLadder = -1;
        this._jumpOffLadderAxis = 0;
        this._jumpOffLadderMoveDir = 1;
        this._jumpBeenUnheldSinceOnLadder = false;
        this._lastJumpingStart = 0;
        this._flying = false;
        this._flyMoveDirNumTicks = 0;
        this.noa = undefined;
      }
      (0, s.Z)(e, [{
        key: "shouldIgnoreCrouchingSpeedReduction",
        value: function () {
          return this._flying || this.isInWater() && !this.isOnGround();
        }
      }, {
        key: "isInWater",
        value: function () {
          return (0, c.vG)(this.noa, this.noa.ents.getPositionData(this.__id));
        }
      }, {
        key: "isOnGround",
        value: function () {
          return this.noa.ents.getPhysicsBody(this.__id).atRestY() < 0;
        }
      }, {
        key: "isInCobweb",
        value: function () {
          var e = this.noa.ents.getPositionData(this.__id);
          return (0, c.Wc)((0, l.rL)(), e, (0, h.blockNameToId)("Cobweb")) || (0, c.Wc)((0, l.rL)(), e, (0, h.blockNameToId)("Net"));
        }
      }]);
      return e;
    }();
    function m() {
      var e = (0, l.Zx)().ents.getMovement((0, l.Zx)().playerEntity);
      return i && n && (e.isInCobweb !== i || e.isInWater !== n);
    }
    function g(e) {
      return {
        name: "movement",
        order: 30,
        stateConstructor: p,
        onAdd: function (t, r) {
          r.noa = e;
          i = r.isInCobweb;
          n = r.isInWater;
        },
        onRemove: null,
        system: function (e, t) {}
      };
    }
    function v(e, t) {
      for (var r = e.entities.getStatesList("movement"), i = e.entities, n = 0; n < r.length; n++) {
        var o = r[n];
        if (i.getPhysics(o.__id)) {
          var s = i.getPhysicsBody(o.__id);
          A(e, t, o, i.getMoveState(o.__id), s);
        }
      }
    }
    var _ = u().create();
    var y = u().create();
    var b = u().create();
    function A(e, t, r, i, n) {
      if (e.entities.getState(r.__id, "genericPlayerState").isAlive) {
        var o = i.jumping && !r._hadJumpInputPrevTick;
        if (e.serverSettings.creative && o && Date.now() - r._lastJumpingStart < 300) {
          r._flying = !r._flying;
        } else if (!e.serverSettings.creative) {
          r._flying = false;
        }
        if (o) {
          r._lastJumpingStart = Date.now();
        }
        var s = r.isInWater();
        var a = (0, c.kQ)(e.bloxd, r.__id, n);
        var h = a.onLadder;
        var f = a.goingUpLadderOnAxis;
        var p = r.isInCobweb();
        var m = r.isOnGround();
        var g = (m || r._jumpCount < function (e, t, r) {
          var i = e.serverSettings.airJumpCount;
          if (r) {
            return i + 1;
          }
          return i;
        }(e, r.__id, s)) && !i.hitInPrevTick && !p;
        if (m) {
          r._isJumping = false;
          r._jumpCount = 0;
          r._flying = false;
        }
        if (!i.jumping || h || r._flying) {
          r._isJumping = false;
          if (m) {
            r._bhopCount = 0;
            i.speedMultiplier.setMultiplierType("bhop", 1);
          }
        } else if (r._isJumping) {
          if (r._currjumptime > 0) {
            var v = r.jumpForce;
            if (r._currjumptime < t) {
              v *= r._currjumptime / t;
            }
            n.applyForce([0, v, 0]);
            r._currjumptime -= t;
          }
        } else if (g) {
          r._isJumping = true;
          n.applyImpulse([0, e.serverSettings.jumpAmount * i.jumpMultiplier.getTotalMultipliedVal(), 0]);
          r._currjumptime = r.jumpTime;
          if (m) {
            if (r._onGroundPrevTick || r._hadJumpInputPrevTick || !i.speed || l.EU.clientEscMenuOptions.disableBunnyHopping) {
              r._bhopCount = 0;
              i.speedMultiplier.setMultiplierType("bhop", 1);
            } else {
              r._bhopCount++;
              i.speedMultiplier.setMultiplierType("bhop", (0, l.rL)().getBhopMultiplier(e.playerEntity, r._bhopCount));
            }
          } else {
            r._jumpCount++;
            if (n.velocity[1] < 0) {
              n.velocity[1] = 0;
            }
          }
        }
        var A = {
          flying: false,
          a: 0
        };
        A.a = 2;
        A.a += 5;
        if (A.flying && A.a || r._flying) {
          n.gravityMultiplier = 0;
          var S;
          var M = 65;
          if (i.jumping) {
            S = 1;
            if (!r._hadJumpInputPrevTick) {
              r._flyMoveDirNumTicks = 0;
            }
          } else if (i.crouching) {
            S = -1;
            if (!r._hadCrouchInputPrevTick) {
              r._flyMoveDirNumTicks = 0;
            }
          } else {
            S = 0;
            r._flyMoveDirNumTicks = 0;
          }
          r._flyMoveDirNumTicks++;
          M += Math.min(r._flyMoveDirNumTicks, 200) * 0.5;
          n.applyForce([0, M * S, 0]);
          n.velocity[1] = n.velocity[1] * 6 / 10;
          if (Math.abs(n.velocity[1]) < 0.5) {
            n.velocity[1] = 0;
          }
        }
        if (!r._flying) {
          if (h) {
            if (n.velocity[1] <= 0) {
              if (r._lastLadderDirWasUp) {
                r._ticksSinceSwappedLadderDir = 0;
              }
              r._lastLadderDirWasUp = false;
            } else {
              if (!r._lastLadderDirWasUp) {
                r._ticksSinceSwappedLadderDir = 0;
              }
              r._lastLadderDirWasUp = true;
            }
            var C = Math.min(r._ticksSinceSwappedLadderDir, r.ladderAccelTicks) / r.ladderAccelTicks;
            var x = r.ladderMinForce + C * (r.ladderMaxForce - r.ladderMinForce);
            if (n.velocity[1] <= 0 && i.crouching) {
              n.gravityMultiplier = 0;
            } else {
              n.gravityMultiplier = x / 20;
            }
            i.speedMultiplier.setMultiplierType("ladder", 0.7);
            n.friction = 0.25;
            n.velocity[1] = 0;
            for (var T = 0, P = [0, 2]; T < P.length; T++) {
              var I = P[T];
              if (f[I] !== null) {
                var E = f[I];
                u().set(_, 0, x * d[E].upForceScalar, 0);
                n.applyForce(_);
                true;
                if (i.jumping && r._jumpBeenUnheldSinceOnLadder) {
                  r._ticksSinceJumpOffLadder = 0;
                  r._jumpOffLadderAxis = I;
                  r._jumpOffLadderMoveDir = -n.resting[I];
                }
              }
            }
            if (!i.jumping) {
              r._jumpBeenUnheldSinceOnLadder = true;
            }
            r._ticksSinceSwappedLadderDir++;
          } else {
            i.speedMultiplier.setMultiplierType("ladder", 1);
            n.gravityMultiplier = 2;
            n.friction = 1;
            r._jumpBeenUnheldSinceOnLadder = false;
            r._ticksSinceSwappedLadderDir = 0;
          }
          if (r._ticksSinceJumpOffLadder !== -1) {
            var R = r._ticksSinceJumpOffLadder / r.jumpOffLadderApplyForceOverTicks;
            var w = r.jumpOffLadderMaxForce + R * (r.jumpOffLadderMinForce - r.jumpOffLadderMaxForce);
            u().set(_, 0, 0, 0);
            if (r._ticksSinceJumpOffLadder > 0) {
              _[1] = w * 0.4;
            }
            var k = w * r._jumpOffLadderMoveDir;
            _[r._jumpOffLadderAxis] = k;
            n.applyForce(_);
            if (++r._ticksSinceJumpOffLadder > r.jumpOffLadderApplyForceOverTicks) {
              r._ticksSinceJumpOffLadder = -1;
            }
          }
          if (s) {
            var D = function (e) {
              var t = e - Math.abs(n.velocity[1]);
              if (t <= 0) {
                return 0;
              } else if (t < 1) {
                return t * 30;
              } else {
                return 30;
              }
            };
            i.speedMultiplier.setMultiplierType("water", 0.8);
            if (i.crouching) {
              var B = D(5);
              u().set(_, 0, -B, 0);
              n.applyForce(_);
            }
            if (i.jumping) {
              var O = D(3);
              u().set(_, 0, O, 0);
              n.applyForce(_);
            }
          } else {
            i.speedMultiplier.setMultiplierType("water", 1);
          }
        }
        i.speedMultiplier.setMultiplierType("inCobweb", !r._flying && p ? 0.07 : 1);
        if (!(!p || r._flying || m)) {
          n.velocity[1] = 0;
          n.gravityMultiplier = 0.3;
        }
        if ((0, l.rL)().getIsStoodOnBlock(e.playerEntity)) {
          var F = (0, l.rL)().getStoodBlockSpeedMultiplier(e.playerEntity);
          i.speedMultiplier.setMultiplierType("blockSpeedMult", F);
        } else if (r._flying) {
          i.speedMultiplier.setMultiplierType("blockSpeedMult", 1);
        }
        var L = i.speed * i.speedMultiplier.getTotalMultipliedVal() * (r._flying ? e.serverSettings.flySpeedMultiplier : 1);
        r._onGroundPrevTick = m;
        r._hadJumpInputPrevTick = i.jumping;
        r._hadCrouchInputPrevTick = i.crouching;
        var N = _;
        var U = y;
        if (i.speed) {
          u().set(N, 0, 0, L);
          u().rotateY(N, N, b, i.heading);
          u().subtract(U, N, n.velocity);
          U[1] = 0;
          var G = u().length(U);
          u().normalize(U, U);
          if (G > 0) {
            var W = r.moveForce;
            if (!m) {
              W *= r.airMoveMult;
            }
            var j = r.responsiveness * G;
            if (G < 0.3) {
              j *= G;
            }
            if (W > j) {
              W = j;
            }
            u().scale(U, U, W);
            n.applyForce(U);
          }
          n.friction = r.movingFriction;
        } else {
          n.friction = r.standingFriction;
        }
      }
    }
  },
  26885: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return s;
      }
    });
    var i = r(37762);
    var n = r(41038);
    var o = r(52126).ZP;
    function s(e) {
      return {
        name: "playerCameraAdjustment",
        order: 105,
        state: {
          movementBasedFov: 1.2,
          fovMultiplier: new n.N()
        },
        renderSystem: function (t, r) {
          var n;
          var s = (0, i.Z)(r);
          try {
            for (s.s(); !(n = s.n()).done;) {
              var a = n.value;
              var u = e.ents.getMoveState(a.__id);
              var l = e.ents.getState(e.camera.cameraTarget, "followsEntity");
              var c = u.speed * u.speedMultiplier.getTotalMultipliedVal();
              var h = undefined;
              h = c <= 4 ? 1.2 : 1.2 + (c - 4) * 0.033;
              h *= a.fovMultiplier.getTotalMultipliedVal();
              a.movementBasedFov = a.movementBasedFov + (h - a.movementBasedFov) * (a.movementBasedFov > h ? 0.3 : 0.2);
              if (Math.abs(h - a.movementBasedFov) < 0.0005) {
                a.movementBasedFov = h;
              }
              e.rendering._camera.fov = a.movementBasedFov;
              var d = undefined;
              d = u.crouching ? o.playerHeight * 0.75 : o.playerEyeToHeightRatio * o.playerHeight;
              if (l.offset[1] < d) {
                l.offset[1] = Math.max(l.offset[1] - 0.05, d);
              } else if (l.offset[1] > d) {
                l.offset[1] = Math.min(l.offset[1] + 0.05, d);
              }
            }
          } catch (f) {
            s.e(f);
          } finally {
            s.f();
          }
        }
      };
    }
  },
  77666: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return o;
      }
    });
    var i = r(16510);
    var n = r(52126);
    function o(e) {
      return {
        name: "playerHowlerListenerUpdate",
        order: 45,
        state: {},
        onAdd: null,
        onRemove: null,
        system: function (t, r) {
          console.assert(r.length === 1, "Component should only be on playerEntity");
          var o = e.entities.getPosition(e.playerEntity);
          i.Howler.pos(o[2], o[1] + n.ZP.playerHeight * n.ZP.playerEyeToHeightRatio, o[0]);
          var s = e.camera.getDirection();
          var a = e.camera.getUpDirection();
          i.Howler.orientation(s[2], s[1], s[0], a[2], a[1], a[0]);
        },
        renderSystem: null
      };
    }
  },
  64716: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return l;
      }
    });
    var i = r(37762);
    var n = r(80105);
    var o = r(54044);
    var s = r(85774);
    var a = new n.P(0, 1, 0);
    var u = 15;
    function l(e) {
      return {
        name: "playerMesh",
        order: 105,
        state: {
          rootMesh: null,
          namedNodes: null,
          consumedNetworkArmSwing: true,
          _ticksSinceSwing: 16,
          _queuedSwing: false,
          _walkingAngle: 0,
          _angleMoveDir: 1
        },
        onAdd: function (t, r) {
          r.rootMesh.rotationQuaternion = null;
          var n = r.rootMesh.getChildTransformNodes(false);
          r.namedNodes = {};
          var o;
          var s = (0, i.Z)(n);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var a = o.value;
              var u = a.name.split(" ");
              var l = u[u.length - 1];
              r.namedNodes[l] = a;
            }
          } catch (f) {
            s.e(f);
          } finally {
            s.f();
          }
          e.rendering.addMeshToScene(r.rootMesh);
          var c;
          var h = (0, i.Z)(r.rootMesh.getChildMeshes(false));
          try {
            for (h.s(); !(c = h.n()).done;) {
              var d = c.value;
              e.rendering.addMeshToScene(d);
              d.alwaysSelectAsActiveMesh = true;
              d.doNotSyncBoundingInfo = true;
            }
          } catch (f) {
            h.e(f);
          } finally {
            h.f();
          }
        },
        onRemove: function (e, t) {
          t.rootMesh.dispose(false);
        },
        renderSystem: function (f, p) {
          var m;
          var g = (0, i.Z)(p);
          try {
            for (g.s(); !(m = g.n()).done;) {
              var v;
              var _;
              var y = m.value;
              var b = e.ents.getMoveState(y.__id);
              var A = (v = e.ents.getHeldItemState(y.__id)) === null || v === undefined ? undefined : v.heldItem;
              var S = (A === null || A === undefined ? undefined : A.gunTypeObj) || (A === null || A === undefined || (_ = A.typeObj) === null || _ === undefined ? undefined : _.holdAsAiming);
              var M = 0;
              if (b.crouching) {
                M = Math.PI / 8;
                r(y.namedNodes.TorsoNode, M, 0, 0);
              } else {
                r(y.namedNodes.TorsoNode, 0, 0, 0);
              }
              var C = y.__id === e.playerEntity ? e.camera.pitch : b.cameraPitch;
              C -= M;
              r(y.namedNodes.HeadMesh, l(C), 0, 0);
              var x = true;
              if (S) {
                var T;
                var P;
                var I;
                var E = C;
                E = n(E += (T = (P = (I = e.entities.getHeldItem(y.__id)).getThirdPersonArmPitchFromReloading) === null || P === undefined ? undefined : P.call(I)) !== null && T !== undefined ? T : 0);
                r(y.namedNodes.ArmRightMesh, Math.min(-Math.PI * 0.3 + E, 0), 0, 0);
                y.namedNodes.ArmRightMesh.rotate(a, Math.PI * 0.18, o.T.WORLD);
                r(y.namedNodes.ArmLeftMesh, Math.min(-Math.PI * 0.4 + E, -Math.PI * 0.1), 0, 0);
                y.namedNodes.ArmLeftMesh.rotate(a, -Math.PI * 0.15, o.T.WORLD);
                x = false;
              } else {
                if (b.armSwinging || !y.consumedNetworkArmSwing) {
                  y.consumedNetworkArmSwing = true;
                  if (y._ticksSinceSwing > u) {
                    y._ticksSinceSwing = 1;
                    y._queuedSwing = false;
                  } else if (y._ticksSinceSwing >= 9.75 && !y._queuedSwing) {
                    y._queuedSwing = true;
                  }
                } else if (y._queuedSwing && y._ticksSinceSwing > u) {
                  y._ticksSinceSwing = 1;
                  y._queuedSwing = false;
                }
                if (y._ticksSinceSwing <= u) {
                  var R = y._ticksSinceSwing / u;
                  var w = c[1].amt;
                  c[1].amt -= M;
                  var k = (0, s.Fu)(c, R, y.namedNodes.ArmRightMesh.rotation.x, u);
                  c[1].amt = w;
                  var D = (0, s.Fu)(h, R, y.namedNodes.ArmRightMesh.rotation.y, u);
                  var B = (0, s.Fu)(d, R, y.namedNodes.ArmRightMesh.rotation.z, u);
                  r(y.namedNodes.ArmRightMesh, k, D, B);
                  var O = y.namedNodes.ArmLeftMesh;
                  r(O, (0, s.ml)(O.rotation.x, 0, 0.1), 0, 0);
                  y._ticksSinceSwing++;
                  x = false;
                }
              }
              t(y, x);
            }
          } catch (F) {
            g.e(F);
          } finally {
            g.f();
          }
        }
      };
      function t(t, i) {
        var n;
        var o;
        var a = e.ents.getMoveState(t.__id);
        if (a.crouching) {
          n = 0.5;
        } else {
          var u = (a.speed - 4) * 0.16 + 0.9;
          n = (0, s.uZ)(u, 0.9, 1.4);
        }
        if (a.speed) {
          var l = Math.abs(Math.sin(t._walkingAngle / n * 0.8 * Math.PI / 2 + Math.PI / 2));
          l = Math.max(l, Math.abs(Math.sin(Math.PI * 0.8 / 2 + Math.PI / 2)));
          o = l * 0.03 * a.speed * n * t._angleMoveDir;
          t._walkingAngle = t._walkingAngle + o;
          if (t._walkingAngle > n) {
            t._angleMoveDir = -1;
          } else if (t._walkingAngle < -n) {
            t._angleMoveDir = 1;
          }
        } else {
          o = 0.07;
          if (t._walkingAngle > 0) {
            t._walkingAngle = Math.max(0, t._walkingAngle - o);
          } else {
            t._walkingAngle = Math.min(0, t._walkingAngle + o);
          }
        }
        r(t.namedNodes.LegRightMesh, -t._walkingAngle, 0, 0);
        r(t.namedNodes.LegLeftMesh, t._walkingAngle, 0, 0);
        if (i) {
          var c = function (e, t) {
            if (Math.abs(e.rotation.x - t) > Math.abs(o * 0.8) + 0.01) {
              r(e, (0, s.ml)(e.rotation.x, t, 0.05), 0, 0);
            } else {
              r(e, t, 0, 0);
            }
          };
          c(t.namedNodes.ArmRightMesh, t._walkingAngle * 0.8);
          c(t.namedNodes.ArmLeftMesh, -t._walkingAngle * 0.8);
        }
      }
      function r(e, t, r, i) {
        e.rotationQuaternion = null;
        e.rotation.copyFromFloats(t, r, i);
        e.rotation._isDirty = true;
      }
      function n(e) {
        return e * 0.95;
      }
      function l(e) {
        return e * 1;
      }
    }
    var c = [{
      atFrac: 0,
      amt: 0
    }, {
      atFrac: 0.5,
      amt: -Math.PI * 0.5
    }, {
      atFrac: 1,
      amt: 0
    }];
    var h = [{
      atFrac: 0,
      amt: 0
    }, {
      atFrac: 0.25,
      amt: -Math.PI / 9
    }, {
      atFrac: 0.7,
      amt: Math.PI / 9
    }, {
      atFrac: 1,
      amt: 0
    }];
    var d = [{
      atFrac: 0,
      amt: 0
    }, {
      atFrac: 0.5,
      amt: Math.PI / 6
    }, {
      atFrac: 0.5,
      amt: Math.PI / 6
    }, {
      atFrac: 1,
      amt: 0
    }];
  },
  53477: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return u;
      }
    });
    var i = r(9488);
    var n = r(52644);
    var o = r(49620);
    var s = r(87683);
    var a = r(90673);
    function u(e) {
      return {
        name: "playerName",
        order: 105,
        state: {
          name: null,
          nameYOffset: 2.2,
          planeEId: null
        },
        onAdd: function (t, r) {
          var u;
          var l = (u = r.name) !== null && u !== undefined ? u : e.playerNames[t];
          var c = o.mx.CreatePlane("".concat(r.__id, "NameTag"), {
            height: 0.2,
            width: l.length * 0.1
          }, e.rendering.getScene());
          r.planeEId = e.entities.add([0, 0, 0], 1, 1, c, [0, r.nameYOffset, 0]);
          c.billboardMode = n.x.BILLBOARDMODE_ALL;
          c.alwaysSelectAsActiveMesh = true;
          c.doNotSyncBoundingInfo = true;
          e.ents.addComponent(r.planeEId, "followsEntity", {
            entity: r.__id
          });
          var h = new a.c("".concat(r.__id, "NameTagTex"), {
            width: l.length * 30,
            height: 64
          }, e.rendering.getScene());
          var d = new s.K("".concat(r.__id, "NameTagMat"), e.rendering.getScene());
          d.specularColor = new i.Wo(0, 0, 0);
          d.diffuseTexture = h;
          c.material = d;
          h.drawText(l, null, null, "bolder 47px 'Jetbrains Mono'", "black", "white", true, true);
          d.freeze();
          if (e.ents.getGenericPlayerState(r.__id)) {
            var f = e.ents.getGenericPlayerState(r.__id).meshEnabledCombinator.getTotalBooleanVal();
            e.ents.getMeshData(r.planeEId).mesh.setEnabled(f);
          }
        },
        onRemove: function (t, r) {
          e.ents.deleteEntity(r.planeEId);
        },
        system: null,
        renderSystem: null
      };
    }
  },
  30258: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return n;
      },
      tickReceivesInputsPrePhysics: function () {
        return o;
      }
    });
    var i = r(37762);
    function n(e) {
      return {
        name: "receivesInputs",
        order: 20,
        state: {
          joystickHeading: null,
          isTouchscreen: false,
          canRunCombinator: null,
          _moving: false,
          _running: false
        },
        onAdd: function (e, t) {},
        onRemove: null,
        system: function (e, t) {}
      };
    }
    function o(e, t) {
      var r;
      var n = e.entities.getStatesList("receivesInputs");
      var o = e.entities;
      var a = e.inputs.state;
      var u = e.camera.heading;
      var l = (0, i.Z)(n);
      try {
        for (l.s(); !(r = l.n()).done;) {
          var c = r.value;
          var h = o.getMoveState(c.__id);
          if (c.isTouchscreen) {
            h.heading = (e.camera.heading + Math.PI * 2 - (c.joystickHeading + Math.PI * 3 / 2)) % (Math.PI * 2);
          } else {
            var d = e.entities.getMovement(c.__id);
            s(e.serverSettings, h, d, a, c, u);
          }
        }
      } catch (f) {
        l.e(f);
      } finally {
        l.f();
      }
    }
    function s(e, t, r, i, n, o) {
      t.jumping = !!i.jump;
      var s = i.forward ? i.backward ? 0 : 1 : i.backward ? -1 : 0;
      var a = i.right ? i.left ? 0 : 1 : i.left ? -1 : 0;
      if (i.crouch) {
        t.crouching = true;
      } else {
        t.crouching = false;
      }
      if ((s | a) === 0) {
        n._moving = false;
        n._running = false;
        t.speed = 0;
      } else {
        n._moving = true;
        if (i.sprint) {
          n._running = true;
        }
        if (t.crouching && !r.shouldIgnoreCrouchingSpeedReduction() || !n.canRunCombinator.getTotalBooleanVal()) {
          t.speed = e.crouchingSpeed;
        } else if (n._running) {
          t.speed = e.runningSpeed;
        } else {
          t.speed = e.walkingSpeed;
        }
        t.speedMultiplier.setMultiplierType("serverSettingsSpeedMultiplier", e.speedMultiplier);
        var u = o;
        if (s) {
          if (s === -1) {
            u += Math.PI;
          }
          if (a) {
            u += Math.PI / 4 * s * a;
          }
        } else {
          u += a * Math.PI / 2;
        }
        t.heading = u;
      }
    }
  },
  81239: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return s;
      }
    });
    var i = r(37762);
    var n = r(47077);
    var o = r.n(n);
    function s(e) {
      return {
        name: "smoothToServerPos",
        order: 90,
        state: {
          serverPosition: null
        },
        onAdd: function (e, t) {
          if (!t.serverPosition) {
            t.serverPosition = [0, 0, 0];
          }
        },
        onRemove: null,
        renderSystem: function (t, r) {
          var n;
          var s = (0, i.Z)(r);
          try {
            for (s.s(); !(n = s.n()).done;) {
              var a = n.value;
              var u = a.serverPosition;
              var l = e.ents.getPosition(a.__id);
              o().lerp(l, l, u, 0.3);
              for (var c = e.ents.getPositionData(a.__id)._extents, h = e.worldOriginOffset[0], d = e.worldOriginOffset[2], f = [c[3] + h, c[2] + d], p = [c[0] + h, c[2] + d], m = [c[3] + h, c[5] + d], g = [c[0] + h, c[5] + d], v = l[1], _ = 0, y = [f, p, m, g]; _ < y.length; _++) {
                var b = y[_];
                if (e.world.getBlockID(b[0], v, b[1])) {
                  o().copy(l, u);
                  break;
                }
              }
              if (o().distance(l, u) > 10) {
                o().copy(l, u);
              }
              e.ents.setPosition(a.__id, l);
            }
          } catch (A) {
            s.e(A);
          } finally {
            s.f();
          }
        }
      };
    }
  },
  41074: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return c;
      }
    });
    var i = r(85774);
    var n = r(47077);
    var o = r.n(n);
    var s = r(66645);
    var a = r(79520);
    var u = r(38017);
    var l = {
      distSinceLastSound: 0,
      lastPos: null
    };
    function c(e) {
      return {
        name: "stepSoundOnWalk",
        order: 1000,
        state: l,
        onAdd: function (e, t) {
          t.lastPos = [0, 0, 0];
        },
        onRemove: null,
        system: function (t, r) {
          var n = (0, i.rL)();
          r.forEach(function (t) {
            if (e.entities.getGenericPlayerState(t.__id).isAlive) {
              var r = e.ents.getPosition(t.__id);
              var i = n.getBlock(Math.floor(r[0]), r[1] - 1, Math.floor(r[2]));
              var l = o().dist(t.lastPos, r);
              t.distSinceLastSound += l;
              o().copy(t.lastPos, r);
              if (Number.isInteger(r[1]) && i !== 0 && t.distSinceLastSound > 2 && !u.default[i].fluid) {
                var c = (0, s.r_)("step_".concat((0, a.sb)(i, false)));
                (0, a.GW)().play(c, 0.15);
                t.distSinceLastSound = 0;
              }
            }
          });
        }
      };
    }
  },
  48544: function (e, t, r) {
    "use strict";

    function i(e) {
      return {
        name: "templateComp",
        order: 105,
        state: {},
        onAdd: function (e, t) {},
        onRemove: function (e, t) {},
        system: function (e, t) {}
      };
    }
    r.r(t);
    r.d(t, {
      default: function () {
        return i;
      }
    });
  },
  51012: function (e, t, r) {
    "use strict";

    r.r(t);
    r.d(t, {
      default: function () {
        return a;
      }
    });
    var i = r(85774);
    var n = r(47077);
    var o = r.n(n);
    var s = r(80427);
    function a(e) {
      return {
        name: "updateServerOfMovement",
        order: 1000,
        state: {},
        onAdd: null,
        onRemove: null,
        system: function (t, r) {
          console.assert(r.length === 1, "There should only be one entity with updateServerOfMovement.");
          (0, i.rL)();
          if (e.entities.getGenericPlayerState(e.playerEntity).isAlive) {
            r.forEach(function (t) {
              var r;
              var n = e.ents.getPosition(e.playerEntity);
              [].push(1);
              var a = e.ents.getMoveState(t.__id);
              var u = {
                x: n[0],
                y: n[1],
                z: n[2],
                heading: e.camera.heading,
                speed: a.speed,
                jumping: a.jumping,
                crouching: a.crouching,
                pitch: e.camera.pitch,
                armSwinging: e.ents.getMoveState(t.__id).armSwinging,
                useDir: o().copy([], (r = e.actionDirection) !== null && r !== undefined ? r : e.camera.getDirection())
              };
              if (isNaN(u.speed)) {
                console.error("speed was NaN! Setting to 0");
                u.speed = 0;
              }
              var l = {
                speed: a.speed,
                pitch: 0,
                x: 0,
                y: 0,
                z: 0
              };
              var c = {
                x: n[0],
                y: n[1],
                z: n[2],
                speed: 0
              };
              l.pitch = e.camera.pitch;
              c.speed = a.speed;
              if (l.pitch === 0) {
                c.speed *= 1.3;
              }
              (0, i.Xi)(s.Vz.move, u);
            });
          }
        }
      };
    }
  },
  38172: function (e, t, r) {
    "use strict";

    r.d(t, {
      K4: function () {
        return Ie;
      },
      ij: function () {
        return Ee;
      },
      rI: function () {
        return Re;
      }
    });
    var i;
    var n;
    var o;
    var s;
    var a;
    var u;
    var l;
    var c;
    var h;
    var d;
    var f;
    var p;
    var m;
    var g;
    var v;
    var _;
    var y;
    var b;
    var A;
    var S;
    var M;
    var C;
    var x;
    var T;
    var P;
    var I;
    var E;
    var R;
    var w;
    var k;
    var D;
    var B;
    var O;
    var F;
    var L;
    var N;
    var U = r(4942);
    var G = r(37762);
    var W = r(29439);
    var j = r(15861);
    var z = r(64687);
    var V = r.n(z);
    var H = r(85774);
    var q = r(85853);
    var Z = r(44695);
    var K = r(89117);
    var Y = r(75943);
    var X = r.n(Y);
    var Q = r(93239);
    var J = r(47077);
    var $ = r.n(J);
    var ee = r(52126);
    var te = r(20306);
    var re = r(77796);
    var ie = r(24412);
    var ne = r(62043);
    var oe = r(30701);
    var se = r(66645);
    var ae = r(79520);
    var ue = r(15671);
    var le = r(43144);
    var ce = r(84906);
    var he = function () {
      function e(t, r) {
        (0, ue.Z)(this, e);
        this.bloxd = undefined;
        this.noa = undefined;
        this.eId = undefined;
        this.bloxd = t;
        this.noa = t.noa;
        this.eId = r;
      }
      (0, le.Z)(e, [{
        key: "initClient",
        value: function (e) {
          if (!this.noa.playerNames[this.eId]) {
            this.noa.playerNames[this.eId] = "Player";
          }
          this.noa.ents.add([e.x, e.y, e.z], ee.ZP.playerWidth, ee.ZP.playerHeight, null, null, false, true, this.eId);
          this.noa.ents.addComponent(this.eId, this.noa.ents.names.smoothToServerPos);
          console.log("Added player", this.eId);
          (0, q.Q8)(this.noa, this.eId);
        }
      }, {
        key: "onChangeClient",
        value: function (e, t) {
          if (e === "name") {
            this.changedName(t);
          } else if (e === "heldItemName") {
            var r = this.noa.entities.getHeldItemState(this.eId);
            r.networkedHeldItemName = t;
            (0, ce.updateHeldItemState)(this.noa, r);
          } else if (this.noa.ents.getMoveState(this.eId)[e] !== undefined) {
            this.noa.ents.getMoveState(this.eId)[e] = t;
          }
        }
      }, {
        key: "disposeClient",
        value: function () {
          var e;
          this.noa.ents.deleteEntity(this.eId);
          delete this.noa.playerNames[this.eId];
          delete this.noa.otherPlayerSettings[this.noa.playerEntity][this.eId];
          if (!((e = this.noa.otherPlayerSettings[this.noa.serverPlayerEntity]) === null || e === undefined)) {
            delete e[this.eId];
          }
          H.f$.publish("playerLeave", this.eId);
          H.f$.publish("playerLeave|".concat(this.eId));
          H.f$.publish("playerLeaveClientifiedEId|".concat((0, H.dP)(this.eId)));
          H.f$.publish("playerNamesUpdated");
        }
      }, {
        key: "changedName",
        value: function (e) {
          console.log("Changed name of ".concat(this.eId, " to ").concat(e));
          this.noa.playerNames[this.eId] = e;
          this.noa.playerNames[(0, H.dP)(this.eId)] = e;
          this.noa.ents.removeComponent(this.eId, this.noa.ents.names.playerName);
          this.noa.ents.addComponent(this.eId, this.noa.ents.names.playerName);
          H.f$.publish("playerNamesUpdated");
        }
      }]);
      return e;
    }();
    var de = r(91314);
    var fe = r(93433);
    var pe = function () {
      function e(t, r, i) {
        (0, ue.Z)(this, e);
        this.bloxd = undefined;
        this.noa = undefined;
        this.eId = undefined;
        this.canSeeSub = undefined;
        this.canAttackSub = undefined;
        this.colyseusEntity = undefined;
        this.bloxd = t;
        this.noa = t.noa;
        this.eId = r;
      }
      (0, le.Z)(e, [{
        key: "initClient",
        value: function (e) {
          var t;
          var r = this;
          this.colyseusEntity = e;
          this.noa.ents.add([e.x, e.y, e.z], 1, 1, null, null, false, false, this.eId);
          this.noa.ents.addComponent(this.eId, "smoothToServerPos");
          this.noa.ents.addComponent(this.eId, "meshRotation");
          if ((t = this.noa.otherPlayerSettings[this.noa.playerEntity][this.eId]) !== null && t !== undefined && t.canSee) {
            this.addHidingMeshMgr();
          }
          this.canSeeSub = H.f$.subscribe("otherPlayerSettings|".concat(this.eId, "|canSee"), function (e) {
            r.noa.entities.removeComponent(r.eId, "hidingMeshManager");
            if (e) {
              r.addHidingMeshMgr();
            }
          });
          this.canAttackSub = H.f$.subscribe("otherPlayerSettings|".concat(this.eId, "|canAttack"), function (e) {
            var t;
            var i = (t = r.noa.entities.getMeshData(r.eId)) === null || t === undefined ? undefined : t.mesh;
            if (i) {
              for (var n = 0, o = [i].concat((0, fe.Z)(i.getChildMeshes(false))); n < o.length; n++) {
                var s = o[n];
                if (s.isPickable !== undefined) {
                  s.isPickable = e;
                }
              }
            }
          });
        }
      }, {
        key: "onChangeClient",
        value: function (e, t) {
          if (e === "heading") {
            this.noa.ents.getState(this.eId, "meshRotation").serverSetHeading = t;
          } else if (e === "name") {
            var r;
            if (t !== "" && (r = this.noa.otherPlayerSettings[this.noa.playerEntity][this.eId]) !== null && r !== undefined && r.canSee) {
              this.noa.entities.removeComponent(this.eId, "hidingMeshManager");
              this.addHidingMeshMgr();
            }
          } else if (e === "type") {
            this.noa.entities.removeComponent(this.eId, "hidingMeshManager");
            this.addHidingMeshMgr();
          }
        }
      }, {
        key: "disposeClient",
        value: function () {
          var e;
          this.noa.ents.deleteEntity(this.eId);
          delete this.noa.otherPlayerSettings[this.noa.playerEntity][this.eId];
          if (!((e = this.noa.otherPlayerSettings[this.noa.serverPlayerEntity]) === null || e === undefined)) {
            delete e[this.eId];
          }
          H.f$.unsubscribe(this.canSeeSub);
          H.f$.unsubscribe(this.canAttackSub);
        }
      }, {
        key: "addHidingMeshMgr",
        value: function () {
          var e = this;
          var t = this.colyseusEntity.type.split("|");
          var r = (0, W.Z)(t, 3);
          r[0];
          var i = r[1];
          var n = r[2];
          var o = JSON.parse(n);
          this.noa.ents.addComponent(this.eId, "hidingMeshManager", {
            addMeshComponent: function () {
              var t = e.bloxd.rendering.getEntityMesh(i, o, function (t) {
                for (var r = 0, i = [t].concat((0, fe.Z)(t.getChildMeshes(false))); r < i.length; r++) {
                  var n = i[r];
                  if (n.isPickable !== undefined) {
                    n.isPickable = e.noa.otherPlayerSettings[e.noa.playerEntity][e.eId].canAttack;
                    n.metadata = new e.noa.rendering.MeshMetadataType();
                    n.metadata.eId = e.eId;
                  }
                }
              });
              var r = t.mesh;
              var n = t.meshOffset;
              var s = t.nameYOffset;
              e.noa.entities.addComponent(e.eId, "mesh", {
                mesh: r,
                shouldAddMeshToScene: false,
                offset: n
              });
              if (e.colyseusEntity.name !== "") {
                e.noa.entities.removeComponent(e.eId, "playerName");
                e.noa.entities.addComponent(e.eId, "playerName", {
                  name: e.colyseusEntity.name,
                  nameYOffset: s
                });
              }
            },
            removeMeshComponent: function () {
              e.noa.entities.removeComponent(e.eId, "mesh");
              e.noa.entities.removeComponent(e.eId, "playerName");
            },
            hideDist: 80,
            movingHideDist: 120
          });
        }
      }]);
      return e;
    }();
    var me = r(43269);
    var ge = r(97326);
    var ve = r(60136);
    var _e = r(43668);
    var ye = r(53229);
    var be = r(50061);
    i = (0, be.type)("number");
    n = (0, be.type)("number");
    o = (0, be.type)("number");
    s = (0, be.type)("number");
    a = (0, be.type)("number");
    u = (0, be.type)("number");
    l = function (e) {
      (0, ve.Z)(r, e);
      var t = (0, _e.Z)(r);
      function r() {
        var e;
        (0, ue.Z)(this, r);
        for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) {
          n[o] = arguments[o];
        }
        e = t.call.apply(t, [this].concat(n));
        (0, me.Z)(e, "id", c, (0, ge.Z)(e));
        (0, me.Z)(e, "amount", h, (0, ge.Z)(e));
        (0, me.Z)(e, "x", d, (0, ge.Z)(e));
        (0, me.Z)(e, "y", f, (0, ge.Z)(e));
        (0, me.Z)(e, "z", p, (0, ge.Z)(e));
        (0, me.Z)(e, "shotsLeft", m, (0, ge.Z)(e));
        return e;
      }
      return (0, le.Z)(r);
    }(be.Schema);
    c = (0, ye.Z)(l.prototype, "id", [i], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    h = (0, ye.Z)(l.prototype, "amount", [n], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    d = (0, ye.Z)(l.prototype, "x", [o], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    f = (0, ye.Z)(l.prototype, "y", [s], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    p = (0, ye.Z)(l.prototype, "z", [a], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    m = (0, ye.Z)(l.prototype, "shotsLeft", [u], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    });
    var Ae = l;
    g = (0, be.type)("string");
    v = (0, be.type)("string");
    _ = (0, be.type)("number");
    y = (0, be.type)("number");
    b = (0, be.type)("number");
    A = (0, be.type)("float32");
    S = (0, be.type)("float32");
    M = (0, be.type)("boolean");
    C = (0, be.type)("boolean");
    x = (0, be.type)("float32");
    T = (0, be.type)("string");
    P = function (e) {
      (0, ve.Z)(r, e);
      var t = (0, _e.Z)(r);
      function r() {
        var e;
        (0, ue.Z)(this, r);
        for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) {
          n[o] = arguments[o];
        }
        e = t.call.apply(t, [this].concat(n));
        (0, me.Z)(e, "type", I, (0, ge.Z)(e));
        (0, me.Z)(e, "name", E, (0, ge.Z)(e));
        (0, me.Z)(e, "x", R, (0, ge.Z)(e));
        (0, me.Z)(e, "y", w, (0, ge.Z)(e));
        (0, me.Z)(e, "z", k, (0, ge.Z)(e));
        (0, me.Z)(e, "heading", D, (0, ge.Z)(e));
        (0, me.Z)(e, "speed", B, (0, ge.Z)(e));
        (0, me.Z)(e, "jumping", O, (0, ge.Z)(e));
        (0, me.Z)(e, "crouching", F, (0, ge.Z)(e));
        (0, me.Z)(e, "cameraPitch", L, (0, ge.Z)(e));
        (0, me.Z)(e, "heldItemName", N, (0, ge.Z)(e));
        return e;
      }
      return (0, le.Z)(r);
    }(be.Schema);
    I = (0, ye.Z)(P.prototype, "type", [g], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    });
    E = (0, ye.Z)(P.prototype, "name", [v], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return "";
      }
    });
    R = (0, ye.Z)(P.prototype, "x", [_], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    w = (0, ye.Z)(P.prototype, "y", [y], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    k = (0, ye.Z)(P.prototype, "z", [b], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    D = (0, ye.Z)(P.prototype, "heading", [A], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    B = (0, ye.Z)(P.prototype, "speed", [S], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 100;
      }
    });
    O = (0, ye.Z)(P.prototype, "jumping", [M], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return false;
      }
    });
    F = (0, ye.Z)(P.prototype, "crouching", [C], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return false;
      }
    });
    L = (0, ye.Z)(P.prototype, "cameraPitch", [x], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return 0;
      }
    });
    N = (0, ye.Z)(P.prototype, "heldItemName", [T], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    });
    var Se = P;
    var Me = r(43617);
    var Ce = r(23886);
    var xe = r(80427);
    var Te = r(40918);
    var Pe = function () {
      function e(t) {
        (0, ue.Z)(this, e);
        this.colyRoom = undefined;
        this.sessionId = undefined;
        this.colyRoom = t;
        this.sessionId = t.sessionId;
      }
      (0, le.Z)(e, [{
        key: "onMessage",
        value: function (e, t) {
          this.colyRoom.onMessage(e, function (r) {
            try {
              if (xe.bk[e]) {
                r = xe.bk[e].fromBuffer(Te.Buffer.from(r));
              }
              t(r);
            } catch (i) {
              (0, H.Zx)().logErrorMessage("Error in onMessage ".concat(e), i);
            }
          });
        }
      }, {
        key: "send",
        value: function (e, t) {
          if (new Error().stack.includes("userscript")) {
            (0, H.qL)();
          }
          if ((0, H.Jg)(t)) {
            this.colyRoom.sendBytes(e, t);
          } else {
            this.colyRoom.send(e, t);
          }
        }
      }, {
        key: "removeAllListeners",
        value: function () {
          this.colyRoom.removeAllListeners();
        }
      }, {
        key: "leave",
        value: function () {
          this.colyRoom.leave();
        }
      }]);
      return e;
    }();
    var Ie = false;
    function Ee() {
      Ie = true;
    }
    function Re(e, t, r, i) {
      return we.apply(this, arguments);
    }
    function we() {
      we = (0, j.Z)(V().mark(function e(t, r, i, n) {
        var o;
        var s;
        var a;
        var u;
        var l;
        var c;
        var h;
        var d;
        return V().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                d = function (e, t) {
                  if (e === ee.fV.outdatedVersion.code) {
                    console.error("Outdated client with version ", re.i, ", refreshing page");
                    return void window.location.reload();
                  }
                  for (var r in ee.fV) {
                    var i = ee.fV[r];
                    var n = i.code;
                    var o = i.text;
                    if (n === e) {
                      console.log("matched known error", e, "leaving game");
                      var s = o === "" ? t : o;
                      return void H.f$.publish("unwantedLeftGame", {
                        reason: "You have disconnected from the server.\n".concat(s)
                      });
                    }
                  }
                  console.log("Didn't match known error, leaving game");
                  H.f$.publish("unwantedLeftGame", {
                    reason: "You disconnected from the server.\n\t\t\t\tEither your internet isn't working or this is a bug.\n\t\t\t\tCode: ".concat(e)
                  });
                };
                t.serverSettings = {};
                t.otherPlayerSettings = (0, U.Z)({}, t.playerEntity, {});
                t.playerNames = (0, U.Z)({}, t.playerEntity, H.EU.playerName);
                t.colyRoom = undefined;
                t.serverPlayerEntity = undefined;
                o = {};
                s = {
                  x: 0,
                  y: 1,
                  z: 2
                };
                a = false;
                (0, H.Xr)(function () {
                  a = true;
                });
                if (X().get("id") && X().get("id") !== "undefined") {
                  u = X().get("id");
                } else if (H.EU.id) {
                  u = H.EU.id;
                } else {
                  console.error("No id!!!!!!", X().get("id"), H.EU.id);
                }
                l = [n];
                if (H.EU.isLoggedIn) {
                  l.push(H.EU.firebase.auth.currentUser.getIdToken().then(function (e) {
                    H.EU.jwToken = e;
                  }));
                }
                H.EU.id = u;
                if (H.EU.firebase && H.EU.id) {
                  H.EU.firebase.setUserProperties({
                    user_id: H.EU.id
                  });
                }
                H.EU.connectedLobbyName = String(r);
                console.log("Waiting for promises to resolve");
                e.next = 19;
                return Promise.all(l);
              case 19:
                c = {
                  cookies: (0, H.zh)(i),
                  deviceType: Z.vO,
                  generalCookies: {
                    joinDiscord: !!H.Cc.getItem("DiscordPressed"),
                    id: u,
                    newGo: Ce.W7
                  },
                  isLoggedIn: H.EU.isLoggedIn,
                  idToken: H.EU.jwToken,
                  lobbyName: r,
                  languages: (0, H.HZ)(),
                  version: re.i
                };
                console.log("joining server with lobbyName", r);
                h = t.colyClient.joinOrCreate(i, c);
                H.f$.publish("loadingScreenState", "Joining Lobby");
                h.then(function (e) {
                  if (a) {
                    e.removeAllListeners();
                    return void e.leave();
                  }
                  var r = new Pe(e);
                  t.colyRoom = r;
                  var n = r.send;
                  var u = r.onMessage;
                  H.f$.publish("loadingScreenState", "Loading Player Info");
                  Be(i, r, t);
                  var l = setInterval(function () {
                    if (!(n === r.send && u === r.onMessage)) {
                      Ee();
                    }
                  }, 10000);
                  (0, H.Xr)(function () {
                    clearInterval(l);
                  });
                  var c = {
                    Player: he,
                    Pebble: de.O,
                    Snowball: de.O,
                    "Reinforced Pebble": de.O,
                    "Reinforced Ball": de.O,
                    Ball: de.O,
                    "Moonstone Orb": de.O,
                    Arrow: de.O,
                    Fireball: de.O,
                    Iceball: de.O,
                    "Splash Speed Potion": de.O,
                    "Splash Defense Potion": de.O,
                    "Splash Strength Potion": de.O,
                    "Splash Invisibility Potion": de.O,
                    "Splash Jump Potion": de.O,
                    "Splash Knockback Potion": de.O,
                    Mesh: pe
                  };
                  e.state.entities.onAdd(function (e, r) {
                    if (t.serverPlayerEntity) {
                      n();
                    } else {
                      var i = H.f$.subscribeOnce("initInfoReceived", function () {
                        n();
                      });
                      (0, H.Xr)(function () {
                        H.f$.unsubscribe(i);
                      });
                    }
                    function n() {
                      if (r !== t.serverPlayerEntity) {
                        var i = c[e.type.split("|")[0]];
                        o[r] = {
                          colyseusEntity: e,
                          entity: new i((0, H.rL)(), r, e.type)
                        };
                        o[r].entity.initClient(e);
                        var n = function (e, i) {
                          if (e in s) {
                            t.ents.getState(r, "smoothToServerPos").serverPosition[s[e]] = i;
                          } else {
                            o[r].entity.onChangeClient(e, i);
                          }
                        };
                        var a = new Se();
                        var u = function (t) {
                          if (a.hasOwnProperty(t)) {
                            n(t, e[t]);
                            var r = e.listen(t, function (e, r) {
                              n(t, e);
                            });
                            (0, H.Xr)(function () {
                              r();
                            });
                          }
                        };
                        for (var l in a) {
                          u(l);
                        }
                      }
                    }
                  });
                  e.state.entities.onRemove(function (e, t) {
                    console.log("Removed entity", t);
                    o[t].entity.disposeClient();
                    delete o[t];
                  });
                  var h = {};
                  e.state.items.onAdd(function (e, r) {
                    h[r] = e;
                    (0, K.Ku)(t, r, [e.x, e.y, e.z], e.id, e.amount);
                    var i = function (e, i) {
                      if (e in s) {
                        if (t.ents.hasComponent(r, "itemState")) {
                          t.ents.getState(r, "smoothToServerPos").serverPosition[s[e]] = i;
                        }
                      } else if (t.ents.hasComponent(r, "itemState")) {
                        t.ents.getState(r, t.ents.names.itemState)[e] = i;
                      }
                    };
                    var n = new Ae();
                    var o = function (t) {
                      if (n.hasOwnProperty(t)) {
                        i(t, e[t]);
                        var r = e.listen(t, function (e, r) {
                          i(t, e);
                        });
                        (0, H.Xr)(function () {
                          r();
                        });
                      }
                    };
                    for (var a in n) {
                      o(a);
                    }
                  });
                  r.onMessage(xe.cU.itemStillThere, function (e) {
                    var r = e.eId;
                    var i = e.id;
                    var n = e.amount;
                    var o = e.x;
                    var s = e.y;
                    var a = e.z;
                    var u = e.cantPickUp;
                    (0, K.Ku)(t, r, [o, s, a], i, n, u);
                  });
                  r.onMessage(xe.cU.cantPickUpItem, function (e) {
                    if (t.ents.hasComponent(e, "itemState")) {
                      t.ents.getState(e, "itemState").cantPickUp = true;
                    }
                  });
                  e.state.items.onRemove(function (e, r) {
                    delete h[r];
                    if (t.ents.hasComponent(r, t.ents.names.itemState)) {
                      t.ents.deleteEntity(r);
                    }
                  });
                  (0, H.Xr)(function () {
                    for (var e in h) {
                      t.ents.deleteEntity(e);
                    }
                  });
                  e.onLeave(function (e) {
                    if (e !== ee.fV.gameOrPluginKick.code) {
                      console.log("Left room with code ".concat(e));
                      d(e);
                    }
                  });
                }).catch(function (e) {
                  console.error("Failed to connect to bloxd room. Check your internet connection. lobbyName: ".concat(r, ", gamemode: ").concat(i, " code: ").concat(e.code, "."));
                  console.error(e);
                  t.logErrorMessage("Failed to connect to bloxd room, lobbyName: ".concat(r, ", gamemode: ").concat(i, " code: ").concat(e.code, "\n"), e);
                  var n = e.code;
                  d(n, e.message);
                });
                (0, H.Xr)(function () {
                  for (var e in o) {
                    var r = parseInt(e);
                    if (r !== t.playerEntity) {
                      o[r].entity.disposeClient();
                    }
                  }
                });
              case 25:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return we.apply(this, arguments);
    }
    function ke(e, t) {
      for (var r in t) {
        e.serverSettings[r] = t[r];
      }
      for (var i in t) {
        H.f$.publish("serverOption|".concat(i), t[i]);
      }
      H.f$.publish("newAllServerOptions", e.serverSettings);
    }
    function De(e, t) {
      var r = t.taskId;
      var i = t.progress;
      e.serverSettings._tasks[r].progress = i;
      ke(e, {
        _tasks: e.serverSettings._tasks
      });
    }
    function Be(e, t, r) {
      function i() {
        return r.ents.getInventory(r.playerEntity);
      }
      t.onMessage(xe.cU.newClientOptions, function (e) {
        ke(r, e);
      });
      t.onMessage(xe.cU.newOtherPlayerSettings, function (e) {
        var t = e.EId;
        var i = e.settings;
        if (!r.otherPlayerSettings[r.playerEntity][t]) {
          r.otherPlayerSettings[r.playerEntity][t] = {};
          r.otherPlayerSettings[r.playerEntity][(0, H.dP)(t)] = {};
          r.otherPlayerSettings[r.serverPlayerEntity][t] = {};
          r.otherPlayerSettings[r.serverPlayerEntity][(0, H.dP)(t)] = {};
        }
        for (var n = 0, o = Object.entries(i); n < o.length; n++) {
          var s = (0, W.Z)(o[n], 2);
          var a = s[0];
          var u = s[1];
          r.otherPlayerSettings[r.playerEntity][t][a] = u;
          r.otherPlayerSettings[r.playerEntity][(0, H.dP)(t)][a] = u;
          r.otherPlayerSettings[r.serverPlayerEntity][t][a] = u;
          r.otherPlayerSettings[r.serverPlayerEntity][(0, H.dP)(t)][a] = u;
          H.f$.publish("otherPlayerSettings|".concat(a), {
            EId: t,
            value: u
          });
          H.f$.publish("otherPlayerSettings|".concat(t, "|").concat(a), u);
          H.f$.publish("otherPlayerSettingsClientifiedEId|".concat((0, H.dP)(t), "|").concat(a), u);
        }
      });
      t.onMessage(xe.cU.teleported, function (e) {
        var t = e.id;
        var i = e.x;
        var n = e.y;
        var o = e.z;
        (0, H.Xi)(xe.Vz.confirmTeleport, {
          id: t,
          type: Me.Y
        });
        r.ents.setPosition(r.playerEntity, [i, n, o]);
      });
      t.onMessage(xe.cU.chat, function (e) {
        H.f$.publish("chat", e, true);
      });
      t.onMessage(xe.cU.setCookie, function (t) {
        var r = t.key;
        var i = t.value;
        (0, H.d8)(e, r, i);
      });
      t.onMessage(xe.cU.initialInfo, function (e) {
        var i = e.EId;
        var n = e.pass;
        console.log("Local client is EId", i);
        H.f$.publish("loadingScreenState", "Loading World");
        (0, H.Cl)(n);
        r.serverPlayerEntity = i;
        if (r.ents.hasComponent(r.playerEntity, r.ents.names.playerName)) {
          r.ents.removeComponent(r.playerEntity, r.ents.names.playerName);
        }
        r.playerNames[r.serverPlayerEntity] = r.playerNames[r.playerEntity];
        r.otherPlayerSettings[r.serverPlayerEntity] = {};
        r.ents.addComponent(r.playerEntity, r.ents.names.playerName);
        H.f$.publish("initInfoReceived", t);
      });
      t.onMessage(xe.cU.TopRightHelper, function (e) {
        H.f$.publish("TopRightHelper", e, true);
      });
      t.onMessage(xe.cU.ProgressionEvent, function (e) {
        var t = e.type;
        var i = e.location1;
        var n = e.location2;
        var o = e.location3;
        var s = e.score;
        r.GA.addProgressionEvent(t, i, n, o, s);
      });
      t.onMessage(xe.cU.ResourceEvent, function (e) {
        var t = e.type;
        var i = e.resourceType;
        var n = e.amount;
        var o = e.category;
        var s = e.itemName;
        r.GA.addResourceEvent(t, i, n, o, s);
      });
      t.onMessage(xe.cU.canChangePos, function (e) {
        r.world.canChangeBlockCoord.add(e);
        r.world.cantChangeBlockCoord.delete(e);
      });
      t.onMessage(xe.cU.cantChangePos, function (e) {
        r.world.cantChangeBlockCoord.add(e);
        r.world.canChangeBlockCoord.delete(e);
      });
      t.onMessage(xe.cU.canChangeType, function (e) {
        r.world.canChangeBlockType.add(e);
        r.world.cantChangeBlockType.delete(e);
      });
      t.onMessage(xe.cU.cantChangeType, function (e) {
        r.world.cantChangeBlockType.add(e);
        r.world.canChangeBlockType.delete(e);
      });
      t.onMessage(xe.cU.resetChangeType, function (e) {
        r.world.cantChangeBlockType.delete(e);
        r.world.canChangeBlockType.delete(e);
      });
      t.onMessage(xe.cU.canChangeRect, function (e) {
        (0, H.Yl)(e, r.world.cantChangeBlockRect);
        (0, H.Yl)(e, r.world.canChangeBlockRect);
        r.world.canChangeBlockRect.push(e);
      });
      t.onMessage(xe.cU.cantChangeRect, function (e) {
        (0, H.Yl)(e, r.world.canChangeBlockRect);
        (0, H.Yl)(e, r.world.cantChangeBlockRect);
        r.world.cantChangeBlockRect.push(e);
      });
      t.onMessage(xe.cU.resetChangeRect, function (e) {
        (0, H.Yl)(e, r.world.canChangeBlockRect);
        (0, H.Yl)(e, r.world.cantChangeBlockRect);
      });
      t.onMessage(xe.cU.walkThroughType, function (e) {
        var t = e.id;
        if (e.disable) {
          r.world.walkThroughType.delete(t);
        } else {
          r.world.walkThroughType.add(t);
        }
      });
      t.onMessage(xe.cU.walkThroughRect, function (e) {
        var t = e.rect;
        if (e.disable) {
          (0, H.Yl)(t, r.world.walkThroughRect);
        } else {
          (0, H.Yl)(t, r.world.walkThroughRect);
          r.world.walkThroughRect.push(t);
        }
      });
      (0, H.Xr)(function () {
        r.world.canChangeBlockCoord = new Set();
        r.world.cantChangeBlockCoord = new Set();
        r.world.canChangeBlockType = new Set();
        r.world.cantChangeBlockType = new Set();
        r.world.canChangeBlockRect = [];
        r.world.cantChangeBlockRect = [];
        r.world.walkThroughType = new Set();
        r.world.walkThroughRect = [];
      });
      t.onMessage(xe.cU.taskProgress, function (e) {
        De(r, e);
      });
      t.onMessage(xe.cU.changeBlockFail, function (e) {
        var t;
        var r = (0, G.Z)(e);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            var o = i.pos;
            var s = i.actualId;
            var a = te.a[s];
            if (a) {
              var u = a.compX;
              var l = a.compY;
              var c = a.compZ;
              var h = a.mainMultiblock;
              (0, H.rL)().setBlock(o[0] - u, o[1] - l, o[2] - c, h);
            }
          }
        } catch (y) {
          r.e(y);
        } finally {
          r.f();
        }
        var d;
        var f = (0, G.Z)(e);
        try {
          for (f.s(); !(d = f.n()).done;) {
            var p = d.value;
            var m = p.pos;
            var g = p.actualId;
            var v = p.data;
            (0, H.rL)().setBlockNoMulti(m[0], m[1], m[2], g);
            var _ = JSON.parse(v);
            if (_ !== undefined) {
              n.blockDataOwner.setBlockData(m[0], m[1], m[2], _);
            }
            n.blockAdded(m[0], m[1], m[2], g);
          }
        } catch (y) {
          f.e(y);
        } finally {
          f.f();
        }
        H.f$.publish("EditBoard", {
          pos: null
        });
      });
      t.onMessage(xe.cU.pickUpItem, function (e) {
        var t = e.name;
        var r = e.amount;
        var n = e.metadata;
        i().pickUpItem({
          name: t,
          amount: r,
          typeObj: K.k2[t],
          metadata: n
        });
      });
      t.onMessage(xe.cU.setItemSlot, function (e) {
        var t = e.index;
        var r = e.name;
        var n = e.amount;
        var o = e.metadata;
        i().setItemSlot(t, r, n, o);
      });
      t.onMessage(xe.cU.syncInven, function (e) {
        var t = e.iOpsData;
        var i = e.isErr;
        if (r.ents.getInventoryState(r.playerEntity)) {
          if (i) {
            console.error("Had to sync inven");
          }
          r.ents.getInvenOps(r.playerEntity).loadFromString(t);
          H.f$.publish("syncedInvenFromServer");
        } else {
          console.log("Got resync inven but don't have inven component");
        }
      });
      t.onMessage(xe.cU.clearInventory, function () {
        i().clearInventory();
      });
      t.onMessage(xe.cU.leaveValues, function (e) {
        var t = e.leaveEventType;
        var r = e.category;
        var i = e.subCategory;
        var n = e.value;
        H.f$.publish("leaveValues", {
          leaveEventType: t,
          category: r,
          subCategory: i,
          value: n
        });
      });
      t.onMessage(xe.cU.customAnalyticsEvent, function (e) {
        var t = e.cat1;
        var i = e.cat2;
        var n = e.cat3;
        var o = e.value;
        var s = t;
        if (i) {
          s += ":" + i;
        }
        if (n) {
          s += ":" + n;
        }
        r.GA.addDesignEvent(s, o || 0);
      });
      var n = (0, H.rL)();
      t.onMessage(xe.cU.compressedBlocksChanged, function (e) {
        var t;
        var r = (0, G.Z)(e);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            if (i.length === 4) {
              var o = (0, W.Z)(i, 4);
              var s = o[0];
              var a = o[1];
              var u = o[2];
              var l = o[3];
              n.setBlock(s, a, u, l);
            } else {
              for (var c = (0, W.Z)(i, 7), h = c[0], d = c[1], f = c[2], p = c[3], m = c[4], g = c[5], v = c[6], _ = h; _ < d + 1; _++) {
                for (var y = f; y < p + 1; y++) {
                  for (var b = m; b < g + 1; b++) {
                    n.setBlock(_, y, b, v);
                  }
                }
              }
            }
          }
        } catch (A) {
          r.e(A);
        } finally {
          r.f();
        }
      });
      t.onMessage(xe.cU.setSelectedInventorySlotI, function (e) {
        H.f$.publish("setSelectedInventorySlotI", e, true);
      });
      t.onMessage(xe.cU.leaderboardResponse, function (e) {
        var t = e.category;
        var r = e.timeframe;
        var i = e.data;
        H.f$.publish("leaderboardResponse", {
          category: t,
          timeframe: r,
          data: i
        });
      });
      t.onMessage(xe.cU.bullet, function (e) {
        var t = e.whoShot;
        var r = e.dirs;
        H.f$.publish("bulletShot|".concat(t), {
          bulletDirections: r
        });
      });
      t.onMessage(xe.cU.gunHit, function (e) {
        var t;
        var i = e.gunId;
        var n = e.whoShotEId;
        var o = e.direction;
        var s = K.k2[i];
        var a = r.entities.getMoveState(r.playerEntity).speedMultiplier;
        var u = a.getMultiplierType("taggedSlowdown");
        if (u) {
          t = u - (u - u * s.tagSpeedMult) * s.subsequentTagSpeedReductionScalar;
        } else {
          t = s.tagSpeedMult;
        }
        a.setMultiplierType("taggedSlowdown", t);
        r.entities.getGenericPlayerState(r.playerEntity).lastSlowdownUpdate = Date.now();
        H.f$.publish("damagedByOtherPlayer", {
          whoShotEId: n,
          direction: o
        }, true);
      });
      t.onMessage(xe.cU.playerKilled, function (e) {
        H.f$.publish("playerKilled", e, true);
      });
      t.onMessage(xe.cU.reloading, function (e) {
        var t;
        var i;
        var n = e.EId;
        var o = e.numBullets;
        if (!((t = r.entities.getHeldItem(n)) === null || t === undefined || (i = t.reload) === null || i === undefined)) {
          i.call(t, o);
        }
      });
      t.onMessage(xe.cU.showShopTutorial, function () {
        H.f$.publish("showShopTutorial", null, true);
      });
      t.onMessage(xe.cU.progressBarUpdate, function (e) {
        H.f$.publish("progressBarUpdate", e, true);
      });
      t.onMessage(xe.cU.doorTypeSwap, function (e) {
        var t = e.initiatorEId;
        var r = e.rootPos;
        if (n.hasChunkWithBlockCoordinates(r[0], r[1], r[2])) {
          var i = (0, H.rL)().getBlock(r[0], r[1], r[2]);
          (0, H.rL)().swapDoorTypeOpenClosed(t, r[0], r[1], r[2], i);
        }
      });
      t.onMessage(xe.cU.chestState, function (e) {
        var t = e.open;
        var i = e.contents;
        if (t) {
          r.ents.getInvenOps(r.playerEntity).chestOpened(i);
        } else {
          r.ents.getInvenOps(r.playerEntity).chestClosed();
        }
        H.f$.publish("chestToggleFromServer", t, true);
      });
      t.onMessage(xe.cU.editItemCraftingRecipes, function (e) {
        var t = e.itemName;
        var i = e.recipesForItem;
        n.craftingManager.editRecipesForPlayer(r.playerEntity, t, i);
        H.f$.publish("craftingRecipesEdited", {
          itemName: t,
          recipesForItem: i
        });
      });
      t.onMessage(xe.cU.playerSwingArmChange, function (e) {
        var t = e.newVal;
        var i = e.eId;
        if (r.ents.getMoveState(i)) {
          r.ents.getMoveState(i).armSwinging = t;
          var n = r.ents.getPlayerMeshState(i);
          if (n && t) {
            n.consumedNetworkArmSwing = false;
          }
        }
      });
      t.onMessage(xe.cU.charCustUpdate, function (e) {
        var t;
        var r = (0, G.Z)(e);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            (0, q.zI)(i);
          }
        } catch (n) {
          r.e(n);
        } finally {
          r.f();
        }
        H.f$.publish("charCustomisationUpdated", e, true);
      });
      t.onMessage(xe.cU.entityHurt, function (e) {
        var t = e.eId;
        e.yourAttack;
        var i = e.kbPs;
        var n = i !== undefined && i;
        var o = e.cPs;
        var s = o !== undefined && o;
        t = (0, H.dP)(t);
        r.entities.getState(t, "genericAliveEntity").lastHurtTime = Date.now();
        if (n) {
          var a = r.entities.getPosition(t);
          (0, ie.JC)(r, ie.QI, [a[0], a[1] + 1, a[2]], 10);
        }
        if (s) {
          var u = r.entities.getPosition(t);
          (0, ie.JC)(r, ie.Qk, [u[0], u[1] + 1, u[2]], 10);
        }
      });
      var o = $().create();
      t.onMessage(xe.cU.attacked, function (e) {
        var t = e.dir;
        var i = e.sprinted;
        var n = e.scalar;
        var s = e.redVert;
        var a = r.entities.getPhysicsBody(r.playerEntity);
        a.velocity[0] = 0;
        a.velocity[2] = 0;
        if (s) {
          if (a.velocity[1] > 0) {
            a.velocity[1] = 0;
          }
          if (a._impulses[1] > 0) {
            a._impulses[1] = 0;
          }
          r.ents.getMoveState(r.playerEntity).hitInPrevTick = true;
        }
        var u = $().copy(o, t);
        var l = 0.4;
        if (u[1] > 0) {
          l += u[1] * 0.1;
        }
        u[1] = 0;
        if (t[0] === 0 && t[2] === 0) {
          t[0] = 0.01;
        }
        $().normalize(u, u);
        u[1] = l;
        var c = r.ents.getMovement(r.playerEntity).isInCobweb();
        var h = (i ? 1.3 : 1) * 13 * (0.9 + Math.random() * 0.2) * n * (c ? 0.1 : 1);
        u[0] *= h;
        u[2] *= h;
        var d = (i ? 1.2 : 1) * 15 * (0.9 + Math.random() * 0.2) * n * (c ? 0.5 : 1);
        u[1] *= d;
        a.applyImpulse(u);
      });
      t.onMessage(xe.cU.charArmourUpdate, function (e) {
        var t;
        var r = (0, G.Z)(e);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            (0, q.Z7)(i);
          }
        } catch (n) {
          r.e(n);
        } finally {
          r.f();
        }
      });
      t.onMessage(xe.cU.kick, function (e) {
        H.f$.publish("unwantedLeftGame", {
          reason: "Kicked: ".concat(e)
        });
      });
      t.onMessage(xe.cU.removeItemName, function (e) {
        var t = e.name;
        var i = e.amt;
        r.ents.getInventory(r.playerEntity).removeItemName(t, i);
      });
      t.onMessage(xe.cU.setCamDir, function (e) {
        var t = (0, ne.NQ)([-e[0], -e[1], -e[2]]);
        var i = t.theta;
        var n = t.phi;
        r.camera.heading = i;
        r.camera.pitch = n;
      });
      t.onMessage(xe.cU.matchmake, function (e) {
        var t = e.toGame;
        var r = e.lobbyName;
        (0, oe.kB)(function () {
          console.log("Received matchmaking order from game server to game", t);
          (0, Q.I4)(t !== null && t !== undefined ? t : H.EU.connectedPlayingMode, r !== null && r !== undefined ? r : null);
        });
      });
      t.onMessage(xe.cU.newUiRequest, function (e) {
        H.f$.publish("newUiRequest", e, true);
      });
      t.onMessage(xe.cU.removeUiRequest, function (e) {
        H.f$.publish("removeUiRequest", e, true);
      });
      t.onMessage(xe.cU.uiRequestPopup, function (e) {
        var t = e.text;
        var r = e.id;
        H.f$.publish("uiRequestPopup", {
          text: t,
          callback: function (e) {
            (0, H.Xi)(xe.Vz.UiRequestResp, {
              id: r,
              response: e
            });
          }
        }, true);
      });
      t.onMessage(xe.cU.EffectUpdate, function (e) {
        H.f$.publish("EffectUpdate", e, true);
      });
      t.onMessage(xe.cU.JumpEffectAmount, function (e) {
        r.ents.getMoveState(r.playerEntity).jumpMultiplier.setMultiplierType("jumpEffectAmount", e);
      });
      t.onMessage(xe.cU.SpeedEffectAmount, function (e) {
        r.ents.getMoveState(r.playerEntity).speedMultiplier.setMultiplierType("speedEffectAmount", e);
      });
      (0, H.Xr)(function () {
        r.ents.getMoveState(r.playerEntity).speedMultiplier.setMultiplierType("speedEffectAmount", 1);
        r.ents.getMoveState(r.playerEntity).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1);
      });
      t.onMessage(xe.cU.newParticleEffect, function (e) {
        n.rendering.newParticleSystem(e);
      });
      t.onMessage(xe.cU.playSound, function (e) {
        var t;
        var r;
        var i = e.namePrefix;
        var n = e.volume;
        var o = e.rate;
        var s = e.posSettings;
        var a = s !== null && s !== undefined ? s : {};
        var u = a.playerIdOrPos;
        var l = a.maxHearDist;
        var c = a.refDistance;
        l = (t = l) !== null && t !== undefined ? t : undefined;
        c = (r = c) !== null && r !== undefined ? r : undefined;
        if (!(u && (0, H.dP)(u) !== (0, H.Zx)().playerEntity)) {
          (0, ae.GW)().play((0, se.r_)(i), n, u, l, c).rate(o);
        }
      });
      t.onMessage(xe.cU.setBlockData, function (e) {
        var t = e.pos;
        var r = e.data;
        n.blockDataOwner.setBlockData(t[0], t[1], t[2], r);
        n.blockAdded(t[0], t[1], t[2], n.getBlock(t[0], t[1], t[2]));
      });
      t.onMessage(xe.cU.overShopInfo, function (e) {
        var t = e.info;
        H.f$.publish("overShopInfo", t, true);
      });
      t.onMessage(xe.cU.forceShowShop, function (e) {
        H.f$.publish("forceShowShop", e, true);
      });
      t.onMessage(xe.cU.applyForce, function (e) {
        console.log("Applying", e);
        r.entities.getPhysicsBody(r.playerEntity).applyForce(e);
      });
    }
    H.f$.subscribe("clientTaskProgress", function (e) {
      De((0, H.Zx)(), e);
    });
    window.addEventListener("beforeunload", function () {});
  },
  85853: function (e, t, r) {
    "use strict";

    r.d(t, {
      ur: function () {
        return w;
      },
      sM: function () {
        return E;
      },
      $e: function () {
        return n;
      },
      fs: function () {
        return P;
      },
      Q8: function () {
        return D;
      },
      Z7: function () {
        return L;
      },
      zI: function () {
        return O;
      }
    });
    var i;
    var n;
    var o = r(4942);
    var s = r(1413);
    var a = r(37762);
    var u = r(15861);
    var l = r(64687);
    var c = r.n(l);
    r(4892);
    r(47984);
    r(36470);
    r(35941);
    var h = r(67269);
    var d = r(85774);
    var f = r(41038);
    var p = r(41494);
    var m = r(87683);
    var g = r(70937);
    var v = r(9488);
    var _ = r(30258);
    var y = r(13813);
    var b = r(37928);
    var A = r(43971);
    var S = r(14848);
    var M = r(92643);
    var C = r(47077);
    var x = r.n(C);
    function T(e) {
      var t = null;
      var r = [];
      d.f$.subscribe("serverOption|numClosestPlayersVisible", function (r) {
        t = r;
        if (r !== null) {
          o();
        } else {
          var i;
          var n = e.ents.getStatesList("genericPlayerState");
          var s = (0, a.Z)(n);
          try {
            for (s.s(); !(i = s.n()).done;) {
              var u = i.value;
              u.meshEnabledCombinator.removeBoolean("closestVisibleX");
              e.entities.getState(u.__id, "shadow").enabledCombinator.removeBoolean("closestVisibleX");
            }
          } catch (l) {
            s.e(l);
          } finally {
            s.f();
          }
        }
      });
      var i = x().create();
      var n = 0;
      function o() {
        if (t !== null) {
          var o = e.entities.getPosition(e.playerEntity);
          n = Date.now();
          x().copy(i, o);
          for (var s = e.ents.getStatesList("genericPlayerState"), u = 0; u < s.length; u++) {
            r[u] = s[u];
          }
          r.length = s.length;
          r.sort(function (t, r) {
            return x().dist(e.entities.getPosition(t.__id), o) - x().dist(e.entities.getPosition(r.__id), o);
          });
          var l;
          var c = 0;
          var h = (0, a.Z)(r);
          try {
            for (h.s(); !(l = h.n()).done;) {
              var d = l.value;
              if (d.__id !== e.playerEntity) {
                if (c < t) {
                  d.meshEnabledCombinator.setBooleanType("closestVisibleX", true);
                  e.entities.getState(d.__id, "shadow").enabledCombinator.setBooleanType("closestVisibleX", true);
                  c++;
                } else {
                  d.meshEnabledCombinator.setBooleanType("closestVisibleX", false);
                  e.entities.getState(d.__id, "shadow").enabledCombinator.setBooleanType("closestVisibleX", false);
                }
              }
            }
          } catch (f) {
            h.e(f);
          } finally {
            h.f();
          }
        }
      }
      e.on("tick", function (t) {
        var r = e.entities.getPosition(e.playerEntity);
        var s = x().dist(r, i);
        if (!(Date.now() - n < 500 && s < 3)) {
          o();
        }
      });
    }
    function P(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (I = (0, u.Z)(c().mark(function e(t) {
        var r;
        var o;
        var s;
        return c().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return E(t.rendering.getScene());
              case 2:
                r = e.sent;
                o = r.container;
                s = r.customisationMgr;
                i = o;
                n = s;
                k(t);
                T(t);
              case 9:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }))).apply(this, arguments);
    }
    function E(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (R = (0, u.Z)(c().mark(function e(t) {
        var r;
        var i;
        var n;
        var o;
        var s;
        var u;
        var l;
        var f;
        var p;
        var _;
        var y;
        var M;
        return c().wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                r = new m.K("playerSpriteSheet", t);
                new b.Fu(r);
                r.diffuseTexture = new g.x(A.$, t, null, null, g.x.NEAREST_SAMPLINGMODE);
                r.specularColor = new v.Wo(0, 0, 0);
                r.freeze();
                i = new m.K("armourMat", t);
                new b.J5(i, "".concat(S.Al.toString(), ".0"));
                i.diffuseTexture = new g.x(S.Ng, t, null, null, g.x.NEAREST_SAMPLINGMODE);
                i.specularColor = new v.Wo(0, 0, 0);
                i.diffuseTexture.hasAlpha = true;
                i.backFaceCulling = false;
                i.freeze();
                e.next = 14;
                return h.n.LoadAssetContainerAsync((0, d.v7)("64x64UVPlayerArmour2"), null, t);
              case 14:
                n = e.sent;
                o = new b.cd((0, d.rL)(), n);
                s = n.meshes;
                u = s[1].material;
                l = (0, a.Z)(s);
                try {
                  for (l.s(); !(f = l.n()).done;) {
                    if ((p = f.value).material) {
                      if (p.name.split("|")[1] === "Armour") {
                        p.material = i;
                      } else {
                        p.material = r;
                      }
                    }
                  }
                } catch (c) {
                  l.e(c);
                } finally {
                  l.f();
                }
                u.dispose();
                _ = (0, a.Z)(s);
                try {
                  for (_.s(); !(y = _.n()).done;) {
                    (M = y.value).alwaysSelectAsActiveMesh = true;
                    M.doNotSyncBoundingInfo = true;
                    M.setEnabled(false);
                    M.isPickable = false;
                  }
                } catch (c) {
                  _.e(c);
                } finally {
                  _.f();
                }
                return e.abrupt("return", {
                  container: n,
                  customisationMgr: o
                });
              case 24:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }))).apply(this, arguments);
    }
    function w(e, t) {
      var r;
      var i = e.instantiateModelsToScene(function (e) {
        return e;
      }, false, {
        doNotInstantiate: false
      }).rootNodes[0];
      var n = (0, a.Z)(i.getChildMeshes(false));
      try {
        for (n.s(); !(r = n.n()).done;) {
          var o = r.value;
          if (o.name.split("|")[1] === "Armour") {
            o.setEnabled(false);
          }
        }
      } catch (s) {
        n.e(s);
      } finally {
        n.f();
      }
      return i;
    }
    function k(e) {
      var t = e.playerEntity;
      D(e, t);
      var r = e.ents;
      r.addComponent(e.playerEntity, r.names.receivesInputs);
      r.addComponent(e.playerEntity, r.names.movement);
      r.addComponent(t, r.names.updateServerOfMovement);
      r.addComponent(t, r.names.playerCameraAdjustment);
      r.addComponent(t, r.names.crouchingHandler);
      r.addComponent(t, "stepSoundOnWalk");
      e.entities.addComponent(t, "playerHowlerListenerUpdate");
      e.entities.getPhysicsBody(t).alwaysApplyHorizFriction = true;
      e.on("beforePhysicsTick", function (t) {
        (0, _.tickReceivesInputsPrePhysics)(e, t);
        (0, y.tickMovementPrePhysics)(e, t);
      });
      var i = new f.C();
      i.setBooleanType("standardCanRun", true);
      e.entities.getState(e.playerEntity, "receivesInputs").canRunCombinator = i;
      (function (e) {
        var t = e.playerEntity;
        d.f$.subscribe("serverOption|useInventory", function (r) {
          if (!(r !== true || e.ents.hasInventory(t))) {
            e.ents.addComponent(t, e.ents.names.inventory);
            e.ents.getInvenOps(e.playerEntity).inCreative = e.serverSettings.creative;
          }
          if (r === false && e.ents.hasInventory(t)) {
            e.ents.removeComponent(t, e.ents.names.inventory);
          }
        });
        d.f$.subscribe("serverOption|creative", function (r) {
          if (e.ents.hasComponent(t, "inventory")) {
            e.ents.getInvenOps(e.playerEntity).inCreative = r;
          }
        });
        d.f$.subscribe("leaveGame", function () {
          if (e.ents.hasInventory(t)) {
            e.ents.removeComponent(t, e.ents.names.inventory);
          }
        });
      })(e);
      (0, p.Bj)(e);
    }
    function D(e, t) {
      var r;
      var n;
      var o;
      e.entities.addComponent(t, e.ents.names.moveState);
      e.entities.addComponent(t, "genericPlayerState");
      e.entities.addComponent(t, "genericAliveEntity");
      e.entities.addComponent(t, "heldItem");
      e.entities.addComponent(t, "meshRotation");
      e.entities.addComponent(t, "hitbox");
      (function (e, t) {
        var r = e.entities.getGenericPlayerState(t);
        r.meshEnabledCombinator.setBooleanType("notDead", true);
        e.entities.getState(t, "shadow").enabledCombinator.setBooleanType("notDead", true);
        r.meshEnabledCombinator.setBooleanType("canSeeSetting", true);
        e.entities.getState(t, "shadow").enabledCombinator.setBooleanType("canSeeSetting", true);
        r.meshEnabledCombinator.setBooleanType("invisibleEffect", true);
        e.entities.getState(t, "shadow").enabledCombinator.setBooleanType("invisibleEffect", true);
        var i = function (i, n) {
          r.meshEnabledCombinator.setBooleanType(i, n);
          e.entities.getState(t, "shadow").enabledCombinator.setBooleanType(i, n);
        };
        if (e.otherPlayerSettings[e.playerEntity][t]) {
          i("notDead", e.otherPlayerSettings[e.playerEntity][t]._isAlive);
          i("canSeeSetting", e.otherPlayerSettings[e.playerEntity][t].canSee);
        }
        var n;
        var o = d.f$.subscribe("otherPlayerSettingsClientifiedEId|".concat(t, "|_isAlive"), function (e) {
          i("notDead", e);
        });
        var s = d.f$.subscribe("otherPlayerSettingsClientifiedEId|".concat(t, "|canSee"), function (e) {
          i("canSeeSetting", e);
        });
        var a = d.f$.subscribe("otherPlayerSettingsClientifiedEId|".concat(t, "|_invisibleEffect"), function (e) {
          i("invisibleEffect", !e);
        });
        if (t === e.playerEntity) {
          var u = {
            gravityMultiplier: null
          };
          n = d.f$.subscribe("otherPlayerSettingsClientifiedEId|".concat(e.playerEntity, "|_isAlive"), function (t) {
            var r = e.entities.getPhysicsBody(e.playerEntity);
            if (t) {
              if (u.gravityMultiplier === null) {
                return;
              }
              for (var i in u) {
                r[i] = u[i];
              }
            } else {
              u.gravityMultiplier = r.gravityMultiplier;
              r.gravityMultiplier = 0;
              r.velocity[0] = 0;
              r.velocity[1] = 0;
              r.velocity[2] = 0;
              r._forces[0] = 0;
              r._forces[1] = 0;
              r._forces[2] = 0;
              r._impulses[0] = 0;
              r._impulses[1] = 0;
              r._impulses[2] = 0;
            }
          });
        }
        var l = d.f$.subscribe("playerLeaveClientifiedEId|".concat(t), function () {
          d.f$.unsubscribe(o);
          d.f$.unsubscribe(s);
          d.f$.unsubscribe(a);
          d.f$.unsubscribe(n);
          d.f$.unsubscribe(l);
        });
      })(e, t);
      (function (e, t) {
        var r = e.entities.getGenericPlayerState(t);
        var i = r.meshEnabledCombinator;
        var n = e.serverSettings.showPlayersInUnloadedChunks || false;
        i.setBooleanType("inLoadedChunk", n);
        var o = false;
        var s = n;
        e.entities.addComponent(t, "inLoadedChunk", {
          inChunkChange: function (n) {
            o = n;
            if (!s) {
              i.setBooleanType("inLoadedChunk", n);
              if (t !== e.playerEntity) {
                r.playerComponentsOn = n;
              }
            }
          }
        });
        var a = d.f$.subscribe("serverOption|showPlayersInUnloadedChunks", function (n) {
          if (s = n) {
            i.setBooleanType("inLoadedChunk", true);
            r.playerComponentsOn = true;
          } else {
            i.setBooleanType("inLoadedChunk", o);
            if (t !== e.playerEntity) {
              r.playerComponentsOn = o;
            }
          }
        });
        var u = d.f$.subscribe("playerLeaveClientifiedEId|".concat(t), function () {
          d.f$.unsubscribe(a);
          d.f$.unsubscribe(u);
        });
      })(e, t);
      var s = w(i);
      s.scaling.scaleInPlace(0.12);
      e.ents.addComponent(t, e.ents.names.playerMesh, {
        rootMesh: s
      });
      e.entities.addComponent(t, e.ents.names.mesh, {
        mesh: s,
        offset: [0, 0, 0],
        isPickable: false
      });
      var u = e.entities.getGenericPlayerState(t).meshEnabledCombinator.getTotalBooleanVal();
      s.setEnabled(u);
      if (B[t]) {
        O({
          eId: t,
          part: "head",
          selected: B[t].head
        });
        O({
          eId: t,
          part: "body",
          selected: B[t].body
        });
        O({
          eId: t,
          part: "legs",
          selected: B[t].legs
        });
      }
      if (F[t]) {
        L({
          eId: t,
          part: "Helmet",
          selected: F[t].Helmet
        });
        L({
          eId: t,
          part: "Chestplate",
          selected: F[t].Chestplate
        });
        L({
          eId: t,
          part: "Gauntlets",
          selected: F[t].Gauntlets
        });
        L({
          eId: t,
          part: "Leggings",
          selected: F[t].Leggings
        });
        L({
          eId: t,
          part: "Boots",
          selected: F[t].Boots
        });
      }
      e.ents.getState(t, e.ents.names.shadow).size = 0.6;
      var l = t;
      if (t === e.playerEntity) {
        l = e.serverPlayerEntity;
        d.f$.subscribe("initInfoReceived", function () {
          l = e.serverPlayerEntity;
        });
      }
      var c = s.getChildMeshes(false);
      var h = d.f$.subscribe("otherPlayerSettings|opacity", function (e) {
        var t = e.EId;
        var r = e.value;
        if (t === l) {
          var i;
          var n = (0, a.Z)(c);
          try {
            for (n.s(); !(i = n.n()).done;) {
              var o = i.value;
              if (b.XT[o.name] === undefined) {
                o.setEnabled(r !== 0);
              }
            }
          } catch (s) {
            n.e(s);
          } finally {
            n.f();
          }
        }
      });
      var f = d.f$.subscribe("otherPlayerSettingsClientifiedEId|".concat(t, "|_invincible"), function (e) {
        p(e);
      });
      function p(r) {
        if (!r && e.entities.hasComponent(t, "flashingMeshOverlay")) {
          e.entities.removeComponent(t, "flashingMeshOverlay");
        }
        if (r && !e.entities.hasComponent(t, "flashingMeshOverlay")) {
          e.entities.addComponent(t, "flashingMeshOverlay");
        }
      }
      p((r = e.otherPlayerSettings[e.playerEntity][t]) === null || r === undefined ? undefined : r._invincible);
      var m = d.f$.subscribe("playerLeaveClientifiedEId|".concat(t), function () {
        d.f$.unsubscribe(h);
        d.f$.unsubscribe(m);
        d.f$.unsubscribe(f);
      });
      if ((n = e.otherPlayerSettings) !== null && n !== undefined && (o = n[e.playerEntity]) !== null && o !== undefined && o[l]) {
        var g;
        var v = (0, a.Z)(c);
        try {
          for (v.s(); !(g = v.n()).done;) {
            var _ = g.value;
            if (b.XT[_.name] === undefined) {
              _.setEnabled(e.otherPlayerSettings[e.playerEntity][l].opacity !== 0);
            }
          }
        } catch (y) {
          v.e(y);
        } finally {
          v.f();
        }
      }
      d.f$.publish("ModelLoaded|".concat(t));
    }
    var B = {};
    function O(e) {
      var t = e.eId;
      var r = e.part;
      var i = e.selected;
      B[t] = (0, s.Z)((0, s.Z)({}, B[t]), {}, (0, o.Z)({}, r, i));
      var a = (0, d.dP)(t);
      var u = (0, d.Zx)().entities.getPlayerMeshState(a);
      if (u) {
        n.updateInstanceCustomisation(u.rootMesh, r, i);
      }
    }
    (0, d.ZC)(function () {
      B = {};
    });
    var F = {};
    function L(e) {
      var t = e.eId;
      var r = e.part;
      var i = e.selected;
      F[t] = (0, s.Z)((0, s.Z)({}, F[t]), {}, (0, o.Z)({}, r, i));
      var a = (0, d.dP)(t);
      if ((0, d.Zx)().entities.getPlayerMeshState(a)) {
        var u = i ? (0, M.uO)(i) : null;
        var l = i ? (0, M.yE)(i) : null;
        n.updateInstanceArmour(a, r, u, l);
      }
    }
    (0, d.ZC)(function () {
      L({
        eId: (0, d.Zx)().serverPlayerEntity,
        part: "Helmet",
        selected: null
      });
      L({
        eId: (0, d.Zx)().serverPlayerEntity,
        part: "Chestplate",
        selected: null
      });
      L({
        eId: (0, d.Zx)().serverPlayerEntity,
        part: "Gauntlets",
        selected: null
      });
      L({
        eId: (0, d.Zx)().serverPlayerEntity,
        part: "Leggings",
        selected: null
      });
      L({
        eId: (0, d.Zx)().serverPlayerEntity,
        part: "Boots",
        selected: null
      });
      F = {};
    });
  },
  91314: function (e, t, r) {
    "use strict";

    r.d(t, {
      O: function () {
        return C;
      }
    });
    var i;
    var n = r(37762);
    var o = r(15671);
    var s = r(43144);
    var a = r(47077);
    var u = r.n(a);
    var l = r(52126);
    var c = r(39269);
    function h(e, t, r, i) {
      var n = e.getItemStat(t, r, "drops");
      var o = e.getItemStat(t, r, "specialToolDrop");
      if (o !== null && o !== undefined && o.tool && i === o.tool) {
        return o.drops;
      } else {
        return n || (n !== null ? e.getMetaInfo(r).rootName : null);
      }
    }
    !function (e) {
      e[e.Boom = 0] = "Boom";
      e[e.Freeze = 1] = "Freeze";
    }(i || (i = {}));
    var d = [0, 0, 0];
    var f = [0, 0, 0];
    var p = [0, 0, 0];
    function m(e, t, r, i, n, o) {
      var s = u().set(f, t, r, i);
      var a = [s[0] - 2, s[1] - 3.5, s[2] - 2];
      var c = [s[0] + 2, s[1] + 3.5, s[2] + 2];
      e.playParticleEffectForEveryone({
        name: "potion",
        pos1: a,
        pos2: c,
        texture: "generic_2",
        minLifeTime: 0.15,
        maxLifeTime: 0.5,
        minEmitPower: 5,
        maxEmitPower: 10,
        minSize: 0.15,
        maxSize: 0.3,
        manualEmitCount: 500,
        gravity: [0, 0, 0],
        colorGradients: o,
        velocityGradients: [{
          timeFraction: 0,
          factor: 0.075,
          factor2: 0.15
        }, {
          timeFraction: 1,
          factor: 0.075,
          factor2: 0.15
        }]
      });
      e.forEachEntity(function (t) {
        var r = e.getPosition(t);
        if (!e.getPhysicsBody(t) && e.isInsideRect(r, a, c)) {
          if (n === "Knockback") {
            var i = [0, 0, 0];
            u().subtract(i, [r[0], r[1] + l.ZP.playerHeight / 2, r[2]], s);
            u().normalize(i, i);
            u().scale(i, i, 700);
            e.applyForce(t, i[0], i[1], i[2]);
          } else {
            e.applyEffect(t, n, e.getClientOption(t, "potionEffectDuration"));
          }
        }
      });
    }
    function g(e, t, r, n, o, s, a, l) {
      if (e.checkValid(r)) {
        for (var c = Math.floor(n), m = Math.floor(o), g = Math.floor(s), v = 0; v < 300; v++) {
          for (var _ = u().set(d, c, m, g), y = a, b = 0; b < 7; b++) {
            _[Math.floor(Math.random() * 3)] += Math.random() < 0.5 ? -1 : 1;
            if ((y -= 0.6) <= 0) {
              break;
            }
            var A = e.getBlock(_);
            if (A !== "Air" && A !== "Protector" && A !== "Unloaded") {
              var S = e.getItemStat(r, A, "ttb");
              if ((y -= (S !== null && S !== undefined ? S : 500) / 2000) <= 0) {
                break;
              }
              var M = e.attemptWorldChangeBlock(e.getPlayerDbId(r), _[0], _[1], _[2], "Air");
              var C = h(e, r, A, null);
              if (M && S && C) {
                if (Math.random() < (t === i.Freeze ? 0.4 : 0)) {
                  e.setBlock(_[0], _[1], _[2], "Ice");
                } else {
                  e.createItemDrop(_[0] + 0.5, _[1] + 0.5, _[2] + 0.5, C, 1, true);
                }
              }
            }
          }
        }
        var x = a * 2;
        var T = u().set(f, n, o - 0.1, s);
        e.forEachEntity(function (n) {
          var o = e.getPosition(n);
          var s = u().distance(o, T);
          if (s < x) {
            var c = e.getPhysicsBody(n);
            o[1] += c ? c.aabb.vec[1] / 2 : 0.9;
            s = u().distance(o, T);
            var h = u().subtract(p, o, T);
            if (u().length(h) === 0) {
              h[1] = 1;
            }
            u().normalize(h, h);
            var d = 1 - s / x;
            u().scale(h, h, d * 1000);
            if (!c) {
              h[0] *= 1.5;
              h[2] *= 1.5;
            }
            var f = true;
            if (!c) {
              f = e.applyDamage(r, n, d * 37.5 * a * (t === i.Freeze ? 0.5 : 1), l, null, false, false, true, false, true, null, true);
            }
            if (f) {
              if (t === i.Boom) {
                e.applyForce(n, h[0], h[1], h[2]);
              } else if (t === i.Freeze) {
                e.applyForce(n, h[0] * 0.05, h[1] * 0.05, h[2] * 0.05);
                if (!c) {
                  e.applyEffect(n, "Frozen", d * 2000);
                }
              }
            }
          }
        });
      }
    }
    var v = 0.1;
    var _ = [{
      gradient: 0,
      minColor: [255, 167, 0, 1],
      maxColor: [255, 103, 0, 1]
    }, {
      gradient: 0.2,
      minColor: [161, 193, 195, 1],
      maxColor: [70, 184, 190, 1]
    }, {
      gradient: 1,
      minColor: [161, 193, 195, 0],
      maxColor: [70, 184, 190, 0]
    }];
    var y = [{
      gradient: 0,
      minColor: [190, 188, 147, 1],
      maxColor: [185, 178, 42, 1]
    }, {
      gradient: 0.2,
      minColor: [190, 188, 147, 1],
      maxColor: [185, 178, 42, 1]
    }, {
      gradient: 1,
      minColor: [190, 188, 147, 0],
      maxColor: [185, 178, 42, 0]
    }];
    var b = [{
      gradient: 0,
      minColor: [165, 135, 167, 1],
      maxColor: [158, 83, 162, 1]
    }, {
      gradient: 0.2,
      minColor: [165, 135, 167, 1],
      maxColor: [158, 83, 162, 1]
    }, {
      gradient: 1,
      minColor: [165, 135, 167, 0],
      maxColor: [158, 83, 162, 0]
    }];
    var A = [{
      gradient: 0,
      minColor: [144, 140, 141, 1],
      maxColor: [107, 107, 107, 1]
    }, {
      gradient: 0.2,
      minColor: [144, 140, 141, 1],
      maxColor: [107, 107, 107, 1]
    }, {
      gradient: 1,
      minColor: [144, 140, 141, 0],
      maxColor: [107, 107, 107, 0]
    }];
    var S = [{
      gradient: 0,
      minColor: [147, 195, 159, 1],
      maxColor: [104, 195, 128, 1]
    }, {
      gradient: 0.2,
      minColor: [147, 195, 159, 1],
      maxColor: [104, 195, 128, 1]
    }, {
      gradient: 1,
      minColor: [147, 195, 159, 0],
      maxColor: [104, 195, 128, 0]
    }];
    var M = [{
      gradient: 0,
      minColor: [168, 90, 34, 1],
      maxColor: [168, 76, 10, 1]
    }, {
      gradient: 0.2,
      minColor: [168, 90, 34, 1],
      maxColor: [168, 76, 10, 1]
    }, {
      gradient: 1,
      minColor: [168, 90, 34, 0],
      maxColor: [168, 76, 10, 0]
    }];
    var C = function () {
      function e(t, r, i) {
        (0, o.Z)(this, e);
        this.bloxd = undefined;
        this.noa = undefined;
        this.eId = undefined;
        this.type = undefined;
        this.bloxd = t;
        this.noa = t.noa;
        this.eId = r;
        this.type = i;
      }
      (0, s.Z)(e, [{
        key: "initClient",
        value: function (e) {
          var t = this;
          this.noa.ents.add([e.x, e.y, e.z], v, v, null, null, false, false, this.eId);
          this.noa.ents.addComponent(this.eId, this.noa.ents.names.smoothToServerPos);
          this.noa.ents.addComponent(this.eId, "doOnFirstTick", {
            cb: function () {
              t.noa.ents.addComponent(t.eId, "hidingMeshManager", {
                addMeshComponent: function () {
                  console.log("Adding throwable", t.eId);
                  t.noa.entities.addComponent(t.eId, "mesh", {
                    mesh: t.bloxd.rendering.getThrowableMesh(t.type),
                    shouldAddMeshToScene: false
                  });
                },
                removeMeshComponent: function () {
                  t.noa.entities.removeComponent(t.eId, "mesh");
                },
                hideDist: 30,
                movingHideDist: 130
              });
            }
          });
        }
      }, {
        key: "onChangeClient",
        value: function (e, t) {}
      }, {
        key: "disposeClient",
        value: function () {
          this.noa.ents.deleteEntity(this.eId);
        }
      }, {
        key: "initServer",
        value: function (e) {
          var t;
          var r;
          var o = this;
          var s = e.pos;
          var a = e.throwerEId;
          var h = e.thrownDir;
          var d = e.dispose;
          var f = e.extraVelocityMult;
          var p = e.extraDamageMult;
          var C = {
            Snowball: {
              velocityMult: 15,
              removeOnHitTerrain: false,
              friction: 300,
              restitution: 0.2,
              canPickUpAfterBounceCount: 1,
              autoRemoveAfterTime: 20000
            },
            Pebble: {
              velocityMult: 20,
              removeOnHitTerrain: true
            },
            "Reinforced Pebble": {
              velocityMult: 30,
              removeOnHitTerrain: true
            },
            Ball: {
              velocityMult: 10,
              removeOnHitTerrain: false,
              friction: 1,
              restitution: 0.8,
              canPickUpAfterBounceCount: 0,
              autoRemoveAfterTime: 60000
            },
            "Reinforced Ball": {
              velocityMult: 15,
              removeOnHitTerrain: false,
              friction: 0.5,
              restitution: 0.2,
              canPickUpAfterBounceCount: 0,
              autoRemoveAfterTime: 60000
            },
            Fireball: {
              velocityMult: 20,
              removeOnHitTerrain: true,
              gravityMult: 0,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                g(o.bloxd.room.api, i.Boom, a, e[0], e[1], e[2], 1.7, "Fireball Block");
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                g(o.bloxd.room.api, i.Boom, a, e[0], e[1], e[2], 1.7, "Fireball Block");
              }
            },
            Iceball: {
              velocityMult: 20,
              removeOnHitTerrain: true,
              gravityMult: 0,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                g(o.bloxd.room.api, i.Freeze, a, e[0], e[1], e[2], 2, "Iceball Block");
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                g(o.bloxd.room.api, i.Freeze, a, e[0], e[1], e[2], 2, "Iceball Block");
              }
            },
            "Moonstone Orb": {
              velocityMult: 25,
              removeOnHitTerrain: true,
              onHitTerrain: function () {
                if (T.checkValid(a)) {
                  var e = T.getPosition(o.eId);
                  var t = [Math.floor(e[0]), Math.floor(e[1]), Math.floor(e[2])];
                  if (T.getBlock(t[0], t[1] + 1, t[2]) !== "Air" && T.getBlock(t[0], t[1] - 1, t[2]) === "Air") {
                    t[1] -= 1;
                  }
                  t[0] += 0.5;
                  t[2] += 0.5;
                  T.setPosition(a, t);
                } else {
                  P();
                }
              }
            },
            Arrow: {
              velocityMult: 45,
              removeOnHitTerrain: false,
              friction: 100000,
              restitution: 0,
              canPickUpAfterBounceCount: 1,
              autoRemoveAfterTime: 20000,
              onHitTerrain: function () {
                o.noa.ents.getPhysicsBody(o.eId).gravityMultiplier = 0;
                u().copy(o.noa.ents.getPhysicsBody(o.eId).velocity, x);
              }
            },
            "Splash Speed Potion": {
              velocityMult: 8,
              removeOnHitTerrain: true,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Speed", _);
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Speed", _);
              }
            },
            "Splash Defense Potion": {
              velocityMult: 8,
              removeOnHitTerrain: true,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Damage Reduction", y);
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Damage Reduction", y);
              }
            },
            "Splash Strength Potion": {
              velocityMult: 8,
              removeOnHitTerrain: true,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Damage", b);
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Damage", b);
              }
            },
            "Splash Invisibility Potion": {
              velocityMult: 8,
              removeOnHitTerrain: true,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Invisible", A);
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Invisible", A);
              }
            },
            "Splash Jump Potion": {
              velocityMult: 8,
              removeOnHitTerrain: true,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Jump Boost", S);
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Jump Boost", S);
              }
            },
            "Splash Knockback Potion": {
              velocityMult: 8,
              removeOnHitTerrain: true,
              onHitTerrain: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Knockback", M);
              },
              onHitPlayer: function () {
                var e = T.getPosition(o.eId);
                m(o.bloxd.room.api, e[0], e[1], e[2], "Knockback", M);
              }
            }
          };
          var T = this.bloxd.room.api;
          var P = function () {
            d();
            T.clearInterval(I);
            T.clearTimeout(E);
          };
          this.noa.ents.add(s, v, v, null, null, true, false, this.eId);
          this.noa.ents.addComponent(this.eId, "syncablePosition");
          var I = T.setInterval(function () {
            var e;
            var t = T.getPosition(o.eId);
            var r = 100000;
            var i = (0, n.Z)(T.getPlayerIds());
            try {
              for (i.s(); !(e = i.n()).done;) {
                var s = e.value;
                r = Math.min(r, u().dist(t, T.getPosition(s)));
              }
            } catch (a) {
              i.e(a);
            } finally {
              i.f();
            }
            if (r > 100) {
              P();
            }
          }, 3000, this.eId);
          var E = T.setTimeout(function () {
            P();
          }, (t = C[this.type].autoRemoveAfterTime) !== null && t !== undefined ? t : 60000, this.eId);
          var R = 0;
          this.noa.ents.addComponent(this.eId, "collideTerrain", {
            callback: function () {
              var e;
              var t;
              var r = o.noa.ents.getPhysicsBody(o.eId);
              if (!(u().length(r.velocity) > 0.1 && C[o.type].removeOnHitTerrain && ((0, c.doSingleEntityProjectileCollisionFromPhysics)(o.noa, o.eId), !o.noa.ents.hasComponent(o.eId, "collideTerrain")))) {
                if (!((e = (t = C[o.type]).onHitTerrain) === null || e === undefined)) {
                  e.call(t);
                }
                R++;
                if (C[o.type].removeOnHitTerrain) {
                  P();
                }
              }
            }
          });
          this.noa.ents.addComponent(this.eId, "collideEntitiesProjectile", {
            callback: function (e) {
              if (T.getEntityType(e) === "Player") {
                var t;
                var r = (t = C[o.type].canPickUpAfterBounceCount) !== null && t !== undefined ? t : 100000;
                if (e === a) {
                  r = Math.max(1, r);
                }
                var i;
                var n;
                var s = R >= r;
                if (o.bloxd.getItemStat(a, o.type, "secondaryDamage") && e !== a && !s && o.bloxd.canAttack(a, e)) {
                  o.bloxd.playerAttemptDamageOtherPlayer(a, e, o.bloxd.getItemStat(a, o.type, "secondaryDamage") * p, o.type, u().normalize([0, 0, 0], h), false, true, true, true, true, o.type === "Arrow" ? {
                    sound: "successfulBowHit",
                    volume: 1,
                    pitch: 0.9 + Math.random() * 0.2
                  } : undefined);
                  if (!((i = (n = C[o.type]).onHitPlayer) === null || i === undefined)) {
                    i.call(n);
                  }
                  P();
                } else if (s && o.bloxd.getPlayerClientOption(e, "canPickUpItems")) {
                  T.giveItem(e, o.type, 1);
                  T.playSound(e, "pickUp", l.ZP.pickupSoundVol, 1 + Math.random() * l.ZP.pickupSoundRateVariation);
                  P();
                }
              }
            }
          });
          u().normalize(h, h);
          u().scale(h, h, C[this.type].velocityMult * f);
          var w = this.noa.ents.getPhysicsBody(this.eId);
          u().copy(w.velocity, h);
          w.gravityMultiplier = (r = C[this.type].gravityMult) !== null && r !== undefined ? r : 1;
          w.mass = 0.02;
          w.airDrag = w.mass * 0.1;
          w.fluidDrag = 0.2;
          w.slideOnCollision = false;
          if (C[this.type].restitution) {
            w.restitution = C[this.type].restitution;
          }
          if (C[this.type].friction !== undefined) {
            w.friction = C[this.type].friction;
          }
        }
      }]);
      return e;
    }();
    var x = u().create();
  },
  62043: function (e, t, r) {
    "use strict";

    r.d(t, {
      EH: function () {
        return n.EH;
      },
      NQ: function () {
        return n.NQ;
      },
      Np: function () {
        return i.N;
      }
    });
    var i = r(85630);
    r(30877);
    r(82936);
    var n = r(56434);
  },
  90574: function (e, t, r) {
    "use strict";

    r.d(t, {
      IE: function () {
        return u;
      },
      So: function () {
        return A;
      },
      Wc: function () {
        return h;
      },
      kQ: function () {
        return c;
      },
      vG: function () {
        return a;
      }
    });
    var i = r(29439);
    var n = r(37762);
    var o = r(52126);
    var s = r(38017);
    function a(e, t) {
      var r;
      var i = d(e, t);
      var o = (0, n.Z)(i);
      try {
        for (o.s(); !(r = o.n()).done;) {
          if (y(e, r.value)) {
            return true;
          }
        }
      } catch (s) {
        o.e(s);
      } finally {
        o.f();
      }
      return false;
    }
    function u(e, t) {
      var r;
      var o = f(e, t);
      var s = (0, n.Z)(o);
      try {
        for (s.s(); !(r = s.n()).done;) {
          var a = (0, i.Z)(r.value, 3);
          var u = a[0];
          var l = a[1];
          var c = a[2];
          if (!e.hasChunkWithBlockCoordinates(u, l, c)) {
            return true;
          }
        }
      } catch (h) {
        s.e(h);
      } finally {
        s.f();
      }
      return false;
    }
    var l = [s.blockMetadata.Ladder.id, s.blockMetadata["Pine Ladder"].id, s.blockMetadata["Plum Ladder"].id, s.blockMetadata["Cedar Ladder"].id, s.blockMetadata["Aspen Ladder"].id, s.blockMetadata["Elm Ladder"].id, s.blockMetadata["Palm Ladder"].id, s.blockMetadata["Pear Ladder"].id, s.blockMetadata.Vines.id, s.blockMetadata["Iron Ladder"].id, s.blockMetadata["Maple Trapdoor"].id, s.blockMetadata["Pine Trapdoor"].id, s.blockMetadata["Plum Trapdoor"].id, s.blockMetadata["Cedar Trapdoor"].id, s.blockMetadata["Aspen Trapdoor"].id, s.blockMetadata["Elm Trapdoor"].id, s.blockMetadata["Palm Trapdoor"].id, s.blockMetadata["Pear Trapdoor"].id];
    function c(e, t, r) {
      var i;
      var a = f(e, r, 0.2);
      var u = e.noa.ents.getPosition(t);
      var c = {
        onLadder: false,
        goingUpLadderOnAxis: [null, null, null]
      };
      var h = (0, n.Z)(a);
      try {
        for (h.s(); !(i = h.n()).done;) {
          var d = i.value;
          var p = e.getBlock(d[0], d[1], d[2]);
          var m = (0, s.blockIdToName)(p);
          var g = e.getMetaInfo(m);
          if (l.includes(p) || l.includes(g.rootId)) {
            var v = undefined;
            var _ = undefined;
            var y = undefined;
            var b = undefined;
            if (g.rot === 1 || g.rot === 3) {
              v = 2;
              b = d[y = 0] + 0.5;
              _ = g.rot === 1 ? d[v] : d[v] + 1;
            } else {
              v = 0;
              b = d[y = 2] + 0.5;
              _ = g.rot === 2 ? d[v] : d[v] + 1;
            }
            if (Math.abs(u[v] - _) < o.ZP.playerWidth / 2 + 0.2 && Math.abs(u[y] - b) - 0.499 < o.ZP.playerWidth / 2) {
              c.onLadder = true;
              if (r.resting[v] !== 0) {
                c.goingUpLadderOnAxis[v] = g.rootName;
              }
            }
          }
        }
      } catch (A) {
        h.e(A);
      } finally {
        h.f();
      }
      return c;
    }
    function h(e, t, r) {
      return d(e.noa, t).map(function (t) {
        return e.getBlock(t[0], t[1], t[2]);
      }).includes(r);
    }
    function d(e, t) {
      return _(e, t._extents);
    }
    function f(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      console.assert(i < 0.1, "heightIncrease must be less than 0.1 or else assumptions made in getUnitCoordinatesPlayerExtentsWithin are broken");
      var n = t.aabb.base;
      var o = t.aabb.max;
      var s = [n[0] - r, n[1] - i, n[2] - r, o[0] + r, o[1] + i, o[2] + r];
      return _(e.noa, s);
    }
    var p = [null, null, null, null].map(function () {
      return [0, 0, 0];
    });
    var m = [null, null, null, null].map(function () {
      return [0, 0, 0];
    });
    var g = [null, null, null, null].map(function () {
      return [0, 0, 0];
    });
    var v = [];
    function _(e, t) {
      for (var r = e.worldOriginOffset, n = 0, o = T(t), s = 0; s < 4; s++) {
        var a = (0, i.Z)(o[s], 2);
        var u = a[0];
        var l = a[1];
        var c = p[s];
        var h = m[s];
        var d = g[s];
        c[0] = Math.floor(u + r[0]);
        c[1] = Math.floor(t[1] + r[1]);
        c[2] = Math.floor(l + r[2]);
        h[0] = Math.floor(u + r[0]);
        h[1] = Math.floor(t[1] + (t[4] - t[1]) / 2 + r[1]);
        h[2] = Math.floor(l + r[2]);
        d[0] = Math.floor(u + r[0]);
        d[1] = Math.floor(t[4] + r[1]);
        d[2] = Math.floor(l + r[2]);
        v[n++] = c;
        v[n++] = d;
        if (h[1] !== c[1] && h[1] !== d[1]) {
          v[n++] = h;
        }
      }
      v.length = n;
      return v;
    }
    function y(e, t) {
      var r;
      var i = e.getBlock(t);
      return !((r = s.blockMetadata[i]) === null || r === undefined || !r.fluid);
    }
    var b = [];
    function A(e, t, r) {
      for (var o = function (e, t, r) {
          var o = e.ents.getPositionData(t);
          if (!Number.isInteger(o.position[1])) {
            return [];
          }
          for (var s = o._extents, a = e.worldOriginOffset, u = r ? [] : M, l = 0, c = T(s), h = 0; h < 4; h++) {
            var d = r ? [] : S[h];
            var f = (0, i.Z)(c[h], 2);
            var p = f[0];
            var m = f[1];
            d[0] = Math.floor(p + a[0]);
            d[1] = o.position[1] - 1;
            d[2] = Math.floor(m + a[2]);
            if (e.getBlock(d) !== 0) {
              u[l++] = d;
            }
          }
          u.length = l;
          var g = r ? [] : C;
          g.length = 0;
          var v;
          var _ = 0;
          var y = (0, n.Z)(u);
          try {
            for (y.s(); !(v = y.n()).done;) {
              var b;
              var A = v.value;
              var x = true;
              var P = (0, n.Z)(g);
              try {
                for (P.s(); !(b = P.n()).done;) {
                  var I = b.value;
                  if (A[0] === I[0] && A[2] === I[2]) {
                    x = false;
                  }
                }
              } catch (E) {
                P.e(E);
              } finally {
                P.f();
              }
              if (x) {
                g[_++] = A;
              }
            }
          } catch (E) {
            y.e(E);
          } finally {
            y.f();
          }
          g.length = _;
          return g;
        }(e, t, false), s = r ? [] : b, a = 0; a < o.length; a++) {
        s[a] = e.getBlock(o[a]);
      }
      s.length = o.length;
      return s;
    }
    var S = [null, null, null, null].map(function () {
      return [0, 0, 0];
    });
    var M = [];
    var C = [];
    var x = [[0, 0], [0, 0], [0, 0], [0, 0]];
    function T(e) {
      x[0][0] = e[3];
      x[0][1] = e[2];
      x[1][0] = e[0];
      x[1][1] = e[2];
      x[2][0] = e[3];
      x[2][1] = e[5];
      x[3][0] = e[0];
      x[3][1] = e[5];
      return x;
    }
  },
  55250: function (e, t, r) {
    "use strict";

    var i;
    r.d(t, {
      j: function () {
        return i;
      }
    });
    (function (e) {
      e[e.TouchDownLong = 0] = "TouchDownLong";
      e[e.TouchShort = 1] = "TouchShort";
      e[e.DownFirePrimary = 2] = "DownFirePrimary";
      e[e.DownFireSecondary = 3] = "DownFireSecondary";
    })(i || (i = {}));
  },
  77796: function (e, t, r) {
    "use strict";

    r.d(t, {
      i: function () {
        return i;
      }
    });
    var i = 158;
  },
  71173: function (e, t, r) {
    var i = {
      "./autoRemoveMesh.js": 42845,
      "./autoRotate.js": 17309,
      "./bullet.js": 48912,
      "./collideEntitiesProjectile.ts": 39269,
      "./crouchingHandler.ts": 36764,
      "./doOnFirstTick.ts": 95933,
      "./flashingMeshOverlay.js": 32052,
      "./genericAliveEntity.ts": 40060,
      "./genericPlayerState.ts": 67389,
      "./heldItem.ts": 84906,
      "./hidingMeshManager.ts": 94899,
      "./hitbox.ts": 68564,
      "./inLoadedChunk.ts": 36217,
      "./inventory.ts": 44815,
      "./itemState.js": 17870,
      "./meshRotation.ts": 21262,
      "./moveState.ts": 92199,
      "./movement.ts": 13813,
      "./playerCameraAdjustment.js": 26885,
      "./playerHowlerListenerUpdate.ts": 77666,
      "./playerMesh.ts": 64716,
      "./playerName.ts": 53477,
      "./receivesInputs.ts": 30258,
      "./smoothToServerPos.ts": 81239,
      "./stepSoundOnWalk.ts": 41074,
      "./templateComponent.ts": 48544,
      "./updateServerOfMovement.ts": 51012
    };
    function n(e) {
      var t = o(e);
      return r(t);
    }
    function o(e) {
      if (!r.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        t.code = "MODULE_NOT_FOUND";
        throw t;
      }
      return i[e];
    }
    n.keys = function () {
      return Object.keys(i);
    };
    n.resolve = o;
    e.exports = n;
    n.id = 71173;
  },
  26927: function (e, t, r) {
    var i = {
      "./destroy_stage_0.png": 2966,
      "./destroy_stage_1.png": 7799,
      "./destroy_stage_2.png": 49794,
      "./destroy_stage_3.png": 63328,
      "./destroy_stage_4.png": 52897,
      "./destroy_stage_5.png": 31593,
      "./destroy_stage_6.png": 5789,
      "./destroy_stage_7.png": 6666,
      "./destroy_stage_8.png": 22192,
      "./destroy_stage_9.png": 30503
    };
    function n(e) {
      var t = o(e);
      return r(t);
    }
    function o(e) {
      if (!r.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        t.code = "MODULE_NOT_FOUND";
        throw t;
      }
      return i[e];
    }
    n.keys = function () {
      return Object.keys(i);
    };
    n.resolve = o;
    e.exports = n;
    n.id = 26927;
  },
  86940: function (e, t, r) {
    var i = {
      "./bob_body_preview.png": 27667,
      "./bob_head_preview.png": 51681,
      "./bob_legs_preview.png": 31795,
      "./componentAtlas.png": 95359,
      "./emma_body_preview.png": 72319,
      "./emma_head_preview.png": 85908,
      "./emma_legs_preview.png": 33430,
      "./green_top_with_rolled_up_sleeves_preview.png": 7932,
      "./isabel_head_preview.png": 47712,
      "./khakis_body_preview.png": 13063,
      "./khakis_legs_preview.png": 85874,
      "./leo_head_preview.png": 52118,
      "./light_blue_crop_top_preview.png": 77237,
      "./light_blue_polo_preview.png": 918,
      "./navy_blue_denim_shorts_preview.png": 28880,
      "./navy_blue_jeans_preview.png": 46633,
      "./sanjay_head_preview.png": 72173,
      "./sara_head_preview.png": 51899,
      "./tan_shorts_preview.png": 61212
    };
    function n(e) {
      var t = o(e);
      return r(t);
    }
    function o(e) {
      if (!r.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        t.code = "MODULE_NOT_FOUND";
        throw t;
      }
      return i[e];
    }
    n.keys = function () {
      return Object.keys(i);
    };
    n.resolve = o;
    e.exports = n;
    n.id = 86940;
  },
  4841: function (e, t, r) {
    var i = {
      "./critical_hit.png": 9567,
      "./generic_2.png": 80521
    };
    function n(e) {
      var t = o(e);
      return r(t);
    }
    function o(e) {
      if (!r.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        t.code = "MODULE_NOT_FOUND";
        throw t;
      }
      return i[e];
    }
    n.keys = function () {
      return Object.keys(i);
    };
    n.resolve = o;
    e.exports = n;
    n.id = 4841;
  },
  88996: function (e, t, r) {
    "use strict";

    e.exports = r.p + "static/media/JetBrainsMono-VariableFont.d08f929cab66fc19b568.ttf";
  },
  74304: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAgCAYAAABkS8DlAAAABmJLR0QA/wD/AP+gvaeTAAAHTklEQVR4nO2dMW/bOhDHzw8evLiAOwZIgACJEHfs4jEJkKJB0ClBOvQD+EPpA3SI4U6B0aIB0oxeMtaBU6BAC2SsgXrxpje80E86iaQokSYp3m+jRFEneziS979jCyTEcZyI7g+Hw5ZsDMJfxtcT4f9/8e6M/v8Gs7zaE/7/3fc/6P9vMPujO+H//3h5SP+/x7TLdIqiKNPu9XoAADCdTvVbRDhHv3+Qae/ubAMAwOTLVxvmEBumc9zNXng5AgCA1fjUgjXEptk66WTaH1+8AgCAo0/3NswhNPJPlYcWi4VuOwiP+Pnrt20TCJv8ubRtAWGRD3+/2zaB0ESlCQAATQJChyYBgUOTgKChSUAzqDwBIAiCIAjCX0pNAFjMnwgTFvMnAuU55k+ECYv5E82j9A4ATQLChiYBgUOTgKChSUAzKZUFQGr/sCG1f9iQ2j9sSO3fXFqyPH/TUB0Bu8jy/E1DdQTsIsvzNw3VEbCLLM/fNFRHwC5tAHme/2AwAIC88n8+n4OO5wm7yPL8z96+AYC88n82e9DyPGEXWZ5/5+Lzf9eR8n91u9TyPGEXWZ7/t/PXAJBX/j/drLQ8T9ijUAOAHfV0Os2EAebzudB5F6UIUtqgP2BHPfnyNRMGmM0ehM67KEWQ0gY9Ajvq8WkmDLC6XYqdd1GKIKUNegN21Eef7jNhgKebldB5F6UIUtqgm3A1AGmHzbbpWbgAt2XPk/P3j7TDZtv0LFyA27Lnyfl7SMphs216Fi7Abdnz5Pz9I+2w19v0z+EC1haFD9LPk/N3lzaAeCteFKMfDoetOI4T2sr3G9FqXhSjv3h31hpfTxLayvcb0WpeFKPvvv/RWl7tJbSV7zei1bwoRv94edjaH90ltJXvL8YFGGyXAOsE2KSBRIDNhu0SYJ0AmzSQCLDZsF0CrBNgkwYSATYbtkuAdQJs0kAiQLts7MfH4QJy/GGBwwXk+MMChwvI8YcFDheQ4ycIgiAIgrCEdBbm2spdVregrn2ufa9tXFu5y+oW1LXPte+1jWsrd1ndgrr2ufa9tnFt5S6rW1DXPte+1zSlSgFHUZSL4dtkMBhk7NFtn2vfa5t+/yAXw7fJ2ds3GXt02+fa99qmc9zN5/pbpHPxOWOPbvtc+17bbJ10cjF8m3w7f52xR7d9rn2vSbw9DZDOJggbOpsgcOhsgqChswn0UOosANfS/PDZBLrtc+17beNamh8+m0C3fa59r21cS/PDZxPots+177WNa2l++GwC3fa59r0mqR3f4MXkcexcNXav64wCWQy/7ntII1Ack8exc9XYva4zCmQx/LrvIY1AcUwex85VY/e6ziiQxfDrvoc0AsUxeRw7V43d6zqjQBbDr/se3zUCpXYAZLBa/2xlHkURxHGcpCsGRlG0Xlnz+qfHFPVXbavar3v8psNq/bOVeb9/AOPrSZKuGNjvH6xX1rz+6TFF/VXbqvbrHr/psFr/69r/x11YXu0l6YqBnePu/2cHcPpnxhT1V2wr2695/KbDav2zlfnWSQdgdJekKwZunXTWK2te//SYov6qbVX7dY/vMlomAADZcr+9Xg8GgwG3CNBiscjF8NN98D3cHzteWbuM7UXvLHufyJb73d3Zht2dbW4RoJ+/fudi+CLRXVF/XGpYdL+M7SbHD4J0ud+XI+hcACyvTguLAMGfy1wMXyi6K+ifKzUsui/D9PgBkC73+/HFK4BzgCNOEaAPf7/nYvjpPuvDhOC+sD92vLJ2GduxPbiUsei+z2iZAPCcoUhJr+pAcX/dW/uyswvobAM+PGcoc+pV3yE7bKiKczY9fqPhOEOpU6/6DtlhQ1Wcs+nxGwzPGYqU9KoOFPfXvbUvO7ugqWcbaNsBSFPXQdKxwX6j20FiUZ5qm9gwmh0kFuWptonNUtdB0rHBm8PIBEAnVUV2oYvzmkLoIrvQCV1kFzpVRXa+i/M2RVuX2p7wE11qe8JPdKntCT/RpbYn/KQN4LYK3vU0PdMTqE3sZLisgnc9Tc/0BGoTOyAuq+BdT9MzPYHaxA6Iyyp419P0TE+gTNvfBqivgleN0av2Nz1BwfaotpnYkV3niR/x/bL9TVNXBa8ac1ftb3qCUldjwMSO7DpP/Ijvl+1vnJoqeNWYu2p/0xOUuhoDJnZcpy1yxI/4ftn+pqmrgleN0av2Nz1BwfaotpnYkV3niR/x/bL9TbLWAFRVwRetUFnef5r5fM5dzYqKCcVxnJhM09N9eJCvVFXBF61QWd5/mtnsgbuaFRUTGl9PEpNperoPD/KWiir4ohUqy/tPs7pdclezomJCy6u9xGSanu7Dg3ylqgq+cIX6nPef5ulmxV/NCooJ7Y/uEpNperoPD/INIyJA5rjxNVF/2ZiUpucPzHHja6L+sjEpTc8f1o4bXRP1lw5KaXre8Hh52MJOXeRoyzjhUNP0TJNz1Kq4HmN33T4Zpu1veozddftkmLa/6TF21+2TYdr+psfYXbdPhmn7/wVy6N2HB1UGFwAAAABJRU5ErkJggg==";
  },
  27667: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAAeUlEQVQokWN8EOHxnwELePLlK4MMDzcDAwMDw/2PnxkU+XmxKWNgwipKAhjEBixl+ANnr2L+h9MARlyBSLELiAUs2ATvf/yMVTG2qKTcBU++fEURgCUeXABdPSO6gkwfS3igRvWtZGBgYGBYVhQOl5++5TiKHoq9AADxcB4x4rtOogAAAABJRU5ErkJggg==";
  },
  51681: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAZklEQVQYlWN00Zf9z4AHMOGTJEoBCwMDA0OVryNWybbN+xmYqnwdGazq5zIsvJ4Dl1h4PYfBqn4uQ5WvIwOTnKIEAwMDA8Pxy3EMcooSDHKKEgzHL8cxMDAwMMgpSjAw3plbRpkvAJ12FV7SojEeAAAAAElFTkSuQmCC";
  },
  31795: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVQYlWNMO3PmPwMSmGViwoguxsRABBhVxMDy8fFjDEF0MUYLS2uU0D1x/CiGGFHWAQA/jBIvEGia0gAAAABJRU5ErkJggg==";
  },
  95359: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACAAAAABACAYAAACOEJc7AAAABmJLR0QA/wD/AP+gvaeTAAAMiUlEQVR4nO3df2yU530A8Of4oaLWHjISlUhL5EYrWTcxJGzJAlVFdFeJUEBU3TTDH6BJgYg1XcdQV4IyoaioS6tkWVEFaqF/gDrwuk5BjDqoOTXK0gZcnZGcikBpljp1BBpIIASR0gbv9gez5zP3w/Z75+fuvc9HinK+5+59v1+/73s+8f0+z5sJFWRXLC1UGg8hhNzQSKbaa5rZ66eerfg7WL15b6rz37RsbsX8T18ZTXX+1a6BtJ//Pd0rKuY/kB9Kdf7ZnpWVj//AhVTnDwAAAAAAQHOZEzsAAAAAAAAAACA5DQAAAAAAAAAAkAIaAAAAAAAAAAAgBTQAAAAAAAAAAEAKaAAAAAAAAAAAgBTQAAAAAAAAAAAAKaABAAAAAAAAAABSIJNdsbQQM4Dc0Egm5v5fP/Vs1PxXb94bNf9Ny+ZGzf/0ldGo+bf6+d/TvSJq/gP5objHv2dl3OM/cCFq/gAAAAAAAKSLFQAAAAAAAAAAIAU0AEzT4rb2sLitPXYYRLJv49qwb+Pa2GEQyZrlS8Ka5UtihwEAAAAAAAAlzZvKi8oVPL/xH6/UNJhGN7Hwv7itPdy4eydiNHEcPHQghBDC3/z105EjmX0Tr4N9G9e2zPnf2zUv9A3eC71dxR8XfYP3IkUUx8TC/5rlS8Krv7wWMRoAAAAAAAB4UNUVAPZtXBtW7/9+OHbpyfHnjl16Mqze//1Uz4QeK/YvbmsPKz+/J/z9xdz42F8NvBiWrtkZVm/em2mV1QA6lp8bL/7vP/xn4YcX3x//Oa3GZvufyb8dPvaH/z7+/MTzP83XQAj3i/+7vnM+fPGRPxh/7oNbHw67vnP+gYaAtDrzs4HQ9uG54z8P/tf18NXDpyJGBAAAAAAAAKVlsiuWFiY/uW/j2vDZA8czYz+//8EHhT/9k+XhypXLmRBCWLbsjwpvXPxlWDB//vhrfvr0tsJMZkTnhkYy1V9VP6+fevaB/Be3tYdPZr80rfxLbWcqVm/eGzX/Tcvmlo374KEDoTP7VGYq+Q/n/rEwk1UBTl8ZjZp/qfM/hOLzcir5l9tONbHP/57uFQ/E3ds1L+z+7uC08n/hia7CTFYEGMgPxT3+PSurHrczPxsIpfLf8OmexPvPDVyImj8AAAAAAADpUrQCwL6Na0NuaCQzsfgfQggL5s/PjBW/QgjhypXLmYnFvxBC+OyB45nc0EgmDTOiJxb/Q5ha/mlYCeDgoQPh9JXRzNh/ndmnMiFMLf/O7FOZ01dGM2lYFWDyOTyV/NNw3vd2zQsD+aHMxOJ/CFPLf/d3BzMD+aFMGlcFmEr+AAAAAAAA0AjmTZztnxs6nniDE5sHfvr0tkIIoey90u83HCTfZy3NtJB/4+6dGkcyO8Zm+YcQwunsU4m3N7atEO6vChBCCOVWBjh46EBN9llrM1nJYibvaQQTZ/sP5JNvb2LzwAtPdBVCCKHcygD3Gw6S7xMAAAAAAAC4zyzWGqt0K4DYy/1Tf9VuBRB7yX/qq9otBdK+5P9w77pCZ9/ZkjkO964rfPPu7YrvP3zmXMXfz3DvuqLfb7l9xXJkS39hx8n1JWM6sqW/cOHO1yu+v1r+R7b0F+Vfbl+xHMvfLGzvXlQypmP5m4WDT3yu4vsHBwcr5nMsf7Mo/3L7iuWh3NGK1//o7cqNgv/9xd0V85m8/avZxxsq/xN9+wtbe58pGdOJvv2F137wk4rvr3b+n+jbX5R/uX3F8uq131U8/muWfKih4p1sZz5fFP8bX/5K0fj5cz9v6PiT2rVhVVH+r7x1q2j88uXLqc6/+7FtRfkXrl8sGq/2+dzsBvufL8r/6KEfFY1X+3xqdpM/Xw9+O1c0nvbr/9Ge4u+X58+eLBrv6OhIdf4AAACkU/rW6wYAiKBcUb5acwDpUK7IX605AAAAAACgljQA1MnitvbwyeyXzBZoUZNn+ldbGWAmsiuWFqwo0LjGZvtXWxUAAAAAAAAAamVO7ADS6sbdykv9km4TC/71KP4DAAAAAAAATGb2cEKvn3q2bHF39ea9U/79ltvOdLbB7KtU3B+bnZ+kAaDSDH8rAMRXaXZ/LVYAGNtGoxruXVcyt3fvvhc+3vaREEIIv7l9J3xiYfusxjWms+9sXX9/R7b0P5D/jpPrS+6z1GvrrVwstXIsf7Ohm5u2dy+qa/6llvVvpFsAlIulVibfM7rRbO19pq75l1rWv5a3ACi3rVrZmc8nOn7f6+5u6L9P1ezasCpR/s1+T/jux7Ylyj//0vGmzn+w//lE+Xet39PU+Sf9/K7352u9PdpT+vvrVP1qoL7fLwEAAKAW3AIgobEC/eQC/uK26RW8ym2HxpYbGsmUKvBPLMxXeo3VAZpbbuBCZqYF/kYv7jMzR7b0FyYX3mMU/4njodzRwuTCe4ziP3G8eu13hcmF+5kU/wEAAAAAktAAUCOTC/gzvQWAGf/Np9RM/0qz8yc3B9Q/QuppujP9Ff7TT8H/vt8Ovz3++OHORyJGMrsU/O+79Obw+ONP/XFntDhmm4I/AAAAABCbBoAaW715b8Ys/tY0cUb/5ML+2FgtC/6aBxrXxCJ/klUCoNk93PlIUSMAUzd6e2aNhGmRfXhh7BAASKH2RR+NHQIAAADUnQaAOtAE0NqmMvOf9JlKob9VZv//S7gXvvZ/j38493/GHzM9k28l0IwU/2funU1PJnr/grC7RpHMTCvN+geaS9f6PU3/95WZy7903PEHAAAg9TQA1Iml/FuTIj+E8LW2hSUf01qSLvt//d3yzQPv30u0aQAAAAAASC0NAABAw/nq5u6WbqhaMH9+S+cPAAAAAMDMaAAAoGZ+U+a+5Z9Y2D7LkQAAAAAAALQeDQAANZIbuJDJ9qwslBub7XgAqI81Sz7kM72J/eLa72OHAAAAAAB1owEAgIb07t33YocARHLp11djh5Bqt0dGYodARHduXo8dQlS7Nqwq2aw5VYfPnGvqBqBLbw7HDiGqW7duJTr+HR0dTX38AQAAaA0aAABqqNRM/7TO/v/m3dsPPjn3/v+2/tO/hhBCOPF3f3n/iVKvraLR/4H9wp2vlx174cX/DCGEsPsLn5mtcGbdwSc+V3bsn0++GEII4W+3fGG2wpl1o2Vud9EqXvvBT8qOfePffhxCCGHfX3x+xttv9Ou/UgGxFtd/vfN/51vP1XPzNLi2ezdih0BEL7/8VuwQAAAAgDqbEzsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgfjKxAwCAEEIY7l1XmPhzZ9/ZlvobdWRLf1H+O06ub6n8j+VvFuW/vXtRS+X/UO5oUf5Xs4+3VP4n+vYX5b+195mWyr/Z7czni47fG1/+StH4+XM/T/Xx3LVhVVH+r7x1q2j88uXLqc6/+7FtRfkXrl8sGh8cHEx1/oP9zxflf/TQj4rGD585l+r8J39+H/x2rmg87df/oz3F31/Pnz1ZNN7R0ZHq/AEAAGhMc2IHAAAAAAAAAAAkpwEAGkh2xdJC9VcBAAAAAAAAPEgDAAAAAAAAAACkgPvRQQPJrlhayA2NuC5pCcO96xKteNHZd7apr5UjW/oT5b/j5Pqmzv9Y/mai/Ld3L2rq/B/KHU2U/9Xs402d/+R7Rk/X1t5nmjr/Zrczn090/L7X3d3Ux2/XhlWJ8m/2e8J3P7YtUf75l443df6D/c8nyr9r/Z6mzr/VP78f7Un2/fVXA839/RUAAIDmYAUAAAAAAAAAAEgBDQAAAAAAAAAAkALzYgcA/D/L/wO0htHbd2KHEFX24YWxQwCAaWtf9NHYIQAAAEBVGgAAIIIdJ9dr+Glh72x6MtH7F4TdNYoEgOnoWr/H3+8Wln/puOMPAABAw9MAAADMut8Ovx07BAAAAAAASB0NAADArPuHP+9u6Rl0C+bPb+n8AQAAAACojzmxAwAAAAAAAAAAkrMCAAAAwBT94trvY4cAAAAAAGVpAAAginfvvhc7BCCSS7++GjsEErg9MhI7BCK6c/N67BCi2rVhVSHJ+w+fOdfUt4C59OZw7BCiunXrVqLj39HR0dTHHwAAgOagAQCAKD595jX/AAotas3251z/Teydbz0XOwQiart3I3YIRPTyy2/FDgEAAACoYk7sAAAAAAAAAACA5P4XQpzs9noAFO8AAAAASUVORK5CYII=";
  },
  72319: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAAU0lEQVQokWOcHbntPwMaSF3uxYguxsDAwIBNLROxCrGJMTAwMDDikiAWYHUBKQDDr4RchB4+FLtg1AAGBhZ0gXOfm+Hs/vWHGBgYGBgKA+1o5wIAhRMYAC54iVwAAAAASUVORK5CYII=";
  },
  85908: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAXklEQVQYlWM8tqHjPwMewIRPEqsCUR5eBlEeXuwKkCVgbCZRHl4GI+9ihrKre+CSiSfXM8japzFoamgyMInIyDAwMDAwvFr4hEFERoZBREaG4dXCJ3DFjO9vbKTMFwAY2xM3oMZViQAAAABJRU5ErkJggg==";
  },
  33430: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVQYlWPM9LH8z4AEpm85zoguxsRABBjeilhOPf+FIYguRmc3AQDdaAtdkGFLoQAAAABJRU5ErkJggg==";
  },
  7932: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAAZ0lEQVQokWOU2jPnPwMaeOaSwoguxsDAwIBNLROxCrGJMTAwMDDikiAWsPz9+BlFgJmfF68GdPWMP37/RnGB0sGFeA24Zx+PwscaBqQAJg5WVkZkTEgDunrKXTDgBrCgC6BHE81dAADuvh4lpHA/yAAAAABJRU5ErkJggg==";
  },
  47712: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVQYlWN00Zf9z4AHMOGTxKqgyteRocrXEbsCZAkYm6nK15Fhy5l7DNIqa+GSC6/nMFjVz2Wo8nVkYJJTlGBgYGBgOH45jkFOUYJBTlGC4fjlOAYGBgYGOUUJBsY7c8so8wUAlMEWjDgPss0AAAAASUVORK5CYII=";
  },
  13063: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAAaUlEQVQokWNctqL+PwMFgIkSzQwMDAwshBRcv/YAztbUUsA0wEWOH0Vgz6OPeA1EV0/QBdhsRQYUh8EwMIDl+u1nqCLs3Hg1oKtnRFeQ6WMJT5ltq7cyMDAwMFSFesPlp285jqKHYi8AAHNlFhGWFkdWAAAAAElFTkSuQmCC";
  },
  85874: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABmJLR0QA/wD/AP+gvaeTAAAAMElEQVQYlWNctqL+PwMSiIpoZEQXY2IgAowqYmC5fu0BhiC6GMvu3XcwFKGLEWUdAJ5zEKbopMRpAAAAAElFTkSuQmCC";
  },
  52118: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVQYlWP0U2P+z4AHMOGTJE/BpGktDJOmtcD5LDCGoO5xhsbMvQwMDAwM9dOdGVZdLWF4cbCHgeH/g43/f/z+/V9NTeP//wcb//9/sPG/mprG/x+/f////2Djf8b/DzZS5gsA3GIpletnM6oAAAAASUVORK5CYII=";
  },
  77237: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAARklEQVQokWNgQAMHn//8jy6GT46JWIW4DGYhxTZsAKsLSAGjBgwGwIgukOljCY///vWHGBgYGBgKA+3g8tO3HEfRQ3EYAAAZ8hk0ZXMJlQAAAABJRU5ErkJggg==";
  },
  918: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABmJLR0QA/wD/AP+gvaeTAAAAYklEQVQokWNceObdfwYKABMlmhkYGBhYCCl49OAenC2noESeC7BpJMkAZFegA5ZXTxCSP/5g2obORzeMEd1EQrESbyKEoofiWBh4AzDSwaR0Vzh7wvL1DAwMDAwFkYG0cwEAOtYZtcKzKcgAAAAASUVORK5CYII=";
  },
  28880: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABmJLR0QA/wD/AP+gvaeTAAAANUlEQVQYlWNUN/f4z4AEbp7cwYguxsRABCBKEQuvkBiGIDaxIQkY379/jxJwgoKCGGLUC0wACIMN6sJ3AA0AAAAASUVORK5CYII=";
  },
  46633: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABmJLR0QA/wD/AP+gvaeTAAAAMElEQVQYlWM08Yz7z4AEzmxfxIguxsRABBhVxMDy+d0rDEF0MRaeP68xFKGLEWUdAACfD3JhNCu8AAAAAElFTkSuQmCC";
  },
  72173: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVQYlWM0N9H/z4AHMOGTJEoBCwMDA0OEMQvDirN/GCKMWVAkV5z9w8AUYczCkDnlBEOwEh9c4vd7LobMKScYIoxZGJjUFEQZGBgYGOZceM2gpiDKoKYgyjDnwmsGBgYGBjUFUQbGre0elPkCAOh7F2aOwoumAAAAAElFTkSuQmCC";
  },
  51899: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAAXElEQVQYlWN0MTf6z4AHMOGTxKrAXleSwV5XErsCZAkYm4mBgYFhy5GTDDxczHDJs3dfMZRO34BqwrWnnxk4eQQYOHkEGK49/QxXzOhibvTfw1ITqwN3HL9O2BcAwlIUyxiVJ0IAAAAASUVORK5CYII=";
  },
  61212: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABmJLR0QA/wD/AP+gvaeTAAAALUlEQVQYlWM8u633PwMSMPYqZkQXY2IgAlBP0ZAFjJk+ligBN33LcQwx6oUTACiWDQn4dpdQAAAAAElFTkSuQmCC";
  },
  9567: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAACVJREFUGJVj+P///38GKMDFhnPQaeLAfyggJEbYFJxuIMoX+AAAfZM/wcpTlRQAAAAASUVORK5CYII=";
  },
  80521: function (e) {
    "use strict";

    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGOfPtRkwAAACxJREFUGJVjYKA6+P///39kPiMWCUYGBgYGRkZGBqzgPxTA+CxYjMehlVwAAAJKE/fy//W5AAAAAElFTkSuQmCC";
  },
  11442: function (e) {
    "use strict";

    e.exports = {
      Dirt: [133, 92, 73],
      "Messy Dirt": [115, 75, 59],
      "Grass Block": [104, 163, 77],
      Sand: [223, 211, 167],
      Clay: [164, 174, 183],
      Gravel: [125, 125, 127],
      Snow: [230, 235, 235],
      "Maple Log": [128, 94, 57],
      "Pine Log": [66, 43, 23],
      "Plum Log": [92, 84, 76],
      "Cedar Log": [57, 43, 24],
      "Aspen Log": [187, 184, 159],
      "Elm Log": [97, 77, 23],
      "Maple Wood Planks": [170, 137, 82],
      "Aspen Wood Planks": [192, 172, 122],
      "Plum Wood Planks": [167, 91, 46],
      "Elm Wood Planks": [159, 117, 82],
      "Pine Wood Planks": [115, 84, 48],
      "Cedar Wood Planks": [75, 48, 23],
      "Barkless Maple Log": [167, 134, 80],
      "Barkless Aspen Log": [189, 168, 120],
      "Barkless Plum Log": [163, 88, 44],
      "Barkless Elm Log": [157, 113, 79],
      "Barkless Pine Log": [114, 83, 48],
      "Barkless Cedar Log": [73, 46, 22],
      Books: [124, 118, 82],
      Stone: [150, 146, 146],
      "Messy Stone": [133, 129, 129],
      free_placeholder: [133, 129, 129],
      "Smooth Stone": [148, 145, 145],
      Diorite: [210, 206, 201],
      "Smooth Diorite": [199, 194, 190],
      Andesite: [130, 134, 139],
      "Smooth Andesite": [126, 129, 134],
      Granite: [156, 106, 88],
      "Smooth Granite": [153, 102, 83],
      Sandstone: [220, 206, 162],
      Yellowstone: [234, 234, 168],
      "Coal Ore": [114, 112, 112],
      "Iron Ore": [159, 151, 144],
      "Gold Ore": [165, 151, 110],
      "Lapis Lazuli Ore": [115, 118, 134],
      "Emerald Ore": [117, 159, 128],
      "Diamond Ore": [118, 160, 150],
      "Block of Coal": [19, 19, 19],
      "Block of Iron": [235, 232, 227],
      "Block of Gold": [248, 209, 63],
      "Block of Lapis Lazuli": [48, 111, 186],
      "Block of Emerald": [45, 216, 105],
      "White Wool": [238, 239, 240],
      "Orange Wool": [245, 122, 24],
      "Magenta Wool": [194, 69, 181],
      "Light Blue Wool": [56, 183, 222],
      "Yellow Wool": [251, 202, 49],
      "Lime Wool": [121, 191, 26],
      "Pink Wool": [247, 145, 177],
      "Gray Wool": [66, 72, 76],
      "Light Gray Wool": [146, 146, 140],
      "Cyan Wool": [22, 143, 148],
      "Purple Wool": [126, 41, 175],
      "Blue Wool": [54, 60, 159],
      "Brown Wool": [117, 74, 41],
      "Green Wool": [88, 112, 29],
      "Red Wool": [165, 39, 34],
      "Black Wool": [23, 24, 29],
      "Baked Clay": [150, 93, 67],
      "White Baked Clay": [210, 177, 161],
      "Orange Baked Clay": [162, 83, 38],
      "Magenta Baked Clay": [149, 87, 108],
      "Light Blue Baked Clay": [112, 108, 138],
      "Yellow Baked Clay": [186, 133, 36],
      "Lime Baked Clay": [103, 117, 53],
      "Pink Baked Clay": [162, 78, 79],
      "Gray Baked Clay": [58, 42, 36],
      "Light Gray Baked Clay": [135, 107, 98],
      "Cyan Baked Clay": [85, 90, 90],
      "Purple Baked Clay": [118, 70, 86],
      "Blue Baked Clay": [73, 59, 91],
      "Brown Baked Clay": [77, 50, 35],
      "Green Baked Clay": [75, 82, 40],
      "Red Baked Clay": [142, 61, 47],
      "Black Baked Clay": [36, 21, 15],
      "Gray Concrete": [55, 58, 62],
      "Light Gray Concrete": [125, 125, 115],
      "Black Concrete": [9, 11, 16],
      "Blue Concrete": [45, 47, 144],
      "Brown Concrete": [97, 60, 32],
      "Cyan Concrete": [21, 119, 135],
      "Light Blue Concrete": [37, 138, 200],
      "Lime Concrete": [95, 170, 25],
      "Magenta Concrete": [169, 48, 159],
      "Orange Concrete": [225, 97, 0],
      "Pink Concrete": [214, 101, 143],
      "Purple Concrete": [101, 32, 157],
      "Red Concrete": [143, 33, 33],
      "White Concrete": [208, 214, 215],
      "Green Concrete": [73, 91, 36],
      "Yellow Concrete": [242, 176, 21],
      "Pine Leaves": [25, 47, 14],
      "Aspen Leaves": [51, 122, 24],
      "Maple Leaves": [49, 92, 29],
      "Elm Leaves": [40, 135, 11],
      Pumpkin_placeholder: [198, 134, 45],
      Watermelon: [126, 156, 30],
      Glass: [184, 222, 221],
      "Black Glass": [27, 29, 31],
      "Blue Glass": [97, 133, 213],
      "Brown Glass": [153, 119, 93],
      "Cyan Glass": [41, 140, 156],
      "Gray Glass": [90, 95, 98],
      "Light Gray Glass": [172, 176, 182],
      "Green Glass": [106, 124, 66],
      "Light Blue Glass": [126, 183, 243],
      "Lime Glass": [181, 225, 138],
      "Magenta Glass": [185, 73, 176],
      "Orange Glass": [244, 148, 74],
      "Pink Glass": [242, 149, 183],
      "Purple Glass": [122, 61, 172],
      "Red Glass": [168, 58, 58],
      "White Glass": [240, 242, 242],
      "Yellow Glass": [249, 211, 122],
      "UNUSED BLOCK TYPE": [156, 156, 156],
      "Dim Lamp On": [126, 85, 45],
      "Dim Lamp Off": [75, 39, 11],
      "Invisible Solid": [0, 0, 0],
      Bricks: [149, 98, 83],
      "Stone Bricks": [135, 131, 131],
      "Dark Red Brick": [68, 34, 39],
      "Dark Red Stone": [100, 45, 42],
      "Block of Quartz": [251, 248, 239],
      "Chiseled Block of Quartz": [241, 235, 223],
      "Engraved Stone": [125, 121, 121],
      "Mossy Stone Bricks": [128, 129, 117],
      "Cracked Stone Bricks": [132, 128, 128],
      "Smooth Sandstone": [230, 222, 177],
      "Engraved Sandstone": [221, 207, 163],
      Ice: [139, 208, 253],
      Obsidian: [28, 17, 44],
      "Hay Bale": [180, 130, 32],
      Sponge: [185, 174, 55],
      Beacon: [209, 242, 250],
      "Golden Decoration": [179, 138, 92],
      "Moonstone Explosive": [191, 197, 217],
      Bedrock: [33, 33, 34],
      "Smooth Double Stone Slab": [148, 145, 145],
      Cactus: [93, 154, 47],
      "Tall Grass": [122, 173, 71],
      Dandelion: [195, 196, 60],
      Poppy: [135, 93, 37],
      "Red Tulip": [118, 117, 40],
      "Pink Tulip": [118, 163, 104],
      "White Tulip": [121, 178, 103],
      "Orange Tulip": [120, 150, 38],
      Daisy: [192, 205, 137],
      Bluebell: [48, 171, 195],
      "Forget-me-not": [70, 115, 160],
      Allium: [140, 123, 170],
      "Azure Bluet": [198, 217, 192],
      "Lily of the Valley": [121, 176, 103],
      "Wither Rose": [51, 51, 30],
      Furnace: [88, 85, 85],
      Workbench: [131, 97, 61],
      "Block of Diamond": [70, 211, 202],
      "Maple Door": [164, 143, 94],
      "_Maple Door Top": [164, 143, 94],
      "Maple Trapdoor": [150, 116, 71],
      "Aspen Sapling": [149, 176, 95],
      "Maple Sapling": [84, 107, 43],
      "Elm Sapling": [48, 87, 19],
      "Plum Sapling": [122, 131, 27],
      "Pine Sapling": [64, 76, 47],
      "Cedar Sapling": [58, 105, 40],
      "Maple Log|TreeBase": [128, 94, 57],
      Chest: [109, 81, 42],
      "Pine Leaves|TreeCanopy": [25, 47, 14],
      "Aspen Leaves|TreeCanopy": [51, 122, 24],
      "Maple Leaves|TreeCanopy": [49, 92, 29],
      "Elm Leaves|TreeCanopy": [40, 135, 11],
      Protector: [128, 135, 133],
      "Fat Cactus": [104, 165, 46],
      "Dry Fat Cactus": [140, 96, 40],
      Ladder: [151, 115, 71],
      Vines: [72, 106, 42],
      "Dirt|GrassRoots": [133, 92, 73],
      "Iron Ladder": [165, 172, 174],
      "White Planks": [246, 237, 222],
      "Orange Planks": [205, 121, 63],
      "Magenta Planks": [152, 75, 122],
      "Light Blue Planks": [81, 148, 165],
      "Yellow Planks": [213, 178, 78],
      "Lime Planks": [149, 168, 82],
      "Pink Planks": [192, 119, 145],
      "Gray Planks": [78, 74, 68],
      "Light Gray Planks": [147, 142, 133],
      "Cyan Planks": [100, 167, 167],
      "Purple Planks": [144, 107, 167],
      "Blue Planks": [82, 89, 168],
      "Brown Planks": [126, 90, 62],
      "Green Planks": [98, 113, 56],
      "Red Planks": [167, 69, 66],
      "Black Planks": [35, 32, 28],
      "Artisan Bench": [117, 91, 74],
      "White Ceramic": [185, 216, 202],
      "Orange Ceramic": [157, 153, 97],
      "Magenta Ceramic": [215, 115, 195],
      "Light Blue Ceramic": [113, 168, 208],
      "Yellow Ceramic": [233, 192, 88],
      "Lime Ceramic": [161, 202, 66],
      "Pink Ceramic": [234, 159, 184],
      "Gray Ceramic": [85, 92, 95],
      "Light Gray Ceramic": [124, 156, 159],
      "Cyan Ceramic": [52, 103, 111],
      "Purple Ceramic": [105, 47, 144],
      "Blue Ceramic": [35, 70, 133],
      "Brown Ceramic": [133, 113, 92],
      "Green Ceramic": [115, 139, 67],
      "Red Ceramic": [181, 59, 53],
      "Black Ceramic": [77, 28, 30],
      "Wheat Seeds": [7, 156, 18],
      Wheat_stage1: [6, 152, 18],
      Wheat_stage2: [6, 152, 18],
      Wheat_stage3: [42, 148, 15],
      Wheat_stage4: [73, 144, 12],
      Wheat_stage5: [109, 140, 9],
      Wheat: [209, 173, 92],
      "Wheat|FreshlyGrown": [209, 173, 92],
      "Tilled Soil": [159, 107, 71],
      "Bread Block": [181, 125, 33],
      "ReservedBread BlockRotation1": [181, 125, 33],
      "ReservedBread BlockRotation2": [181, 125, 33],
      "ReservedBread BlockRotation3": [181, 125, 33],
      "Mossy Messy Stone": [120, 123, 108],
      "Dandelion|Roots": [195, 196, 60],
      "Poppy|Roots": [135, 93, 37],
      "Red Tulip|Roots": [118, 117, 40],
      "Pink Tulip|Roots": [118, 163, 104],
      "White Tulip|Roots": [121, 178, 103],
      "Orange Tulip|Roots": [120, 150, 38],
      "Daisy|Roots": [192, 205, 137],
      "Bluebell|Roots": [48, 171, 195],
      "Forget-me-not|Roots": [70, 115, 160],
      "Allium|Roots": [140, 123, 170],
      "Azure Bluet|Roots": [198, 217, 192],
      "Lily of the Valley|Roots": [121, 176, 103],
      "Wither Rose|Roots": [51, 51, 30],
      "White Bed": [164, 143, 94],
      "_White Bed Head": [164, 143, 94],
      "Orange Bed": [164, 143, 94],
      "_Orange Bed Head": [164, 143, 94],
      "Magenta Bed": [164, 143, 94],
      "_Magenta Bed Head": [164, 143, 94],
      "Light Blue Bed": [164, 143, 94],
      "_Light Blue Bed Head": [164, 143, 94],
      "Yellow Bed": [164, 143, 94],
      "_Yellow Bed Head": [164, 143, 94],
      "Lime Bed": [164, 143, 94],
      "_Lime Bed Head": [164, 143, 94],
      "Pink Bed": [164, 143, 94],
      "_Pink Bed Head": [164, 143, 94],
      "Gray Bed": [164, 143, 94],
      "_Gray Bed Head": [164, 143, 94],
      "Light Gray Bed": [164, 143, 94],
      "_Light Gray Bed Head": [164, 143, 94],
      "Cyan Bed": [164, 143, 94],
      "_Cyan Bed Head": [164, 143, 94],
      "Purple Bed": [164, 143, 94],
      "_Purple Bed Head": [164, 143, 94],
      "Blue Bed": [164, 143, 94],
      "_Blue Bed Head": [164, 143, 94],
      "Brown Bed": [164, 143, 94],
      "_Brown Bed Head": [164, 143, 94],
      "Green Bed": [164, 143, 94],
      "_Green Bed Head": [164, 143, 94],
      "Red Bed": [164, 143, 94],
      "_Red Bed Head": [164, 143, 94],
      "Black Bed": [164, 143, 94],
      "_Black Bed Head": [164, 143, 94],
      "Apple Block": [189, 34, 37],
      "Moonstone Ore": [159, 156, 164],
      "Moonstone Chest": [139, 137, 147],
      "Block of Moonstone": [196, 205, 238],
      Magma: [150, 66, 32],
      "Useless Soil": [100, 66, 24],
      "Marked Sandstone": [225, 213, 169],
      "Red Sandstone": [194, 96, 31],
      "Smooth Red Sandstone": [203, 110, 36],
      "Engraved Red Sandstone": [195, 100, 32],
      "Marked Red Sandstone": [198, 104, 34],
      "Green Stone": [107, 166, 147],
      "Green Bricks": [83, 159, 143],
      "Dark Green Bricks": [53, 118, 96],
      "Sandstone Bricks": [223, 211, 167],
      "Engraved Diorite": [232, 230, 225],
      "Diorite Bricks": [231, 229, 224],
      "Engraved Andesite": [112, 116, 121],
      "Andesite Bricks": [120, 124, 129],
      "Engraved Granite": [145, 95, 77],
      "Granite Bricks": [148, 98, 80],
      "Ice Bricks": [166, 216, 247],
      "Placeholder Packed Ice": [166, 216, 247],
      "Placeholder Blue Ice": [166, 216, 247],
      "Plum Leaves": [51, 102, 44],
      "Cedar Leaves": [33, 60, 17],
      "Palm Leaves": [79, 164, 54],
      "Plum Leaves|TreeCanopy": [51, 102, 44],
      "Cedar Leaves|TreeCanopy": [33, 60, 17],
      "Palm Leaves|TreeCanopy": [79, 164, 54],
      "Pine Log|TreeBase": [66, 43, 23],
      "Plum Log|TreeBase": [92, 84, 76],
      "Cedar Log|TreeBase": [57, 43, 24],
      "Aspen Log|TreeBase": [187, 184, 159],
      "Elm Log|TreeBase": [97, 77, 23],
      "Palm Log": [94, 88, 45],
      "Palm Log|TreeBase": [94, 88, 45],
      "Palm Wood Planks": [209, 149, 71],
      "Palm Sapling": [55, 127, 20],
      "Pine Door": [164, 143, 94],
      "_Pine Door Top": [164, 143, 94],
      "Plum Door": [164, 143, 94],
      "_Plum Door Top": [164, 143, 94],
      "Cedar Door": [164, 143, 94],
      "_Cedar Door Top": [164, 143, 94],
      "Aspen Door": [164, 143, 94],
      "_Aspen Door Top": [164, 143, 94],
      "Elm Door": [164, 143, 94],
      "_Elm Door Top": [164, 143, 94],
      "Palm Door": [164, 143, 94],
      "_Palm Door Top": [164, 143, 94],
      "Pine Trapdoor": [97, 74, 49],
      "Plum Trapdoor": [171, 94, 48],
      "Cedar Trapdoor": [62, 37, 18],
      "Aspen Trapdoor": [226, 215, 181],
      "Elm Trapdoor": [140, 99, 71],
      "Palm Trapdoor": [194, 138, 66],
      "Red Sand": [197, 100, 32],
      "Red Sandstone Bricks": [197, 103, 33],
      "Rocky Dirt": [131, 95, 78],
      "Autumn Maple Leaves": [191, 113, 31],
      "Autumn Maple Leaves|TreeCanopy": [191, 113, 31],
      "Fallen Maple Leaves": [191, 114, 31],
      "Maple Slab": [170, 137, 82],
      "Pine Slab": [115, 84, 48],
      "Plum Slab": [167, 91, 46],
      "Cedar Slab": [75, 48, 23],
      "Aspen Slab": [192, 172, 122],
      "Elm Slab": [159, 117, 82],
      "Palm Slab": [209, 149, 71],
      "Dirt Slab": [133, 92, 73],
      "Grass Slab": [104, 163, 77],
      "Messy Stone Slab": [131, 127, 127],
      "Stone Slab": [150, 146, 146],
      "Smooth Stone Slab": [148, 145, 145],
      "Engraved Stone Slab": [125, 121, 121],
      "Stone Bricks Slab": [134, 130, 130],
      "Mossy Stone Slab": [120, 122, 110],
      "Mossy Stone Bricks Slab": [125, 127, 113],
      "Andesite Slab": [130, 134, 139],
      "Smooth Andesite Slab": [119, 122, 128],
      "Engraved Andesite Slab": [112, 116, 121],
      "Andesite Bricks Slab": [119, 123, 129],
      "Diorite Slab": [209, 205, 200],
      "Smooth Diorite Slab": [190, 185, 181],
      "Engraved Diorite Slab": [232, 229, 224],
      "Diorite Bricks Slab": [230, 228, 223],
      "Granite Slab": [156, 106, 88],
      "Smooth Granite Slab": [145, 95, 77],
      "Engraved Granite Slab": [145, 95, 77],
      "Granite Bricks Slab": [148, 97, 79],
      "Sandstone Slab": [219, 204, 160],
      "Smooth Sandstone Slab": [230, 222, 177],
      "Engraved Sandstone Slab": [222, 209, 165],
      "Marked Sandstone Slab": [225, 213, 169],
      "Sandstone Bricks Slab": [223, 210, 166],
      "Red Sandstone Slab": [193, 95, 30],
      "Smooth Red Sandstone Slab": [203, 110, 36],
      "Engraved Red Sandstone Slab": [196, 102, 33],
      "Marked Red Sandstone Slab": [198, 104, 34],
      "Red Sandstone Bricks Slab": [197, 102, 33],
      "Bricks Slab": [149, 98, 84],
      "Ice Bricks Slab": [167, 216, 247],
      "Cactus|Growing": [93, 154, 47],
      "Fat Cactus|Growing": [104, 165, 46],
      "Plum Block": [161, 26, 161],
      "Coconut Block": [132, 98, 44],
      "Pear Log": [100, 100, 100],
      "Pear Wood Planks": [132, 101, 90],
      "Pear Leaves": [231, 241, 218],
      "Pear Door": [164, 143, 94],
      "_Pear Door Top": [164, 143, 94],
      "Pear Trapdoor": [138, 107, 96],
      "Pear Sapling": [195, 199, 190],
      "Pear Log|TreeBase": [100, 100, 100],
      "Pear Leaves|TreeCanopy": [231, 241, 218],
      "Pear Slab": [132, 101, 90],
      "Pear Block": [251, 235, 78],
      "Compressed Messy Stone": [100, 100, 100],
      "Extra Compressed Messy Stone": [93, 93, 93],
      "Super Compressed Messy Stone": [70, 70, 70],
      "Hyper Compressed Messy Stone": [65, 65, 65],
      "Ultra Compressed Messy Stone": [56, 56, 56],
      "Mega Compressed Messy Stone": [48, 48, 48],
      Board: [175, 143, 85],
      Net: [170, 104, 63],
      Cobweb: [236, 233, 218],
      "Brown Mushroom Block": [193, 151, 119],
      "Red Mushroom Block": [227, 82, 67],
      "Mushroom Stem": [203, 196, 185],
      "Fireball Block": [245, 102, 27],
      "Iceball Block": [27, 162, 244],
      "Watermelon Seeds": [67, 93, 3],
      "Watermelon Seeds|Growing": [67, 93, 3],
      "Attached Watermelon Stem": [66, 91, 3],
      "Pumpkin Seeds": [67, 93, 3],
      "Pumpkin Seeds|Growing": [67, 93, 3],
      "Attached Pumpkin Stem": [66, 91, 3],
      Pumpkin: [183, 98, 15],
      "Carved Pumpkin": [157, 79, 11],
      "Jack o'Lantern": [198, 134, 45],
      "Melon Seeds": [67, 93, 3],
      "Melon Seeds|Growing": [67, 93, 3],
      "Attached Melon Stem": [66, 91, 3],
      Melon: [243, 233, 84],
      "Iron Watermelon": [232, 229, 223],
      "Patterned Black Glass": [29, 39, 46],
      "Patterned Blue Glass": [85, 125, 212],
      "Patterned Brown Glass": [122, 81, 51],
      "Patterned Cyan Glass": [84, 168, 182],
      "Patterned Gray Glass": [82, 86, 90],
      "Patterned Light Gray Glass": [173, 177, 184],
      "Patterned Green Glass": [119, 127, 50],
      "Patterned Light Blue Glass": [143, 192, 244],
      "Patterned Lime Glass": [157, 215, 101],
      "Patterned Magenta Glass": [168, 71, 160],
      "Patterned Orange Glass": [230, 124, 43],
      "Patterned Pink Glass": [244, 173, 199],
      "Patterned Purple Glass": [110, 49, 160],
      "Patterned Red Glass": [178, 58, 58],
      "Patterned White Glass": [246, 247, 247],
      "Patterned Yellow Glass": [249, 207, 111],
      "Potion Table": [47, 41, 34],
      "Pine Ladder": [106, 76, 43],
      "Plum Ladder": [169, 93, 47],
      "Cedar Ladder": [72, 45, 22],
      "Aspen Ladder": [194, 174, 124],
      "Elm Ladder": [161, 119, 83],
      "Palm Ladder": [208, 149, 71],
      "Pear Ladder": [137, 106, 95]
    };
  }
}]);